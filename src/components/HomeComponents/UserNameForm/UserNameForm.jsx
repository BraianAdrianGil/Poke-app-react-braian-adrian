import { useRef, useState } from "react";
import "./UserNameForm.css";
import { Link } from "react-router-dom";

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const inputTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!inputTouched.current) inputTouched.current = true;
    if (!nameValue) {
      setNameError("Please enter your name");
    } else if (/[^a-z ]/i.test(nameValue)) {
      setNameError("You can enter only letters and spaces");
    } else if (!/^[a-z ]{2,} ?$/i.test(nameValue)) {
      setNameError("The name must have more than 2 letters");
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
          placeholder="Your name..."
          onChange={handleChange}
          value={userNameValue}
          className="home__input"
        />
        <Link to={"/pokedex"} type="submit" className="home__form__button">
          Start
        </Link>
        {Boolean(nameError) && <p className="home__form_error">{nameError}</p>}
      </form>
    </>
  );
};

export default UserNameForm;
