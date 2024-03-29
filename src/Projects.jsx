function Projects ({isLight}){
    return(

    
        <div className={`h-[1500px] w-full  ${isLight ? `bg-gradient-to-b from-slate-200 to-gray-300`:`bg-gradient-to-b from-neutral-800 to-gray-800`} text-neutral-200`}>
          <div className="max-w-screen-xl mx-auto items-center lg:items-start justify-center px-4">
            <div className="flex flex-col justify-center items-center lg:items-start mx-2 font-secularOne">
              <h1 className={`text-5xl  font-bold ${isLight ? 'text-gray-800' : 'text-neutral-200'} `}>Projects</h1>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-wrap my-[100px] space-x-0 sm:space-x-5 justify-center">

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4 ml-0 sm:ml-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
    
       
    )
}

export default Projects