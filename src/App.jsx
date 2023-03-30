function App() {
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-yellow-300 h-14 md:h-20 xl:h-24">
        <div class="bg-orange-300 max-w-screen-xl mx-auto h-full flex justify-evenly items-center">
          <div className="btn-style">JY's Page</div>
          <div className="btn-style">Introduce</div>
          <div className="btn-style">Portfolio</div>
          <div className="btn-style">Music</div>
          <div className="btn-style">Stock Trading</div>
        </div>
      </header>
      <main className="bg-blue-500">
        <div className="bg-red-400 max-w-screen-xl mx-auto h-[500px] flex justify-center items-center flex-col">
          <div className="text-3xl">Date</div>
          <div className="text-5xl">Time</div>
        </div>
        <div className="bg-white max-w-screen-xl mx-auto h-40 flex justify-center items-center">
          환영 인사 및 소개
        </div>
        <div>
          <ul class="bg-blue-200 max-w-screen-xl mx-auto h-14 flex justify-center items-center gap-2">
            <li>깃허브</li>
            <li>벨로그</li>
            <li>메타마스크</li>
            <li>NFT</li>
          </ul>
        </div>
      </main>
      <footer className="bg-green-400 max-w-screen-xl mx-auto flex justify-end py-1 px-2 md:py-2">
        2023, Designed by JY
      </footer>
    </div>
  );
}

export default App;
