import useTraverseObject from "../hooks/useTraverseObject";

const AddFileFolderButton = ({
  id,
  isFolder,
  setIsAddFileFolder,
  setIsExpand,
  dataObj,
  setDataObj,
}) => {
  const { deleteNode } = useTraverseObject();

  const addFileFolderHandler = (fileFolder) => {
    setIsAddFileFolder(fileFolder);
    setIsExpand(true);
  };

  const deleteHandler = () => {
    const finalTree = deleteNode(dataObj, id);
    setDataObj(finalTree);
  };

  return (
    <div className="flex">
      {isFolder && (
        <div>
          <button
            className="mx-1 p-1 px-2 bg-blue-500 text-white rounded-md"
            onClick={() => addFileFolderHandler("folder")}
          >
            Folder +
          </button>
          <button
            className="mx-1 p-1 px-2 bg-blue-500 text-white rounded-md"
            onClick={() => addFileFolderHandler("file")}
          >
            File +
          </button>
        </div>
      )}
      <button
        className="mx-1 p-1 px-2 bg-blue-500 text-white rounded-md"
        onClick={deleteHandler}
      >
        ❌
      </button>
    </div>
  );
};

export default AddFileFolderButton;
