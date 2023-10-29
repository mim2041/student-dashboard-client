import { AiOutlineMail, AiOutlineWhatsApp,  } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import PrimaryButton from "../../../components/PrimaryButton";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vpvg8tl', 'template_y6wfnta', form.current, 'RWJW4CP8tg4tD2IYQ')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div style={{ position: "relative", zIndex: 1 }} className="mx-8 lg:mx-24 mb-24">
            <h1 className="font-semibold text-center my-12 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 mb-12"
            style={{ linearGradient: "to right, #51087E, #B24BF3" }}>Contact Me</h1>
            <div className="flex gap-12 flex-col lg:flex-row justify-around">
                <div>
                    <div className="text-white text-center border-2 w-full  p-5 my-8 rounded-lg">
                        <AiOutlineMail className="mx-auto text-2xl"/>
                        <p className="font-bold">Email</p>
                        <p className="font-bold">suraiyamim338@gmail.com</p>
                        <a href="mailto:suraiyamim338@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </div>
                    <div className="text-white text-center border-2  py-5 my-8 rounded-lg">
                        <AiOutlineWhatsApp className="mx-auto text-2xl"/>
                        <p className="font-bold">Whatsapp</p>
                        <p className="font-bold">suraiyamim338@gmail.com</p>
                        <a href="https://www.facebook.com/mim.suraiya?mibextid=ZbWKwL" target="_blank" rel="noreferrer">Send a message</a>
                    </div>
                    <div className="text-white text-center border-2  py-5 rounded-lg">
                        <RiMessengerLine className="mx-auto text-2xl"/>
                        <p className="font-bold">Email</p>
                        <p className="font-bold">suraiyamim338@gmail.com</p>
                        <Link>Send a message</Link>
                    </div>
                </div>
                <div ref={form} onSubmit={sendEmail} className="text-white mt-8">
                    <input type="text" placeholder="Your Name" className="input border-2 input-bordered input-white bg-gray-800 py-8 bg-transparent w-full max-w-2xl" />
                    <input type="email" placeholder="Your Email" className="input border-2 input-bordered input-white bg-gray-800 py-8 bg-transparent w-full max-w-2xl my-8" />
                    <textarea rows={2} className="textarea textarea-secondary max-h-xl border-2 border-white bg-transparent py-8 w-full max-w-2xl" ></textarea>
                    <PrimaryButton></PrimaryButton>            
                </div>
            </div>
        </div>
    );
};

export default Contact;