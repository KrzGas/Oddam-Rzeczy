import React, { Component, Fragment } from "react";
import { Wrapper } from "../Begin/Wrapper";
import { Thanks } from "./Thanks";
import bag from "../../../img/icon_bag.png";
import fundation from "../../../img/icon_fundation.png";

class SumUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      send: false
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        send: true
      },() => {
        this.timer = setTimeout(() => {
          localStorage.setItem("success", 1);
          window.location.reload();
        }, 5000);
      }
    );
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {ubrania,meskie,damskie,chlopiec,dziewczynka,jesien,wiosna,ubrania2} = this.props;
    const {zabawki,chlopiecZabawki,dziewczynkaZabawki,chlopiecWiek,dziewczynkaWiek} = this.props;
    const {ksiazki,ksiazkaDorosli,ksiazkaDzieci,ksiazkaMlodziez,ksiazkaEdukacyjna,inne,inneJakie} = this.props;
    const {  
      worki,
      dzieciom,
      samotnymMatkom,
      bezdomnym,
      niepelnosprawnym,
      osobomStarszym,
      DbamOZdrowie,
      DlaDzieci,
      BezDomu,
      ulica,
      miasto,
      kod,
      telefon,
      data,
      godzina,
      uwagi
    } = this.props;

    let workiText = "";
    if (worki == 1) {
      workiText = "worek";
    } else if (worki > 1 && worki < 5) {
      workiText = "worki";
    } else if (worki > 4 && worki <=10) {
      workiText = "worków";
    } else {
      workiText = "worków";
    }

    let fundacjaText = "";
    if (DbamOZdrowie) {
      fundacjaText = "Fundacji 'Dbam o Zdrowie'";
    } else if (DlaDzieci) {
      fundacjaText = "Fundacji 'Dla dzieci'";
    } else if (BezDomu) {
      fundacjaText = "Fundacji 'Bez domu'";
    }

    return [
      <Wrapper key={"Wrapper"}>
        {this.state.send ? (
          <Thanks />
        ) : (
          <form id="sumup">
            <h1>Podsumowanie Twojej darowizny</h1>
            <div className="begin__wrapper__forms">
              <img src={bag} />
              <span>
                {worki} {workiText} {ubrania && "ubrań "} {(ubrania && meskie) && "dla mężczyzn "} {(ubrania && damskie) && "dla kobiet "} {(ubrania && chlopiec) && "dla chłopców "} {(ubrania && dziewczynka) && "dla dziewczynek "} {(ubrania && jesien) && "na jesień/zimę "} {(ubrania && wiosna) && "na wiosnę/lato "} {ubrania2 && "ubrań do wyrzucenia"}
                {zabawki && <br/>}{zabawki && "zabawek "} {(chlopiecZabawki && chlopiecWiek) && `dla chłopca w wieku ${chlopiecWiek}`} {(dziewczynkaZabawki && dziewczynkaWiek) && `dla dziewczynki w wieku ${dziewczynkaWiek}`}
                {ksiazki && <br/>}{ksiazki && "książek "} {ksiazkaDorosli && "dla dorosłych "} {ksiazkaDzieci && "dla dzieci "} {ksiazkaMlodziez && "dla młodzieży "} {ksiazkaEdukacyjna && "edukacyjnych "}
                {inne && <br/>}{inne && "innych rzeczy "} {inneJakie && `(${inneJakie})`}
                &#160;dla&#160; {dzieciom && "dzieci "} {samotnymMatkom && "samotnych matek "} {bezdomnym && "bezdomnych "} {niepelnosprawnym && "niepełnosprawnych "} {osobomStarszym && "osób starszych "}
              </span>
            </div>
            <div className="begin__wrapper__forms">
              <img src={fundation} />
              <span>&#160;dla&#160;{fundacjaText}</span>
            </div>
            <div className="begin__wrapper__forms">
              <div className="begin__wrapper__address">
                <span>Adres odbioru</span>
                <label>
                  Ulica
                  <input
                    type="text"
                    name="ulica"
                    value={ulica}
                    readOnly={true}
                  />
                </label>
                <label>
                  Miasto
                  <input
                    type="text"
                    name="miasto"
                    value={miasto}
                    readOnly={true}
                  />
                </label>
                <label>
                  Kod pocztowy
                  <input type="text" name="kod" value={kod} readOnly={true} />
                </label>
                <label>
                  Nr telefonu
                  <input
                    type="text"
                    name="telefon"
                    value={telefon}
                    readOnly={true}
                  />
                </label>
              </div>
              <div className="begin__wrapper__address">
                <span>Termin odbioru</span>
                <label>
                  Data
                  <input type="text" name="data" value={data} readOnly={true} />
                </label>
                <label>
                  Godzina
                  <input
                    type="text"
                    name="godzina"
                    value={godzina}
                    readOnly={true}
                  />
                </label>
                <label>
                  Uwagi dla kuriera
                  <input
                    type="text"
                    name="uwagi"
                    id="uwagi"
                    value={uwagi}
                    readOnly={true}
                  />
                </label>
              </div>
            </div>
            <div className="begin__wrapper__button">
              <button id="back" onClick={() => this.props.step(5)}>
                Wstecz
              </button>
              <input
                type="submit"
                value="Potwierdzam"
                id="next"
                onClick={this.handleOnSubmit}
              />
            </div>
          </form>
        )}
      </Wrapper>
    ];
  }
}

export { SumUp };
