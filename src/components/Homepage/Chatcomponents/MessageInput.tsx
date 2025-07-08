import React, { useState } from 'react';
import {
  PaperClipOutlined,
  SmileOutlined,
  FontSizeOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Input, Button, Space, message as AntMessage } from 'antd';

const { TextArea } = Input;

interface MessageInputProps {
  onSend: (msg: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState<string>('');

  const handleSend = () => {
    if (text.trim() === '') {
      AntMessage.warning('Please enter a message');
      return;
    }

    onSend(text.trim());       
    setText('');               
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
        className="w-full text-sm focus:shadow-none resize-none"
      />

      <div className="flex justify-between items-center mt-2">
        <Space size="middle">
          <PaperClipOutlined className="text-lg text-gray-500 cursor-pointer" />
          <SmileOutlined className="text-lg text-gray-500 cursor-pointer" />
          <FontSizeOutlined className="text-lg text-gray-500 cursor-pointer" />
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
