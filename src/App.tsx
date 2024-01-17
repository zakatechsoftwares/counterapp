import React, { ChangeEvent } from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateType, DispatchType } from "./redux-store/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  increment,
  decrement,
  increaseByAmount,
  reset,
} from "./redux-store/counterSlice";
import { Form } from "react-bootstrap";

function App() {
  const count = useSelector((state: StoreStateType) => state.counter.count);
  const dispatch = useDispatch<DispatchType>();
  const [amount, setAmount] = useState<number>(0);

  const resetCounter = () => {
    const val = document.getElementById("formInput") as HTMLInputElement;
    val.value = "";
  };

  return (
    <Container>
      <Row>
        <Col>
          <p className="display-4">The Counter: {count}</p>
          <Form.Control
            id="formInput"
            type="number"
            placeholder="Enter the number you want to increase with"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(Number(e.target.value))
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>-10</Button>
        </Col>
        <Col>
          <Button onClick={() => dispatch(decrement())}>-</Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              dispatch(reset());
              resetCounter();
            }}
          >
            Reset
          </Button>
        </Col>
        <Col>
          <Button onClick={() => dispatch(increment())}>+</Button>
        </Col>
        <Col>
          <Button onClick={() => dispatch(increaseByAmount(amount))}>
            +{amount}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
