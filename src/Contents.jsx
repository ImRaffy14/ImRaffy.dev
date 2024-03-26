import giphy from './assets/giphy.gif'
import { RiContactsLine } from "react-icons/ri";

function Contents({isLight}) {
  return (
    <section id="section1">
    <div className={`h-screen w-full ${isLight ? `bg-gradient-to-b from-slate-200 to-gray-300`:`bg-gradient-to-b from-neutral-800 to-gray-800`} text-neutral-200`}>
      <div className={`max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row border-b ${isLight ? `border-gray-400`:`border-gray-700`}`}>
        <div className="flex flex-col justify-center h-full mx-2 font-secularOne">
          <h1 className={`text-5xl xl:text-8xl lg:text-6xl md:text-8xl text-center lg:text-left font-bold ${isLight ? 'text-gray-800' : ''}`}>Hey there! I'm <span className="text-teal-500">Raffy Uanan</span></h1>
          <br/>
          <p className={`text-xl md:text-xl text-center lg:text-left xl:mr-32 lg:mr-10 md:mx-32 lg:mx-0 ${isLight ? 'text-gray-800' : ''}`}>A passionate third-year BSIT major in Information Management student, currently honing my skills to become a future Full Stack Developer. Based in the Philippines, I'm on an exciting journey to merge my love for technology with my knack for innovation.</p>
          <br/>
          <div className="flex justify-center lg:justify-start space-x-5">
            <button className="btn h-[60px] bg-white px-4 py-4 rounded-full text-black tracking-wider shadow-xl hover:bg-teal-500 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"><RiContactsLine /> Contact</button>

            <button
            className="cursor-pointer flex justify-center bg-gray-800 px-4 py-4 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
            Resume
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 15"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-6 animate-bounce"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
            </svg>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="avatar">
            <div className="w-96 h-96 rounded-2xl">
              <img src={giphy} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contents;
