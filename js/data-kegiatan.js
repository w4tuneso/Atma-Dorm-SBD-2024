/* ═══════════════════════════════════════════════════════════════
   DATA KEGIATAN — sumber tunggal untuk galeri
   Dipakai oleh: index.html (3 foto pertama) dan projects.html (semua).

   CARA MENAMBAH FOTO:
   1. Simpan foto di folder "resource gambar/".
   2. Salin satu baris { ... } di bawah, taruh di mana saja dalam daftar,
      lalu ubah id (harus unik), judul, tanggal, deskripsi, dan foto.
   3. Simpan. Foto otomatis muncul di kedua halaman.

   posisi : bagian foto yang dijaga saat dipotong (mis. "center 25%"
            supaya wajah di bagian atas tidak terpotong). Boleh dikosongkan.
   tanggal: boleh dikosongkan ("") kalau tidak mau ditampilkan.
   ═══════════════════════════════════════════════════════════════ */
const DATA_KEGIATAN = [
  { id: 1, judul: "Foto bersama",   tanggal: "", deskripsi: "Tulis keterangan kegiatan di sini.", foto: "resource gambar/1.jpeg", posisi: "center 30%" },
  { id: 2, judul: "Foto bersama",   tanggal: "", deskripsi: "Tulis keterangan kegiatan di sini.", foto: "resource gambar/2.jpeg", posisi: "center 30%" },
  { id: 3, judul: "Ngumpul di lobi", tanggal: "", deskripsi: "Tulis keterangan kegiatan di sini.", foto: "resource gambar/3.jpeg", posisi: "center" },
  { id: 4, judul: "Selfie bareng",  tanggal: "", deskripsi: "Tulis keterangan kegiatan di sini.", foto: "resource gambar/4.jpeg", posisi: "center 30%" },
  { id: 5, judul: "Foto bersama",   tanggal: "", deskripsi: "Tulis keterangan kegiatan di sini.", foto: "resource gambar/5.jpeg", posisi: "center 30%" },
  { id: 6, judul: "Makan bersama",  tanggal: "", deskripsi: "Tulis keterangan kegiatan di sini.", foto: "resource gambar/6.jpeg", posisi: "center" }
];
