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
      arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا الرِّبَا أَضْعَافًا مُضَاعَفَةً وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      translation:
        '"Wahai orang-orang yang beriman! Janganlah kamu memakan riba dengan berlipat ganda, dan bertakwalah kepada Allah agar kamu beruntung." (QS. Ali Imran: 130)',
    },
    {
      title: "Hadits Nabi Muhammad SAW",
      arabic:
        "لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ آكِلَ الرِّبَا وَمُوكِلَهُ وَكَاتِبَهُ وَشَاهِدَيْهِ، وَقَالَ: هُمْ سَوَاءٌ",
      translation:
        '"Rasulullah shallallahu ‘alaihi wa sallam melaknat pemakan riba, yang memberi makan dengan riba, pencatatnya, dan saksinya." (HR. Muslim)',
    },
    {
      title: "Nasihat Ulama",
      translation:
        '"Harta haram tidak akan membawa keberkahan, melainkan kehancuran dalam kehidupan dunia dan akhirat." - Imam Al-Ghazali',
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
        <title>Undangan Dakwah - Bahaya Uang Haram dalam Islam</title>
        <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className={styles.header}>
          <FaMosque className={styles.headericon} />
          <h1>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h1>
          <p>Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="text-md mt-4 text-center leading-relaxed">Marilah kita bersama-sama mencari rezeki yang halal dan menjauhi segala bentuk harta haram agar mendapatkan keberkahan dari Allah.</p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>Undangan Majelis Ilmu</h2>
          <div className={styles.eventDetails}>
            <div className={styles.detailItem}>
              <FaCalendarAlt className={styles.icon} />
              <span>Ahad, 15 Syawwal 1445 H / 19 Mei 2024</span>
            </div>
            <div className={styles.detailWrapper}>
              <div className={styles.detailItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span className="text-black">SMK INFOKOM KOTA BOGOR, Jl. Kebajikan No. 123, Kota Baru</span>
                </div>
              <div className={styles.detailItem}>
                <FaClock className={styles.icon} />
                <span>Ba'da Maghrib - Selesai</span>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.speakerSection}>
            <h3 className={styles.title}>Pemateri</h3>
            <FaUserCircle className={styles.speakerIcon} />
            <p className={styles.speakerName}>Irvan Rizqollah.</p>
            <p className={styles.speakerBio}>Kelas XII RPL 1</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.themeSection}>
            <h3>Tema Kajian</h3>
            <p>"Bahaya Uang Haram dan Dampaknya dalam Kehidupan"</p>
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
              "Wahai orang-orang yang beriman! Janganlah kamu memakan riba dengan berlipat ganda, dan bertakwalah kepada Allah agar kamu beruntung." (QS. Ali Imran: 130)
            </p>
            <p>📱 Untuk info lebih lanjut: 0812-3456-7890 (Panitia)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
