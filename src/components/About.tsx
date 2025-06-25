import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Tahun Pengalaman', value: '15+' },
    { icon: Users, label: 'Pelanggan Puas', value: '500+' },
    { icon: Clock, label: 'Proyek Selesai', value: '1000+' },
    { icon: MapPin, label: 'Kota Terjangkau', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-amber-900">Mebel Faiz Jaya</span> berlokasi di 
              Jl. Balai Desa, Kludan, Kec. Tanggulangin, Kabupaten Sidoarjo, Jawa Timur. 
              Kami telah melayani masyarakat selama lebih dari 15 tahun dengan dedikasi tinggi 
              dalam menyediakan furnitur berkualitas.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman yang luas dan tim craftsman yang ahli, kami menyediakan 
              berbagai macam furnitur berkualitas tinggi yang dapat disesuaikan dengan 
              kebutuhan dan selera rumah Anda. Setiap produk dibuat dengan perhatian detail 
              dan menggunakan bahan baku pilihan terbaik.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Award className="text-amber-600" size={20} />
                <span className="text-sm font-medium text-gray-700">Kualitas Terjamin</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Users className="text-amber-600" size={20} />
                <span className="text-sm font-medium text-gray-700">Pelayanan Prima</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Workshop Mebel Faiz Jaya"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Sedang Beroperasi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <stat.icon className="text-amber-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-amber-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;