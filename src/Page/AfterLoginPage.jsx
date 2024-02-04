import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import Tools from '../assets/Tools.png';
import meditation from '../assets/Meditation.png';
import Exercise from '../assets/Exercise.png';
import todo from '../assets/TodoList.png';
import game from '../assets/games.png';
import music from '../assets/music.png';
const AfterLoginPage = () => {
           let fullName = localStorage.getItem('FullName');
           return (
                      <div>
                                 <div>
                                            <p className=" text-[#000]  text-left mt-6 font-[600] text-[32px] ">
                                                       Hi{' '}
                                                       <ReactTyped
                                                                  className="text-cyan-500  text-left mt-6 font-[600] text-[32px] "
                                                                  strings={[fullName ? fullName : 'Champ']}
                                                                  typeSpeed={120}
                                                                  backSpeed={140}
                                                                  loop
                                                       />{' '}
                                                       ,
                                            </p>
                                            <p className="botText  [text-shadow:_4px_4px_#30cfd0]">
                                                       {' '}
                                                       Welcome to{' '}
                                                       <span className=" [text-shadow:_4px_4px_#0ABDE3]">Psychebot AI</span>
                                            </p>
                                            <p className="text-center  font-[800] text-[24px] lg:text-[32px] px-4 lg:px-6 mt-2 lg:mt-8 text-animate">
                                                       Going Through Tough time ?
                                            </p>
                                            <Link to="/Chat">
                                                       <button
                                                                  className={
                                                                             'w-[200px] lg:w-[400px]  lg:mt-6 h-[70px] bg-gradient-to-r text-[32px] py-2 rounded-[48px] text-[#FFF] bg from-cyan-500 to-blue-500'
                                                                  }
                                                       >
                                                                  Lets Chat
                                                       </button>
                                            </Link>

                                            <div className="flex flex-row justify-between mt-4">
                                                       <Link to="tool">
                                                       <div className="w-[200px] h-[200px] border-[2px]  bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] border-[#0ABDE3] rounded-[10px] shadow-2xl shadow-[#0ABDE3]">
                                                                  <div className="flex flex-row justify-center mt-6">
                                                                             <img src={Tools} alt="Tools" className="w-[80px] h-[80px]" />
                                                                  </div>
                                                                  <p className="cardText">Tools</p>
                                                       </div>
                                                       </Link>
                                                       <Link to="todo">
                                                       <div className="w-[200px] h-[200px] border-[2px]  bg-gradient-to-r from-[#5dcfcb] to-[#fed6e3] border-[#0ABDE3] rounded-[10px] shadow-2xl shadow-[#0ABDE3]">
                                                                  <div className="flex flex-row justify-center mt-6">
                                                                             <img src={todo} alt="Tools" className="w-[80px] h-[80px]" />
                                                                  </div>
                                                                  <p className="cardText">Todo </p>
                                                       </div>
                                                       </Link>
                                                       <div className="w-[200px] h-[200px] border-[2px] bg-gradient-to-r from-[#fff1eb] to-[#328cb7] border-[#0ABDE3] rounded-[10px] shadow-2xl shadow-[#0ABDE3]">
                                                                  <div className="flex flex-row justify-center mt-6">
                                                                             <img src={meditation} alt="Tools" className="w-[80px] h-[80px]" />
                                                                  </div>
                                                                  <p className="cardText"> Meditation</p>
                                                       </div>
                                            </div>
                                            <div className="flex flex-row justify-between mt-4">
                                                       <Link to="exercise">
                                                       
                                                       <div className="w-[200px] h-[200px] border-[2px] border-[#0ABDE3] bg-gradient-to-r from-[#ddd6f3] to-[#faaca8] rounded-[10px] shadow-2xl shadow-[#0ABDE3]">
                                                                  <div className="flex flex-row justify-center mt-6">
                                                                             <img src={Exercise} alt="Tools" className="w-[80px] h-[80px]" />
                                                                  </div>
                                                                  <p className="cardText"> Exercise</p>
                                                       </div>
                                                       </Link>
                                                       <div className="w-[200px] h-[200px] border-[2px] border-[#0ABDE3]  bg-gradient-to-r from-[#E3FDF5] to-[#FFE6FA] rounded-[10px] shadow-2xl shadow-[#0ABDE3]">
                                                                  <div className="flex flex-row justify-center mt-6">
                                                                             <img src={game} alt="Tools" className="w-[80px] h-[80px]" />
                                                                  </div>
                                                                  <p className="cardText"> Games</p>
                                                       </div>
                                                       <div className="w-[200px] h-[200px] border-[2px] border-[#0ABDE3] bg-gradient-to-r from-[#E3FDF5] to-[#a71c8b] rounded-[10px] shadow-2xl shadow-[#0ABDE3]">
                                                                  <div className="flex flex-row justify-center mt-6">
                                                                             <img src={music} alt="Tools" className="w-[80px] h-[80px]" />
                                                                  </div>
                                                                  <p className="cardText"> Songs</p>
                                                       </div>
                                            </div>
                                 </div>
                      </div>
           );
};

export default AfterLoginPage;
