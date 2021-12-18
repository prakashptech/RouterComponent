import React, { useContext, createContext } from "react";
import { FormInfo } from "./dashform";
import Child3 from "./child3";

const newContext = createContext();

const Child2 = () => {
    const data = useContext(FormInfo);
    console.log(data);
  return (
    <div>
      <h5>Child - 2</h5>
      <newContext.Provider value={data}>
        <Child3 />
      </newContext.Provider>
    </div>
  );
};

export default Child2;
export {newContext };