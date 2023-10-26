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
        </label>{" "}
        <br />
        <input
          id="name"
          placeholder={
            language === "en"
              ? english.form.placeholders.name
              : spanish.form.placeholders.name
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="name">
          {language === "en" ? english.form.email : spanish.form.email}
        </label>{" "}
        <br />
        <input
          id="name"
          placeholder={
            language === "en"
              ? english.form.placeholders.email
              : spanish.form.placeholders.email
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="name">
          {language === "en" ? english.form.message : spanish.form.message}
        </label>{" "}
        <br />
        <textarea
          id="name"
          placeholder={
            language === "en"
              ? english.form.placeholders.message
              : spanish.form.placeholders.message
          }
        />
      </fieldset>
      <fieldset>
        <button type="button">
          {language === "en" ? english.form.send : spanish.form.send}
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
