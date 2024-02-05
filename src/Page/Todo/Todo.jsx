import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect } from 'react';
const Todo = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("add")
      ;
  }, [navigate]);
  return (
    <div >
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
          <p className="text-[22px] font-[800] text-center">Todo</p>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-2'>
        <div className="w-[800px] h-[750px] border-[#FFF] shadow-2xl border-[2px] rounded-[14px] mt-2">

          <div className="mx-24 mt-4">
            <ul className=" flex flex-row justify-between  rounded-[14px] ">
              <NavLink
                className="w-[120px] flex flex-row justify-center  h-[50px] rounded-[20px]"
                to="Add"
                style={({ isActive }) => ({
                  color: isActive ? '#FFF' : '#000',
                  fontSize: isActive ? '16px' : '24px',
                  background: isActive
                    ? 'linear-gradient(91deg, #5ee7df 7.92%, #b490ca 108.2%)'
                    : '',
                })}
              >
                <li className="m-3  font-[800]  rounded-[48px] ">
                  Add
                </li>
              </NavLink>
              <NavLink
                className="w-[120px] flex flex-row justify-center  h-[50px] rounded-[20px]"
                to="list"
                style={({ isActive }) => ({
                  color: isActive ? '#FFF' : '#000',
                  fontSize: isActive ? '16px' : '24px',
                  background: isActive
                    ? 'linear-gradient(91deg, #5ee7df 7.92%, #b490ca 108.2%)'
                    : '',
                })}
              >
                <li className="m-3 font-[800]  rounded-[48px] ">
                  List
                </li>
              </NavLink>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Todo;
