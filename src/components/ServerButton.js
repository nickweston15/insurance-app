import { useState } from 'react';

function ServerButton() {
  const [serverMessage, setServerMessage] = useState('');
  
  const fetchMessage = async () => {
    const res = await fetch('http://localhost:5000/api/message');
    const data = await res.json();
    setServerMessage(data.message);
  };
  
  return (
    <>
      <button onClick={fetchMessage}>Get Server Message</button>
      {serverMessage && <p>Server says: {serverMessage}</p>}
    </>
  );
}

export default ServerButton;