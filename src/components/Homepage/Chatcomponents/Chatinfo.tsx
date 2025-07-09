// LeadDetailsCard.tsx
import React from 'react';
import { Card, Tag, Space, Typography, Divider } from 'antd';
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Chatinfo: React.FC = () => {
  return (
    <Card className="!w-[426px] !h-fit !max-h-full !max-w-full mx-auto">
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

      <Space className="mb-2" size="small">
        <Text strong>Labels</Text>
        <Tag color="gold">Admission</Tag>
      </Space>

      <Divider />

      <div>
        <Detail label="Lead ID" value="#56367" />
        <Detail label="Lead Date" value="03-06-2025" />
        <Detail label="Request by" value="Alice Wonderland" />
        <Detail label="Assign to" value="TMB - 10" />
        <Detail label="Assign by" value="TMB - 1" />
        <Detail label="Status" value={<Tag color="green">Active</Tag>} />
        <Detail label="Priority" value={<Tag color="orange">Medium</Tag>} />
        <Detail label="Lead type" value="Admission Enquiry" />
        <Detail label="Description" value="N/A" />
      </div>
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
