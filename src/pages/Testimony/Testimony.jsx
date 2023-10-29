import DownloadBtn from "../../components/DownloadBtn";

const Testimony = () => {
    return (
        <div className="py-16 lg:py-20 mx-8 lg:mx-24 relative">
            <DownloadBtn></DownloadBtn>
            <div className="flex justify-center">
                <div className="">
                    <img className="w-32 " src="https://i.ibb.co/x8nZd12/observerbd-com-1552834507.jpg" alt="" />
                </div>
                <div className="">
                    <h1 className="text-2xl">Institute of Information Technology (IIT)</h1>
                    <h1 className="text-xl ">Jahangirnagar University</h1>
                    <p className="text-lg">Savar Dhaka Bangladesh</p>
                </div>
            </div>
            <hr className="mt-6 mb-8 border-black"/>
            <div className="lg:mx-20">
                <div className=" text-center">
                <h1 className="text-3xl font-bold mb-16">TO WHOM IT MAY CONCERN</h1>
                <p className="text-justify">This is to ceritfy that Mim Khatu, S/O Fazlul Haque and Kohenoor Begum is is a 3rd year 1st semester student (Roll # 2041) of B. Sc. (Hons.) in Information & Communication Technology (ICT) in this institute. He has started this program in the session 2018-2019.</p>
                <br />
                <p className="text-justify">He is a hardworking student and bears a good moral character. To the best of my knowledge, he is not involved in any activity which is subversive to the state or of discipline.</p>
                <br />
                <p className="text-justify mb-20">I wish him every success in life.</p>
                </div>
                <div className="">
                    <img className="w-20 h-8" src="https://i.ibb.co/9pfnVNw/signature.webp" alt="" />
                    <p className="font-bold">M Shamim Kaiser, PhD</p>
                    <p>Professor and Director</p>
                    <p className=" font-bold text-xl mt-2">Director</p>
                    <p>Institute of Information Technology</p>
                    <p>Jahangirnagar University</p>
                    <p>Savar, Dhaka-1342</p>
                </div>
            </div>
        </div>
    );
};

export default Testimony;