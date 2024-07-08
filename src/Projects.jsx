import colorCraftImg from './assets/projects/colorCraft/colorcraft.png'
import colorCraftImg1 from './assets/projects/colorCraft/colorcraft1.png'
import colorCraftImg2 from './assets/projects/colorCraft/colorcraft2.png'
import colorCraftImg3 from './assets/projects/colorCraft/colorcraft3.png'
import paccImg from './assets/projects/pacc/pacc.png'
import paccImg1 from './assets/projects/pacc/pacc1.png'
import paccImg2 from './assets/projects/pacc/pacc2.png'
import paccImg3 from './assets/projects/pacc/pacc3.png'
import rpsImg from './assets/projects/Rock-Paper-Scissors/rps.png'
import rpsImg1 from './assets/projects/Rock-Paper-Scissors/rps1.png'
import colorGameImg from './assets/projects/colorGame/colorgame1.png'
import posImg1 from './assets/projects/POS/pos1.png'
import posImg2 from './assets/projects/POS/pos2.png'
import posImg3 from './assets/projects/POS/pos3.png'


function Projects ({isLight}){

    return(


        <div className={`h-[2200px] xl:h-[1000px] md:h-[1260px] sm:h-screen w-full  ${isLight ? `bg-gradient-to-b from-slate-200 to-gray-300`:`bg-gradient-to-b from-neutral-800 to-gray-800`} text-neutral-200`}>
          <div className="max-w-screen-xl mx-auto items-center lg:items-start justify-center px-4">
            <div className="flex flex-col justify-center items-center lg:items-start mx-5 font-secularOne">
              <h1 className={`text-5xl  font-bold ${isLight ? 'text-gray-800' : 'text-neutral-200'} `}>Projects</h1>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-wrap my-[100px] space-x-0 sm:space-x-5 justify-center">

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4 ml-0 sm:ml-4" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                    <figure><img src={colorCraftImg} alt="ColorCraft.co"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">ColorCraft.Co</h2>
                    </div>
                </div>
                
                <dialog id="my_modal_1" className="modal card-bottom sm:card-middle">
                    <div className="card mx-4 h-[550px] lg:card-side bg-gray-800 shadow-xl">
                        <figure>
                            <div className="carousel w-full sm:w-[1000px]">
                                <div id="colorCraft1" className="carousel-item relative w-full">
                                    <img
                                    src={colorCraftImg}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#colorCraft4" className="btn btn-circle">❮</a>
                                    <a href="#colorCraft2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="colorCraft2" className="carousel-item relative w-full">
                                    <img
                                    src={colorCraftImg2}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#colorCraft1" className="btn btn-circle">❮</a>
                                    <a href="#colorCraft3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="colorCraft3" className="carousel-item relative w-full">
                                    <img
                                    src={colorCraftImg1}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#colorCraft2" className="btn btn-circle">❮</a>
                                    <a href="#colorCraft4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="colorCraft4" className="carousel-item relative w-full">
                                    <img
                                    src={colorCraftImg3}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#colorCraft3" className="btn btn-circle">❮</a>
                                    <a href="#colorCraft1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body h-1 sm:h-full w-full sm:w-[400px] overflow-auto sm:overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title font-bold">ColorCraft.Co</h2>
                            <p className="mt-4">ColorCraft.Co is an e-commerce website I developed for a school project. The website serves as an online store for a company, offering a user-friendly interface for browsing and purchasing products. Key features include a product catalog, shopping cart functionality, and accurate subtotal for billing. The project showcases my skills in web development and design.</p>
                                <div className="flex gap-2 mt-2 mb-4 sm:mb-[80px]">
                                    <button className="btn btn-active btn-neutral">Javascript</button>
                                    <button className="btn btn-active btn-neutral">React JS</button>
                                    <button className="btn btn-active btn-neutral">Tailwind</button>
                                </div>
                            <div className="card-actions justify-end">
                                <a href="https://imraffy14.github.io/ColorCraft.co/"><button className="btn btn-active h-[50px] w-[150px]" >Demo</button></a>
                            </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <figure><img src={paccImg} alt="car!"/></figure>
                    <div className="card-body h-[1px]">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Pilot Area Community Chapter System</h2>
                    </div>
                </div>

                <dialog id="my_modal_2" className="modal card-bottom sm:card-middle">
                    <div className="card mx-4 h-[550px] lg:card-side bg-gray-800 shadow-xl">
                        <figure>
                            <div className="carousel w-full sm:w-[1000px]">
                                <div id="pacc1" className="carousel-item relative w-full">
                                    <img
                                    src={paccImg}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pacc4" className="btn btn-circle">❮</a>
                                    <a href="#pacc2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="pacc2" className="carousel-item relative w-full">
                                    <img
                                    src={paccImg1}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pacc1" className="btn btn-circle">❮</a>
                                    <a href="#pacc3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="pacc3" className="carousel-item relative w-full">
                                    <img
                                    src={paccImg2}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pacc2" className="btn btn-circle">❮</a>
                                    <a href="#pacc4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="pacc4" className="carousel-item relative w-full">
                                    <img
                                    src={paccImg3}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pacc3" className="btn btn-circle">❮</a>
                                    <a href="#pacc1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body h-1 sm:h-full w-full sm:w-[400px] overflow-auto sm:overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title font-bold">Pilot Area Community Chapter System</h2>
                            <p className="mt-2">The Pilot Area Community Chapter System is a private system I developed to manage residents, funds, and attendance for our community chapter. This project focuses on streamlining administrative tasks and ensuring efficient management of community resources. Key features include resident database management, financial tracking, and attendance monitoring. The system demonstrates my proficiency in creating tailored solutions for specific organizational needs.</p>
                                <div className="flex flex-wrap gap-2 mt-2 mb-4 sm:mb-[70px]">
                                    <button className="btn btn-active btn-neutral">HTML</button>
                                    <button className="btn btn-active btn-neutral">CSS</button>
                                    <button className="btn btn-active btn-neutral">Bootstrap</button>
                                    <button className="btn btn-active btn-neutral">PHP</button>
                                    <button className="btn btn-active btn-neutral">MySQL</button>
                                    <button className="btn btn-active btn-neutral">Javascript</button>
                                </div>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <figure><img src={rpsImg} alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Rock Paper Scissors Game</h2>
                    </div>
                </div>

                <dialog id="my_modal_3" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side h-[550px] bg-gray-800 shadow-xl">
                        <figure>
                            <div className="carousel w-full sm:w-[900px]">
                                <div id="rps1" className="carousel-item relative w-full">
                                    <img
                                    src={rpsImg1}
                                    className="w-full" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body h-1 sm:h-full w-full sm:w-[400px] overflow-auto sm:overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title font-bold">Rock Paper Scissors Game</h2>
                            <p className="mt-2">This Rock Paper Scissors game was developed to practice my JavaScript skills, with a focus on essential concepts such as DOM manipulation, functions, and various JavaScript methods, resulting in a responsive and interactive experience that showcases my ability to create dynamic web applications</p>
                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-[130px]">
                                    <button className="btn btn-active btn-neutral">HTML</button>
                                    <button className="btn btn-active btn-neutral">CSS</button>
                                    <button className="btn btn-active btn-neutral">Javascript</button>
                                </div>
                            <div className="card-actions justify-end">
                            <a href="https://imraffy14.github.io/Rock-Paper-Scissors/ROCK-PAPER-SCISSORS.html"><button className="btn btn-active h-[50px] w-[150px]" >Demo</button></a>
                            </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <figure><img src={colorGameImg} alt="Color Game"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Color Game</h2>
                    </div>
                </div>

                <dialog id="my_modal_4" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                    <figure>
                            <div className="carousel w-full sm:w-[900px]">
                                <div id="rps1" className="carousel-item relative w-full">
                                    <img
                                    src={colorGameImg}
                                    className="w-full" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body h-1 sm:h-full w-full sm:w-[400px] overflow-auto sm:overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title font-bold">Color Game</h2>
                            <p className="my-2">I developed a Color Game using React.js to practice and enhance my skills with hooks and other React features. In this game, when a user chooses a color, the game generates three random colors. If the user's chosen color matches one of the three generated colors, the user wins. This project helped me improve my understanding of component-based architecture, state management, and event handling in React.</p>
                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-[130px]">
                                    <button className="btn btn-active btn-neutral">HTML</button>
                                    <button className="btn btn-active btn-neutral">CSS</button>
                                    <button className="btn btn-active btn-neutral">Javascript</button>
                                    <button className="btn btn-active btn-neutral">React JS</button>
                                </div>
                            <div className="card-actions justify-end">
                            <a href="https://imraffy14.github.io/color-game/"><button className="btn btn-active h-[50px] w-[150px]" >Demo</button></a>
                            </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                    <figure><img src={posImg2} alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">POS with Inventory System</h2>
                    </div>
                </div>

                <dialog id="my_modal_5" className="modal card-bottom sm:card-middle">
                <div className="card mx-4 h-[550px] lg:card-side bg-gray-800 shadow-xl">
                        <figure>
                            <div className="carousel w-full sm:w-[1000px]">
                                <div id="pos1" className="carousel-item relative w-full">
                                    <img
                                    src={posImg1}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pos3" className="btn btn-circle">❮</a>
                                    <a href="#pos2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="pos2" className="carousel-item relative w-full">
                                    <img
                                    src={posImg2}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pos1" className="btn btn-circle">❮</a>
                                    <a href="#pos3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="pos3" className="carousel-item relative w-full">
                                    <img
                                    src={posImg3}
                                    className="w-full" />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#pos2" className="btn btn-circle">❮</a>
                                    <a href="#pos1" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body h-1 sm:h-full w-full sm:w-[400px] overflow-auto">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title font-bold">POS w/ Inventory System</h2>
                            <p className="mt-4">I built a POS with Inventory System using MongoDB, Express.js, React.js, and Node.js to practice my main stack, MERN. This project manages sales transactions and inventory tracking efficiently. It includes features such as product management, sales reporting, and real-time inventory updates. The system leverages the MERN stack to ensure a robust and scalable solution, enhancing my skills in full-stack development, database management, and API integration. (This project is still in progress.)</p>
                                <div className="flex flex-wrap gap-2 mt-4 mb-4 sm:mb-[30px]">
                                    <button className="btn btn-active btn-neutral">React JS</button>
                                    <button className="btn btn-active btn-neutral">Node JS</button>
                                    <button className="btn btn-active btn-neutral">Monggo DB</button>
                                    <button className="btn btn-active btn-neutral">Express JS</button>
                                    <button className="btn btn-active btn-neutral">Tailwind</button>
                                </div>
                            <div className="card-actions justify-end">
                                <a href="https://imraffy14.github.io/ColorCraft.co/"><button className="btn btn-active h-[50px] w-[150px]" >Demo</button></a>
                            </div>
                        </div>
                    </div>
                </dialog>


                <div className="my-[400px]"> 
            <section id="section4"></section> 
          </div>
            </div>
          </div>
        </div>


    )
}

export default Projects