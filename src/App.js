import dataObj from "./utils/sampleData";
import Folder from "./components/Folder";

const App = () => {
  return (
    <div>
      <Folder dataObj={dataObj} />
    </div>
  );
};

export default App;
