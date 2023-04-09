import { Link, useSearchParams } from "react-router-dom";

function PortfolioDetail() {
  const [searchParams] = useSearchParams();
  const image = searchParams.get("image");
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const detail = searchParams.get("detail");
  const href = searchParams.get("href");

  return (
    <main className="bg-slate-400 relative max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      {/* <button className="absolute left-0 font-bold text-2xl mx-6 my-4 hover:scale-105">
        〈
      </button>

      <button className="absolute right-0 font-bold text-2xl mx-6 my-4 hover:scale-105">
        〉
      </button> */}

      <Link to="/portfolio">
        <button className="absolute top-0 fon-bold right-0 text-2xl mx-2 hover:scale-105">
          X
        </button>
      </Link>
      <img src={`${process.env.PUBLIC_URL}/${image}`} />
      <div className="mt-8 text-4xl font-bold">{title}</div>
      <div className="mt-8 text-xl">{desc}</div>
      <a
        href={href}
        className="absolute top-0 left-0 mx-2 text-2xl hover:scale-105"
        target="_blank"
      >
        Go to Play
      </a>
      <div className="mt-8 mx-10">{detail}</div>
    </main>
  );
}

export default PortfolioDetail;
