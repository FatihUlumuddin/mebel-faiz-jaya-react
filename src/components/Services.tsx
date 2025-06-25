import React from 'react';
import { Sofa, Coffee, Bed, Wrench, Truck, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Sofa,
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Pembuatan Sofa Custom',
      description: 'Desain sofa sesuai keinginan Anda dengan bahan berkualitas tinggi dan desain yang elegan.',
      features: ['Desain Custom', 'Bahan Premium', 'Garansi 2 Tahun']
    },
    {
      icon: Coffee,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Meja Kayu Solid',
      description: 'Meja kayu jati solid dengan ukiran elegan dan fungsional untuk berbagai kebutuhan.',
      features: ['Kayu Jati Asli', 'Ukiran Detail', 'Tahan Lama']
    },
    {
      icon: Bed,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Tempat Tidur Premium',
      description: 'Tempat tidur berbahan kayu berkualitas dengan desain modern dan klasik.',
      features: ['Desain Ergonomis', 'Finishing Halus', 'Kuat & Stabil']
    }
  ];

  const additionalServices = [
    { icon: Wrench, title: 'Konsultasi Desain', desc: 'Konsultasi gratis untuk desain furniture impian Anda' },
    { icon: Truck, title: 'Pengiriman Aman', desc: 'Layanan pengiriman dengan packaging aman ke seluruh Jawa Timur' },
    { icon: Star, title: 'After Sales Service', desc: 'Layanan purna jual dan maintenance untuk produk Anda' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan furniture berkualitas tinggi dengan desain custom sesuai kebutuhan Anda
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <service.icon className="text-white" size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 transform hover:scale-105">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">Layanan Tambahan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <service.icon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;