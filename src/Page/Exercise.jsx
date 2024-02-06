import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import exercise from './exercise.json'
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const Exercise = () => {
    const { images } = useContext(AuthContext);
   
    console.log(images)
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
            <div>
                <div className="w-[100%] h-[750px] border-[#FFF] shadow-2xl border-[2px] rounded-[14px] mt-8 overflow-auto ">
                    {exercise && exercise.exercises &&
                        exercise.exercises.map((item, index) => (
                            
                            <div
                                key={index}
                                className="w-[90%] relative rounded-[14px] my-4 ml-12 h-[140px] border-[2px] border-[#00CCCD]"
                            >
                                <p className="text-[#25CCF7] font-[800]">{item.name}</p>
                                <hr className="border-[1px] border-[#00CCCD]" />
                                <div className='flex flex-row justify-between'>
                                
                                        <img className="w-[150px] h-[110px]" src={item.image} alt={item.name} />
                                    
                                    <p className="text-left ml-4 font-[800]">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Exercise;
