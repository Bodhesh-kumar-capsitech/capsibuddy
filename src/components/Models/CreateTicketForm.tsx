import { useState } from "react";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Radio,
    Select,
} from "antd";
import type { RadioChangeEvent } from "antd";
import dayjs from "dayjs";
import { Modal } from 'antd';


interface LeadFormValues {
    title: string;
    leadDate: string;
    requestBy: string;
    assignTo: string;
    priority: string;
    leadType: string;
    description?: string;
}

const { TextArea } = Input;
const { Option } = Select;

interface CreateLeadFormProps {
    onSubmit: (values: LeadFormValues) => void;
    onCancel: () => void;
  open: boolean;
}

export default function CreateTicketForm({ onSubmit, onCancel, open }: CreateLeadFormProps) {
    const [form] = Form.useForm();
    const [priority, setPriority] = useState<string>("");

    const handlePriorityChange = (e: RadioChangeEvent) => {
        setPriority(e.target.value);
    };

    const handleFinish = (values: LeadFormValues) => {
        onSubmit(values);
        form.resetFields();
    };


    return (
        <Modal
    open={open}
    onCancel={onCancel}
    footer={null}
    title="Create New Ticket"
    destroyOnHidden
  >
        <div className="container mx-auto bg-white p-[20px] rounded-[12px] w-full max-w-[520px] h-auto min:h-[663px]">
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className="space-y-[8px]"
            >
                <Form.Item
                    label={<span className="!text-[#000000A6] !text-[14px]">Title</span>}
                    name="title"
                    rules={[{ required: true, message: "Please enter lead name" }]}
                >
                    <Input placeholder="Enter Lead Name" className="max-h-[32px] max-w-[472px]" />
                </Form.Item>

                <Form.Item
                    label={<span className="!text-[#000000A6] !text-[14px]">Lead Date (Auto Select)</span>}
                    name="leadDate"
                    rules={[{ required: true, message: "Please select a lead date" }]}
                    initialValue={dayjs()}
                >
                    <DatePicker className="w-full max-h-[32px] max-w-[472px]" disabled />
                </Form.Item>

               <div className="flex flex-col md:flex-row space-x-[20px]">
                    <div className="w-full md:w-1/2">
                        <Form.Item
                            label={<span className="!text-[#000000A6] !text-[14px]">Requested by</span>}
                            name="requestBy"
                            rules={[{ required: true, message: "Please enter requester name" }]}
                        >
                            <Input placeholder="Enter Name" className="max-w-[226px] max-h-[32px]" />
                        </Form.Item>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Form.Item
                            label={<span className="!text-[#000000A6] !text-[14px]">Assign to</span>}
                            name="assignTo"
                            rules={[{ required: true, message: "Please select an assignee"}]}
                        >
                            <Select placeholder="Select Assignee" className="max-w-[226px] max-h-[32px]">
                                <Option value="user1">User 1</Option>
                                <Option value="user2">User 2</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <Form.Item
                    label={<span className="!text-[#000000A6] !text-[14px]">Priority</span>}
                    name="priority"
                    rules={[{ required: true, message: "Please select priority" }]}
                >
                    <Radio.Group
                        onChange={handlePriorityChange}
                        value={priority}
                        className="w-full"
                    >
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[20px]">
                            <Radio.Button
                                value="High"
                                className="w-full sm:w-[144px] h-[32px] rounded-[8px] !flex !items-center !border !justify-center !gap-2"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-[10px] h-[10px] rounded-full bg-[#F5222D] inline-block"></span>
                                    <span className="text-sm sm:text-base">High</span>
                                </div>
                            </Radio.Button>


                            <Radio.Button
                                value="Medium"
                                className="w-full sm:w-[144px] h-[32px] rounded-[8px] !flex !items-center !border !justify-center !gap-2"
                            >
                                 <div className="flex items-center gap-2">
                                <span className="w-[10px] h-[10px] rounded-full bg-[#F2B12E] inline-block"></span>
                                <span className="text-sm sm:text-base">Medium</span>
                                </div>
                            </Radio.Button>
                            <Radio.Button
                                value="Low"
                                className="w-full sm:w-[144px] h-[32px] rounded-[8px] !flex !items-center !border !justify-center !gap-2"
                            >
                                 <div className="flex items-center gap-2">
                                <span className="w-[10px] h-[10px] rounded-full bg-[#00CA9D] inline-block"></span>
                                <span className="text-sm sm:text-base">Low</span>
                                </div>
                            </Radio.Button>
                        </div>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label={<span className="!text-[#000000A6] !text-[14px]">Lead type</span>}
                    name="leadType"
                    rules={[{ required: true, message: "Please select lead type" }]}
                >
                    <Select placeholder="Select Lead type" className="max-w-[472px] max-h-[32px]">
                        <Option value="business">Business</Option>
                        <Option value="marketing">Marketing</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label={<span className="!text-[#000000A6] !text-[14px]">Description (optional)</span>}
                    name="description"
                >
                    <TextArea
                        placeholder="Please share some words about you."
                        autoSize={false}
                        style={{
                            height: "105px",
                            overflowY: "auto",
                            resize: "none",
                        }}
                        className="w-full sm:w-[472px]"
                    />
                </Form.Item>

                <div className="flex flex-row flex-wrap justify-end gap-4">
                    <Button onClick={onCancel} className="w-full max-w-[67px] h-[32px] !rounded-lg">Cancel</Button>
                    <Button htmlType="submit" className="w-full max-w-[101px] h-[32px] !bg-[#43319A] hover:!bg-[#5c4ad4] !text-white !rounded-lg">
                        Create Ticket
                    </Button>
                </div>
            </Form>
            
        </div>
        </Modal>
    );
}
