import { useState } from "react";

const Folder = ({ dataObj }) => {
  const { name, isFolder, items } = dataObj;
  const [isExpand, setIsExpand] = useState(false);

  const toggleHandler = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="w-72 pt-1 pl-1 ">
      <div className="hover:bg-gray-100 cursor-pointer" onClick={toggleHandler}>
        {(isFolder ? "📁 " : "🗄 ") + name}
      </div>
      {isExpand && (
        <div className="pl-5">
          {isFolder && items.map((data) => <Folder dataObj={data} />)}
        </div>
      )}
    </div>
  );
};

export default Folder;
