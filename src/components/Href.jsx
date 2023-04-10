import { SiGithub, SiVelog, SiOpensea } from "react-icons/si";
import { HiWallet } from "react-icons/hi2";

function Href() {
  return (
    <div className="fixed bottom-12 md:text-xl lg:text-2xl left-1/2 -translate-x-1/2">
      <ul class="text-white max-w-screen-xl mx-auto flex justify-center items-center gap-5">
        <a href="https://github.com/frojoo" target="_blank">
          <SiGithub />
        </a>
        <a href="https://velog.io/@frookie">
          <SiVelog />
        </a>
        <a href="https://opensea.io/account">
          <SiOpensea />
        </a>
        <HiWallet />
      </ul>
    </div>
  );
}

export default Href;
