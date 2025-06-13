
import React, { useState } from 'react';
import { Search, Users, BarChart3, FileText, Phone, Mail, MapPin, Heart, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [nikSearch, setNikSearch] = useState('');

  const handleSearch = () => {
    if (nikSearch.trim()) {
      console.log('Mencari data untuk NIK:', nikSearch);
      // Logic pencarian akan diimplementasikan nanti
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">E-PPGBM</span>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#beranda" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Tentang</a></li>
              <li><a href="#fitur" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Fitur</a></li>
              <li><a href="#kontak" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="beranda" 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-800/70"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Selamat Datang di E-PPGBM
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Cek Data Gizi Keluargamu dengan Mudah!
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Elektronik Pencatatan dan Pelaporan Gizi Berbasis Masyarakat untuk kesehatan keluarga yang lebih baik
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto shadow-xl animate-scale-in">
            <h3 className="text-gray-800 text-lg font-semibold mb-4">Cari Data Gizi Keluarga</h3>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Masukkan NIK..."
                value={nikSearch}
                onChange={(e) => setNikSearch(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
                <Search className="h-4 w-4 mr-2" />
                Cari Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang E-PPGBM</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              E-PPGBM adalah sistem elektronik yang memudahkan pencatatan dan pelaporan data gizi masyarakat. 
              Dirancang khusus untuk membantu keluarga Indonesia memantau kesehatan dan gizi dengan lebih mudah dan terorganisir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aman & Terpercaya</h3>
                <p className="text-gray-600">Data keluarga Anda tersimpan dengan aman dan hanya dapat diakses oleh yang berwenang</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mudah Digunakan</h3>
                <p className="text-gray-600">Interface yang sederhana dan user-friendly untuk semua kalangan keluarga</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pantau Perkembangan</h3>
                <p className="text-gray-600">Lihat perkembangan gizi dan kesehatan keluarga dalam bentuk grafik yang mudah dipahami</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fitur Unggulan</h2>
            <p className="text-lg text-gray-600">Berbagai kemudahan untuk mendukung kesehatan keluarga Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pencatatan Gizi Anak</h3>
              <p className="text-gray-600">Catat dan pantau asupan gizi harian anak dengan mudah dan terstruktur</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grafik Perkembangan</h3>
              <p className="text-gray-600">Visualisasi pertumbuhan dan perkembangan kesehatan dalam bentuk grafik</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Search className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Riwayat Pemeriksaan</h3>
              <p className="text-gray-600">Akses riwayat pemeriksaan kesehatan lengkap keluarga kapan saja</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Monitoring Kesehatan</h3>
              <p className="text-gray-600">Pantau status kesehatan dan gizi secara berkala dan terorganisir</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Keluarga</h3>
              <p className="text-gray-600">Kelola data seluruh anggota keluarga dalam satu platform terpadu</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laporan Digital</h3>
              <p className="text-gray-600">Generate laporan kesehatan digital yang dapat diunduh dan dicetak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">E-PPGBM</span>
              </div>
              <p className="text-gray-300 mb-4">
                Sistem Elektronik Pencatatan dan Pelaporan Gizi Berbasis Masyarakat untuk kesehatan keluarga Indonesia.
              </p>
              <p className="text-sm text-gray-400">
                © 2024 Dinas Kesehatan. Semua hak dilindungi undang-undang.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak Dinas Kesehatan</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(021) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@dinkes.go.id</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Jl. Kesehatan No. 123, Jakarta</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Penting</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kementerian Kesehatan RI</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Posyandu Indonesia</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
              <strong>Disclaimer:</strong> Sistem ini merupakan alat bantu pencatatan. 
              Untuk diagnosa dan pengobatan, konsultasikan dengan tenaga kesehatan profesional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
