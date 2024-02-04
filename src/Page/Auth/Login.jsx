import login from '../../assets/login.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useContext, useState } from 'react';
import {useNavigate} from "react-router-dom"
const Login = () => {
           const {
                      register,
                      handleSubmit,
                      formState: { errors },
           } = useForm();
let navigate=useNavigate()
           const [error, setError] = useState('');
           let ContextData = useContext(AuthContext);
           const sendEmail = async (data) => {
                      setError('');
                      try {
                                 await ContextData.signIn(data.Email, data.Password);
                                 let isLogin = localStorage.getItem('isLogin');
                                 if (isLogin)
                                            navigate("/")
                      } catch (e) {
                                 setError(e.message);
                                 console.log(e.message);
                      }
           };
           return (
                      <div className="flex flex-row justify-center">
                                 <div>
                                            <div className="flex flex-row justify-center  ">
                                                       <img src={login} alt="login" className="w-[100px] h-[100px]" />
                                            </div>
                                            <form onSubmit={handleSubmit((data) => sendEmail(data))} className="  ">
                                                       <p className="text-[20px]   font-[600]  my-6">
                                                                  <span className="text-[#000] text-left">Email</span>{' '}
                                                                  <span className="text-[#AE1438]">*</span>
                                                       </p>
                                                       <input
                                                                  {...register('Email', {
                                                                             required: true,
                                                                             maxLength: 30,
                                                                             minLength: 5,
                                                                             pattern:
                                                                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                  })}
                                                                  type="text"
                                                                  id="Email"
                                                                  name="Email"
                                                                  className="w-[400px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                                                                  placeholder=" Email.."
                                                       />
                                                       {errors?.Email?.type === 'required' && (
                                                                  <p className="error">This field is required</p>
                                                       )}
                                                       {errors?.Email?.type === 'maxLength' && (
                                                                  <p className="error">Email cannot exceed 30 characters</p>
                                                       )}
                                                       {errors?.Email?.type === 'minLength' && (
                                                                  <p className="error">Email must be 5 characters</p>
                                                       )}
                                                       {errors?.Email?.type === 'pattern' && (
                                                                  <p className="error">please write correct email address</p>
                                                       )}
                                                       <p className="text-[20px]   font-[600]  my-6">
                                                                  <span className="text-[#000] text-left">Password</span>{' '}
                                                                  <span className="text-[#AE1438]">*</span>
                                                       </p>
                                                       <input
                                                                  {...register('Password', {
                                                                             required: true,
                                                                             maxLength: 16,
                                                                             minLength: 6,
                                                                             pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                                                  })}
                                                                  type="password"
                                                                  id="Password"
                                                                  name="Password"
                                                                  className="w-[400px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                                                                  placeholder=" Password.."
                                                       />
                                                       {errors?.Password?.type === 'required' && (
                                                                  <p className="error"> please write the Strong password..</p>
                                                       )}
                                                       {errors?.Password?.type === 'minLength' && (
                                                                  <p className="error">Password must be 6 characters</p>
                                                       )}
                                                       {errors?.Password?.type === 'maxLength' && (
                                                                  <p className="error">Password cannot exceed 16 characters</p>
                                                       )}
                                                       {errors?.Password?.type === 'pattern' && (
                                                                  <p className="error">
                                                                             password should contain at least one number and one special
                                                                             character
                                                                  </p>
                                                       )}

                                                       <div className="mt-6">
                                                                  <button className="bg-gradient-to-r  cursor-pointer from-cyan-500 to-blue-500 w-[400px] h-[60px] rounded-[14px] text-[20px]   font-[600] border-[1px] border-[#00CCCD]  mt-8">
                                                                             Login
                                                                  </button>
                                                                  {error && <p className="error">{error}</p>}
                                                                 { ContextData.error&&<p className="error">{ContextData.error}</p>}
                                                       </div>
                                            </form>
                                 </div>
                      </div>
           );
};

export default Login;
