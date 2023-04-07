import { Link } from "react-router-dom";

function PortfolioCard({ image, title, desc, index, detail }) {
  return (
    <Link
      to={`/portfolio/${index}?title=${title}&desc=${desc}&image=${image}&detail=${detail}`}
    >
      <li className="relative bg-white w-60 h-72 shadow-lg rounded-lg hover:scale-105">
        <div className="w-full h-1/2 rounded-t-lg">
          <img
            className="w-full h-full border-b-2 object-cover rounded-t-lg"
            src={`${process.env.PUBLIC_URL}/${image}`}
          />
        </div>
        <div className=" text-xl font-bold mt-3 mx-2">{title}</div>
        <div className="mt-2 mx-2">{desc}</div>
      </li>
    </Link>
  );
}

export default PortfolioCard;
