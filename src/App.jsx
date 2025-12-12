import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from "./Pages/About";
import Objective from "./Pages/Objective"
import Contact from './Pages/Contact';
import OperationalModel from './Pages/OperationalModel';
import SalientFeatures from './Pages/SalientFeatures';
import PoliciesPage from './Pages/PoliciesPage';
import SedimentaryBasins from './Pages/SedimentaryBasins';
import HelpPage from './Pages/HelpPage';
import ResearchInvest from './Pages/ResearchInvest';
import TechnologyBehindNDR from './Pages/TechnologyBehindNDR';
import DownloadDataPriceListPolicies from './Pages/DownloadDataPriceListPolicies';
import RegistrationPage from './Pages/RegistrationPage';
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/operationalModel" element={<OperationalModel />} />
        <Route path="/salientFeatures" element={<SalientFeatures />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/sedimentaryBasins" element={<SedimentaryBasins />} />
        <Route path ="/help" element={<HelpPage />} />
        <Route path ="/researchInvest" element={<ResearchInvest />} />
       <Route path="/technologybehindNDR" element={<TechnologyBehindNDR />} />
       <Route path="/DownloadDataPriceListPolicies" element={<DownloadDataPriceListPolicies />} />
       <Route path="/registration" element={<RegistrationPage />} />


      </Routes>
    </>
  )
}
