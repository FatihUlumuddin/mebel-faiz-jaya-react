import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, Tag, Filter, Search } from 'lucide-react';
import productsData from '../data/products.json';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  specifications: {
    material: string;
    dimensions: string;
    warranty: string;
    [key: string]: string;
  };
  features: string[];
  inStock: boolean;
  featured: boolean;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = productsData.categories;
  const products: Product[] = productsData.products;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Halo, saya tertarik dengan produk ${product.name} dengan harga ${formatPrice(product.price)}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6289682144873?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Produk Kami</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Koleksi furniture berkualitas tinggi dengan harga terjangkau dan garansi resmi
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="text-amber-600 flex-shrink-0" size={20} />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-amber-600 hover:bg-amber-100'
                }`}
              >
                Semua
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-600 hover:bg-amber-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.featured && (
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star size={12} />
                      <span>Featured</span>
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <Tag size={12} />
                      <span>-{product.discount}%</span>
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all duration-200"
                  >
                    <Eye size={18} />
                  </button>
                </div>

                {/* Stock Status */}
                <div className="absolute bottom-4 left-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.inStock 
                      ? 'bg-green-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {product.inStock ? 'Tersedia' : 'Stok Habis'}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-600">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{product.features.length - 2} lainnya
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      product.inStock
                        ? 'bg-amber-600 hover:bg-amber-700 text-white transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    <span>{product.inStock ? 'Pesan Sekarang' : 'Stok Habis'}</span>
                  </button>
                  
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="px-4 py-3 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Produk tidak ditemukan</h3>
            <p className="text-gray-500">Coba ubah kata kunci pencarian atau filter kategori</p>
          </div>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                >
                  ✕
                </button>
                
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                    {selectedProduct.discount && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Diskon {selectedProduct.discount}%
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-amber-900 mb-2">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="border-t border-b border-gray-200 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold text-amber-600">
                          {formatPrice(selectedProduct.price)}
                        </span>
                        {selectedProduct.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            {formatPrice(selectedProduct.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900 mb-3">Spesifikasi</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600 capitalize">
                              {key.replace('_', ' ')}:
                            </span>
                            <span className="font-medium text-gray-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900 mb-3">Fitur Unggulan</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProduct.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleWhatsAppOrder(selectedProduct)}
                      disabled={!selectedProduct.inStock}
                      className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                        selectedProduct.inStock
                          ? 'bg-amber-600 hover:bg-amber-700 text-white transform hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart size={20} />
                      <span>
                        {selectedProduct.inStock ? 'Pesan via WhatsApp' : 'Stok Habis'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;