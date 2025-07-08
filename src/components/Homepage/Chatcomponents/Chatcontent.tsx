import { SearchOutlined, MoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MessageInput from './MessageInput';

type Message = {
  text: string;
  sender: 'me' | 'other';
  time: string;
  date: string;
};

const Chatcontent = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Hello! How are you?',
      sender: 'other',
      time: '1:20 PM',
      date: 'Today',
    },
    {
      text: 'I’m good, thanks for asking.',
      sender: 'me',
      time: '1:21 PM',
      date: 'Today',
    },
  ]);

  const handleSendMessage = (text: string) => {
    if (text.trim()) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${(hours % 12 || 12)}:${minutes.toString().padStart(2, '0')} ${ampm}`;

      const newMessage: Message = {
        text,
        sender: 'me',
        time: formattedTime,
        date: 'Today', 
      };

      setMessages((prev) => [...prev, newMessage]);
    }
  };

  return (
    <div className="bg-[#F4F4F4] flex flex-col !w-[808px] !h-[961px] p-3 rounded-xl shadow !max-w-full !max-h-full">
      <div className="flex justify-between items-center !h-[70px] !w-full p-3 rounded-2xl bg-[#FFFFFF] mb-3">
        <div className="flex flex-col">
          <p className="text-[16px] font-semibold">Alice Wonderland</p>
          <p className="text-sm text-gray-500">alice@example.com</p>
        </div>
        <div className="flex gap-3 items-center">
          <SearchOutlined className="text-base cursor-pointer" />
          <MoreOutlined className="text-base cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-[#F4F4F4] rounded-xl overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 rounded-xl">
          <div className="text-center text-gray-400 text-xs">Today</div>

          {messages.map((msg, index) => (
            <div key={index} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
              <span className="text-xs text-gray-400 mb-1">{msg.time}</span>
              <div className={`rounded-xl px-4 py-2 max-w-xs text-sm shadow ${msg.sender === 'me' ? 'bg-[#8676E6] text-white' : 'bg-gray-100 text-black'}`}>
                {msg.text}
              </div>
            </div>
            
            
          ))}
        </div>
        <div className="border-1 border-[#DEDEDE]">
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chatcontent;
