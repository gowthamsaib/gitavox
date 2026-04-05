import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThreeScene from './components/ThreeScene';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import RoadmapPage from './pages/RoadmapPage';
import IntegrationsPage from './pages/IntegrationsPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="relative min-h-screen text-slate-900 selection:bg-blue-500/30 dark:text-slate-100">
        <ThreeScene />
        <header>
          <Nav />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
