import { useContext } from "react";
import UserNameForm from "../../components/HomeComponents/UserNameForm/UserNameForm";
import { UserNameContext } from "../../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const { saveUserName } = useContext(UserNameContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/pokedex";
  //Ruta original a donde quería entrar el usuario

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  };
  return (
    <div className="home__general__container">
      <div className="charizard"></div>
      <div className="eevee"></div>
      <div className="mewtwo"></div>

      <div className="welcome__general__container">
        <div className="pokedex__img__container">
          <div className="pokeball__img"></div>
        </div>
        <h1>¡Hi Trainer!</h1>
        <p>To begin, please give me your name</p>
      </div>

      <div className="home__footer__social__networks">
        <a
          href="https://github.com/BraianAdrianGil/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://uy.linkedin.com/in/braian-adrian-gil-a10042266"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="bx bxl-linkedin-square"
            style={{ color: "#227fb9" }}
          ></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter" style={{ color: "#6dd4d4" }}></i>
        </a>
      </div>
      <UserNameForm onSendName={handleSendName} />
      <footer className="home__footer__general__container">
        <div className="home__footer__rights__general__container">
          <p>&copy; 2023 Braian Adrian G. Todos los derechos reservados.</p>
        </div>
        <div className="home__footer__contact__general__container">
          <p>
            <a href="mailto:braian.adrian.gagliardo@gmail.com">
              braian.adrian.gagliardo@gmail.com
            </a>
            <span> | </span>
            <a href="tel:+598098604405"> +598098604405</a>
          </p>
        </div>
        <div className="pikachu__container">
          <img src="https://i.imgur.com/tV5jP6X.png" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
