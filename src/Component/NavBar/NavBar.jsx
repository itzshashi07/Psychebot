import { Spin as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../assets/profile.png';
const NavBar = () => {
           const [isOpen, setOpen] = useState(false);
           let isLogin = localStorage.getItem('isLogin');

           return (
                      <div>
                                 <div className="flex w-[100%] h-[60px]  flex-row justify-between  relative ">
                                            <img
                                                       src={logo}
                                                       alt="logo"
                                                       className="w-[50px] h-[50px] rounded-[100%] border-[2px] border-[#00CCCD]"
                                            />
                                            <div className="w-[50px] block md:hidden h-[50px] rounded-[100%] bg-gradient-to-r from-[#00CCCD] to-[#a2473f]">
                                                       <Hamburger
                                                                  toggled={isOpen}
                                                                  toggle={setOpen}
                                                                  direction="right"
                                                                  easing="ease-in"
                                                       />
                                            </div>
                                            <ul className="hidden md:flex  text-[20px]  font-[700] flex-row justify-between">
                                                       <li
                                                                  className={
                                                                             isLogin
                                                                                        ? 'px-4 cursor-pointer  hover:text-[#00CCCD]  text-[#000]'
                                                                                        : 'hidden'
                                                                  }
                                                       >
                                                                  <NavLink to="/about"> About</NavLink>
                                                       </li>
                                                       <li
                                                                  className={
                                                                             isLogin
                                                                                        ? 'px-4 cursor-pointer  hover:text-[#00CCCD]  text-[#000]'
                                                                                        : 'hidden'
                                                                  }
                                                       >
                                                                  <a
                                                                             href="https://myblog-two-orcin.vercel.app/"
                                                                             target="_blank"
                                                                             rel="noopener noreferrer"
                                                                  >
                                                                             {' '}
                                                                             Blog
                                                                  </a>
                                                       </li>
                                                       <li
                                                                  className={
                                                                             isLogin
                                                                                        ? 'px-4 cursor-pointer  hover:text-[#00CCCD]  text-[#000]'
                                                                                        : 'hidden'
                                                                  }
                                                       >
                                                                  <NavLink to="/contact"> Contact</NavLink>
                                                       </li>
                                                       <NavLink to="profile">
                                                                  <img
                                                                             src={profile}
                                                                             alt="profile"
                                                                             className={
                                                                                        isLogin ? 'block w-[50px] h-[50px] cursor-pointer' : 'hidden'
                                                                             }
                                                                  />
                                                       </NavLink>
                                                       <NavLink to="auth/login">
                                                                  <button
                                                                             className={
                                                                                        !isLogin
                                                                                                   ? 'px-4 w-[100px] mt-[-8px] text-[#FFF]  h-[60px] text-[16px] bg-gradient-to-r rounded-[48px] from-cyan-500 to-blue-500'
                                                                                                   : 'hidden'
                                                                             }
                                                                  >
                                                                             login
                                                                  </button>
                                                       </NavLink>
                                                       <NavLink to="auth/register">
                                                                  <button
                                                                             className={
                                                                                        !isLogin
                                                                                                   ? 'px-2 w-[100px] mx-4 mt-[-8px] text-[16px] text-[#FFF] h-[60px] bg-gradient-to-r rounded-[48px] from-[#00CCCD] to-[#91170b]'
                                                                                                   : 'hidden'
                                                                             }
                                                                  >
                                                                             Register
                                                                  </button>
                                                       </NavLink>
                                            </ul>
                                            <ul
                                                       className={
                                                                  isOpen
                                                                             ? 'block md:hidden absolute top-[60px]  left-[150px] w-[200px] border-[2px] border-[#00CCCD] h-[400px]    font-[700] '
                                                                             : 'hidden'
                                                       }
                                            >
                                                       <li className="py-4 text-[20px] text-[#000]">About</li>
                                                       <li className="py-4 text-[20px] text-[#000]">Blog</li>
                                                       <li className="py-4 text-[20px] text-[#000]">Contact</li>
                                                       <img
                                                                  src={profile}
                                                                  alt="profile"
                                                                  className={isLogin ? 'block' : 'hidden'}
                                                       />
                                                       <NavLink to="auth/login">
                                                                  <button
                                                                             className={
                                                                                        !isLogin
                                                                                                   ? 'py-4 w-[100px] cursor-pointer my-4 h-[60px] text-[16px] bg-gradient-to-r text-[#FFF] rounded-[48px] from-cyan-500 to-blue-500'
                                                                                                   : 'hidden'
                                                                             }
                                                                  >
                                                                             login
                                                                  </button>
                                                       </NavLink>
                                                       <NavLink to="auth/register">
                                                                  <button
                                                                             className={
                                                                                        !isLogin
                                                                                                   ? 'py-4 w-[100px] cursor-pointer mt-4 h-[60px] bg-gradient-to-r text-[16px] rounded-[48px] text-[#FFF] from-[#00CCCD] to-[#91170b]'
                                                                                                   : 'hidden'
                                                                             }
                                                                  >
                                                                             Register
                                                                  </button>
                                                       </NavLink>
                                            </ul>
                                 </div>
                                 <hr className="w-[100%] border-[1px]  md:border-[2px] border-[#00CCCD]" />
                      </div>
           );
};

NavBar.propTypes = {
           isOpen: PropTypes.bool.isRequired,
           setOpen: PropTypes.func.isRequired,
};

export default NavBar;
