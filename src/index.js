import React, { useState } from "react";
import { render } from "react-dom";

// const dynamicallyImportModule = () => import(
//   /* webpackChunkName: "toBeImportedDynamically" */
//   "./toBeImportedDynamically"
// );

// const CommonButton = React.lazy(
//   () => import('common_ui/Button')
// );

function App() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <h1>Team 1</h1>
      <button onClick={onClick}>
        {toggle ? 'Clicked' : 'Click Me'}
      </button>
    </>
  );
}

render(<App />, document.getElementById("root"));
