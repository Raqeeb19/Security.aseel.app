import { useState } from "react";
import Card from "./card";

const cardsData = {
  twintytwo: [
    {
      name: "Raqib",
      info: ["devloper"],
      linkdenLink: "/",
      facebookLink: "/",
      githubLink: "",
    },
    {
      name: "Saboor Hakimi",
      info: ["devloper", "Security analyzer"],
      linkdenLink: "/",
      facebookLink: "/",
      githubLink: "",
    },
    {
      name: "Emranullah",
      info: ["Frontend_devloper"],
      linkdenLink: "/",
      facebookLink: "/",
      githubLink: "",
    },
    {
      name: "Mustafa Arghandiwal",
      info: ["Genier devloper"],
      linkdenLink: "/",
      facebookLink: "/",
      githubLink: "",
    },
    {
      name: "Mustafa Sadat ",
      info: ["Fullstak_devloper"],
      linkdenLink: "/",
      facebookLink: "/",
      githubLink: "",
    },
  ],
  twintythree: [
    {
      name: "King Khan",
      linkdenLink: "/",
      facebookLink: "/",
      githubLink: "",
      info: ["Genier_Security Analyzer"],
    },
  ],
};

function Geniuses() {
  const [activeData, setActiveData] = useState(cardsData.twintytwo);

  return (
    <div className=" mx-auto">
      <div className="flex justify-between items-center relative ">
        <h1 className="text-white font-bold text-3xl mb-10 "> Our Geniuses </h1>

        <select
          className="bg-[#001722] text-white border border-[#013f5c] rounded-md absolute right-0 py-1 px-3 text-xl "
          name=""
          id=""
          onChange={(e) =>
            setActiveData(
              e.target.value === "2022"
                ? cardsData.twintytwo
                : cardsData.twintythree
            )
          }
        >
          <option
            value="2022"
            onClick={() => setActiveData(cardsData.twintytwo)}
          >
            2022
          </option>

          <option
            value="2023"
            onClick={() => {
              setActiveData(cardsData.twintythree);
              console.log(activeData);
            }}
          >
            2023
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {activeData.map((el) => (
          <Card cardData={el} />
        ))}
      </div>
    </div>
  );
}

export default Geniuses;
