import "./styles.css";
import React from "react";

export default function App() {
  const url = (value) => {
    return `https://61824bbb84c2020017d89da4.mockapi.io/api/v1/names?name=${value}`;
  };

  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState("");

  const handleChange = async (e) => {
    setValue(e.target.value);
    const tempurl = url(e.target.value);
    const response = await fetch(tempurl);
    const tempdata = await response.json();
    setData(JSON.stringify(tempdata));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={value} onChange={handleChange} />
      <div>{data}</div>
    </div>
  );
}
