import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {

    return (
        <Form className="bg-white rounded-lg text-black figtree-custom">
            <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Password</label>
                <Input.Password
                    placeholder="Enter your password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </div>
            <button className="flex items-center justify-center bg-linear-to-r from-[#43319A] to-[#A7BEFE] w-full p-1 text-[1rem] text-white rounded-lg font-bold cursor-pointer">
                Sign In <ArrowRightOutlined className="ml-2 text-[12px]" />
            </button>
            <div className="flex justify-between items-center mt-4">
                <Checkbox className='!text-[12px] md:!text-[16px] figtree-custom'>Remember me</Checkbox>
                <Link to="/forgot-password" className='figtree-custom text-[12px] md:text-[16px]'>Forgot password?</Link>
            </div>
        </Form>
    );
};

export default LoginForm;