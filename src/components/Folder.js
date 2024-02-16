import { useState } from "react";
import AddFileFolderButton from "./AddFileFolderButton";
import AddFileFolderInput from "./AddFileFolderInput";
import tree from "../utils/sampleData.js";

const Folder = ({ dataObj, setDataObj }) => {
  const { id, name, isFolder, items } = dataObj;
  const [isExpand, setIsExpand] = useState(false);
  const [addFileOrFolder, setAddFileOrFolder] = useState("");

  const toggleHandler = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="w-96 pt-1 pl-1 ">
      <div className="flex justify-between bg-gray-100 hover:bg-gray-200">
        <div className=" cursor-pointer" onClick={toggleHandler}>
          {(isFolder ? "📁 " : "🗄 ") + name}
        </div>
        <AddFileFolderButton
          id={id}
          isFolder={isFolder}
          setIsAddFileFolder={setAddFileOrFolder}
          setIsExpand={setIsExpand}
          dataObj={tree}
          setDataObj={setDataObj}
        />
      </div>
      {addFileOrFolder.length > 0 && (
        <AddFileFolderInput
          id={id}
          addFileOrFolder={addFileOrFolder}
          setAddFileOrFolder={setAddFileOrFolder}
          setDataObj={setDataObj}
        />
      )}
      {isExpand && (
        <div className="pl-5">
          {isFolder &&
            items.map((data) => (
              <Folder key={data.id} dataObj={data} setDataObj={setDataObj} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
