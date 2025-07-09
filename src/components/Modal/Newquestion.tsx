import { Modal, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { LeadFormValues } from './CreateLeadForm';

export interface NewProps {
    open: boolean;
    onCancel: () => void;
    onOk: (formData?: LeadFormValues) => void;
}

export const Newquestion: React.FC<NewProps> = ({ open, onCancel, onOk }) => {

    return (
        <>
            <Modal
                title={<span className="text-[16px] text-[#000000E0]">Add New Question</span>}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={open}
                onOk={() => onOk()}
                onCancel={onCancel}
                okText="Save"
                cancelText="Cancel"
                okButtonProps={{
                    className: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md",
                }}
                cancelButtonProps={{
                    className: "text-gray-600 hover:text-black",
                }}
            >
                <div className="flex flex-col h-auto sm:h-[265px] w-full sm:w-[650px] max-w-full gap-5 py-5 mx-auto container rounded-xl">

                    <div className='flex flex-col !h-[58px] !w-[602px] max-w-full sm:w-full sm:h-auto gap-2'>
                        <p className='text-[14px]'>Question<span className="text-[#F5222D]"> *</span></p>
                        <Input placeholder="Enter Question" />
                    </div>
                    <div className='flex flex-col !h-[58px] !w-[602px] max-w-full sm:w-full sm:h-auto gap-2'>
                        <p className='text-[14px]'>Answer <span className="text-[#F5222D]"> *</span></p>
                        <Input placeholder="Enter Answer" />
                    </div>
                    <div className='flex flex-col !h-[58px] !w-[602px] max-w-full sm:w-full sm:h-auto gap-2'>
                        <p className='text-[14px]'>Add Tags <QuestionCircleOutlined /></p>
                        <Input placeholder="Add Tags (add comma to separate tags)" />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Newquestion;