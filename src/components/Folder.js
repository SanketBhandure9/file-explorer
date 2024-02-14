import { useState } from "react";
import AddFileFolderButton from "./AddFileFolderButton";
import AddFileFolderInput from "./AddFileFolderInput";
import useFileExplorer from "./hooks/useFileExplorer";

const Folder = ({ dataObj, setDataObj }) => {
  const { id, name, isFolder, items } = dataObj;
  const [isExpand, setIsExpand] = useState(false);
  const [addFileOrFolder, setAddFileOrFolder] = useState("");

  const toggleHandler = () => {
    setIsExpand(!isExpand);
  };

  const { addNewFileFolder } = useFileExplorer(dataObj, setDataObj);

  return (
    <div className="w-72 pt-1 pl-1 ">
      <div className="flex justify-between bg-gray-100 hover:bg-gray-200">
        <div className=" cursor-pointer" onClick={toggleHandler}>
          {(isFolder ? "📁 " : "🗄 ") + name}
        </div>
        <AddFileFolderButton
          isFolder={isFolder}
          setIsAddFileFolder={setAddFileOrFolder}
          setIsExpand={setIsExpand}
        />
      </div>
      {addFileOrFolder.length > 0 && (
        <AddFileFolderInput
          id={id}
          addFileOrFolder={addFileOrFolder}
          setAddFileOrFolder={setAddFileOrFolder}
          addNewFileFolder={addNewFileFolder}
        />
      )}
      {isExpand && (
        <div className="pl-5">
          {isFolder &&
            items.map((data) => <Folder key={data.id} dataObj={data} />)}
        </div>
      )}
    </div>
  );
};

export default Folder;
