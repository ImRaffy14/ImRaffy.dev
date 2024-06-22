import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import vectorContact from "./assets/vector.png"


function Contacts ({isLight}){

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "fdf7a4bb-472c-444a-8351-721e4b8a1a5d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return(
        <>
            <div className={`h-vh-75 w-full  ${isLight ? `bg-gradient-to-b from-slate-200 to-gray-300`:`bg-gradient-to-b from-neutral-800 to-gray-800`} text-neutral-200`}>
                <div className="max-w-screen-xl mx-auto items-center lg:items-start justify-center px-4">
                    <div className="flex flex-col justify-center items-center lg:items-start mx-5 font-secularOne">

                        <div className="flex flex-col justify-center items-center h-[670px] mt-[150px]">

                            <p className={`text-center text-xl sm:text-2xl ${isLight ? 'text-gray-800' : 'text-neutral-200'}`}>I'm open to part-time positions and new opportunities. If you have any questions or just want to say hello, feel free to reach out. I'll do my best to respond promptly!</p>
                            <button className={`btn mt-20 text-lg ${isLight ? 'btn-neutral' : ''}`} onClick={()=>document.getElementById('email').showModal()}>Say Hi! <a className="text-2xl"><IoIosSend /></a></button>
                            <img src={vectorContact} className="mt-5 w-[600px] mr-0 sm:mr-20"/>

                            

                        {/* <form onSubmit={onSubmit}>

                            <input type="text" name="name" required/>
                            <input type="email" name="email" required/>
                            <textarea name="message" required></textarea>

                            <button type="submit">Submit Form</button>

                        </form>
                        <span>{result}</span>

                        <input type="hidden" name="access_key" value="fdf7a4bb-472c-444a-8351-721e4b8a1a5d" /> */}

                        </div>
                    </div>
                </div>
            </div>
            
            {/** MODAL FOR EMAIL */}
            <dialog id="email" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">SEND A MESSAGE</h3>
                    <form onSubmit={onSubmit}>
                        <label className="input input-bordered flex items-center gap-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" className="grow" placeholder="Email" name="email" required/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name" name="name" required/>
                        </label>
                        <textarea className="textarea textarea-bordered w-full mt-3" placeholder="Message" name="message"></textarea>
                        <input type="hidden" name="access_key" value="fdf7a4bb-472c-444a-8351-721e4b8a1a5d" required/>

                        <div className="flex">
                            <button type="submit" className="btn btn-active btn-neutral w-[100px] mt-3">Submit</button>
                            <span className="ml-5 mt-6 font-bold">{result}</span>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
    </>
    )
}

export default Contacts