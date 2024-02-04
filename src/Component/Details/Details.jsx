import { Link } from "react-router-dom";

const Details = () => {
           let isLogin = localStorage.getItem('isLogin');

           return (
                      <div className="flex flex-row justify-center">
                                 <div className="w-[600px] h-[500px] border-[#00CCCD] shadow-2xl border-[2px] rounded-[14px] mt-8">
                                            <p className="text-center text-cyan-500  font-[600] text-[32px] underline">
                                                       Psychebot AI
                                            </p>
                                            <p className="text-center text-[#000]  font-[500] text-[16px] lg:text-[20px] px-4 lg:px-6 mt-2 lg:mt-8 ">
                                                       Psychebot provide mental health support to users. It includes an AI
                                                       bot feature that can listen, understand, and provide personalized
                                                       guidance to help users navigate life’s challenges. The app is equipped
                                                       with features that can help users with mental health support,
                                                       relationship advice, family counseling, career and personal
                                                       development, and more. Features: AI Bot Mental Health Support
                                                       Relationship Advice Family Counseling Career and Personal Development
                                            </p>
                                            <Link to="auth/login">
                                            <button
                                                       className={
                                                                  !isLogin
                                                                             ? 'py-4 w-[200px] lg:w-[400px]  lg:mt-6 h-[60px] bg-gradient-to-r text-[16px] rounded-[48px] text-[#FFF] bg from-cyan-500 to-blue-500'
                                                                             : 'hidden'
                                                       }
                                            >
                                                       login
                                                       </button>
                                                       </Link>
                                 </div>
                      </div>
           );
};

export default Details;
