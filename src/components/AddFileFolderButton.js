const AddFileFolderButton = ({ isFolder, setIsAddFileFolder, setIsExpand }) => {
  const addFileFolderHandler = (fileFolder) => {
    setIsAddFileFolder(fileFolder);
    setIsExpand(true);
  };

  return (
    <div>
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
    </div>
  );
};

export default AddFileFolderButton;
