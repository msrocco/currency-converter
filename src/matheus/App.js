import React from "react";
import { useState } from 'react';
import "./App.css";
import Conversor from "./Conversor";
import ListarMoedas from "../listar-moedas";
import { Container, Row, Col, Form } from "react-bootstrap";

function App() {
  const [moedaLocal, setMoedaLocal] = useState("BRL");
  const [moedaEst1, setMoedaEst1] = useState("JPY");
  const [moedaEst2, setMoedaEst2] = useState("EUR");
  const [moedaEst3, setMoedaEst3] = useState("USD");

  return (
    <Container>
      <h1 className='title'>Conversor de Moedas</h1>
      <Row className='bloco-moedas'>
        <Col xs='3' className='moedaLocal'>
          <h4>Escolha sua moeda</h4>
          <Form.Control
            as="select"
            value={moedaLocal}
            onChange={(event) => {setMoedaLocal(event.target.value)}}>
            <ListarMoedas />
          </Form.Control>
        </Col>
        <Col xs='9' className='bloco-moedas-favoritas'>
          <h4>Escolha suas 3 moedas estrangeiras favoritas!</h4>
          <Form.Control as="select" value={moedaEst1} className='moedas-favoritas' onChange={
            (event) => {setMoedaEst1(event.target.value)}
          }>
            <ListarMoedas />
          </Form.Control>       
          <Form.Control as="select" value={moedaEst2} className='moedas-favoritas' onChange={
            (event) => {setMoedaEst2(event.target.value)}
          }>
            <ListarMoedas />
          </Form.Control>
          <Form.Control as="select" value={moedaEst3} className='moedas-favoritas' onChange={
            (event) => {setMoedaEst3(event.target.value)}
          }>
            <ListarMoedas />
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col xs='4'><Conversor moedaA={moedaEst1} moedaB={moedaLocal}></Conversor></Col>
        <Col xs='4'><Conversor moedaA={moedaEst2} moedaB={moedaLocal}></Conversor></Col>
        <Col xs='4'><Conversor moedaA={moedaEst3} moedaB={moedaLocal}></Conversor></Col>
      </Row>
      <Row>
        <Col xs='4'><Conversor moedaA={moedaLocal} moedaB={moedaEst1}></Conversor></Col>
        <Col xs='4'><Conversor moedaA={moedaLocal} moedaB={moedaEst2}></Conversor></Col>
        <Col xs='4'><Conversor moedaA={moedaLocal} moedaB={moedaEst3}></Conversor></Col>
      </Row>
    </Container>
  );
}

export default App;
