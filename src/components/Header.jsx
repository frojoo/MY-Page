function Header() {
  return (
    <header className="bg-yellow-300 h-14 md:h-20 xl:h-24">
      <div class="bg-orange-300 max-w-screen-xl mx-auto h-full flex justify-evenly items-center">
        <button className="btn-style">JY's Page</button>
        <button className="btn-style">Introduce</button>
        <button className="btn-style">Portfolio</button>
        <button className="btn-style">Music</button>
        <button className="btn-style">Stock Trading</button>
      </div>
    </header>
  );
}

export default Header;
