import { ReactElement } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItem = (): ReactElement => {
  return (
    <div className="bg-gray-900 flex justify-between w-3/4 p-4 rounded-xl ">
      <div className="flex gap-2">
        <input type="checkbox" name="" id="" className="w-4" />
        <p className="text-orange-200">Hello</p>
      </div>
      <div className="flex gap-2">
        <FaEdit className="text-2xl text-gray-300 cursor-pointer hover:text-gray-400" />
        <MdDelete className="text-2xl text-gray-300 cursor-pointer hover:text-gray-400" />
      </div>
    </div>
  );
};

export default TodoItem;
