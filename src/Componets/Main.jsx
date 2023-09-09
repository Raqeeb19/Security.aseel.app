import { lazy } from "react";

function Main() {
  return (
    <div>
      <div className="bg-[#001722] relative text-[white] flex justify-center flex-col items-center py-32 my-20 mx-20 border-solid rounded-lg">
        <img
          src="../Icons/bug-1.jsx"
          className="w-100 h-100 absolute top-0 left-0"
        />
        {/* 
        <img
          alt="Bug Pic one"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          data-nimg="1"
          class="absolute top-0 left-0"
          style={"color:transparent"}
          src="../Icons/bug-1.jsx"
        ></img> */}

        <h1 className="text-white text-8xl font-extrabold ">Hall Of Fame</h1>
        <div className="pt-10 pb-5 text-3xl font-semibold text-center sm:text-4xl flex flex-col gap-3">
          <p className="text-white">Gratitude and Recognition</p>
          <p className="text-white">for Security Researchers</p>
        </div>
        <p className="text-white text-center text-xl mt-4 sm:mt-0 ">
          Honoring the Experts who Made Our Website Safer{" "}
        </p>
      </div>

      <div className="flex justify-center mb-5 ">
        <div className="sm:w-[50vw] w-[80vw] text-white text-center ">
          <h2 className="text-white sm:text-center text-3xl text-semibold m-4 lg:text-4xl">
            Hall of Fame{" "}
          </h2>

          <p className="text-white mb-20 lg:text-lg">
            Our website security is paramount, ensuring a safe online
            experience. We're thankful for professionals who've generously
            helped identify and address potential vulnerabilities.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
