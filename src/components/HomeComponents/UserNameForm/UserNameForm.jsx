import { useRef, useState } from "react";
import "./UserNameForm.css";

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const inputTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!inputTouched.current) inputTouched.current = true;
    if (!nameValue) {
      setNameError("Debes ingresar un nombre!");
    } else if (/[^a-z ]/i.test(nameValue)) {
      setNameError("Solo se pueden incluir letras y espacios!");
    } else if (!/^[a-z ]{2,} ?$/i.test(nameValue)) {
      setNameError("El nombre debe ser mas largo que 2 caracteres!");
    } else {
      setNameError("");
    }
    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && inputTouched.current) onSendName(userNameValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="home__form__container">
        <input
          type="text"
          placeholder="Tu nombre..."
          onChange={handleChange}
          value={userNameValue}
          className="home__input"
        />
        <button type="submit" className="home__form__button">
          Comenzar
        </button>
        {Boolean(nameError) && <p className="home__form_error">{nameError}</p>}
      </form>
    </>
  );
};

export default UserNameForm;
