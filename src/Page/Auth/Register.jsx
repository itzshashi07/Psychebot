
import login from '../../assets/login.png';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useContext,useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  let ContextData = useContext(AuthContext)
  
  const sendEmail = async (data) => {
    setError('')
    try {
      await ContextData.createUser(data.Email, data.Password)
      navigate('/')
      localStorage.setItem("FullName", data.fullName)
      localStorage.setItem("CreatedOn", new Date())
      localStorage.setItem("isLogin", true)
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }

  };
  return (
    <div className="flex flex-row justify-center">
      <div>
        <div className="flex flex-row justify-center  ">
          <img src={login} alt="lohin" className="w-[100px] h-[100px]" />
        </div>
        <form
            onSubmit={handleSubmit((data) => sendEmail(data))}
            className=" relative "
            autoComplete="off"
          >
        <p className="text-[20px]   font-[600]  my-2">
          <span className="text-[#000] text-left">FullName</span>{' '}
          <span className="text-[#AE1438]">*</span>
        </p>
        <input
          {...register("fullName", {
            required: true,
            maxLength: 30,
            minLength: 5,
            pattern: /^[a-zA-Z ]*$/
          })}
          type="text"
          id="fullName"
          name="fullName"
          className="w-[400px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
          placeholder=" Full Name.."
        />
        {errors?.fullName?.type === "required" && (
          <p className="error">This field is required</p>
        )}
        {errors?.fullName?.type === "maxLength" && (
          <p className="error">
            fullName cannot exceed 30 characters
          </p>
        )}
        {errors?.fullName?.type === "minLength" && (
          <p className="error ">
            fullName must be 5 characters
          </p>
        )}
        {errors?.fullName?.type === "pattern" && (
          <p className="error ">Alphabetical characters only</p>
        )}
        <p className="text-[20px]   font-[600]  my-2">
          <span className="text-[#000] text-left">Email</span>{' '}
          <span className="text-[#AE1438]">*</span>
        </p>
        <input
          {...register("Email", {
            required: true,
            maxLength: 30,
            minLength: 5,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          type="text"
          id="Email"
          name="Email"
          className="w-[400px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
          placeholder=" Email.."
        />
        {errors?.Email?.type === "required" && (
          <p className="error">This field is required</p>
        )}
        {errors?.Email?.type === "maxLength" && (
          <p className="error">
            Email cannot exceed 30 characters
          </p>
        )}
        {errors?.Email?.type === "minLength" && (
          <p className="error">
            Email must be 5 characters
          </p>
        )}
        {errors?.Email?.type === "pattern" && (
          <p className="error">please write correct email address</p>
        )}

        <p className="text-[20px]   font-[600]  my-2">
          <span className="text-[#000] text-left">Password</span>{' '}
          <span className="text-[#AE1438]">*</span>
        </p>
          <input
            {...register("Password", {
              required: true,
              maxLength: 16,
              minLength: 6,
              pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            })}
            type="password"
            id="lastName"

            name="Password"
          className="w-[400px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
          placeholder=" Password.."
        />
        {errors?.Password?.type === "required" && (
          <p className="error">  please write the  Strong password .</p>
        )}
        {errors?.Password?.type === "minLength" && (
          <p className="error">
            Password must be 6 characters
          </p>
        )}
        {errors?.Password?.type === "maxLength" && (
          <p className="error">
            Password cannot exceed 16 characters
          </p>
        )}
        {errors?.Password?.type === "pattern" && (
          <p className="error">password should contain at least one number and one special character</p>
        )}
        <div >
          <input type="submit" className="bg-gradient-to-r  cursor-pointer from-cyan-500 to-blue-500 w-[400px] h-[60px] rounded-[14px] text-[20px]   font-[600] border-[1px] border-[#00CCCD]  mt-6" value="Register" />
          {error && <p className="error">
            {error}</p>}
          </div>
          </form>
      </div>
    </div>
  )
}

export default Register