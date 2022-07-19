import React, { useContext } from "react";
import { logcontstu } from "./Loginsignincontext/context";

function Temp() {
  const stu = useContext(logcontstu);
  console.log(stu);
  return (
    <>
      <h1>Hello </h1>
    </>
  );
}

export default Temp;
