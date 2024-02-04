import { IoIosArrowBack } from 'react-icons/io';
import bot from "../assets/AboutBot.png"
import { NavLink } from 'react-router-dom';
const About = () => {
           return (
                      <div>
                                 <div className="flex w-[100%] h-[40px] justify-between flex-row  border-b-[2px] border-[#00CCCD]  mt-[-4px] relative ">
                                            <div className="flex flex-row cursor-pointer">
                                                       <IoIosArrowBack className="text-[#00CCCD] text-[20px]" />
                                                       <NavLink to="/">

                                                                  <p className="text-[16px] font-[800] text-center">
                                                                             Back
                                                                  </p>
                                                       </NavLink>

                                            </div>
                                            <div className="w-[100%] mt-[-12px] ">
                                                       <p className="text-[22px] font-[800] text-center">About</p>
                                            </div>
                                 </div>
                                 <div className="w-[1200px] h-[680px] rounded-[50px] bg-[#FFF] border-[2px] border-[#FFF] mt-12 shadow-2xl">
                                            <div className=" flex flex-row justify-between pt-16">
                                                       <div className="w-[50%] mx-4">
                                                                  <p className="text-center text-[#000]  font-[500] text-[16px]  lg:text-[20px] px-4 lg:px-6  lg:mt-20 ">
                                                                             AI chatbots are trained on large amounts of data and use ML to
                                                                             intelligently generate a wide range of non-scripted,
                                                                             conversational responses to human text and voice input. Virtual
                                                                             agents are AI bots that can be specifically trained to interact
                                                                             with customers in call centers or contact centers. They can be
                                                                             used to automate repetitive tasks, such as customer service, or to
                                                                             provide a virtual assistant in a customers home. Virtual agents
                                                                             can also be used to provide a more personalized service, such as a
                                                                             virtual counselor or a virtual therapist.
                                                                  </p>
                                                       </div>
                                                       <div className="w-[50%] mx-2 mt-2">
                                                                  <img src={bot} />
                                                       </div>
                                            </div>
                                            <p className="text-[#00CCCD] text-[24px] text-left ml-12 cursor-pointer underline">Any query about boat -></p>
                                 </div>
                      </div>
           );
};

export default About;
