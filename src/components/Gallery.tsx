import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sofa Ruang Tamu Elegan',
      category: 'Sofa'
    },
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Meja Makan Kayu Jati',
      category: 'Meja'
    },
    {
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Tempat Tidur Modern',
      category: 'Kamar Tidur'
    },
    {
      src: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Set Living Room',
      category: 'Living Room'
    },
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Lemari Pakaian Minimalis',
      category: 'Lemari'
    },
    {
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Kursi Kantor Ergonomis',
      category: 'Kursi'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Galeri Produk</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Koleksi furniture berkualitas tinggi hasil karya craftsman terbaik kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors duration-200"
              >
                <X size={32} />
              </button>
              
              <div className="relative">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {images[selectedImage].title}
                </h3>
                <span className="inline-block bg-amber-500 text-white text-sm px-3 py-1 rounded-full">
                  {images[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;