import React from 'react';
import {Button ,Card, Tag, Space, Typography, Divider } from 'antd';
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';
import CreateLeadForm, { type LeadFormValues } from '../../Modal/CreateLeadForm';
import ChatModal from '../../Modal/ChatModal';
import { useState } from "react"
  

const { Title, Text } = Typography;

const Chatinfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <Card className="!w-[426px] !h-full !max-h-full !max-w-full mx-auto relative">
      <Title level={4} className="mb-2 text-2xl">
        Alice Wonderland
      </Title>

      <Space direction="vertical" size={4} className="mb-3 text-[14px]">
        <Text type="secondary">
          <EnvironmentOutlined className="mr-1 text-[14px] !text-[#265ABF]" />
          Quahog, Rhode Island
        </Text>
        <Text type="secondary">
          <ClockCircleOutlined className="mr-1 text-[14px] !text-[#52C41A]" />
          IST 12:19pm
        </Text>
        <Text type="secondary">
          <MailOutlined className="mr-1 text-[14px] !text-[#F5222D]" />
          alice@example.com
        </Text>
      </Space>

      <Divider />

      <Space className="mb-2 flex flex-col" size="small">
        <div className='flex flex-row gap-2'>
            <Text strong>Labels</Text>
        <Tag color="gold">Admission</Tag>
        </div>
        <hr />
      </Space>
   
      <div>
        <hr className='text-gray-100'/>
        <br />
        <Text strong>Lead Details</Text>
        <p className='text-[#000000A6] text-xs'>No Ticket Raised</p>
      </div>
        <br />
      <Button
            className="!w-26 !h-8 !bg-[#43319A] !text-white font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Create Lead
          </Button>
          <CreateLeadForm
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onSubmit={(_formData?: LeadFormValues): void => {
              return setIsModalOpen(false);
            }}
          />

      <Divider />

      {/* <div>
        <Detail label="Lead ID" value="#56367" />
        <Detail label="Lead Date" value="03-06-2025" />
        <Detail label="Request by" value="Alice Wonderland" />
        <Detail label="Assign to" value="TMB - 10" />
        <Detail label="Assign by" value="TMB - 1" />
        <Detail label="Status" value={<Tag color="green">Active</Tag>} />
        <Detail label="Priority" value={<Tag color="orange">Medium</Tag>} />
        <Detail label="Lead type" value="Admission Enquiry" />
        <Detail label="Description" value="N/A" />
      </div> */}
      <img
  src="logo.png"
  alt="Chatbot"
  onClick={() => setIsChatOpen(true)}
  className="h-12 w-12 sm:h-[60px] sm:w-[60px] object-contain hover:cursor-pointer absolute bottom-4 right-4"
/>

  <ChatModal
  open={isChatOpen}
  onClose={() => setIsChatOpen(false)}
/>
    </Card>
  );
};

interface DetailProps {
  label: string;
  value: React.ReactNode;
}

const Detail: React.FC<DetailProps> = ({ label, value }) => (
  <div className="flex justify-between mb-2">
    <Text type="secondary" className="w-[40%]">
      {label}
    </Text>
    <Text className="w-[60%] text-right">{value}</Text>
  </div>
);

export default Chatinfo;
