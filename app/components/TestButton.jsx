import React from "react";

const TestButton = ({ children }) => {
  return (
    <button className="relative flex items-center justify-center w-48 h-12 p-2 overflow-hidden font-extrabold duration-300 bg-[#ffb629] border rounded-md cursor-pointer shadow-500 hover:scale-95 group text-sky-50">
      <div className="absolute z-10 w-40 h-40 duration-500 bg-[#ffb629] rounded-full right-32 -top-4 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      {/* <div className="absolute z-10 w-32 h-32 duration-500 bg-[#ffda56] rounded-full right-2 -top-4 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div> */}
      <div className="absolute z-10 w-20 h-24 duration-500 bg-white rounded-full -right-3 top-5 group-hover:top-2 group-hover:-right-2 group-hover:scale-125"></div>
      {/* <div className="absolute z-10 w-16 h-16 duration-500 bg-yellow-400 rounded-full right-20 -top-4 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>  */}
      <p className="z-10 text-black">{children}</p>
    </button>
  );
};

export default TestButton;

// import React from "react";

// const TestButton = () => {
//   return (
//     <button class="button">
//       <span class="liquid"></span>
//       <span class="btn-txt">Click Me</span>
//     </button>
//   );
// };

// export default TestButton;
