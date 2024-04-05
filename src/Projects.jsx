
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
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>
                
                <dialog id="my_modal_1" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <dialog id="my_modal_2" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <dialog id="my_modal_3" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <dialog id="my_modal_4" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <dialog id="my_modal_5" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                </div>
                        </div>
                    </div>
                </dialog>

                <div className="card w-[280px] h-[280px] lg:w-[380px] lg:h-[280px] bg-neutral-800 hover:scale-105 duration-500 cursor-pointer my-4" onClick={()=>document.getElementById('my_modal_6').showModal()}>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="text-center font-bold text-lg text-neutral-200">Life hack</h2>
                    </div>
                </div>

                <dialog id="my_modal_6" className="modal card-bottom sm:card-middle">
                    <div className="card lg:card-side bg-gray-800 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                        <div className="card-body">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                        </form>
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
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