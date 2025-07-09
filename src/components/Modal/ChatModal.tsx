import React, { useState } from "react";
import { Modal, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

export interface ChatModalProps {
    open: boolean;
    onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ open, onClose }) => {
    const [messages, setMessages] = useState<string[]>([
        "Thanks for joining us! Let's start by getting your name.",
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, input]);
        setInput("");
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            closable={false}
            className="flex items-center justify-center"
        >
            <div className="flex flex-col w-full max-w-[400px] h-auto mx-4">
                <div className="bg-[linear-gradient(to_left,_#A7BEFE,_#6E6EC5,_#5347AA,_#43319A)] text-white p-4 rounded-t-lg">
                    <h2 className="text-3xl font-bold">ChatFlow</h2>
                    <p className="text-[12px] opacity-90">
                        A live chat interface that allows for seamless, natural communication
                        and connection.
                    </p>
                </div>
                <div className="h-[300px] p-4 space-y-4 overflow-y-auto bg-white">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`${index % 2 === 0
                                    ? "bg-gray-100 text-black self-start rounded-br-lg rounded-tr-lg rounded-tl-none"
                                    : "bg-indigo-600 text-white self-end rounded-tl-lg rounded-bl-lg"
                                } px-4 py-2 max-w-fit text-[14px] rounded-2xl`}
                        >
                            {msg}
                        </div>
                    ))}
                </div>
                <div className="flex items-center p-3 bg-white gap-2">
                    <Input
                        placeholder="Let's share something"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onPressEnter={handleSend}
                        className="!rounded-xl px-4 py-2"
                        suffix={
                            <button
                                onClick={handleSend}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-[28px] w-[28px] flex items-center justify-center"
                            >
                                <SendOutlined style={{ fontSize: "14px" }} />
                            </button>
                        }
                    />
                </div>
            </div>
        </Modal>
    );
};

export default ChatModal;
