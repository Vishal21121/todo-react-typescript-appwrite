import { ReactElement } from "react";
import { FaPlusCircle } from "react-icons/fa";
import TodoItem from "../components/TodoItem";

const Todo = (): ReactElement => {
  return (
    <div className="w-full p-8 flex justify-center h-screen">
      {/* upper part */}
      <div className="bg-gray-700 rounded-xl w-3/4 flex flex-col items-center mt-8">
        <div className="flex w-1/2 ring-1 ring-gray-500 mx-auto justify-center gap-4 p-4 bg-gray-950 mt-8 rounded-2xl">
          <div className="mr-8 mt-8">
            <p className="text-2xl text-orange-200 font-bold">Todo Done</p>
            <p className="text-white">Keep it up</p>
          </div>
          <div className="w-1/4 h-[130px] rounded-full bg-red-500  flex justify-center items-center">
            <p className="text-2xl text-gray-900 font-extrabold">1/3</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex mt-8 w-1/2 justify-center p-4 gap-4">
            <textarea
              name=""
              id=""
              cols={30}
              className="w-1/2 h-16 resize-none p-4 bg-gray-900 text-white rounded-2xl outline-none text-left"
              placeholder="Write your next task"
            ></textarea>
            <button className="">
              <FaPlusCircle className="text-3xl text-red-500" />
            </button>
          </div>
          <div className="flex flex-col w-1/2 items-center gap-2">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
