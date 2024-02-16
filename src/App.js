import dataObject from "./utils/sampleData";
import Folder from "./components/Folder";
import { useState } from "react";
import useTraverseObject from "./hooks/useTraverseObject";

const App = () => {
  const [dataObj, setDataObj] = useState(dataObject);

  return (
    <div>{dataObj && <Folder dataObj={dataObj} setDataObj={setDataObj} />}</div>
  );
};

export default App;
