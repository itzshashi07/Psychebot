import { Outlet, NavLink, } from 'react-router-dom';
//import { useEffect } from 'react';

const Auth = () => {
           //let navigate = useNavigate();

           //   useEffect(() => {

           //     ;
           //   }, [navigate]);

           return (
                      <div className="flex flex-row justify-center">
                                 <div className="w-[800px] h-[700px] border-[#FFF] shadow-2xl border-[2px] rounded-[14px] mt-8">
                                            <p className="text-center text-[#000] font-[800] text-[32px] mt-4">
                                                       Welcome to Psychebot AI
                                            </p>
                                            <div className="flex flex-row justify-center">
                                                       <ul className=" flex flex-row justify-center  rounded-[14px] ">
                                                                  <NavLink
                                                                             className="w-[200px] flex flex-row justify-center pt-4 h-[80px] rounded-[20px]"
                                                                             to="login"
                                                                             style={({ isActive }) => ({
                                                                                        color: isActive ? '#FFF' : '',
                                                                                        background: isActive
                                                                                                   ? 'linear-gradient(91deg, #00CCCD 7.92%, #E80505 108.2%)'
                                                                                                   : '',
                                                                             })}
                                                                  >
                                                                             <li className="m-4 text-[#000] font-[800] text-[16px] rounded-[48px] ">
                                                                                        Login
                                                                             </li>
                                                                  </NavLink>
                                                                  <NavLink
                                                                             className="w-[200px] flex flex-row justify-center pt-4 h-[80px] rounded-[20px]"
                                                                             to="register"
                                                                             style={({ isActive }) => ({
                                                                                        color: isActive ? '#FFF' : '',
                                                                                        background: isActive
                                                                                                   ? 'linear-gradient(91deg, #00CCCD 7.92%, #E80505 108.2%)'
                                                                                                   : '',
                                                                             })}
                                                                  >
                                                                             <li className="m-4 text-[#000] font-[800] text-[16px] rounded-[48px] ">
                                                                                        Register
                                                                             </li>
                                                                  </NavLink>
                                                       </ul>
                                                      
                                            </div>
                                            <Outlet />
                                 </div>
                      </div>
           );
};

export default Auth;
