
function Contacts ({isLight}){

    return(
        <>
            <div className={`h-[2200px] xl:h-[1000px] md:h-[1260px] sm:h-screen w-full  ${isLight ? `bg-gradient-to-b from-slate-200 to-gray-300`:`bg-gradient-to-b from-neutral-800 to-gray-800`} text-neutral-200`}>
                <div className="max-w-screen-xl mx-auto items-center lg:items-start justify-center px-4">
                        <div className="flex flex-col justify-center items-center lg:items-start mx-5 font-secularOne">
                            <h1 className={`text-5xl  font-bold ${isLight ? 'text-gray-800' : 'text-neutral-200'} `}>Contacts</h1>
                        </div>

                        <div className="mt-[300px] flex flex-col items-center">
                            <h1 className="text-red-500 text-4xl font-bold text-center">UNDER CONSTRUCTION!!</h1>
                        </div>
                </div>
            </div>
    </>
    )
}

export default Contacts