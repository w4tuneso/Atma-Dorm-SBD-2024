/* Halaman galeri kegiatan.
   Daftar foto ada di js/data-kegiatan.js — tambah foto di sana, bukan di sini. */
function projects() {
  return {
    dark: false,
    scrolled: false,
    mobileMenu: false,

    kegiatan: DATA_KEGIATAN,
    lb: null, // indeks foto yang sedang dibuka di lightbox (null = tertutup)

    buka(i) { this.lb = i; },
    tutup() { this.lb = null; },
    geser(arah) {
      const n = this.kegiatan.length;
      this.lb = (this.lb + arah + n) % n;
    },

    init() {
      this.dark = localStorage.getItem('theme') === 'dark'
        || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 20;
      }, { passive: true });

      // kunci scroll halaman selama lightbox terbuka
      this.$watch('lb', v => { document.body.style.overflow = v === null ? '' : 'hidden'; });

      // reveal — setelah x-for selesai membuat kartu galeri
      this.$nextTick(() => {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
      });
    }
  }
}

document.getElementById('yr').textContent = new Date().getFullYear();
