import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { database } from '../../Firebase/Firebase';
import { ref, update } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
const ReactPopup = ({ openPopup, close, selectedItem }) => {

    const [success, setSuccess] = useState(false)
    const [err, setErr] = useState(false);
    const [state, dispatch] = useReducer(reducer, initial);
    const formdata = (e, data) => {
        dispatch({ type: data, payload: e.target.value });
    };
    const updateData = () => {
        const dataRef = ref(database, 'todo/' + selectedItem);
        let newData = {
            title: state.title,
            details: state.detail,
            date: state.date
        }
        update(dataRef, newData)
            .then(() => {

                setSuccess(true)
                toast.success('🦄 Data updated successfully', {
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

            })
            .catch((error) => {
                setErr(true)
                toast.error(`Error while updating data to Firebase${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                });
            });
    };
    const clearData = () => {
        dispatch({ type: 'title', payload: '' });
        dispatch({ type: 'details', payload: '' });
        dispatch({ type: 'date', payload: '' });
    };
    return (
        <Popup open={openPopup} position="right center">
            <div className="flex flex-row justify-end">
                <button
                    onClick={close}
                    className="bg-gradient-to-r  cursor-pointer from-[#ee2439] to-[#ee2439] w-[120px] h-[40px] rounded-[14px] text-[20px]  mx-4 font-[600] border-[1px] border-[#ee2439]  mt-2"
                >
                    close
                </button>
            </div>
            <p className="text-[32px]   text-center font-[600]  mt-2">
                <span className="text-[#000] text-left underline">Update List</span>{' '}

            </p>
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
                    <div className="mt-2">
                        <button
                            onClick={updateData}
                            className="bg-gradient-to-r  cursor-pointer from-cyan-500 to-blue-500 w-[180px] h-[60px] rounded-[14px] text-[20px]  mx-4  font-[600] border-[1px] border-[#00CCCD]  mt-6"
                        >
                            Update
                        </button>
                        <button
                            onClick={clearData}
                            className="bg-gradient-to-r  cursor-pointer from-[#ee2439] to-[#ee2439] w-[180px] h-[60px] rounded-[14px] text-[20px]  mx-4 font-[600] border-[1px] border-[#ee2439]  mt-6"
                        >
                            Clear
                        </button>
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
                    err && <ToastContainer
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
        </Popup>
    );
};
ReactPopup.propTypes = {
    selectedItem: PropTypes.string.isRequired,
    openPopup: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
};
export default ReactPopup;
