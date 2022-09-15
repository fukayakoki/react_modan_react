import React, { useState } from "react";
import ColorfullMessage from "./compments/ColorfullMessage";

const App = () => {
  const onClickButton = () => setNum(num + 1);
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p>お元気ですか</p>
      <ColorfullMessage color="blue">お元気ですか</ColorfullMessage>
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
