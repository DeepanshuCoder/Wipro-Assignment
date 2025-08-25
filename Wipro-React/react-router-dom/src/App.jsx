import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./component/NavbarMenu";
import Home from "./component/Home";
import AddTaxpayer from "./component/AddTaxpayer";
import TaxpayerList from "./component/TaxpayerList";
import CalculateTax from "./component/CalculateTax";
import TaxRates from "./component/TaxRates";
import Contact from "./component/Contact";
import About from "./component/About";
import FAQ from "./component/FAQ";
import NotFound from "./component/NotFound";

export default function App() {
  return (
    <Router>
      {/* Navbar always visible because i wrapped it inside the Router */}
      <NavbarMenu />
      {/* Main container for access all pages */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-taxpayer" element={<AddTaxpayer />} />
          <Route path="/taxpayer-list" element={<TaxpayerList />} />
          <Route path="/calculate-tax" element={<CalculateTax />} />
          <Route path="/tax-rates" element={<TaxRates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Using the (*) When you put the wrong url so it redirect to NotFound page 
          & Fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
