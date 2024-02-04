import { Link } from 'react-router-dom';
const Overview = () => {
        let isLogin=localStorage.getItem("isLogin")
        return (
                <div className="mt-8">
                        <p className="text-center text-cyan-500  font-[600] text-[32px] underline my-4">
                                Overview
                        </p>
                        <div className="flex flex-row justify-center">
                                <div>
                                        <div className="flex flex-col lg:flex-row justify-between">
                                                <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border-[2px] border-[#00CCCD] rounded-[14px] shadow-2xl">
                                                        <p className="text-center text-cyan-500  font-[600] text-[32px]  my-2">
                                                                85% Feel better after their first convo
                                                        </p>
                                                        <p className="text-center text-[#000]  font-[500] text-[16px]  px-4 lg:px-6   ">
                                                                {/* You should reduce the dose of Loripam 2mg Tablet gradually. */}
                                                        </p>
                                                        <div className="  flex flex-wrap mx-2 my-4">
                                                                <button className="m-2 w-[150px] border-[2px] bg-[#A8A29E] shadow-md border-[#A8A29E] mt-[-8px] text-[#000] hover:bg-[#00CCCD] hover:border-[#00CCCD]  h-[40px] text-[16px] rounded-[48px]">
                                                                        Anxiety
                                                                </button>
                                                                <button className=" m-2 w-[150px] border-[2px] bg-[#A8A29E] border-[#A8A29E] hover:bg-[#00CCCD] hover:border-[#00CCCD] mx-4 mt-[-8px] text-[16px] text-[#000] h-[40px]  rounded-[48px] ">
                                                                        Stress
                                                                </button>
                                                                <button className=" m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E] text-[#000] hover:bg-[#00CCCD] hover:border-[#00CCCD] h-[40px] text-[16px] rounded-[48px]">
                                                                        Depression
                                                                </button>
                                                                <button className="  m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E] mx-4  text-[16px] hover:bg-[#00CCCD] hover:border-[#00CCCD] text-[#000] h-[40px]  rounded-[48px] ">
                                                                        Emotional
                                                                </button>
                                                                <button className=" m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E] text-[#000]  h-[40px] text-[16px] rounded-[48px] hover:bg-[#00CCCD] hover:border-[#00CCCD]">
                                                                        Work burnout
                                                                </button>
                                                                <button className="m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E] mx-4  text-[16px] text-[#000] h-[40px]  rounded-[48px] hover:bg-[#00CCCD] hover:border-[#00CCCD]">
                                                                        Low Confidence
                                                                </button>
                                                                <button className=" m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E]  text-[#000]  h-[40px] text-[16px] rounded-[48px] hover:bg-[#00CCCD] hover:border-[#00CCCD]">
                                                                        Relationship
                                                                </button>
                                                                <button className="m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E] mx-4  text-[16px] text-[#000] h-[40px]  rounded-[48px] hover:bg-[#00CCCD] hover:border-[#00CCCD]">
                                                                        Neg. thoughts
                                                                </button>
                                                                {/* <button className="m-2 w-[150px] border-[2px] border-[#A8A29E] bg-[#A8A29E] mx-4  text-[16px] text-[#000] h-[40px]  rounded-[48px] hover:bg-[#00CCCD] hover:border-[#00CCCD]">
                                                                                                   
                                                                                        </button> */}
                                                        </div>
                                                </div>
                                                <div className="w-[300px]  h-[300px] lg:w-[400px] lg:h-[400px] border-[2px] mt-4 lg:mt-0 lg:ml-2 border-[#00CCCD] rounded-[14px] shadow-2xl">
                                                        <p className="text-center text-cyan-500  font-[600] text-[32px]  my-2">
                                                                Availability 24X7
                                                        </p>
                                                        <p className="text-center text-[#000]  font-[500] text-[16px]  px-4 lg:px-6   ">
                                                                No appointment or waiting room . Instant replies even on
                                                                weekend.
                                                        </p>
                                                        <Link to={isLogin&&isLogin?"/contact":"auth/login"}>
                                                                <button className="m-2 w-[350px] border-[2px] mx-4 mt-28  text-[16px] text-[#000] h-[40px]  rounded-[48px] bg-[#00CCCD] border-[#c1c4c4]">
                                                                        Query here
                                                                </button>
                                                        </Link>
                                                </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row justify-between mt-2">
                                                <div className="w-[300px]  h-[300px] lg:w-[400px] lg:h-[400px] border-[2px] mt-4 lg:mt-0 border-[#00CCCD] rounded-[14px] shadow-2xl">
                                                        <p className="text-center text-cyan-500  font-[600] text-[32px]  my-2">
                                                                No Stigma . Completely Anonymous
                                                        </p>
                                                        <p className="text-center text-[#000]  font-[500] text-[16px]  px-4 lg:px-6   ">
                                                                When talking to AI , People are not afraid of being judged and
                                                                address their problem earlier .
                                                        </p>
                                                        <Link to={isLogin&&isLogin?"/about":"auth/login"}>
                                                        <button className="m-2 w-[350px] border-[2px] mx-4 mt-8  text-[16px] text-[#000] h-[40px]  rounded-[48px] bg-[#00CCCD] border-[#00CCCD]">
                                                                Know more
                                                        </button>
                                                        </Link>
                                                </div>
                                                <div className="w-[300px]   h-[300px] lg:w-[400px] lg:h-[400px] border-[2px] mt-4 lg:mt-0 lg:ml-2  border-[#00CCCD] rounded-[14px] shadow-2xl">
                                                        <p className="text-center text-cyan-500  font-[600] text-[32px]  my-2">
                                                                Safety
                                                        </p>
                                                        <ol className="text-center list-decimal text-[#000]  font-[800] text-[16px]  mx-12   ">
                                                                <li>Privacy</li>
                                                                <li>Privacy</li>
                                                                <li>Security</li>
                                                                <li>Accuracy</li>
                                                                <li>Transparency</li>
                                                                <li>Accessibility</li>
                                                                <li>User Support</li>
                                                        </ol>
                                                        <a
                                                                href="https://myblog-two-orcin.vercel.app/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                        >
                                                                <button className="m-2 w-[350px] border-[2px] mx-4 mt-20  text-[16px] text-[#000] h-[40px]  rounded-[48px] bg-[#00CCCD] border-[#00CCCD]">
                                                                        Read More ...
                                                                </button>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Overview;
