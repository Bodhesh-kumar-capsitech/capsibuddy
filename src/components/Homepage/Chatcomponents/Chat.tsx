import Chatbox from "./Chatbox"
import Chatcontent from "./Chatcontent"
import Chatinfo from "./Chatinfo"

const Chat = () => {
  return (
    <>
   <div className="flex flex-col md:flex-row h-[850px] w-[1604px] max-w-full overflow-hidden gap-2">
    <div className="bg-[#FFFFFF] flex md:flex-row flex-col p-4 !rounded-[10px]">
        <Chatbox/>
    <Chatcontent/>
    </div>
    <Chatinfo/>
    </div>
    
    </>
    
    
  )
}

export default Chat