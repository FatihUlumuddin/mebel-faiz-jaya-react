import React from 'react';
import { Heart, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mebel Faiz Jaya</h3>
            <p className="text-amber-100 leading-relaxed">
              Spesialis furniture berkualitas tinggi dengan layanan custom design. 
              Memberikan solusi terbaik untuk kebutuhan furniture rumah Anda.
            </p>
            <div className="flex items-center space-x-2 text-amber-200">
              <Heart size={16} />
              <span className="text-sm">Dibuat dengan penuh dedikasi</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-300 mt-1 flex-shrink-0" size={16} />
                <p className="text-amber-100 text-sm leading-relaxed">
                  Jl. Balai Desa, Kludan<br />
                  Kec. Tanggulangin, Kab. Sidoarjo<br />
                  Jawa Timur 61272
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-300 flex-shrink-0" size={16} />
                <a 
                  href="https://wa.me/6289682144873" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  0896-8214-4873
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Jam Operasional</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="text-amber-300 flex-shrink-0" size={16} />
                <div className="text-amber-100 text-sm">
                  <p>Senin - Sabtu</p>
                  <p>08.00 - 17.00 WIB</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4"></div>
                <div className="text-amber-100 text-sm">
                  <p>Minggu</p>
                  <p>08.00 - 15.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-12 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            &copy; 2025 Mebel Faiz Jaya. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;