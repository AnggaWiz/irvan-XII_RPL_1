'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaMosque } from 'react-icons/fa'; // Import ikon dari Font Awesome

export default function DakwahPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses pendaftaran bisa ditambahkan di sini
    alert('Pendaftaran berhasil! Terima kasih atas partisipasi Anda.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Head>
        <title>Seminar Bahaya Uang Haram - Dakwah Islam</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Overlay dengan gradasi hijau */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-green-800 opacity-70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          {/* Menggunakan ikon dari Font Awesome */}
          <FaMosque size={80} className="mx-auto mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">SEMINAR DAKWAH</h1>
          <p className="text-2xl md:text-3xl mb-8">
            "Menyingkap Rahasia Uang Haram: Solusi Syariah untuk Kehidupan Lebih Berkah"
          </p>
          <p className="mb-10 text-lg md:text-xl">
            Jadilah bagian dari gerakan perubahan dan temukan kunci menuju keberkahan sejati.
          </p>
          <a
            href="#registration"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Daftar Sekarang
          </a>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Mengapa Anda Harus Hadir?</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Uang haram bukan hanya berdampak pada keuangan, namun juga merusak nilai-nilai moral dan spiritual.
              Seminar ini dirancang untuk membantu Anda memahami risiko serta solusi syariah dalam mengelola keuangan agar lebih berkah.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="mr-3 text-emerald-600 text-2xl">🕌</span>
                <span>Dampak uang haram terhadap keluarga dan masyarakat</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-emerald-600 text-2xl">📚</span>
                <span>Panduan praktis mengelola keuangan sesuai syariat Islam</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-emerald-600 text-2xl">⚖️</span>
                <span>Strategi transaksi halal untuk kehidupan yang lebih berkah</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/islam.webp"
              alt="Islamic Study"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Detail Acara dan Map */}
      <div className="container mx-auto p-6">
  <section className="py-20 bg-gradient-to-b from-emerald-50 to-white rounded-xl shadow-lg">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Detail Acara</h2>
      <hr className="border-t-2 border-emerald-300 w-24 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Container untuk detail acara */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-3 text-2xl">🗓️</span>
            <span className="text-xl text-gray-700">Ahad, 12 Syawwal 1445 H</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-3 text-2xl">⏰</span>
            <span className="text-xl text-gray-700">08.00 - 12.00 WIB</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-3 text-2xl">📍</span>
            <span className="text-xl text-gray-700">SMK Infokom, Jl. Setiabudi No. 45, Bandung</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-3 text-2xl">🎤</span>
            <span className="text-xl text-gray-700">IRVAN RIZQOLLAH</span>
          </div>
        </div>
        {/* Container untuk peta lokasi */}
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=SMK+Infokom+Bandung&output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</div>



      {/* Form Pendaftaran */}
      <section id="registration" className="py-20 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Daftar Sekarang</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Jangan lewatkan kesempatan untuk mendapatkan wawasan mendalam yang dapat mengubah hidup Anda.
            Isi formulir di bawah ini dan segera bergabung bersama kami!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Nomor HP</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Kirim Pendaftaran
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8 text-center">
        <p>© 2024 Majelis Dakwah Al-Huda. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-emerald-200">Facebook</a>
          <a href="#" className="hover:text-emerald-200">Instagram</a>
          <a href="#" className="hover:text-emerald-200">YouTube</a>
        </div>
      </footer>
    </div>
  );
}
