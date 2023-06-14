import { useContext } from "react";
import UserNameForm from "../../components/HomeComponents/UserNameForm/UserNameForm";
import { UserNameContext } from "../../context/UserNameContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { saveUserName } = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate("/Pokedex");
  };
  return (
    <div className="home__general__container">
      <div className="pokedex__img__container"></div>

      <div className="pikachu__container">
        <img src="https://i.imgur.com/tV5jP6X.png" alt="" />
      </div>

      <div className="welcome__general__container">
        <h1>¡Hi Trainer!</h1>
        <p>To begin, please give me your name</p>
      </div>

      <UserNameForm onSendName={handleSendName} />

      <div className="footer__pokeball__img"></div>
    </div>
  );
};

export default Home;
