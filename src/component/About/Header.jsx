import React from "react";
import "../../css/about/header.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        Stara Busana menyewakan Pakaian Adat Nusantara untuk anak-anak, maupun
        dewasa.
      </h1>
      <div className="to-collection">
        <a href="" className="to-collection__link">
          Pakaian Kami
        </a>
        <AiOutlineArrowLeft className="to-collection__icon"></AiOutlineArrowLeft>
      </div>
    </header>
  );
};

export default Header;
