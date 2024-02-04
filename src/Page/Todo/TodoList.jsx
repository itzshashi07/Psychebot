import { useEffect, useState,useContext } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { database } from '../../Firebase/Firebase';
import { ref, remove } from 'firebase/database';
import ReactPopup from '../../Component/ReactPopup/ReactPopup';
import { useFinalData } from './useFinalData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthContext/AuthContext';
const TodoList = () => {
   const { memoizedDataArray, fetchData } = useFinalData();

   useEffect(() => {
      fetchData();
   }, [fetchData]);
   const {id}=useContext(AuthContext)
        
   const itemsPerPage = 4;
   const [currentPage, setCurrentPage] = useState(1);
   const [open, setOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
   const [err, setErr] = useState();

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = memoizedDataArray.slice(
      indexOfFirstItem,
      indexOfLastItem,
   );

   const handlePageChange = (page) => {
      setCurrentPage(page);
   };

   const totalPages = Math.ceil(memoizedDataArray.length / itemsPerPage);

   const renderPageNumbers = () => {
      const pageNumbers = [];
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + 4);

      for (let i = startPage; i <= endPage; i++) {
         pageNumbers.push(
            <button
               key={i}
               onClick={() => handlePageChange(i)}
               className={`h-[30px] w-[30px] mx-2 my-2  ${currentPage === i
                  ? 'bg-[#25CCF7] border-[2px]  border-[#25CCF7] rounded-[100%]'
                  : 'bg-white  rounded-[100%]'
                  }`}
            >
               {i}
            </button>,
         );
      }

      return pageNumbers;
   };

   const deleteUser = (dataId) => {
      try {
         const db = database;
         const dataRef = ref(db, 'todo/'+ id + dataId);
         remove(dataRef)
            .then(() => {
               fetchData();
            })
            .catch((error) => {
               setErr(error.message); 
               console.log(error.message)
               toast.error(`Error deleting data from Firebase: ${error.message}`, {
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
      } catch (error) {
         console.error(error);
         setErr(error.message);
         toast.error(`Error deleting data from Firebase: ${error.message}`, {
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
   

   const update = (item) => {
      setSelectedItem(item);
      setOpen(true);
   };

   const close = () => {
      setOpen(false);
   }

   return (
      <div>
         <p className="text-center text-[#000] font-[800] text-[32px] mt-4">
            See Your Daily Routing
         </p>
         <div className="flex flex-row justify-center">
            {
               currentItems && currentItems.length > 0 ?

                  <div>
                     {currentItems &&
                        currentItems.map((item, index) => (
                           <div
                              key={index}
                              className="w-[600px] relative rounded-[14px] my-4 h-[120px] border-[2px] border-[#00CCCD]"
                           >
                              <p className="text-[#25CCF7] font-[800]">{item.title}</p>
                              <hr className=" border-[1px] border-[#00CCCD]" />
                              <p className="text-left ml-4 font-[800]">{`Description : ${item.details}`}</p>
                              <div className="flex flex-row justify-between mx-4 font-[800]">
                                 <p className=" ">{`Created On : ${item.date}`}</p>
                                 <p className=" ">{`Status : Progress`}</p>
                              </div>
                              <div className="flex flex-row justify-end cursor-pointer mt-4">
                                 <FiEdit2
                                    className="text-[#019031]"
                                    onClick={() => update(item.id)}
                                 />
                                 <AiOutlineDelete
                                    className="mx-4 cursor-pointer text-[#AE1438]"
                                    onClick={() => deleteUser(item.id)}
                                 />
                              </div>
                           </div>
                        ))}
                     <div className="flex flex-row justify-center  ">
                        {currentPage > 1 && (
                           <button
                              onClick={() => handlePageChange(currentPage - 1)}
                              className="h-[30px] w-[30px] mx-2 my-2 bg-[#00CCCD] rounded-[100%]"
                           >
                              {'<'}
                           </button>
                        )}

                        {renderPageNumbers()}

                        {currentPage < totalPages && (
                           <button
                              onClick={() => handlePageChange(currentPage + 1)}
                              className="h-[30px]  w-[30px] mx-2 my-2 bg-[#00CCCD] rounded-[100%]"
                           >
                              {'>'}
                           </button>
                        )}
                     </div>
                  </div>
                  : <p className="text-[32px] text-[#cc3300] mt-24">No Task available for You..</p>}
         </div>
         {open && <ReactPopup openPopup={open} selectedItem={selectedItem} close={close} />}
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
   );
};

export default TodoList;
