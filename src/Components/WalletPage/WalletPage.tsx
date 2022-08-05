import React from "react";
import { Link } from "react-router-dom";
import convertNumber from "../../helper/convertNumbers";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { oneCryptoType } from "../../types/Crypto";

const WalletPage:React.FC = () => {
  const { walletCrypto } = useTypedSelector((state) => state.wallet);
  const { removeCryptoFromWallet } = useAction();
  console.log(walletCrypto[0]);
  if (walletCrypto.length == 0) {
    return (
      <h2>Add some crypto</h2>
    );
  };
  return (
    <div className="wallet">
      {
        walletCrypto.map((item: oneCryptoType, index) => (
          <div className="wallet__child-element" key={index}>
            <Link to={`crypto/${item.id}`}>Name: {item.name} ({item.symbol})</Link>
            <p>Price: ${convertNumber(item.priceUsd)}</p>
            <p>Market Cap: ${convertNumber(item.marketCapUsd)}</p>
            <button className="button__remove__crypto" onClick={() => removeCryptoFromWallet(item)}>
              Remove all {item.name}
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default WalletPage;
