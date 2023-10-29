import DownloadBtn from "../../../components/DownloadBtn";

const Result = () => {
    return (
        <div className="relative py-12 lg:py-20 mx-8 lg:mx-24">
            <DownloadBtn></DownloadBtn>
            <div className="flex items-center justify-center">
                <div className="">
                    <img className="w-32 lg:mb-12" src="https://i.ibb.co/x8nZd12/observerbd-com-1552834507.jpg" alt="" />
                </div>
                <div className="text-center font-bold">
                    <h1 className="text-2xl lg:text-4xl text-yellow-600">JAHANGIRNAGAR UNIVERSITY</h1>
                    <p className="text-xl text-yellow-600">Savar Dhaka Bangladesh</p>
                    <h1 className="text-2xl lg:text-4xl text-yellow-600">GRADE SHEET</h1>
                    {/* make it dynamic */}
                    <h3 className="text-xl lg:text-2xl my-2">Institute of Information Technology</h3>
                </div>
            </div>
            <div className="my-5 flex justify-between flex-col gap-10 lg:flex-row">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Student's Name</td>
                                <td className="border border-black pr-8 pl-1 font-bold">Mim Khatun</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Father's Name</td>
                                <td className="border border-black pr-8 pl-1">Kohenoor Begum</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Mother's Name</td>
                                <td className="border border-black pr-8 pl-1">Mim Khatun</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Registration No</td>
                                    <td className="border border-black pr-8 pl-1">20203652412</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Session</td>
                                <td className="border border-black pr-8 pl-1 font-bold">2019-2020</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Class Roll</td>
                                <td className="border border-black pr-8 pl-1">2041</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Exam. Roll No</td>
                                <td className="border border-black pr-8 pl-1 font-bold">201762</td>
                            </tr>
                            <tr>
                                <td className="border border-black pr-8 pl-1">Name of Hall</td>
                                <td className="border border-black pr-8 pl-1">Begum Khaleda Zia Hall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="text-center">
                        <thead>
                            <tr>
                                <td colSpan={3} className="border border-black">Grading System</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 py-1 ">Range of Marks</td>
                                <td className="border border-black px-5 py-1">Letter Grade</td>
                                <td className="border border-black px-5 py-1">Grade Point</td>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td className="border border-black px-5 text-sm">80% and above</td>
                                    <td className="border border-black px-5 text-sm">A+</td>
                                    <td className="border border-black px-5 text-sm">4.00</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">75% to less than 80%</td>
                                    <td className="border border-black px-5 text-sm">A</td>
                                    <td className="border border-black px-5 text-sm">3.75</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">70% to less than 75%</td>
                                    <td className="border border-black px-5 text-sm">A-</td>
                                    <td className="border border-black px-5 text-sm">3.50</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">65% to less than 70%</td>
                                    <td className="border border-black px-5 text-sm">B+</td>
                                    <td className="border border-black px-5 text-sm">3.25</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">60% to less than 65%</td>
                                    <td className="border border-black px-5 text-sm">B</td>
                                    <td className="border border-black px-5 text-sm">3.00</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">55% to less than 60%</td>
                                    <td className="border border-black px-5 text-sm">B-</td>
                                    <td className="border border-black px-5 text-sm">2.75</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">50% to less than 55%</td>
                                    <td className="border border-black px-5 text-sm">C+</td>
                                    <td className="border border-black px-5 text-sm">2.50</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">45% to less than 50%</td>
                                    <td className="border border-black px-5 text-sm">C</td>
                                    <td className="border border-black px-5 text-sm">2.25</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">40% to less than 45%</td>
                                    <td className="border border-black px-5 text-sm">D</td>
                                    <td className="border border-black px-5 text-sm">2.00</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-5 text-sm">Less than 40%</td>
                                    <td className="border border-black px-5 text-sm">F</td>
                                    <td className="border border-black px-5 text-sm">0.00</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="my-3 text-xl font-bold">B.Sc. (Honours) 2nd Part, 1st Semester Examination, 2021</h2>
                <div className="w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="text-lg font-semibold text-center">
                                <td className="my-2 px-3 border border-black">Course No.</td>
                                <td className="my-2 px-3 border border-black">Course Title</td>
                                <td className="my-2 px-3 border border-black">Letter Grade</td>
                                <td className="my-2 px-3 border border-black">Grade Point</td>
                                <td className="my-2 px-3 border border-black">GPA</td>
                                <td className="my-2 px-3 border border-black">Remarks</td>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                                <td rowSpan={9} className="border border-black px-5 text-sm">4.00</td>
                                <td rowSpan={9} className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                            <tr>
                                <td className="border border-black px-5 text-sm">ICT 3201</td>
                                <td className="border border-black px-5 text-sm">Software Engineering</td>
                                <td className="border border-black px-5 text-sm">3</td>
                                <td className="border border-black px-5 text-sm">A+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-between mt-20 gap-5">
                <div className="flex justify-around w-1/2">
                    <div>
                        <img className="w-20 mx-auto h-8" src="https://i.ibb.co/9pfnVNw/signature.webp" alt="" />
                        <p className="border-t-2 px-4 border-black">Prepared By</p>
                    </div>
                    <div>
                        <img className="w-20 mx-auto h-8" src="https://i.ibb.co/9pfnVNw/signature.webp" alt="" />
                        <p className="border-t-2 px-4 border-black">Compared By</p>
                    </div>
                </div>
                <div>
                    <img className="w-20 mx-auto h-8" src="https://i.ibb.co/9pfnVNw/signature.webp" alt="" />
                    <p className="border-t-2 px-4 border-black">Deputy Controller of Examinations</p>
                </div>
            </div>
        </div>
    );
};

export default Result;