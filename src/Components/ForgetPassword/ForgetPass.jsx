// import React, { useState } from "react";

import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const ForgetPass = () => {
    const { resetPass } = UseAuth()
    const [email, setEmail] = useState('')
    const handleSubmit = () => {
        resetPass(email)
            .then(() => {
            })
    }
    return (
        <div>

            <label className="label">
                <a
                    onClick={() => document.getElementById("my_modal_2").showModal()}
                    className="label-text-alt link link-hover"
                >
                    Forgot password?
                </a>
            </label>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-col">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input className="" type="text" onChange={(e) => setEmail(e.target.value)} />
                        
                    </label>
                    <button className="btn mt-5 bg-sky-400 text-black" onClick={handleSubmit}>submit</button>
                </div>


                <form method="dialog" className="modal-backdrop">
                    <button className="btn btn-sm btn-accent">close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ForgetPass;