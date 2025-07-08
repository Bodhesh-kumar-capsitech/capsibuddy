import React from 'react';
import { Modal, Input ,Select } from 'antd';
import type { LeadFormValues } from './CreateLeadForm';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};


export interface Createteam {
    open: boolean;
    onCancel: () => void;
    onOk: (formData?: LeadFormValues) => void;
}



const Createteam: React.FC<Createteam> = ({ open, onCancel, onOk }) => {

    
    return (
        <>
            <Modal
                title="Create New Team"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={open}
                onOk={() => onOk()}
                onCancel={onCancel}
                footer={[
                    <div
                        key="buttons"
                        className="flex flex-wrap gap-2 justify-end w-full mt-2 items-center"
                    >
                        <button
                            key="ok"
                            onClick={onCancel}
                            className="px-4 py-1 rounded-md bg-gray-200 text-black hover:bg-gray-300 w-[67px] h-[32px]"
                        >
                            Cancel
                        </button>
                        <button
                            key="cancel"
                            onClick={() => onOk}
                            className="rounded-md bg-[#43319A] text-white hover:bg-[#5c4ad4] w-[111px] h-[32px]"
                        >
                             Create Lead
                        </button>
                    </div>
                ]}
            >
                <div className="container mx-auto w-full max-w-[520px] h-auto flex flex-col max-gap-4 gap-[20px]">
                    <div>
                        <p>Team Name<span className="text-[#F5222D]"> *</span></p>
                        <Input placeholder="Enter Lead Name" className='w-[472px] h-[32px] max-w-full max-h-fit' />
                    </div>
                    <div>
                        <p>Description<span className="text-[#F5222D]"> *</span></p>
                        <Input placeholder="Enter Description" className='w-[472px] h-[32px] max-w-full max-h-fit' />
                    </div>
                    <div>
                        <p>Status</p>
                        <Select
                            showSearch
                            placeholder="Select Team"
                            optionFilterProp="label"
                            onChange={onChange}
                            onSearch={onSearch}
                            className='w-[472px] h-[32px] max-w-full max-h-fit'
                            options={[
                                {
                                    value: 'Todo',
                                    label: 'Todo',
                                },
                                {
                                    value: 'On progress',
                                    label: 'On progress',
                                },
                                {
                                    value: 'Completed',
                                    label: 'Completed',
                                },
                            ]}
                        />
                    </div>
                </div>
            </Modal>
        </>

    );
};

export default Createteam;