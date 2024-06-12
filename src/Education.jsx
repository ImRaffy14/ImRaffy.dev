import komhay from './assets/komhay.png'
import STI from './assets/STI.png'
import BCP from './assets/bcp.png'

function Education({isLight}){

    return(
        <div className={`h-[1550px] sm:h-[1400px] w-full  ${isLight ? `bg-gradient-to-b from-gray-300 to-slate-200 text-gray-800`:`bg-gradient-to-b from-gray-800 to-neutral-800 text-neutral-200`}`}>
          <div className="max-w-screen-xl mx-auto items-center justify-center px-4">
            <div className="flex flex-col justify-center items-center mx-5 font-secularOne">
              <h1 className={`text-5xl  font-bold ${isLight ? 'text-gray-800' : 'text-neutral-200'} `}>Education</h1>
            </div>
          </div>
            <div className="max-w-screen-xl mx-auto my-24">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-0 sm:mx-5">
                    <li>
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                                
                        <time className="font-mono italic">2020</time>
                        <div className="h-5"></div>
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src={komhay} />
                            </div>
                        </div>
                        <div className="text-lg font-black">Commonwealth Highschool</div>
                            <p className={`${isLight ? `text-gray-700` : `text-neutral-300`}`}>Completed high school education with a focus on technology. Acquired foundational skills in web development by learning HTML and CSS. Demonstrated proficiency in creating basic websites.</p>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <time className="font-mono italic">2021</time>
                        <div className="h-5"></div>
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src={STI} />
                            </div>
                        </div>
                        <div className="text-lg font-black">STI Fairview</div>
                        <p className={`${isLight ? `text-gray-700` : `text-neutral-300`}`}>Initiated higher education journey with a keen interest in Information Technology. Engaged in introductory courses covering fundamental concepts of Java programming and Linux operating systems. Explored practical applications of programming and system administration.</p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2022</time>
                        <div className="h-5"></div>
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src={BCP} />
                            </div>
                        </div>
                        <div className="text-lg font-black">Bestlink College of the Philippines</div>
                        <p className={`${isLight ? `text-gray-700` : `text-neutral-300`}`}>Advanced into the second year of academic studies. Deepened understanding of web development technologies. Delved into server-side scripting with PHP and database management using MySQL. Successfully completed projects involving dynamic web applications. Expanding expertise in modern web development frameworks. Focusing on React JS and exploring other frontend frameworks. Actively participating in collaborative projects and seeking opportunities for practical application of knowledge.</p>
                        </div>
                        <hr />
                    </li>

                </ul>
            </div>
            <section id="section5">
            </section>
        </div>
        
    )
}

export default Education