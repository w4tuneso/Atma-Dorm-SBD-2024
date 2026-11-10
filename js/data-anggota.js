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
    nama: "Adela",
    nl: "Adela Luswanto Herlambang ",
    daerah: "Sumba Barat Daya",
    lahir: "24 Desember 2005",
    foto: "resource gambar/Adella.jpg",
    ig: "#",
    in: "#",
    desc: "Produk hasil kombinasi Jawa x NTT. Inilah Adella. Masuk prodi Pariwisata biar tidak dapat hitungan, sekarang malah bestie dengan hitung-hitngan",
  },
  {
    id: 2,
    nama: "Istyn",
    nl: "Kristina Felisitas Noto Mali",
    daerah: "Kodi, Sumba Barat Daya",
    lahir: "Admin bilang dia nyusul lahirnya",
    foto: "resource gambar/Istyn.jpeg",
    ig: "#",
    in: "#",
    desc: "The only one girl dari prodi Hukum. Punya penglihatan ganda. Kk Nona ini juga sangat berpengalaman dalam dunia PDD/Dokumentasi. Jangan sungkan tanya soal foto, video, dan editing. Dia pasti bisa bantu.",
  },
  {
    id: 3,
    nama: "Econ",
    nl: "Yakobus Reson Wiliam Namu",
    daerah: "SBD",
    lahir: "26 Juni 2006",
    foto: "resource gambar/econ.jpg",
    ig: "#",
    in: "#",
    desc: "Kk Nyong satu ini, jangan ditanya kalau urusan tarik suara. Sudah jago nyanyi, futsal, tampan dan pemberani. sisanya yah.... begitulah. Beliau ini juga kadang cukup bijak dan kadang sangat bijak saat berbicara mengenai sosial politik. Kalau pernah dengar sapaan 'Bung Econ' nah itulah alasannya.",
  },
  {
    id: 4,
    nama: "Hiron",
    nl: "Hironimus Kali",
    daerah: "SBD",
    lahir: "11 Maret 2005",
    foto: "resource gambar/Hiyon.jpg",
    ig: "#",
    in: "#",
    desc: "Aktif bergerak. Semangat 45. Tir tahu lagi bagaimana kalau dengan anak-anak di sekolah yang dia ajar. Passti suhh tambah semangat lagi",
  },
  {
    id: 5,
    nama: "Echy",
    nl: "Theresia Keti",
    daerah: "SBD",
    lahir: "13 Maret 2005",
    foto: "resource gambar/Echy.jpg",
    ig: "#",
    in: "#",
    desc: "Kalian tahu artis Korea atas nama Doh Kyung Soo? Kk Nona ini suka banget sama dia. Kalau kalian mau tahu lebih banyak tentang artis Korea ini, tanya aja sama Echy. Dia pasti bisa kasih info lengkapnya.",
  },
  {
    id: 6,
    nama: "Intan ",
    nl: "Marcelina Graciana Intan Bili",
    daerah: "SBD",
    lahir: "28 Oktober 2006",
    foto: "resource gambar/Intan.jpg",
    ig: "#",
    in: "#",
    desc: "Lahir di hari Sumpah Pemuda. Bisa jadi Kk Nona ini bergabung di BEM UAJ karena ingin memperjuangkan cita-cita bangsa. Tapi kalau ditanya soal cita-cita pribadinya, ya tanya dia lah jangan tanya saya. Saya juga tidak tahu. Semoga tercapai yaa.",
  },
  {
    id: 7,
    nama: "Army",
    nl: "Angelia Maria Milla",
    daerah: "SBD",
    lahir: "29 Maret 2006",
    foto: "resource gambar/Army.jpg",
    ig: "#",
    in: "#",
    desc: "Ini sudah TikTokers/Dancer TikTok apalagi ala-ala Brazil. Semua gerakan dia tahu. Btw, Kk Nona ini suka olahraga seperti Nona-nona yang lain. Kalau main Voli atau Badminton, pasangkan saja sama Istyn dan Intan. Dijamin teman tim kalian pasti terbantu - (amit-amit) terbantu tertawa terbahak-bahak.",
  },
  {
    id: 8,
    nama: "George",
    nl: "George Kunemara",
    daerah: "Ende Flores",
    lahir: "unknown",
    foto: "resource gambar/anggota-08.jpg",
    ig: "#",
    in: "#",
    desc: "Anomali pendiam satu ini kadang tidak sinkron antara isi kepala dan tindakan. Tampangnya di foto sih yahhh seperti yang kalian lihat. Lebih jago 'mendorong' karena tidak begitu 'menarik'--ooppsss Hahahaha.",
  },
  {
    id: 9,
    nama: "Aulin",
    nl: "Brigid Pauline Ratu Patty Diaz",
    daerah: "Larantuka - SBD",
    lahir: "24 Juli 2005",
    foto: "resource gambar/Auline.jpeg",
    ig: "#",
    in: "#",
    desc: "Kk Nona ini sangat aktif dalam berbagai kegiatan organisasi. Selain itu dia berasal dari daerah yang unik. Tahu Larantuka? Nah coba tanya sama Aulin. Oh iya, kalau mau tahu soal ikan segar di pasar dan tawar-menawar ikan, Kk Nona satu ini paling recomended. Dia pasti bisa kasih tipsnya.",
  },
  {
    id: 10,
    nama: "Atta",
    nl: "Martha Maraka Seingo",
    daerah: "SBD",
    lahir: "24 Juni 2006",
    foto: "resource gambar/Atta.jpeg",
    ig: "#",
    in: "#",
    desc: "Namanya Atta. Jago dalam meracik rempah-rempah dan bumbu dapur untuk masakan. Atta-Adella, duo parwis di grup ini. Oh iya, Kk Nona ini juga punya skill dalam dunia per-cafe-an.",
  },
  {
    id: 11,
    nama: "Jacko",
    nl: "Domiliano Jacko Dodok",
    daerah: "SBD",
    lahir: "23 Juli 2006",
    foto: "resource gambar/Jacko.jpg",
    ig: "#",
    in: "#",
    desc: "Pria SuCi. Yaps betul. Sumba China. Itu adalah Jacko. Mahasigma Teknik Elektro. Kalau soal perbaikan komponen elektronik, Jacko pasti bisa. Mentor nya itu Bung Reson",
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
