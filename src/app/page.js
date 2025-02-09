'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from "./style.module.css";
import { FaMosque, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DakwahInvitation() {
  const inspirationalItems = [
    {
      title: "Ayat Al-Qur'an Inspiratif",
      arabic: "وَلَا تَقْرَبُوا الزِّنَىٰ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا",
      translation:
        '"Dan janganlah kamu mendekati zina; sesungguhnya zina itu adalah suatu perbuatan yang keji dan suatu jalan yang buruk." (QS. Al-Isra: 32)',
    },
    {
      title: "Hadits Nabi Muhammad SAW",
      arabic:
        "لَا يَزْنِي الزَّانِي حِينَ يَزْنِي وَهُوَ مُؤْمِنٌ",
      translation:
        '"Seorang pezina tidak akan berzina dalam keadaan beriman." (HR. Bukhari dan Muslim)',
    },
    {
      title: "Nasihat Ulama",
      translation:
        '"Jangan biarkan hawa nafsumu mengendalikanmu, karena ia akan menjerumuskanmu ke dalam kehinaan dan penyesalan." - Imam Ibnul Qayyim',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Undangan Dakwah - Bahaya Perzinahan dalam Islam</title>
        <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet" />
      </Head>

      <main>
      <div className={styles.header}>
          <FaMosque className={styles.headericon} />
          <h1>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h1>
          <p>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="text-md mt-4 text-center leading-relaxed">Marilah kita bersama-sama mendekatkan diri kepada Allah dan menjauhi segala larangan-Nya. Hadirilah majelis ilmu untuk memperkuat keimanan dan mendapatkan ridha-Nya.</p>
          </div>


        <div className={styles.card}>
          <h2 className={styles.title}>Undangan Majelis Ilmu</h2>
          <div className={styles.eventDetails}>
            <div className={styles.detailItem}>
              <FaCalendarAlt className={styles.icon} />
              <span>Ahad, 15 Syawwal 1445 H / 19 Mei 2024</span>
            </div>
            <div className={styles.detailItem}>
              <FaClock className={styles.icon} />
              <span>Ba'da Maghrib - Selesai</span>
            </div>
            <div className={styles.detailItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Masjid Al-Ikhlas, Jl. Kebajikan No. 123, Kota Baru</span>
            </div>
          </div>
          <hr className={styles.divider} />

          <div className={styles.speakerSection}>
            <h3 className={styles.title}>Pemateri</h3>
            <FaUserCircle className={styles.speakerIcon} /> 
            <p className={styles.speakerName}>Ahmad Ridho Octavian.</p>
            <p className={styles.speakerBio}>Kelas XII RPL 1</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.themeSection}>
            <h3>Tema Kajian</h3>
            <p>"Bahaya Perzinahan dan Cara Menghindarinya"</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.inspirationalSection}>
            <h3 className={styles.title}>Inspirasi Islami</h3>
            <Slider {...settings}>
              {inspirationalItems.map((item, index) => (
                <div key={index} className={styles.inspirationalCard}>
                  <h3>{item.title}</h3>
                  {item.arabic && <p className={styles.arabicText}>{item.arabic}</p>}
                  <p>{item.translation}</p>
                </div>
              ))}
            </Slider>
          </div>

          <hr className={styles.divider} />

          <div className={styles.footer}>
            <p>
              "Dan janganlah kamu mendekati zina; sesungguhnya zina itu adalah suatu perbuatan yang keji dan suatu jalan yang buruk." (QS. Al-Isra: 32)
            </p>
            <p>📱 Untuk info lebih lanjut: 0812-3456-7890 (Panitia)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
