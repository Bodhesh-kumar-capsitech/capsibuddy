import React from 'react';
import { Modal, Radio } from 'antd';
import type { LeadFormValues } from './CreateLeadForm';


export interface ViewleadProps {
  open:boolean;
  onCancel: () => void;
  onOk: (formData?: LeadFormValues) => void;
}


const Viewlead: React.FC<ViewleadProps> = ({ open, onCancel, onOk }) => {

  return (
    <>
      <Modal
        title="View Lead"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={open}
        onOk={() => onOk()}
        onCancel={onCancel}
        footer={[
          <div
            key="buttons"
            className="flex flex-wrap gap-2 justify-end w-full mt-2"
          >
            <button
              key="ok"
              onClick={() => onOk()}
              className="px-4 py-1 rounded-md bg-gray-200 text-black hover:bg-gray-300 w-[70px] h-[36px]"
            >
              Edit
            </button>
            <button
              key="cancel"
              onClick={onCancel}
              className="px-4 py-1 rounded-md bg-[#43319A] text-white hover:bg-[#5c4ad4] w-[80px] h-[36px]"
            >
              Close
            </button>
          </div>
        ]}
      >
        <div className="container mx-auto w-full max-w-[600px] h-auto flex flex-col gap-4">
          <div className="flex flex-col min-[260px]:flex-row justify-between gap-4">
            <div className="w-full min-[480px]:w-[266px]">
              <p>Title :</p>
              <p className="text-[14px]">John</p>
            </div>
            <div className="w-full min-[480px]:w-[266px]">
              <p>Lead Date :</p>
              <p className="text-[14px]">04-05-2025</p>
            </div>
          </div>
          <div className="flex flex-col min-[260px]:flex-row justify-between gap-4">
            <div className="sm:w-[266px] w-full">
              <p>Request by :</p>
              <p className="text-[14px]">John</p>
            </div>
            <div className="sm:w-[266px] w-full">
              <p>Assign to :</p>
              <p className="text-[14px]">User 1</p>
            </div>
          </div>
          <div className="flex flex-col min-[260px]:flex-row justify-between gap-4">
            <div className="sm:w-[266px] w-full">
              <p>Lead type :</p>
              <p className="text-[14px]">Admission</p>
            </div>
            <div className="sm:w-[266px] w-full flex flex-col gap-[8px]">
              <p>Priority :</p>
              <Radio.Button
                value="Medium"
                className="w-fit sm:w-[144px] h-[32px] rounded-[8px] !flex !items-center !border !justify-center !gap-2 px-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#F2B12E] inline-block"></span>
                  <span className="text-sm sm:text-base">Medium</span>
                </div>
              </Radio.Button>

            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <p>Description :</p>
              <p className="text-[14px]">-</p>
            </div>
          </div>
        </div>
      </Modal>
    </>

  );
};

export default Viewlead;