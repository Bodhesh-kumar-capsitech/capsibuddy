import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

export interface Lead {
    key: string;
    number: string;
    Name: string;
    designation: string;
    team: string;
    totalchats:string;
    activechats:string;
    convertion: string;
    status: 'online' | 'offline';
}

const data: Lead[] = [
    {
        key: '1',
        number: 'MB-01',
        Name: 'John Snow',
        designation: 'Executive',
        team: 'Team - Alpha',
        totalchats: '05',
        activechats: '01',
        convertion: '01',
        status:'online',
    },
    
];

const columns: ColumnsType<Lead> = [
    {
        title: 'Member ID',
        dataIndex: 'number',
        key: 'number',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

        render: (_, record) => (
            <div>
                <Text strong>{record.Name}</Text>
                <br />
            </div>
        ),
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Team',
        dataIndex: 'team',
        key: 'team',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Total Chats',
        dataIndex: 'totalchats',
        key: 'totalchats',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Active Chats',
        dataIndex: 'activechats',
        key: 'activechats',
        onHeaderCell: () => ({
            style: {
                backgroundColor: '#EFEEF7',
            },
        }),

    },
    {
        title: 'Lead Conversion',
        dataIndex: 'convertion',
        key: 'conversion',
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

        render: (status: Lead['status']) => {
            let color = 'default';
            if (status === 'online') color = 'green';
            else color = 'red';
            return <Tag color={color}>{status}</Tag>;
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
                <EyeOutlined className='hover:cursor-pointer' />
                <EditOutlined className='!text-[#186CC4] hover:cursor-pointer' />
                <DeleteOutlined className='!text-[#F5222D] hover:cursor-pointer' />
            </Space>
        ),
    },
];

const Memberbox: React.FC = () => {
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

export default Memberbox;
