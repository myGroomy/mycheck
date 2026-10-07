import { hash, verify } from '@node-rs/argon2';

const getPepper = () => {
  const pepper = process.env.PIN_PEPPER;
  if (!pepper) {
    throw new Error('PIN_PEPPER tidak dikonfigurasi di environment');
  }
  return pepper;
};

// Parameter hash harus eksplisit — jangan andalkan default library.
// Nilai ini dicocokkan dengan hash yang sudah tersimpan (argon2 lama: m=65536, t=3, p=4).
// Algorithm.Argon2id = 2, Version.V0x13 = 1 (pakai number literal karena isolatedModules).
const HASH_OPTIONS = {
  algorithm: 2,
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 4,
  outputLen: 32,
  version: 1,
};

/**
 * Hash PIN menggunakan Argon2id + PIN_PEPPER.
 */
export async function hashPin(pin: string): Promise<string> {
  const pepper = getPepper();
  return hash(pin + pepper, HASH_OPTIONS);
}

/**
 * Verifikasi PIN terhadap hash Argon2id.
 */
export async function verifyPin(pin: string, hash: string): Promise<boolean> {
  const pepper = getPepper();
  try {
    return await verify(hash, pin + pepper);
  } catch {
    return false;
  }
}

/**
 * Cek apakah PIN terlalu lemah (BR-30).
 * PIN lemah: 6 angka sama, urut naik/turun, atau pola berulang.
 */
export function isWeakPin(pin: string): boolean {
  if (pin.length !== 6 || !/^\d{6}$/.test(pin)) return true;

  // 6 angka sama (111111, 000000, dll)
  if (/^(\d)\1{5}$/.test(pin)) return true;

  // Urut naik (123456, 234567, dll) atau urut turun (654321, 987654, dll)
  const sequentialUp = '0123456789';
  const sequentialDown = '9876543210';
  if (sequentialUp.includes(pin) || sequentialDown.includes(pin)) return true;

  // Pola berulang 2 digit (121212, 696969) atau 3 digit (123123)
  if (pin.slice(0, 2).repeat(3) === pin) return true;
  if (pin.slice(0, 3).repeat(2) === pin) return true;

  return false;
}
