import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Aadhar from './components/KYC/Aadhar';
import FinalSuccess from './components/KYC/FinalSuccess';
import Income from './components/KYC/Income';
import Pan from './components/KYC/Pan';
import Context from './Context';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/aadharScan" element={<Aadhar />} />
          <Route path="/panCardScan" element={<Pan />} />
          <Route path="/IncomeProofScan" element={<Income />} />
          <Route path="/FinalSuccess" element={<FinalSuccess />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
