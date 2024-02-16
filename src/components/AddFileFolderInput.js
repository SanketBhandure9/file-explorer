import { useState } from "react";
import useTraverseObject from "../hooks/useTraverseObject";
import tree from "../utils/sampleData.js";

const AddFileFolderInput = ({
  id,
  addFileOrFolder,
  setAddFileOrFolder,
  setDataObj,
}) => {
  const [inputText, setInputText] = useState(null);
  const { addNode } = useTraverseObject();
  const toggleAddFileOrFolder = () => {
    setAddFileOrFolder("");
  };

  const inputHandler = () => {
    // Add logic to add this in Main Object
    const finalTree = addNode(tree, id, inputText, addFileOrFolder);
    setDataObj(finalTree);
    setAddFileOrFolder("");
  };

  return (
    <div className="flex pt-1 pl-6">
      <span>{addFileOrFolder === "folder" ? "📁 " : "🗄 "}</span>
      <input
        className="bg-gray-50 ml-1 pl-1 border border-2 rounded-md"
        autoFocus
        type="text"
        onChange={(event) => setInputText(event.target.value)}
        onBlur={toggleAddFileOrFolder}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            inputHandler();
          }
        }}
      />
    </div>
  );
};

export default AddFileFolderInput;
