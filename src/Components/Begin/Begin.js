import React, { Component } from "react";
import { Login } from "../Login/Login";

const BeginContent = [
  {
    icon: "fas fa-hands",
    title: "Wybierz rzeczy",
    info: "ubrania, zabawki, sprzęt i inne"
  },
  {
    icon: "fas fa-download",
    title: "Spakuj je",
    info: "skorzystaj z worków na śmieci"
  },
  {
    icon: "fas fa-binoculars",
    title: "Zdecyduje komu chcesz pomóc",
    info: "wybierz zaufane miejsce"
  },
  {
    icon: "fas fa-people-carry",
    title: "Zamów kuriera",
    info: "kurier przyjedzie w dogodnym terminie"
  }
];

const BgAfterLog = {
  backgroundImage: "url('../img/barrett-ward.jpg')",
  backgroundSize: "100% 100%",
  backgroundRepeat: 'no-repeat',
  height: '100%',
  margin: '0 0'
};

const BeginBeforeLog = () => {
  return (
    <section className="begin__wrapper" id="Begin">
      <span className="begin__title">Wystarczą 4 proste kroki</span>
      <img src="../img/decoration.png" />
      <div className="begin__info">
        {BeginContent.map((val, index) => {
          return (
            <div className="begin__info__steps" key={index}>
              <i className={val.icon} />
              <span>{val.title}</span>
              <hr />
              <span>{val.info}</span>
            </div>
          );
        })}
      </div>
      {/* <button onClick={this.ShowLoginPanel}>Załóż konto</button> */}
    </section>
  );
};

const BeginAfterLog = () => {
  return (
    <section className="begin__wrapper" id="Begin"style={BgAfterLog}>
      <span>Krok 1/4</span>
      <form>
        <h1>Zaznacz co chcesz oddać:</h1>
        <label><input type="checkbox" name="ubrania" />ubrania, które nadają się do ponownego użycia</label>
        <label><input type="checkbox" name="ubrania2" />ubrania, do wyrzucenia</label>
        <label><input type="checkbox" name="zabawki" />zabawki</label>
        <label><input type="checkbox" name="ksiazki" />książki</label>
        <label><input type="checkbox" name="inne" />inne</label>
        <button>Dalej</button>
      </form>
    </section>
  );
};

class Begin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPanel: false
    };
  }

  ShowLoginPanel = () => {
    this.setState(prevState => {
      return {
        showLoginPanel: !prevState.showLoginPanel
      };
    });
  };

  render() {
    return (
      <>
      {this.props.user ? <BeginAfterLog /> :  <BeginBeforeLog />}
     </>
    );
  }
}

export { Begin };
