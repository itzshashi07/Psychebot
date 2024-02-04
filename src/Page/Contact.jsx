
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom"
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [success, setSuccess] = useState()
  const sendEmail = () => {

    //let formValue=data
    emailjs
      .sendForm(
        "service_bzcvzb3",
        "template_eejbbvo",
        form.current,
        "SimDyjzFHmcB6ZtGB"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            reset()
            setSuccess(true)
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="flex w-[100%] h-[40px] justify-between flex-row  border-b-[2px] border-[#00CCCD]  mt-[-4px] relative ">
        <NavLink to="/">
          <div className="flex flex-row cursor-pointer">
            <IoIosArrowBack className="text-[#00CCCD] text-[20px] cursor-pointer" />
            <p className="text-[16px] font-[800] text-center cursor-pointer">
              Back
            </p>
          </div>
        </NavLink>
        <div className="w-[100%] mt-[-12px]">
          <p className="text-[22px] font-[800] text-center">contact</p>
        </div>
      </div>
      <div className="w-[1200px] h-[680px] rounded-[50px] bg-[#FFF] border-[2px] border-[#FFF] mt-12 shadow-2xl">
        <p className="text-[32px] text-center">Lets Get Started</p>
        <p className="text-[16px]  text-center">
          Discuss Your Requirements With Our Experts Today!
        </p>
        <div className=" flex flex-row justify-between mt-2">
          <div className="w-[50%] ">
            <div className="flex flex-row justify-center border-r-4 border-[#00CCCD] mx-2 py-4">
              <form onSubmit={handleSubmit((data) => sendEmail(data))}
                className={success === true ? "hidden" : "block"}
                ref={form}>
                <p className="text-[14px]  text-left font-[600]  my-2">
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
                  className="w-[400px] h-[50px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
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
                  <p className="error">
                    fullName must be 5 characters
                  </p>
                )}
                {errors?.fullName?.type === "pattern" && (
                  <p className="error">Alphabetical characters only</p>
                )}
                <p className="text-[14px]   text-left  font-[600]  my-2">
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
                  className="w-[400px] h-[50px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
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
                <p className="text-[14px]  text-left  font-[600]  my-2">
                  <span className="text-[#000] text-left">Phone</span>{' '}
                  <span className="text-[#AE1438]">*</span>
                </p>
                <input
                  {...register("ContactDetail", {
                    required: true,
                    maxLength: 20,
                    minLength: 10,
                    pattern: /\d+/,


                  })}
                  type="text"
                  id="ContactDetail"
                  name="ContactDetail"
                  className="w-[400px] h-[50px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                  placeholder=" Phone.."
                />
                {errors?.ContactDetail?.type === "required" && (
                  <p className="error">This input is number only.</p>
                )}
                {errors?.ContactDetail?.type === "minLength" && (
                  <p className="error">
                    Contact Detail must be 10 characters
                  </p>
                )}
                {errors?.ContactDetail?.type === "maxLength" && (
                  <p className="error">
                    Contact Detail cannot exceed 20 characters
                  </p>
                )}
                {errors?.ContactDetail?.type === "pattern" && (
                  <p className="error">Only digit number are allowed</p>
                )}

                <p className="text-[14px]  text-left  font-[600]  my-2">
                  <span className="text-[#000] text-left">Message</span>{' '}
                  <span className="text-[#AE1438]">*</span>
                </p>
                <input
                  {...register("Describe", {
                    required: true,
                    maxLength: 150,
                    minLength: 10,
                    pattern: /^[a-zA-Z ]*$/
                  })}
                  name="Describe"
                  id="texts"
                  className="w-[400px] h-[100px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                  placeholder=" Message.."
                />
                {errors?.Describe?.type === "required" && (
                  <p className="error">This field is required</p>
                )}
                {errors?.Describe?.type === "maxLength" && (
                  <p className="error">
                    Descriptions cannot exceed 150 characters
                  </p>
                )}
                {errors?.Describe?.type === "minLength" && (
                  <p className="error">
                    Descriptions  must be  10 Words
                  </p>
                )}
                {errors?.Describe?.type === "pattern" && (
                  <p className="error">Alphabetical characters only</p>
                )}
                <div>
                  <button className="bg-gradient-to-r  from-cyan-500 to-blue-500 w-[400px] h-[60px] rounded-[14px] text-[20px]   font-[600] border-[1px] border-[#00CCCD]  mt-4">
                    Send Message
                  </button>
                </div>
              </form>
              <div className={success === true ? "block" : "hidden"}>
                <div className="w-[300px]  h-[300px] lg:w-[400px] lg:h-[400px] border-[2px] mt-4 lg:mt-0 border-[#00CCCD] rounded-[14px] shadow-2xl">
                  <p className="text-center text-cyan-500  font-[600] text-[24px]  my-2">
                    Thank You for Contacting us
                  </p>
                  <p className="text-center text-[#000]  font-[500] text-[16px]  px-4 lg:px-6   ">
                    We will get back to you with your query solution as soon as possible. Meanwhile you can explore website
                  </p>
                  <Link to="/">
                    <button className="m-2 w-[350px] border-[2px] mx-4 mt-8  text-[16px] text-[#000] h-[40px]  rounded-[48px] bg-[#00CCCD] border-[#00CCCD]">
                      Back to home
                    </button>
                  </Link>

                </div>
              </div>

            </div>
          </div>
          <div className="w-[50%] mx-2 mt-2">
            <div className="w-[600px] p-4 h-[300px] bg-[#A1A1AA]  rounded-[20px] border-[2px] border-[#FFF] mt-16">
              <div className=" flex flex-row justify-between mt-4 mx-4">
                <div className=" flex flex-row mt-4">
                  <div className="bg-gradient-to-r flex flex-row justify-center from-cyan-500 to-blue-500 w-[50px] h-[50x] rounded-[100%]">
                    <AiFillMail className="mt-4" />
                  </div>

                  <div>
                    <span className="text-[16px] text-[#000] font-[700]">
                      Email
                    </span>{' '}
                    <br />
                    <span className="ml-8 text-[16px] text-[#000] font-[700]">
                      psychebotai24@gmail.com
                    </span>
                  </div>
                </div>
                <div className=" flex flex-row mt-4">
                  <div className="bg-gradient-to-r flex flex-row justify-center from-cyan-500 to-blue-500 w-[50px] h-[50x] rounded-[100%]">
                    <AiFillPhone className="mt-4" />
                  </div>
                  <div>
                    <span className="text-[16px] text-[#000] font-[700]">
                      Phone
                    </span>{' '}
                    <br />
                    <span className="ml-8 text-[16px] text-[#000] font-[700]">
                      +91-8078633912
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-row justify-between mt-4 mx-4">
                <div className=" flex flex-row mt-4">
                  <div className="bg-gradient-to-r flex flex-row justify-center from-cyan-500 to-blue-500 w-[50px] h-[50x] rounded-[100%]">
                    <ImLocation2 className="mt-4" />
                  </div>

                  <div>
                    <span className="text-[16px] text-[#000] font-[700]">
                      Address
                    </span>{' '}
                    <br />
                    <span className="ml-8 text-[16px] text-[#000] font-[700]">
                      Greater Noida , UP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
