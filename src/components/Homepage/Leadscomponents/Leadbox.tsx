import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    BellOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

interface Lead {
    key: string;
    number: string;
    customerName: string;
    customerEmail: string;
    description: string;
    date: string;
    assignedBy: string;
    assignedTo: string;
    status: 'Active' | 'Inactive';
    priority: 'High' | 'Medium' | 'Low';
}

const data: Lead[] = [
    {
        key: '1',
        number: 'LE-32',
        customerName: 'Alice Wonderland',
        customerEmail: 'alice@example.com',
        description: 'Admission query',
        date: '04 June 2025',
        assignedBy: 'TM-1',
        assignedTo: 'TM-1',
        status: 'Active',
        priority: 'High',
    },
];

const columns: ColumnsType<Lead> = [
    {
        title: 'Lead Number',
        dataIndex: 'number',
        key: 'number',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Customer',
        key: 'customer',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

        render: (_, record) => (
            <div>
                <Text strong>{record.customerName}</Text>
                <br />
                <Text type="secondary" className="text-xs">
                    {record.customerEmail}
                </Text>
            </div>
        ),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Assigned Date',
        dataIndex: 'date',
        key: 'date',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Assigned By',
        dataIndex: 'assignedBy',
        key: 'assignedBy',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Assigned To',
        dataIndex: 'assignedTo',
        key: 'assignedTo',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

        render: (status: Lead['status']) => (
            <Tag color={status === 'Active' ? 'green' : 'default'}>{status}</Tag>
        ),
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

        render: (priority: Lead['priority']) => {
            let color = 'default';
            if (priority === 'High') color = 'red';
            else if (priority === 'Medium') color = 'orange';
            else if (priority === 'Low') color = 'blue';
            return <Tag color={color}>{priority}</Tag>;
        },
    },
    {
        title: 'Action',
        key: 'action',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

        render: () => (
            <Space size="middle">
                <EyeOutlined className="text-gray-500 cursor-pointer"  />
                <EditOutlined className="text-blue-500 cursor-pointer" />
                <DeleteOutlined className="text-red-500 cursor-pointer" />
                <BellOutlined className="text-purple-500 cursor-pointer" />
            </Space>
        ),
    },
];

const Leadbox: React.FC = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: 'max-content' }}
            className='m-4'
        />
    );
};

export default Leadbox;
