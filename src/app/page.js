'use client'
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import InvitationSection from './component/text';
import { FiArrowUp, FiClock, FiMapPin, FiBook, FiHeart } from 'react-icons/fi';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 400);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.decorativeBorder}></div>

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Dakwah Ikhlas</h1>
            <p className={styles.headerSubtitle} aria-label="Keikhlasan dalam Beribadah kepada Allah">
              "Ikhlas dalam Beribadah kepada Allah"
            </p>
            <hr className={styles.headerDivider} role="separator" />

            <InvitationSection />

          </div>
        </motion.header>

        <main>
          <section className={`${styles.section} ${styles.fadeIn}`}>
            <div className={styles.sectionIcon}><FiHeart /></div>
            <h2 className={styles.sectionTitle}>Kajian Keikhlasan</h2>
            <p className={styles.themeText}>
              "IKHLAS: Murni karena Allah, Tanpa Mengharap Balasan"
            </p>
            <div className={styles.verseCard}>
              <div className={styles.arabicVerse}>
                ﴿وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ﴾
              </div>
              <q className={styles.verseTranslation}>
                "Padahal mereka hanya diperintah menyembah Allah dengan ikhlas..."
              </q>
              <div className={styles.verseReference}>
                <span className={styles.surahName}>Al-Bayyinah</span>
                <span className={styles.verseNumber}>:5</span>
              </div>
            </div>

            <div className={styles.eventDetails}>
              <div className={styles.detailCard}>
                <FiClock className={styles.detailIcon} />
                <div>
                  <h3>Waktu Pelaksanaan</h3>
                  <p>Ahad, 12 Sya'ban 1446 H</p>
                  <p>09.00 WIB - Dzuhur</p>
                </div>
              </div>

              <div className={styles.detailCard}>
                <FiMapPin className={styles.detailIcon} />
                <div>
                  <h3>Tempat Acara</h3>
                  <p>SMK INFOKOM KOTA BOGOR</p>
                  <p>Jl. Letjen Ibrahim Adjie Kota Bogor</p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.fadeIn}`}>
            <h2 className={styles.sectionTitle}>Pembawa acara sekaligus ustadzah</h2>
            <div className={styles.speakerGrid}>
              <div className={styles.speakerCard}>
                <img
                  src="/images/gita.jpg"
                  alt="Ust. Abdullah"
                  className={styles.speakerImage}
                />
                <div className={styles.speakerContent}>
                  <h1 className={styles.speakerName}>Anggita Niaty Aminatun</h1>
                  <p className={styles.speakerTopic}>
                    Dari kelas XII RPL 1
                    "Memaknai Kembali Hakikat Ikhlas: Dari Konsep Teori hingga Praktik
                    dalam Kehidupan Modern"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.fadeIn}`}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Mari Menghadiri Kajian!</h2>
              <p className={styles.ctaSubtitle}>Tempat terbatas, segera daftarkan diri Anda</p>
              <button
                className={styles.ctaButton}
                onClick={() => window.location.href = 'https://wa.me/6285694917841'}
              >
                Hubungi Kami di WhatsApp dan Daftar Sekarang
              </button>
            </div>
          </section>

        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.contactText}>
              &copy; {new Date().getFullYear()} Dakwah Ikhlas. All Rights Reserved.
            </p>
            <div className={styles.footerDivider}></div>
            <p className={styles.footerQuote}>
              "Sesungguhnya amal itu tergantung niatnya, dan seseorang akan mendapatkan sesuai dengan niatnya"
              <br />(HR. Bukhari & Muslim)
            </p>
          </div>
        </footer>

        <button
          className={`${styles.backToTop} ${showScroll ? styles.show : ''}`}
          onClick={scrollTop}
        >
          <FiArrowUp />
        </button>
      </div>
    </div>
  );
};

export default App;
