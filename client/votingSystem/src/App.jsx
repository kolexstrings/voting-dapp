import React, { useEffect } from 'react';
import Web3 from 'web3';

function App() {
  useEffect(() => {
    const web3 = new Web3(providerUrl);
  }, []);

  return <div className='App'></div>;
}

export default App;