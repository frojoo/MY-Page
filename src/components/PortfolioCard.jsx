function PortfolioCard({ image, title, desc }) {
  return (
    <li className="bg-white w-60 h-72 shadow-lg rounded-lg">
      <div className="w-full h-1/2 rounded-t-lg">
        <img src={image} />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
    </li>
  );
}

export default PortfolioCard;
