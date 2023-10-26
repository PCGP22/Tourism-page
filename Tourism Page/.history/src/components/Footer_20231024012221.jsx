import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function Footer() {
  const [language] = useContext(languageContext);
  return (
    <footer>
      <div>
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
    </footer>
  );
}

export default Footer;
