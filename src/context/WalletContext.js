import React, { useState, useEffect } from 'react';

export const WalletContext = React.createContext();

let eth;

if (typeof window !== undefined) {
  eth = window.ethereum;
}

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask');
      const accounts = await metamask.request({
        method: 'eth_requestAccounts'
      });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.error(err);
      throw new Error('No ethereum object');
    }
  };

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask');
      if (metamask.isConnected()) {
        const accounts = await metamask.request({
          method: 'eth_requestAccounts'
        });
        if (accounts.length) {
          setCurrentAccount(accounts[0]);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WalletContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
