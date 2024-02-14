const AddFileFolderInput = ({
  id,
  addFileOrFolder,
  setAddFileOrFolder,
  addNewFileFolder,
}) => {
  const toggleAddFileOrFolder = () => {
    setAddFileOrFolder("");
  };

  const inputHandler = (value) => {
    addNewFileFolder(id, value, addFileOrFolder);
  };

  return (
    <div className="flex pt-1 pl-6">
      <span>{addFileOrFolder === "folder" ? "📁 " : "🗄 "}</span>
      <input
        className="bg-gray-50 ml-1 pl-1 border border-2 rounded-md"
        autoFocus
        type="text"
        onBlur={toggleAddFileOrFolder}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            inputHandler(event.target.value);
          }
        }}
      />
    </div>
  );
};

export default AddFileFolderInput;
