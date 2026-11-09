/* ═══════════════════════════════════════════════════════════════
   DATA ANGGOTA — sumber tunggal untuk profil
   Dipakai oleh: profil-anggota.html (semua) dan index.html (4 pertama).

   Nama dan foto untuk 3 anggota pertama diambil dari nama berkas
   gambar (adell, istyn, econ) — mohon diperiksa. Selain itu (daerah,
   tanggal lahir, tautan, deskripsi) masih data contoh.

   CARA MENGISI: ubah isi tiap baris { ... }. Foto disimpan di
   "resource gambar/". Kalau berkas foto tidak ditemukan, yang tampil
   adalah dua huruf inisial nama. Urutan di sini = urutan di halaman.
   ig / in : tautan Instagram / LinkedIn ("#" = belum diisi).
   ═══════════════════════════════════════════════════════════════ */
const DATA_ANGGOTA = [
  {
    id: 1,
    nama: "Adella",
    daerah: "Sumba Barat Daya",
    lahir: "1 Januari 2005",
    foto: "resource gambar/adell (1).jpeg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini: minat, hobi, atau motto hidupnya.",
  },
  {
    id: 2,
    nama: "Istyn",
    daerah: "Kodi, Sumba Barat Daya",
    lahir: "2 Februari 2005",
    foto: "resource gambar/istyn.jpeg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 3,
    nama: "Econ",
    daerah: "SBD",
    lahir: "3 Maret 2005",
    foto: "resource gambar/econ.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 4,
    nama: "Hiron Gachor",
    daerah: "SBD",
    lahir: "4 April 2005",
    foto: "resource gambar/anggota-04.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 5,
    nama: "Echy",
    daerah: "SBD",
    lahir: "5 Mei 2005",
    foto: "resource gambar/anggota-05.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 6,
    nama: "Intan ",
    daerah: "SBD",
    lahir: "6 Juni 2005",
    foto: "resource gambar/anggota-06.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 7,
    nama: "Army",
    daerah: "SBD",
    lahir: "7 Juli 2005",
    foto: "resource gambar/anggota-07.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 8,
    nama: "George",
    daerah: "Ende Flores",
    lahir: "8 Agustus 2005",
    foto: "resource gambar/anggota-08.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 9,
    nama: "Aulin",
    daerah: "Larantuka - SBD",
    lahir: "9 September 2005",
    foto: "resource gambar/anggota-09.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 10,
    nama: "Atta",
    daerah: "SBD",
    lahir: "10 Oktober 2005",
    foto: "resource gambar/anggota-10.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
  {
    id: 11,
    nama: "Jacko",
    daerah: "SBD",
    lahir: "11 November 2005",
    foto: "resource gambar/anggota-11.jpg",
    ig: "#",
    in: "#",
    desc: "Tulis deskripsi singkat anggota di sini.",
  },
];

/* Dua huruf awal nama — dipakai sebagai cadangan bila foto belum ada */
function inisialNama(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((k) => k[0])
    .join("")
    .toUpperCase();
}
