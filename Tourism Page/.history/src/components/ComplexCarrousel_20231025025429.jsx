import { useState } from "react";
import CarrouselCard from "./CarrouselCard";
import Carrousel from "./Carrousel";
import explore from "../img/Explore.jpg";
import learn from "../img/learn.webp";
import relax from "../img/Relax.webp";
import family from "../img/Bring your family.jpg";
import tryOut from "../img/Try out new things.jpg";
import enjoy from "../img/enjoy.jpg";
import "../styles/complexCarrousel.modules.css";

function ComplexCarrousel() {
  const [initial, setInitial] = useState(0);
  const [visible, setVisible] = useState(false);
  const cardsSet = [
    <CarrouselCard key={"explore"} img={explore} activity={"explore"} />,
    <CarrouselCard key={"learn"} img={learn} activity={"learn"} />,
    <CarrouselCard key={"relax"} img={relax} activity={"relax"} />,
    <CarrouselCard key={"family"} img={family} activity={"family"} />,
    <CarrouselCard key={"try"} img={tryOut} activity={"try"} />,
    <CarrouselCard key={"enjoy"} img={enjoy} activity={"enjoy"} />,
  ];
  function handleClick(number) {
    setInitial(number);
    setVisible(true);
  }
  function close() {
    setVisible(false);
  }
  return (
    <div className="complexCarrousel">
      <div className="images__grid">
        <img
          src={explore}
          alt="explore"
          height="100"
          onClick={() => handleClick(0)}
          className="images__grid__one images__grid__img"
        />
        <img
          src={learn}
          alt="learn"
          height="100"
          onClick={() => handleClick(1)}
          className="images__grid__two images__grid__img"
        />
        <img
          src={relax}
          alt="relax"
          height="100"
          onClick={() => handleClick(2)}
          className="images__grid__three images__grid__img"
        />
        <img
          src={family}
          alt="family"
          height="100"
          onClick={() => handleClick(3)}
          className="images__grid__four images__grid__img"
        />
        <img
          src={tryOut}
          alt="try"
          height="100"
          onClick={() => handleClick(4)}
          className="images__grid__five images__grid__img"
        />
        <img
          src={enjoy}
          alt="enjoy"
          height="100"
          onClick={() => handleClick(5)}
          className="images__grid__six images__grid__img"
        />
      </div>
      <div
        className={`carrousel__container ${
          visible && "carrousel__container__visible"
        }`}>
        <Carrousel itemsSet={cardsSet} close={close} starting={initial} />
      </div>
    </div>
  );
}

export default ComplexCarrousel;
