const useTraverseObject = () => {
  function addNode(tree, parentId, text, fileOrFolder) {
    if (parentId === tree.id) {
      const obj = {
        id: new Date().getTime(),
        name: text,
        isFolder: fileOrFolder === "folder" ? true : false,
        items: [],
      };
      tree.items.unshift(obj);
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return addNode(obj, parentId, text, fileOrFolder);
    });
    return { ...tree, items: latestNode };
  }

  return { addNode };
};

export default useTraverseObject;
