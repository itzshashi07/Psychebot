import { ref, push, set } from 'firebase/database';
import { database } from '../../Firebase/Firebase';
import addTask from '../../assets/AddTask.png';
import { useReducer, useState,useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthContext/AuthContext';
const initial = {
           title: '',
           detail: '',
           date: '',
};
const reducer = (state, action) => {
           if (action.type === 'title') {
                      return {
                                 ...state,
                                 title: action.payload,
                      };
           } else if (action.type === 'details') {
                      return {
                                 ...state,
                                 detail: action.payload,
                      };
           } else if (action.type === 'date') {
                      return {
                                 ...state,
                                 date: action.payload,
                      };
           } else {
                      return state;
           }
};

const AddTodo = () => {
           const {id}=useContext(AuthContext)
           const [success, setSuccess] = useState(false)
           const [err, setErr] = useState(false);
           const [state, dispatch] = useReducer(reducer, initial);
           const formdata = (e, data) => {
                      dispatch({ type: data, payload: e.target.value });
           };
           const AddData = async () => {
                      try {
                                 const TodoData = ref(database, 'todo/' );
                                 const TodoDataRef = push(TodoData);
                                 await set(TodoDataRef, {
                                            title: state.title,
                                            details: state.detail,
                                            date: state.date
                                 });
                                 setSuccess(true)
                                 toast.success('🦄 success added data', {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "colored",

                                 });
                               
                                 dispatch({ type: 'title', payload: '' });
                                 dispatch({ type: 'details', payload: '' });
                                 dispatch({ type: 'date', payload: '' });
                      } catch (error) {
                                 setErr(true)
                                 toast.error(`Error adding data to Firebase${error}` , {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "colored",
                                           
                                            });
                               
                      }
           };
           const clearData = () => {
                      dispatch({ type: 'title', payload: '' });
                      dispatch({ type: 'details', payload: '' });
                      dispatch({ type: 'date', payload: '' });

           }
           return (
                      <div>
                                 <p className="text-center text-[#000] font-[800] text-[32px] mt-4">
           Add Your Daily Routing
          </p>
                                 <div className=" flex flex-row justify-center">
                                            <img src={addTask} alt="addTask" />
                                 </div>

                                 <div className=" flex flex-row justify-center">
                                            <div>
                                                       <p className="text-[20px]   font-[600]  my-6">
                                                                  <span className="text-[#000] text-left">Task title</span>{' '}
                                                                  <span className="text-[#AE1438]">*</span>
                                                       </p>
                                                       <input
                                                                  className="w-[420px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                                                                  placeholder=" Task Tittle.."
                                                                  onChange={(e) => formdata(e, 'title')}
                                                                  value={state.title}

                                                       />
                                                       <p className="text-[20px]   font-[600]  my-2">
                                                                  <span className="text-[#000] text-left">Task Details</span>{' '}
                                                                  <span className="text-[#AE1438]">*</span>
                                                       </p>
                                                       <input
                                                                  className="w-[420px] h-[100px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                                                                  placeholder=" Task Details.."
                                                                  onChange={(e) => formdata(e, 'details')}
                                                                  value={state.detail}
                                                       />
                                                       <p className="text-[20px]   font-[600]  my-2">
                                                                  <span className="text-[#000] text-left">Date</span>{' '}
                                                                  <span className="text-[#AE1438]">*</span>
                                                       </p>
                                                       <input
                                                                  className="w-[420px] h-[60px] rounded-[14px]  border-[1px] border-[#00CCCD] placeholder:text-center"
                                                                  type="date"
                                                                  value={state.date}
                                                                  onChange={(e) => formdata(e, 'date')}
                                                       />
                                                       <div className="mt-4">
                                                                  <button
                                                                             onClick={AddData}
                                                                             className="bg-gradient-to-r  cursor-pointer from-cyan-500 to-blue-500 w-[200px] h-[60px] rounded-[14px] text-[20px]  mx-4  font-[600] border-[1px] border-[#00CCCD]  mt-6"
                                                                  >
                                                                             Add
                                                                  </button>
                                                                  <button
                                                                             onClick={clearData}
                                                                             className="bg-gradient-to-r  cursor-pointer from-[#ee2439] to-[#ee2439] w-[200px] h-[60px] rounded-[14px] text-[20px]  mx-4 font-[600] border-[1px] border-[#ee2439]  mt-6"
                                                                  >
                                                                             Clear
                                                                  </button>
                                                       </div>

                                            </div>
                                 </div>
                                 {success &&
                                            <ToastContainer
                                                       position="top-right"
                                                       autoClose={5000}
                                                       hideProgressBar={false}
                                                       newestOnTop={false}
                                                       closeOnClick
                                                       rtl={false}
                                                       pauseOnFocusLoss
                                                       draggable
                                                       pauseOnHover
                                                       theme="colored"

                                            />
                                 }
                                 {
                                            err&&<ToastContainer
                                            position="top-right"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="colored"
                                           
                                            />
                                 }
                      </div>
           );
};

export default AddTodo;
