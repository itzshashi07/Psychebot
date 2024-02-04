import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import ProfileUpload from './ProfileUpload';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const Profile = () => {
           const [error, setError] = useState('');
           const navigate = useNavigate();
           let ContextData = useContext(AuthContext);
           const logoutUser = async () => {
                      try {
                                 await ContextData.logout();
                                 navigate('/');
                                 localStorage.clear();
                      } catch (error) {
                                 setError(error);
                      }
           };
           let getTocken = localStorage.getItem('user');
           let fullName = localStorage.getItem('FullName');
           const decoded = jwtDecode(getTocken);
           const now = new Date();
           const hours = now.getHours();
           const minutes = now.getMinutes();
           const amOrPm = hours >= 12 ? 'PM' : 'AM';
           const hours12 = hours % 12 || 12;
           const currentTime = `${hours12}:${minutes} ${amOrPm}`;

           const options = { weekday: 'long', day: 'numeric', month: 'short' };
           const date = new Date();
           const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
           return (
                      <div className="flex flex-row justify-center">
                                 <div>
                                            <div className="flex w-[100%] h-[40px] justify-between flex-row  border-b-[2px] border-[#00CCCD]  mt-[-4px] relative ">
                                                       <div className="flex flex-row cursor-pointer">
                                                                  <IoIosArrowBack className="text-[#00CCCD] text-[20px]" />
                                                                  <NavLink to="/">
                                                                             <p className="text-[16px] font-[800] text-center">Back</p>
                                                                  </NavLink>
                                                       </div>
                                                       <div className="w-[100%] mt-[-12px] ">
                                                                  <p className="text-[22px] font-[800] text-center">Profile</p>
                                                       </div>
                                            </div>
                                            <div className="w-[800px] h-[480px] rounded-[50px] bg-[#FFF] border-[2px] border-[#FFF] mt-12  mx-4 shadow-2xl">
                                                       <div className="flex flex-row justify-center">
                                                                  <ProfileUpload />
                                                       </div>

                                                       <p className="text-[22px] font-[800] text-center my-2">
                                                                  Full Name:{' '}
                                                                  <span className="mx-4">
                                                                             {fullName && fullName ? fullName : 'TestName'}
                                                                  </span>
                                                       </p>
                                                       <p className="text-[22px] font-[800] text-center my-2">
                                                                  Email:{' '}
                                                                  <span className="mx-4">
                                                                             {' '}
                                                                             {decoded && decoded.email ? decoded.email : 'trest1234@gmail.com'}
                                                                  </span>
                                                       </p>
                                                       <p className="text-[22px] font-[800] text-center mt-2">
                                                                  Time On:<span className="mx-4">{currentTime}</span>
                                                       </p>
                                                       <p className="text-[22px] font-[800] text-center mt-2">
                                                                  Login On:<span className="mx-4">{formattedDate}</span>
                                                       </p>
                                                       <button
                                                                  onClick={logoutUser}
                                                                  className=" w-[450px] border-[2px] mx-4 mt-12  text-[16px] text-[#000] h-[40px]  rounded-[48px] bg-[#00CCCD] border-[#00CCCD]"
                                                       >
                                                                  LogOut
                                                       </button>
                                                       {error && <p className="error">{error}</p>}
                                            </div>
                                 </div>
                      </div>
           );
};

export default Profile;
