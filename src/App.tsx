import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PatientBg from './components/PatientBg';
import PatientNavbar from './components/PatientNavbar';
import PatientLandingPage from './components/PatientLandingPage';
import { AlephiumWalletProvider } from '@alephium/web3-react'
import { NetworkId } from '@alephium/web3'
import InsurancePage from './components/InsurancePage';
import PaymentPage from './components/PaymentPage';
// import InsurancePage from './components/InsurancePage';

const App: React.FC = () => {
  return (
    <AlephiumWalletProvider network="devnet">
    <BrowserRouter>
      <PatientBg>
        <PatientNavbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<PatientLandingPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
<Route path="/insurance/payment" element={<PaymentPage />} />

          {/* <Route path="/appointment-history" element={<AppointmentHistory />} /> */}
          {/* <Route path="/disease-predictions" element={<DiseasePredictions />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/user-profile" element={<UserProfile />} /> */}
        </Routes>
      </PatientBg>
    </BrowserRouter>
    </AlephiumWalletProvider>
  );
};

export default App;
