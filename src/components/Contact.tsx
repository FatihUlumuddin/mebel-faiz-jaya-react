import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo, saya ${formData.name}. ${formData.message}. Nomor HP: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/6289682144873?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Hubungi Kami</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siap melayani konsultasi dan pemesanan furniture impian Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jl. Balai Desa, Kludan<br />
                      Kec. Tanggulangin, Kab. Sidoarjo<br />
                      Jawa Timur 61272
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/6289682144873" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                    >
                      0896-8214-4873
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Jam Operasional</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Senin - Sabtu: 08.00 - 17.00 WIB</p>
                      <p>Minggu: 08.00 - 15.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200">
                <a
                  href="https://wa.me/6289682144873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Kirim Pesan</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-green-600 mb-2">Pesan Terkirim!</h4>
                <p className="text-gray-600">Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Ceritakan kebutuhan furniture Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Kirim ke WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">Lokasi Kami</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5944378981044!2d112.6970986!3d-7.4994253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e132a45ffb23%3A0xcb9ca069e0a6a513!2sMebel%20Faiz%20Jaya!5e0!3m2!1sid!2sid!4v1719223071770!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;