import React from "react";
import { Link } from "react-router-dom";
import convertNumber from "../../helper/convertNumbers";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HeaderProfile:React.FC = () => {
  const { totalPrice, exchange } = useTypedSelector((state) => state.wallet);

  return (
    <div className="header__profile">
      <span>${totalPrice < 0 ? 0 : convertNumber(totalPrice)}</span>
      <span>{exchange === Infinity ? (0).toFixed(2) : exchange.toFixed(2)}%</span>
      <Link to="wallet">Wallet</Link>
    </div>
  );
};

export default HeaderProfile;
