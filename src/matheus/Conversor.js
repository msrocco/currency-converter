import React, { useState } from "react";
import { Button, Jumbotron, Row, Col } from "react-bootstrap";
import "./Conversor.css";

const Conversor = (props) => {
  const [moedaAValor, setMoedaAValor] = useState("0");
  const [moedaBValor, setMoedaBValor] = useState("0");

  async function converter() {
    let dePara = `${props.moedaA}_${props.moedaB}`;
    const url = `https://free.currconv.com/api/v7/convert?q=${dePara}&compact=ultra&apiKey=4b5b5f28fade0ca68961`;
    let res = await fetch(url);
    let json = await res.json();
    let cotacao = json[dePara];
    setMoedaBValor((parseFloat(moedaAValor) * cotacao).toFixed(2));
  }

//  function converter() {
//     let dePara = `${props.moedaAValor}_${props.moedaBValor}`;
//     const url = `https://free.currconv.com/api/v7/convert?q=${dePara}&compact=ultra&apiKey=4b5b5f28fade0ca68961`;
//     fetch(url)
//     .then(res => {
//         return res.json();
//     })
//     .then(json => {
//         let cotacao = json[dePara];
//         setMoedaBValor((parseFloat(moedaAValor) * cotacao).toFixed(2));
//     });
//  }

  return (
    <Jumbotron className="conversor">
      <Row>
        <Col xs="12">
          <h3>
            {props.moedaA} para {props.moedaB}
          </h3>
        </Col>
      </Row>
      <Row className="row2">
        <Col xs="4">
          <input
            type="text"
            onChange={(event) => {
              setMoedaAValor(event.target.value);
            }}
          ></input>
        </Col>
        <Col xs="4">
          <Button type="submit" onClick={converter}>Converter</Button>
        </Col>
        <Col xs="4">
          <h2>{moedaBValor}</h2>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Conversor;
