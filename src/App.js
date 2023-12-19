import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
  const [qrCode,SetQrCode]=useState('');
  const [input,setInput]=useState('');
  // function handleGenerateQrCode(){
  //   SetQrCode(input);
  // }
  return (
    <div className="App">
      <h1>QR Code generator</h1>
      <div>
        <input 
        onChange={(e)=>{
          setInput(e.target.value);
          SetQrCode(input);
        }}
        type="text" name="qr-code" id="Enter your value" />
        {/* <button
        disabled={input && input.trim()!==''?false:true} 
        onClick={()=>SetQrCode(input)}>Generate
        </button> */}
      </div>
      <div>
        <QRCode
        id="qr-code-value"
        value={qrCode}
        size={400}
        bgColor="#fff"
        />
      </div>
    </div>
  );
}

export default App;
