/* Halaman profil anggota.
   Data anggota ada di js/data-anggota.js — ubah di sana, bukan di sini. */
function profil() {
  return {
    dark: false,
    scrolled: false,
    mobileMenu: false,

    anggota: DATA_ANGGOTA.map(a => ({ ...a, gagal: false })),
    inisial: inisialNama,

    init() {
      this.dark = localStorage.getItem('theme') === 'dark'
        || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 20;
      }, { passive: true });

      this.$nextTick(() => {
        // Munculkan elemen saat digulir ke area pandang
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
        document.querySelectorAll('.reveal, .dari-kiri, .dari-kanan').forEach(el => obs.observe(el));

        // Tautan dari beranda (profil-anggota.html#m3) — gulir ke kartu anggota itu
        if (location.hash) {
          const target = document.querySelector(location.hash);
          if (target) target.scrollIntoView();
        }
      });
    }
  }
}

document.getElementById('yr').textContent = new Date().getFullYear();
