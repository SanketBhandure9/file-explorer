const useFileExplorer = (dataObj, setDataObj) => {
  function addNewFileFolder(parentId, value, fileOrFolder) {
    const finalValue = {
      id: new Date().getTime(),
      name: value,
      isFolder: fileOrFolder === "folder" ? true : false,
      items: [],
    };

    function recursion(dataObj) {
      for (let obj of dataObj.items) {
        if (obj.id === parentId) {
          obj.items.push(finalValue);
        } else {
          recursion(obj.items);
        }
      }
    }

    console.log("Check if successful", dataObj);
  }

  return { addNewFileFolder };
};

export default useFileExplorer;
