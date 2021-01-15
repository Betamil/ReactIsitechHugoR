import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import * as fromPlantesAPI from "../api/plantes";

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plantes: [],
    };
  }

  async postPlante() {
    const plante = await fromPlantesAPI.postPlante(plante);
    const plantes = await fromPlantesAPI.getPlantes();
    this.setState({
      plantes: plantes,
    });
  }

  async componentDidMount() {
    const plantes = await fromPlantesAPI.getPlantes();
    this.setState({
      plantes: plantes,
    });
  }

  handleChange(e) {
    e.preventDefault();
    let name = e.target.name;
    this.setState(
      {
        [name]: e.target.value,
      },
      () => console.log("callback", this.state)
    );
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="cards">
          <h1>Nos meilleures ventes</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                {this.state.plantes.map((p, i) => {
                  return (
                    <CardItem
                      src={p.src}
                      text={p.text}
                      label={p.label}
                      path={p.path}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
