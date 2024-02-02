import { ReactElement, useState } from "react";
import checklist from "../assets/checklist.svg";
import client from "../appwrite/appwriteConfig";
import { Databases } from "appwrite";
import { v4 as uuidv4 } from "uuid";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = (): ReactElement => {
  const database = new Databases(client);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleClick = (): void => {
    console.log(userData);
    const promise = database.createDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_USERCOLLECTION_ID,
      uuidv4(),
      userData
    );

    promise.then(
      function (response): void {
        console.log("success", response); // Success
        toast.success("Account created successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      },
      function (error): void {
        console.log("success", error); // Failure
      }
    );
  };

  return (
    <div className="flex items-center w-full h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-[80%] h-[90vh] flex mx-auto p-4 rounded-md ring-4 ring-gray-300 ">
        <div className="bg-gray-900 rounded-lg w-1/2 px-4 flex justify-center">
          <img src={checklist} alt="" className="w-full" />
        </div>
        <div className="w-[30%] flex flex-col items-center gap-2 py-8 px-4 mx-auto">
          <p className="text-4xl text-gray-300 font-semibold text-center p-2">
            Sign up
          </p>
          <div className="my-2 w-full flex flex-col gap-2">
            <label htmlFor="username" className="font-semibold text-gray-300">
              Username
            </label>
            <input
              type="text"
              name=""
              id="username"
              className="w-full p-2 bg-gray-300 text-black outline-none rounded"
              placeholder="Enter your name"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>
          <div className="my-2 w-full flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="w-full p-2 bg-gray-300 text-black outline-none rounded"
              placeholder="Enter your email"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="font-semibold text-gray-300">
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="p-2 bg-gray-300 text-black outline-none rounded"
              placeholder="Enter your password"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button
            className="ring-2 ring-[#00b0ff] text-gray-300 hover:text-white hover:bg-[#00b0ff] font-semibold text-lg p-2 rounded w-1/2 mx-auto my-4"
            onClick={handleClick}
          >
            Sign up
          </button>
          <div className="flex gap-2">
            <span className="text-gray-300">Already have an account?</span>
            <a href="" className="text-gray-300 hover:text-[#00b0ff]">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
