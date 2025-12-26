"use client";

import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/syncronix/Header";
import { Footer } from "@/components/syncronix/Footer";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { SilkBackground } from "@/components/ui/silk-background";
import { ShoppingBag, Eye, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  originalPrice: string;
  promotionalPrice: string;
  images?: string[];
  inStock: boolean;
  isPreSale: boolean;
  isNew?: boolean;
  tags?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Jaqueta Puffer",
    description: "Esportiva Syncronix Impermeável",
    category: "Esportiva",
    originalPrice: "R$ 689,90",
    promotionalPrice: "R$ 489,90",
    images: ["/puffer1.jpg", "/puffer2.jpg", "/puffer3.jpg", "/puffer4.jpg"],
    inStock: true,
    isPreSale: false,
  },
  {
    id: 2,
    name: "Jaqueta Windbreaker",
    description: "Esportiva Syncronix Impermeável",
    category: "Esportiva",
    originalPrice: "R$ 309,90",
    promotionalPrice: "R$ 269,90",
    images: ["/windbreaker1.JPG", "/windbreaker2.JPG", "/windbreaker3.JPG"],
    inStock: false,
    isPreSale: false,
  },
  {
    id: 3,
    name: "Calça Jogger Windbreaker",
    description: "Esportiva Syncronix Impermeável",
    category: "Esportiva",
    originalPrice: "R$ 299,90",
    promotionalPrice: "R$ 239,90",
    images: ["/jogger1.JPG", "/jogger2.JPG", "/jogger3.JPG"],
    inStock: true,
    isPreSale: false,
  },
  {
    id: 4,
    name: "Camiseta Darkerish",
    description: "Design exclusivo com padrão simétrico",
    category: "Streetwear",
    originalPrice: "R$ 259,99",
    promotionalPrice: "R$ 159,99",
    inStock: true,
    isPreSale: true,
    isNew: true,
    tags: ["NOVIDADE"],
  },
  {
    id: 5,
    name: "Camiseta Street Dragon",
    description: "Estilo urbano com grafismo exclusivo",
    category: "Streetwear",
    originalPrice: "R$ 259,99",
    promotionalPrice: "R$ 159,99",
    images: ["/streetdragon1.jpg", "/streetdragon2.jpg", "/streetdragon3.jpg"],
    inStock: true,
    isPreSale: true,
  },
];

const Shop = memo(function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const handleAddToCart = useCallback((product: Product) => {
    console.log('[Shop]', 'add_to_cart', { productId: product.id, productName: product.name });
    // Aqui você pode integrar com um carrinho de compras
    alert(`${product.name} adicionado ao carrinho!`);
  }, []);

  const handleQuickView = useCallback((product: Product) => {
    console.log('[Shop]', 'quick_view', { productId: product.id });
    setQuickViewProduct(product);
  }, []);

  const handleCloseQuickView = useCallback(() => {
    setQuickViewProduct(null);
  }, []);

  const nextImage = useCallback((productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  }, []);

  const prevImage = useCallback((productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  }, []);

  const handleCardClick = useCallback((product: Product) => {
    window.open(`/product/${product.id}`, '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Silk Background */}
        <SilkBackground 
          className="opacity-30"
          hue={280}
          saturation={0.6}
          brightness={0.8}
          speed={1.0}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              SYNCWEAR
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              A Materialização do Poder
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada peça SYNCWEAR é projetada para o indivíduo que entende que até mesmo o que você veste comunica poder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="btn-ghost"
            >
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="btn-ghost"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="card-elegant group relative flex flex-col h-full overflow-hidden"
              >
                {/* Product Tags */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {product.tags?.[0] || "NOVO"}
                  </div>
                )}
                
                {product.isPreSale && (
                  <div className="absolute top-4 right-4 z-10 bg-muted text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase border border-border">
                    [PRÉ-VENDA]
                  </div>
                )}

                {/* Product Image */}
                <div 
                  className="relative w-full aspect-square bg-gradient-to-br from-muted to-accent rounded-xl mb-6 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => handleCardClick(product)}
                >
                  {product.images && product.images.length > 0 ? (
                    <>
                      {/* Carousel Image */}
                      <img 
                        src={product.images[currentImageIndex[product.id] || 0]}
                        alt={`${product.name} - Foto ${(currentImageIndex[product.id] || 0) + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      
                      {/* Carousel Controls */}
                      {product.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(product.id, product.images!.length);
                            }}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Foto anterior"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(product.id, product.images!.length);
                            }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Próxima foto"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          
                          {/* Dots indicator */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {product.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(prev => ({
                                    ...prev,
                                    [product.id]: index
                                  }));
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  index === (currentImageIndex[product.id] || 0)
                                    ? 'bg-white'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Ver foto ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="text-6xl font-bold text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors">
                      SYNC
                    </div>
                  )}
                  
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickView(product);
                      }}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      aria-label={`Visualização rápida ${product.name}`}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Visualização rápida
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col space-y-4">
                  <div>
                    <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {product.promotionalPrice}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full mt-4 ${
                      product.inStock 
                        ? "btn-hero bg-primary text-primary-foreground hover:shadow-glow" 
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                    aria-label={product.inStock ? `Adicionar ${product.name} ao carrinho` : `${product.name} esgotado`}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Adicionar ao carrinho
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Esgotado
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleCloseQuickView}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="card-elegant max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card"
          >
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-muted to-accent rounded-xl flex items-center justify-center overflow-hidden relative">
                {quickViewProduct.images && quickViewProduct.images.length > 0 ? (
                  <>
                    <img 
                      src={quickViewProduct.images[currentImageIndex[quickViewProduct.id] || 0]}
                      alt={`${quickViewProduct.name} - Foto ${(currentImageIndex[quickViewProduct.id] || 0) + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    
                    {/* Carousel Controls */}
                    {quickViewProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(quickViewProduct.id, quickViewProduct.images!.length)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                          aria-label="Foto anterior"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => nextImage(quickViewProduct.id, quickViewProduct.images!.length)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                          aria-label="Próxima foto"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        
                        {/* Dots indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {quickViewProduct.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(prev => ({
                                ...prev,
                                [quickViewProduct.id]: index
                              }))}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === (currentImageIndex[quickViewProduct.id] || 0)
                                  ? 'bg-white'
                                  : 'bg-white/50 hover:bg-white/75'
                              }`}
                              aria-label={`Ver foto ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="text-8xl font-bold text-muted-foreground/20">
                    SYNC
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <button
                    onClick={handleCloseQuickView}
                    className="mb-4 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Fechar visualização rápida"
                  >
                    ✕
                  </button>
                  <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2">
                    {quickViewProduct.category}
                  </p>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {quickViewProduct.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {quickViewProduct.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-muted-foreground line-through">
                      {quickViewProduct.originalPrice}
                    </span>
                    <span className="text-4xl font-bold text-primary">
                      {quickViewProduct.promotionalPrice}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4">
                  <Button
                    onClick={() => {
                      handleAddToCart(quickViewProduct);
                      handleCloseQuickView();
                    }}
                    disabled={!quickViewProduct.inStock}
                    className="w-full btn-hero"
                  >
                    {quickViewProduct.inStock ? (
                      <>
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Adicionar ao carrinho
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Esgotado
                      </>
                    )}
                  </Button>
                  
                  {quickViewProduct.isPreSale && (
                    <p className="text-sm text-muted-foreground text-center">
                      Este item está em pré-venda e será enviado em breve.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.966-.944 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.24-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
});

export default Shop;




