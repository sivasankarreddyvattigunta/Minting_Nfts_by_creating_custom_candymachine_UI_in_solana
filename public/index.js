import React, { useEffect } from 'react';
import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token';
import { useWallet } from "@solana/wallet-adapter-react";

const MyComponent = () => {
  const { publicKey } = useWallet();
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  
  useEffect(() => {
    const fetchData = async () => {
      if (publicKey) {
        const fromWallet = Keypair.fromSecretKey(new Uint8Array(privateKeyBytes));
        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          fromWallet.publicKey,
          mint,
          new Keypair(publicKey).publicKey
        );
        
        const signature = await transfer(
          connection,
          fromWallet,
          fromTokenAccount,
          fromWallet.publicKey,
          100000000, // Amount in lamports (not SOL)
        );
        
        console.log('Transfer TX:', signature);
      }
    };
    
    fetchData();
  }, [publicKey]);

  // Rest of your component logic...
};

export default MyComponent;

// Assuming mint and privateKeyBytes are defined somewhere in your code
const mint = 'CtsQmcZSiGj3rRXJkyQXLCtScRi2ATxtoWa2kPNRrByQ';
const privateKeyBytes = [101,14,47,43,242,177,9,133,27,213,30,96,156,74,34,185,204,68,149,114,46,218,129,60,82,111,166,44,90,134,0,156,125,67,130,59,241,34,51,165,57,148,132,237,123,238,123,131,87,225,218,227,222,106,155,121,181,250,38,130,255,178,157,204];
