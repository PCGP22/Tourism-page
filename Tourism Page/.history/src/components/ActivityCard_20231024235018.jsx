import archeological from "../img/Archeological-site.jpg";
import beach from "../img/Beach-club.webp";
import bike from "../img/Bike-rental.jpg";
import diving from "../img/Diving.jpg";
import jungle from "../img/Jungle-tour.jpg";
import market from "../img/Marketplace.jpg";
import club from "../img/Nightclub.webp";
import snorkel from "../img/Snorkel.jpg";

function ActivityCard({ img = "", title, description, price }) {
  const sources = {
    "Sitios Arqueológicos": archeological,
    "Clubs de playa": beach,
    "Renta de bicicletas": bike,
    Buceo: diving,
    "Tour por la jungla": jungle,
    Mercados: market,
    "Clubes nocturnos": club,
    Snorkel: snorkel,
    "Archeological sites": archeological,
    "Beach club": beach,
    "Bike Rental": bike,
    Diving: diving,
    "Jungle tour": jungle,
    Marketplaces: market,
    Nightclubs: club,
  };
  return (
    <div>
      <img src={sources[title]} alt={title + " example"} />
      <div className="description__card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
