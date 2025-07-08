import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

interface FAQ {
  key: string;
  question: string;
  answer: string;
  tags: string[];
  lastUpdate: string;
}

const data: FAQ[] = [
  {
    key: '1',
    question: 'What courses do you offer?',
    answer:
      "We offer Bachelor's and Master's courses in Computer Applications from NAAC A++ accredited institutions.",
    tags: ['Courses Offered', 'Academics', 'Admissions'],
    lastUpdate: '08-06-2025',
  },
];

const columns: ColumnsType<FAQ> = [
  {
    title: 'Question',
    dataIndex: 'question',
    key: 'question',
    ellipsis: true,
    onHeaderCell: () => ({
      style: { backgroundColor: '#EFEEF7' },
    }),
  },
  {
    title: 'Answer',
    dataIndex: 'answer',
    key: 'answer',
    ellipsis: true,
    onHeaderCell: () => ({
      style: { backgroundColor: '#EFEEF7' },
    }),
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.slice(0, 2).map((tag, index) => (
          <Tag color="purple" key={index}>
            {tag}
          </Tag>
        ))}
        {tags.length > 2 && <Text type="secondary">+{tags.length - 2}</Text>}
      </>
    ),
    onHeaderCell: () => ({
      style: { backgroundColor: '#EFEEF7' },
    }),
  },
  {
    title: 'Last Update',
    dataIndex: 'lastUpdate',
    key: 'lastUpdate',
    onHeaderCell: () => ({
      style: { backgroundColor: '#EFEEF7' },
    }),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <EyeOutlined className="text-gray-500 cursor-pointer" />
        <EditOutlined className="!text-[#186CC4] cursor-pointer" />
        <DeleteOutlined className="!text-[#F5222D] cursor-pointer" />
      </Space>
    ),
    onHeaderCell: () => ({
      style: { backgroundColor: '#EFEEF7' },
    }),
  },
];

const Quickcomponent: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ x: 'max-content' }}
      className="h-auto w-full"
    />
  );
};

export default Quickcomponent;
