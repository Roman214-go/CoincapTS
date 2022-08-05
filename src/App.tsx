import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CryptoPage from "./Components/CryptoPage/CryptoPage";
import Layout from "./Components/Layout";
import Main from "./Components/MainPage/Main";
import WalletPage from "./Components/WalletPage/WalletPage";

const App:React.FC = () => {
  const path = useLocation();
  useEffect(() =>
    window.scrollTo(0, 0)
  , [path]);
  return (
    <>
      <Routes>
        <Route path="/CoincapTS" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="crypto/:id" element={<CryptoPage/>}/>
          <Route path="wallet" element={<WalletPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
