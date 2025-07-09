import Chatbox from "./Chatbox"
import Chatcontent from "./Chatcontent"
import Chatinfo from "./Chatinfo"

const Chat = () => {
  return (
    <>
   <div className="flex flex-col md:flex-row h-[784px] w-[1604px] max-w-full overflow-hidden">
        <Chatbox/>
    <Chatcontent/>
    <Chatinfo/>
    </div>
    
    </>
    
    
  )
}

export default Chat