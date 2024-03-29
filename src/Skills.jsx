import Html from './assets/Html.png'
import Css from './assets/Css.png'
import JavaScript from './assets/JavaScript.png'
import Bootstrap from './assets/Bootstrap.png'
import Tailwind from './assets/Tailwind.png'
import ReactJs from './assets/ReactJs.png'
import MySql from './assets/MySql.png'
import Php from './assets/Php.png'
import vsCode from './assets/vsCode.png'
import git from './assets/git.png'
import gitHub from './assets/gitHub.png'
import skillImg from './assets/Skill-img.png'


function Skills ({isLight}){
    return (
<>
        <section id="section2">
        <div className={`h-[900px] w-full ${isLight ? `bg-gradient-to-b from-gray-300 to-slate-200`:`bg-gradient-to-b from-gray-800 to-neutral-800`} text-white`}>
          <div className="max-w-screen-xl mx-auto flex flex-col items-center lg:items-start justify-center h-[500px] px-4">
            <div className="flex flex-col justify-center items-center lg:items-start mx-2 font-secularOne">
              <h1 className={`text-5xl  font-bold ${isLight ? 'text-gray-800' : 'text-neutral-200'} `}>Skills</h1>
              <p className={`text-xl md:text-lg   ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>Tools and Technologies.</p>
              <br/>
            </div>
          </div>
          <div className="max-w-screen-sm lg:max-w-screen-xl h-[10px] lg:h-23 sm:h-4 mx-auto flex items-center">
            <div className="flex flex-wrap my-4 space-x-2 justify-center lg:justify-start">
                <div className="lg:tooltip" data-tip="HTML">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={Html} />
                        </div>
                    </div>
                </div>
                <div className="lg:tooltip" data-tip="CSS">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={Css} />
                        </div>
                    </div>
                </div>
                <div className="lg:tooltip" data-tip="JAVASCRIPT">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={JavaScript} />
                        </div>
                    </div>    
                </div>
                <div className="lg:tooltip" data-tip="BOOTSTRAP">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={Bootstrap} />
                        </div>
                    </div>    
                </div>
                <div className="lg:tooltip" data-tip="TAILWIND">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={Tailwind} />
                        </div>
                    </div>    
                </div>
                <div className="lg:tooltip" data-tip="REACT JS">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={ReactJs} />
                        </div>
                    </div>   
                </div>
            
                <div className="lg:tooltip" data-tip="MYSQL">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={MySql} />
                        </div>
                    </div>
                </div>
                <div className="lg:tooltip" data-tip="PHP">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={Php} />
                        </div>
                    </div>
                </div>
                <div className="lg:tooltip" data-tip="VS CODE">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={vsCode} />
                        </div>
                    </div>
                </div>
                <div className="lg:tooltip" data-tip="GIT">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={git} />
                        </div>
                    </div>
                </div> 
                <div className="lg:tooltip" data-tip="GITHUB">
                    <div className="avatar">
                        <div className="lg:w-28 w-[80px] rounded-xl">
                            <img src={gitHub} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="avatar">
                    <div className="w-[500px] rounded-2xl">
                        <img src={skillImg} alt="avatar" />
                    </div>
                </div>
            </div>
          </div>
          <div className="my-[250px]"> 
            <section id="section3"></section> 
          </div>
        </div>
        </section>
       

       
</>
      );
}

export default Skills

