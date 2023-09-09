import React from "react";
import FacebookLink from "../Icons/facebook";
import GithubLink from "../Icons/github";
import LinkedinIcons from "../Icons/Linkedin";

const Card = ({ cardData }) => {
  const { name, position, linkdenLink, facebookLink, githubLink, info } =
    cardData;
  return (
    <div className="flex items-start flex-col w-60 h-80 relative p-4 rounded-md shadow-xl shadow-[#001722] md:text-left bg-gradient-to-br from-[#001722] to-[#0a384e] min-w-0 max-w-full">
      <img src="https://security.aseelapp.com/images/profile.svg" alt=" " />
      <h2 className="text-white my-5  font-bold">{name}</h2>
      {info.map((el) => (
        <button className="text-left rounded-full text-white bg-[#094660] py-2 px-3 text-xs font-semibold mt-2">
          {el}
        </button>
      ))}

      <div className="flex gap-x-3 mt-auto">
        <span>
          <FacebookLink />
        </span>
        <span>
          <GithubLink />
        </span>
        <span>
          <LinkedinIcons />
        </span>
      </div>
    </div>
  );
};

export default Card;
