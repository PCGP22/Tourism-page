import { useState } from "react";
import CarrouselCard from "./CarrouselCard";
import Carrousel from "./Carrousel";
import explore from "../img/Explore.jpg";
import learn from "../img/learn.webp";
import relax from "../img/Relax.webp";
import family from "../img/Bring your family.jpg";
import tryOut from "../img/Try out new things.jpg";
import enjoy from "../img/enjoy.jpg";

function ComplexCarrousel() {
  const [initial, setInitial] = useState(0);
  const cardsSet = [
    <CarrouselCard key={"explore"} img={explore} activity={"explore"} />,
    <CarrouselCard key={"learn"} img={learn} activity={"learn"} />,
    <CarrouselCard key={"relax"} img={relax} activity={"relax"} />,
    <CarrouselCard key={"family"} img={family} activity={"family"} />,
    <CarrouselCard key={"try"} img={tryOut} activity={"try"} />,
    <CarrouselCard key={"enjoy"} img={enjoy} activity={"enjoy"} />,
  ];
  return (
    <>
      <div>
        <img src={explore} alt="explore" height="100" />
        <img src={learn} alt="learn" height="100" />
        <img src={relax} alt="relax" height="100" />
        <img src={family} alt="family" height="100" />
        <img src={tryOut} alt="try" height="100" />
        <img src={enjoy} alt="enjoy" height="100" />
      </div>
      <Carrousel itemsSet={cardsSet} starting={initial} />
    </>
  );
}

export default ComplexCarrousel;
