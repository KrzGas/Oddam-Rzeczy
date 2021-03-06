import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import decoration from "../../../img/decoration.png";

const Steps = [
  {
    stepNumber: "1",
    stepText: "Wybierz rzeczy"
  },
  {
    stepNumber: "2",
    stepText: "Spakuj je w worki"
  },
  {
    stepNumber: "3",
    stepText: "Wybierz fundację"
  },
  {
    stepNumber: "4",
    stepText: "Zamów kuriera"
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPanel: false,
      username: localStorage.getItem("login"),
      log: 0,
      nav: false
    };
  }

  ShowLoginPanel = () => {
    this.setState(prevState => {
      return {
        showLoginPanel: !prevState.showLoginPanel
      };
    });
  };

  updateReg = reg => {
    this.setState({
      reg: reg,
      showLoginPanel: false
    });
  };

  updateLog = log => {
    this.setState({
      log: log,
      showLoginPanel: false
    });
  };

  logOut = () => {
    localStorage.setItem("success", 0);
    this.setState({
      login: false
    });
    window.location.reload();
  };

  showNav = () => {
    this.setState({
      nav: !this.state.nav
    });
  };

  render() {
    return (
      <header className={this.props.user ? "header__bg__after" : "header__bg__before"}>
        {this.props.user ? (
          <div className="login__buttons">
            <span>
              Witaj {this.state.username}
              <i className="fas fa-cog" onClick={this.showNav} />
              {this.state.nav ? (
                <ul className="login__dropdown">
                  <li>Profil</li>
                  <li>Ustawienia</li>
                  <li>Moje zbiórki</li>
                  <li onClick={this.logOut}>Wyloguj</li>
                </ul>
              ) : null}
            </span>
          </div>
        ) : (
          <div className="login__buttons">
            <button onClick={this.ShowLoginPanel}>Zaloguj się</button>
            {this.state.showLoginPanel ? (
              <Login log={log => this.updateLog(log)} />
            ) : null}
            <button onClick={this.ShowLoginPanel}>Załóż konto</button>
            {this.state.showLoginPanel ? (
              <Register reg={reg => this.updateReg(reg)} />
            ) : null}
          </div>
        )}
        <nav>
          <Link
            to="InfoBar"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Start
          </Link>
          <Link to="Begin" spy={true} smooth={true} offset={-70} duration={500}>
            O co chodzi?
          </Link>
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            O nas
          </Link>
          <Link to="Funds" spy={true} smooth={true} offset={-70} duration={500}>
            Fundacje i organizacje
          </Link>
          <Link
            to="Footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Kontakt
          </Link>
        </nav>
        {this.props.user ? (
          <div className="header__wrapper">
            <p>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</p>
            <img src={decoration} />
            <p>Wystarczą 4 proste kroki</p>
            <div className="header__step__wrapper">
              {Steps.map((val, index) => {
                return (
                  <div className="header__step" key={index}>
                    <div className="header__step__content">
                      <p>{val.stepNumber}</p>
                      <p>{val.stepText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="header__wrapper">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <img src={decoration} />
            <div className="header__buttons">
              <button onClick={this.ShowLoginPanel}>ODDAJ RZECZY</button>
              <button onClick={this.ShowLoginPanel}>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export { Header };
