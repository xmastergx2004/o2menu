"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Footer from "@/components/Footer";
import { menuData, MenuItem } from "@/data/menuData";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("SICAK KAHVELER");
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [view, setView] = useState<'categories' | 'products'>('categories');

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('categories');
  };

  const currentCategory = menuData.find((cat) => cat.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-[#f8f9fa] shadow-2xl min-[450px]:my-8 min-[450px]:rounded-[32px] min-[450px]:overflow-hidden min-[450px]:h-[calc(100vh-4rem)] relative overflow-hidden">
      <Header showBack={view === 'products'} onBack={handleBack} />

      <div className="flex-1 relative overflow-hidden">
        {/* Categories View */}
        <div
          className={`absolute inset-0 overflow-y-auto scrollbar-hide transition-transform duration-500 ease-in-out ${view === 'categories' ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <CategoryNav
            categories={menuData}
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />
          <Footer />
        </div>

        {/* Products View */}
        <div
          className={`absolute inset-0 overflow-y-auto scrollbar-hide transition-transform duration-500 ease-in-out bg-[#f8f9fa] ${view === 'products' ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="px-5 py-6">
            <h2 className="text-2xl font-bold text-[#2c3e50] mb-6 flex items-center gap-3">
              <span className="text-3xl text-[#27ae60]">{currentCategory?.icon}</span>
              {currentCategory?.category}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {currentCategory?.items.map((item, index) => (
                <ProductCard
                  key={`${activeCategory}-${item.name}-${index}`}
                  item={item}
                  category={activeCategory}
                  onClick={() => setSelectedProduct(item)}
                />
              ))}
            </div>
            <div className="h-20"></div> {/* Spacer for bottom */}
          </div>
        </div>
      </div>

      <ProductModal
        item={selectedProduct}
        category={activeCategory}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
