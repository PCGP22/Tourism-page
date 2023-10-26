import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function Form() {
  const [language] = useContext(languageContext);
  return (
    <form>
      <h2>{language === "en" ? english.form.title : spanish.form.title}</h2>
      <fieldset>
        <label htmlFor="name">
          {language === "en" ? english.form.name : spanish.form.name}
        </label>
        <input
          id="name"
          placeholder={
            language === "en"
              ? english.form.placeholders.name
              : spanish.form.placeholders.name
          }
        />
      </fieldset>
    </form>
  );
}

export default Form;
