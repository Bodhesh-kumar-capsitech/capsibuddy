import Chatbox from "./Chatbox"
import Chatcontent from "./Chatcontent"
import Chatinfo from "./Chatinfo"

const Chat = () => {
  return (
    <>
    <div className="flex flex-row">
        <Chatbox/>
    <Chatcontent/>
    <Chatinfo/>
    </div>
    
    </>
    
    
  )
}

export default Chat