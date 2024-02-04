import Chat from "../../assets/chattingchatbot.png"

const ChatSample = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="w-[800px] h-[500px] border-[#00CCCD] shadow-2xl border-[2px] rounded-[14px] mt-8">
        <p className="text-center text-cyan-500  font-[600] text-[32px] ">
          Chatbot-sample
        </p>
        <div className="flex flex-row justify-between mx-4">
          <div>
            <div className="flex flex-row justify-center">
            <img src={Chat }  className="w-[200px]"/>
            </div>
           
            <p className="text-center text-[#000]  font-[500] text-[16px]  px-4 lg:px-6  mt-8 ">
              Hyper Realistic experience unlike other chatbot Conversation with
              psychebot like talking to a real human being
            </p>
          </div>
          <div className="w-[800px] h-[445px] border-[#00CCCD] bg-[#DDF2FD] shadow-2xl border-[2px] rounded-[14px] ">
            <p className="text-center   font-[600] ">
              <span className="text-[34px] text-[#019031] px-2">.</span>
              <span className="text-[14px]">Online</span>
            </p>
            {/* <div className="w-[100px] m-4 h-[30px] border-[#00CCCD] shadow-2xl border-[2px] rounded-[14px] ">
              <p className="text-left pt-2 pl-2 text-[#000]  font-[500] text-[10px]     ">
                hi, i am deepesh
              </p>
            </div> */}
            <div className="flex flex-row justify-end">
              <div className="w-[100px] m-4 h-[30px] border-[#00CCCD]  bg-[#436850] shadow-2xl border-[2px] rounded-[14px] ">
                <p className=" pt-2 pl-2 text-[#fff]  text-center  font-[500] text-[10px]     ">
                 Hi
                </p>
              </div>
            </div>
            <div className="w-[250px] m-4 h-[30px] border-[#00CCCD]  bg-black shadow-2xl border-[2px] rounded-[14px] ">
              <p className="text-left pt-2 pl-2 text-[#fff]  font-[500] text-[10px]     ">
                Hey, there ! How Can I Brighten up your Day ?
              </p>
            </div>
            <div className="flex flex-row justify-end">
              <div className="w-[120px] m-4 h-[30px] border-[#00CCCD] bg-[#436850] shadow-2xl border-[2px] rounded-[14px] ">
                <p className="text-left pt-2 pl-2 text-[#fff]  font-[500] text-[10px]     ">
                I am feeling Very low 
                </p>
              </div>
            </div>
            <div className="w-[250px] m-4 h-[58px] border-[#00CCCD] bg-black shadow-2xl border-[2px] rounded-[14px] ">
              <p className="text-left pt-2 pl-2 text-[#fff]  font-[500] text-[10px]     ">
              Oh no, I'm very sorry so hear that your feeling low.Is anything that's been bothering ? I am here to support You. 
              </p>
            </div>
            <div className="flex flex-row justify-end">
              <div className="w-[220px] m-4 h-[30px] border-[#00CCCD] bg-[#436850] shadow-2xl border-[2px] rounded-[14px] ">
                <p className="text-left pt-2 pl-2 text-[#fff]  font-[500] text-[10px]     ">
                Actually i am overthink about my career
                </p>
              </div>
            </div>
            <input
              className="w-[400px] rounded-[24px] outline-none cursor-not-allowed h-[50px] border-[#00CCCD] border-[2px] mx-2 placeholder:text-center"
              placeholder="type here.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSample;
