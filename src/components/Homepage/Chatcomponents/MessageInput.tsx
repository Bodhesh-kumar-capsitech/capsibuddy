import React, { useState } from 'react';
import {
  PaperClipOutlined,
  SmileOutlined,
  FontSizeOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Input, Button, Space, message as AntMessage } from 'antd';
import EmojiPicker from 'emoji-picker-react';


const { TextArea } = Input;

interface MessageInputProps {
  onSend: (msg: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState<string>('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [lineHeight, setLineHeight] = useState<number>(1.5);



  const handleSend = () => {
    if (text.trim() === '') {
      AntMessage.warning('Please enter a message');
      return;
    }

    onSend(text.trim());
    setText('');
  };

  interface EmojiClickData {
    emoji: string;
    names?: string[];
    unified?: string;
    originalUnified?: string;
    activeSkinTone?: string;
    custom?: boolean;
  }


  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setText(prev => prev + emojiData.emoji);
  };


  return (
    <div className="bg-white p-3 w-full">
      <TextArea
        placeholder="Let’s share something"
        autoSize={{ minRows: 2, maxRows: 4 }}
        bordered={false}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={(e) => {
          if (!e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
         style={{ lineHeight }}
        className="w-full text-sm focus:shadow-none resize-none"
      />


      <div className="flex justify-between items-center mt-2">
        <Space size="middle">
          <label htmlFor="fileUpload" className="cursor-pointer flex items-center gap-2">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  console.log("Selected file:", file.name);
                }
              }}
            />
            <PaperClipOutlined className="text-lg text-gray-500" />
          </label>

          <div className="relative">
            <SmileOutlined
              className="text-lg text-gray-500 cursor-pointer"
              onClick={() => setShowEmojiPicker(prev => !prev)}
            />
            {showEmojiPicker && (
              <div className="absolute z-50 bottom-10">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>

          <FontSizeOutlined className="text-lg text-gray-500 cursor-pointer"  onClick={() => setLineHeight(prev => (prev === 1.5 ? 2 : 1.5))}/>
        </Space>

        <Button
          type="primary"
          shape="circle"
          icon={<SendOutlined />}
          className="bg-[#3F2B96] text-white border-none"
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default MessageInput;
