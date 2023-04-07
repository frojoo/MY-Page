import PortfolioCard from "../components/PortfolioCard";
import PortfolioData from "../PortfolioData.json";
import { Outlet } from "react-router-dom";

function Portfolio() {
  return (
    <div className="bg-gray-200 max-w-screen-xl mx-auto h-full flex flex-col justify-start px-5 py-4">
      <div className="text-4xl font-bold border-b-2 border-black pb-3">
        My Projects
      </div>
      <Outlet />
      <ul className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 py-8">
        {PortfolioData.map((v, i) => {
          return (
            <PortfolioCard
              key={i}
              index={i}
              image={v.image}
              title={v.title}
              desc={v.desc}
              detail={v.detail}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Portfolio;
