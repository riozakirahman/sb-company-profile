import React from "react";
import "../../css/about/main.css";
import call from "../../assets/Call.png";
import edit from "../../assets/edit.png";
import swap from "../../assets/Swap.png";

const Main = () => {
  return (
    <main>
      <section className="section">
        <h1 className="section__title">Sewa Pakaian Adat</h1>
        <div className="cards">
          <div className="card">
            <img src={call} alt="" className="card__img" />
            <p className="card__text">
              Reservasi online melalui telephone dan whatsapp
            </p>
          </div>
          <div className="card">
            <img src={edit} alt="" className="card__img" />
            <p className="card__text">
              Ambil pakaian dan sewa selama hari yang ditentukan
            </p>
          </div>
          <div className="card">
            <img src={swap} alt="" className="card__img" />
            <p className="card__text">Pengembalian pakaian adat</p>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="section__title">Gallery Customer</h1>
        <div className="cards">
          <div className="card">
            <img src="" alt="" className="card__img" />
          </div>
          <div className="card">
            <img src="" alt="" className="card__img" />
          </div>
          <div className="card">
            <img src="" alt="" className="card__img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
