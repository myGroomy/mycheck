import Link from 'next/link';
import { ArrowRight, BookOpen, CircleHelp } from 'lucide-react';

const sections = [
  { href: '#mulai', label: 'Mulai menggunakan aplikasi' },
  { href: '#shift', label: 'Beranda dan shift' },
  { href: '#checklist', label: 'Mengerjakan checklist' },
  { href: '#tutup-shift', label: 'Menutup shift' },
  { href: '#incident', label: 'Incident' },
  { href: '#laporan', label: 'Laporan' },
  { href: '#admin', label: 'Fitur admin' },
  { href: '#bantuan', label: 'Pemecahan masalah' },
];

export default function DocsPage() {
  return (
    <main className="min-h-dvh bg-canvas text-ink">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4 px-4 md:px-6">
          <Link href="/" className="text-sm font-bold tracking-tight">
            checklist-shift
          </Link>
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-canvas transition hover:opacity-90"
          >
            Masuk <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:px-6 md:py-12">
        <aside className="h-fit rounded-xl border border-border bg-surface p-4 md:sticky md:top-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Isi panduan
          </p>
          <nav aria-label="Daftar isi panduan" className="flex gap-2 overflow-x-auto md:flex-col">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-md px-3 py-2 text-sm text-ink-muted hover:bg-canvas hover:text-ink md:shrink"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="mb-8 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-canvas px-3 py-1.5 text-xs font-semibold text-ink-muted">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              PANDUAN PENGGUNA
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Panduan checklist-shift
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-ink-muted">
              Panduan singkat untuk petugas dan admin dalam menggunakan aplikasi
              checklist operasional shift F&amp;B.
            </p>
          </div>

          <section id="mulai" className="scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Mulai menggunakan aplikasi</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-ink-muted">
              <li>Buka alamat aplikasi yang diberikan admin.</li>
              <li>Pilih <strong className="text-ink">Masuk</strong>, lalu isi username dan PIN 6 digit.</li>
              <li>
                Jika akun terkunci, nonaktif, atau PIN tidak dikenali, hubungi
                admin untuk bantuan.
              </li>
              <li>
                Di HP, gunakan navigasi bawah. Di desktop, buka menu ☰ pada
                header untuk berpindah halaman.
              </li>
            </ol>
            <p className="mt-4 rounded-lg bg-canvas p-4 text-sm leading-6 text-ink-muted">
              Jangan bagikan PIN kepada orang lain. PIN juga dipakai PJ untuk
              mengonfirmasi penutupan shift.
            </p>
          </section>

          <section id="shift" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Beranda dan shift</h2>
            <p className="mt-3 leading-7 text-ink-muted">
              Beranda menampilkan cabang yang dapat diakses dan shift yang
              tersedia. Jika akun memiliki akses ke beberapa cabang, pastikan
              memilih cabang yang benar.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-ink-muted">
              <li><strong className="text-ink">Buka Shift</strong> memulai shift baru; petugas yang membukanya menjadi PJ.</li>
              <li><strong className="text-ink">Gabung</strong> atau <strong className="text-ink">Check-in</strong> digunakan untuk bergabung ke shift berjalan.</li>
              <li><strong className="text-ink">Lanjutkan</strong> membuka checklist shift yang sudah diikuti.</li>
            </ul>
            <p className="mt-3 leading-7 text-ink-muted">
              Checklist dipakai bersama oleh peserta shift, bukan salinan
              terpisah untuk setiap petugas.
            </p>
          </section>

          <section id="checklist" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Mengerjakan checklist</h2>
            <p className="mt-3 leading-7 text-ink-muted">
              Ikuti instruksi setiap item dan isi sesuai pekerjaan yang benar-benar
              dilakukan. Tergantung itemnya, aplikasi dapat meminta centang,
              jawaban, angka, teks, atau foto.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-ink-muted">
              <li>Riwayat mencatat petugas dan waktu pengerjaan.</li>
              <li>Jika item tidak dapat dikerjakan, gunakan <strong className="text-ink">Skip</strong> dan tuliskan alasan yang jelas.</li>
              <li>Item yang sudah dikerjakan rekan akan menunjukkan siapa yang menyelesaikannya.</li>
              <li>Aksi checklist memerlukan koneksi internet; periksa pesan aplikasi jika penyimpanan gagal.</li>
            </ul>
          </section>

          <section id="tutup-shift" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Menutup shift (khusus PJ)</h2>
            <p className="mt-3 leading-7 text-ink-muted">
              Sebelum shift ditutup, semua item wajib harus selesai atau di-skip
              dengan alasan dan semua isian handover wajib harus dilengkapi.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-ink-muted">
              <li>Tinjau item checklist yang belum memenuhi syarat.</li>
              <li>Isi handover untuk shift berikutnya.</li>
              <li>
                Konfirmasikan penutupan dengan <strong className="text-ink">PIN akun PJ sendiri</strong>—PIN yang sama dengan PIN login,
                bukan PIN baru atau PIN admin lain.
              </li>
            </ol>
            <p className="mt-4 rounded-lg bg-canvas p-4 text-sm leading-6 text-ink-muted">
              Setelah berhasil ditutup, shift dan checklist dikunci serta laporan
              dibuat. Koreksi laporan dilakukan melalui addendum admin.
            </p>
          </section>

          <section id="incident" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Incident</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-ink-muted">
              <li>Buka menu <strong className="text-ink">Incident</strong> untuk melihat kejadian yang tercatat.</li>
              <li>Pilih <strong className="text-ink">Buat Incident</strong>, lalu isi cabang, kategori, waktu kejadian, dan deskripsi.</li>
              <li>Foto bukti opsional; unggahan dibatasi hingga lima foto dan maksimal 5 MB per foto.</li>
              <li>Isi incident yang dikirim tidak dapat diedit. Informasi lanjutan dicatat sebagai catatan tambahan.</li>
            </ul>
          </section>

          <section id="laporan" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Laporan</h2>
            <p className="mt-3 leading-7 text-ink-muted">
              Menu <strong className="text-ink">Laporan</strong> menampilkan
              laporan shift dari cabang yang dapat diakses. Laporan merangkum
              checklist, handover, incident, dan peserta. Tautan laporan publik
              hanya bisa dibaca dan dapat kedaluwarsa atau dicabut oleh admin.
            </p>
          </section>

          <section id="admin" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <h2 className="text-xl font-bold">Fitur admin</h2>
            <p className="mt-3 leading-7 text-ink-muted">
              Admin mengelola cabang, akun dan akses cabang, definisi shift,
              template checklist, field handover, kategori incident, pengaturan,
              laporan, serta audit log. Akun dapat memiliki akses ke lebih dari
              satu cabang.
            </p>
            <p className="mt-3 leading-7 text-ink-muted">
              Perubahan template berlaku untuk shift baru, bukan shift yang
              sedang berjalan. Tindakan admin sensitif dapat meminta alasan dan
              konfirmasi PIN.
            </p>
          </section>

          <section id="bantuan" className="mt-5 scroll-mt-6 rounded-xl border border-border bg-surface p-5 md:p-6">
            <div className="flex items-center gap-2">
              <CircleHelp className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-xl font-bold">Pemecahan masalah</h2>
            </div>
            <dl className="mt-4 divide-y divide-border">
              <div className="py-3">
                <dt className="font-semibold">PIN salah atau akun terkunci</dt>
                <dd className="mt-1 leading-6 text-ink-muted">Pastikan username dan PIN benar. Jika akun terkunci, hubungi admin.</dd>
              </div>
              <div className="py-3">
                <dt className="font-semibold">Cabang atau shift tidak tersedia</dt>
                <dd className="mt-1 leading-6 text-ink-muted">Pastikan cabang yang dipilih benar dan minta admin memeriksa akses akun.</dd>
              </div>
              <div className="py-3">
                <dt className="font-semibold">Shift tidak dapat ditutup</dt>
                <dd className="mt-1 leading-6 text-ink-muted">Selesaikan item wajib atau gunakan Skip dengan alasan, lengkapi handover, lalu gunakan PIN PJ.</dd>
              </div>
              <div className="py-3">
                <dt className="font-semibold">Perubahan tidak tersimpan</dt>
                <dd className="mt-1 leading-6 text-ink-muted">Periksa koneksi internet. Jangan anggap aksi berhasil jika aplikasi menampilkan pesan gagal.</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm leading-6 text-ink-muted">
              Saat melaporkan masalah, sertakan perangkat, browser, halaman,
              langkah reproduksi, dan waktu kejadian. Jangan kirim PIN atau
              tangkapan layar yang menampilkan informasi rahasia.
            </p>
          </section>

          <p className="mt-6 text-center text-sm text-ink-muted">
            Perlu mulai bekerja?{' '}
            <Link href="/login" className="font-semibold text-ink underline underline-offset-4">
              Masuk ke aplikasi
            </Link>
            .
          </p>
        </article>
      </div>
    </main>
  );
}
