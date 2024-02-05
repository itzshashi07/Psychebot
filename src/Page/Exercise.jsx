import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Exercise = () => {


           return (
                      <div>
                                 <div className="flex w-[100%] h-[40px] justify-between flex-row  border-b-[2px] border-[#00CCCD]  mt-[-4px] relative ">
                                            <div className="flex flex-row cursor-pointer">
                                                       <IoIosArrowBack className="text-[#00CCCD] text-[20px]" />
                                                       <Link to="/">
                                                                  <p className="text-[16px] font-[800] text-center">Back</p>
                                                       </Link>
                                            </div>
                                            <div className="w-[100%] mt-[-12px] ">
                                                       <p className="text-[22px] font-[800] text-center">Exercise</p>
                                            </div>
                                 </div>
                      </div>
                      
           );
};

export default Exercise;
