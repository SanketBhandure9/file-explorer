import dataObject from "./utils/sampleData";
import Folder from "./components/Folder";
import { useState } from "react";

const App = () => {
  const [dataObj, setDataObj] = useState(dataObject);

  return (
    <div>
      <Folder dataObj={dataObj} setDataObj={setDataObj} />
    </div>
  );
};

export default App;
