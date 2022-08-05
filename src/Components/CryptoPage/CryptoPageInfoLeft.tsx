import React from "react";
import convertNumber from "../../helper/convertNumbers";
import { useAction } from "../../hooks/useAction";
import { ICryptoPageInfoLeft } from "../../types/Crypto";

const CryptoPageInfoLeft:React.FC<ICryptoPageInfoLeft> = ({ crypto } : ICryptoPageInfoLeft) => {
  const { changeWallet } = useAction();
  return (
    <div className="crypto__info__child-left">
      <div className="crypto__info__name__left crypto__info__cont__left">
        <h1>{crypto.name}</h1>
        <p>{crypto.symbol}</p>
        <button className="button__add-crypto left__button" onClick={() => changeWallet(crypto)}>
          +
        </button>
      </div>
      <div className="crypto__info__price__left crypto__info__cont__left">
        <h3>Price:</h3>
        <p>${convertNumber(crypto.priceUsd)}</p>
      </div>
      <a href={crypto.explorer} target="_blank" rel="noreferrer">Explore</a>
    </div>
  );
};

export default CryptoPageInfoLeft;
