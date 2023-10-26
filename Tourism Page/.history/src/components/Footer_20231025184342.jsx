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
      <div>
        <h3>
          {language === "en" ? english.footer.contact : spanish.footer.contact}
        </h3>
        <p>
          {language === "en"
            ? english.footer["contact-info"]
            : spanish.footer["contact-info"]}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
