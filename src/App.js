import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import LoginPage from './GenInfoPage';
import ContentPage from './ArhMemPage';
import FormPage from './ApplPage';

const menuListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh', // added to make the div full-height
  backgroundImage: "url('./src/fig-1-13-800x658.jpg')", // change URL to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const contentStyle = {
  marginTop: '50px',
  marginBottom: '50px',
  padding: '20px',
  border: '2px solid #ccc',
  borderRadius: '5px',
  backgroundColor: 'white',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const buttonStyle = {
  display: 'inline-block',
  padding: '10px',
  backgroundColor: '#f2f2f2',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '20px',
};

function App() {
  return (
    <div style={menuListStyle}>
      <div style={contentStyle}>
        <div style={titleStyle}>AVR ATMega32 MICROCONTROLLER Information.</div>
        <Link to="/" style={buttonStyle}>Return to Menu</Link>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/genInfo" element={<LoginPage />} />
          <Route path="/ArhMem" element={<ContentPage />} />
          <Route path="/Appl" element={<FormPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

