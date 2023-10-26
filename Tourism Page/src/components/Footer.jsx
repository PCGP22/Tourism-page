import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";
import "../styles/footer.modules.css";

function Footer() {
  const [language] = useContext(languageContext);
  return (
    <footer className="footer revealFromRight">
      <div className="footer__siteMap">
        <h3>
          {language === "en" ? english.footer.siteMap : spanish.footer.siteMap}
        </h3>

        {language === "en"
          ? english.footer.links.map((l) => (
              <a key={l.text} href={l.link}>
                {l.text}
              </a>
            ))
          : spanish.footer.links.map((l) => (
              <a key={l.text} href={l.link}>
                {l.text}
              </a>
            ))}
      </div>
      <div className="footer__contact">
        <h3>
          {language === "en" ? english.footer.contact : spanish.footer.contact}
        </h3>
        <p>
          {language === "en"
            ? "You can get in touch with us at the mail:"
            : "Puedes contactarnos por correo electrónico:"}
        </p>
        <p className="footer__mail">tourbymexico@mail.com</p>
        <p>
          {language === "en"
            ? "Or at the phone number:"
            : "O al número telefónico:"}
        </p>
        <p>(12) 3456 7890</p>
      </div>
    </footer>
  );
}

export default Footer;
