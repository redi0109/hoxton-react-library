import { useState } from "react";
import { Button } from "./Button";

export function Main() {
  const [btn, setBtn] = useState(false);
  const [cereful, setCereful] = useState(true);

  return (
    <div className="main">
      {btn ? <h1>I am ON </h1> : <h1>I am OFF </h1>}
      <Button size="large" onClick={() => setBtn(!btn)}>
        ON/OFF
      </Button>

      <Button
        size="small"
        btnType="danger"
        onClick={() => {
          alert("I'm watching you!!!");
        }}
      >
        DON'T Click Me
      </Button>

      {cereful ? <h1>Don't worry, it's safe</h1> : <h1>I'm hacking you</h1>}
      <Button
        size="small"
        btnType="secondary"
        onClick={() => {
          setCereful(true);
        }}
      >
        I'm safe
      </Button>
      <Button
        size="small"
        btnType="danger"
        onClick={() => {
          setCereful(false);
        }}
      >
        I'm not safe
      </Button>
    </div>
  );
}
