import React from 'react';
import { Input, List, Badge, Typography } from 'antd';
import {
  MoreOutlined
} from '@ant-design/icons';

const { Text } = Typography;

type ChatItem = {
  name: string;
  message: string;
  time: string;
  unread: number;
};

const chatList: ChatItem[] = [
  {
    name: 'Alice Wonderland',
    message: 'Hello',
    time: '11:30 PM',
    unread: 0,
  },
  {
    name: 'Manish Jangid',
    message: 'Hello, How are you?...',
    time: '11:10 PM',
    unread: 0,
  },
];

const Chatbox: React.FC = () => {
  return (
    <div className='!h-fit !w-[342px] !max-h-full !max-w-full !p-[12px]'>
      <Input.Search placeholder="Search" variant="filled" className='flex !h-[40px] !w-[800px] !max-w-fit !rounded-md' />

      <p className='text-[#DEDEDE]'><hr /></p>

      <List
        itemLayout="horizontal"
        dataSource={chatList}
        renderItem={(item) => (
          <List.Item
            className="hover:bg-[#E5E3F2] rounded-md px-3 py-2 gap-1.5 cursor-pointer"
          >
            <List.Item.Meta
              title={
                <div className="flex justify-between items-center px-1.5">
                  <Text strong className="text-sm">{item.name}</Text>
                  <Text type="secondary" className="text-xs">
                    {item.time}
                  </Text>
                </div>
              }
              description={
                <div className="flex justify-between items-center px-1.5">
                  <Text className="text-xs text-gray-500">{item.message}</Text>
                  {item.unread > 0 ? (
                    <Badge
                      count={item.unread}
                      style={{ backgroundColor: '#5B4CB4' }}
                      size="small"
                    />
                  ) : (
                    <MoreOutlined />
                  )}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Chatbox;
