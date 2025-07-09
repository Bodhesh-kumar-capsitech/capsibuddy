import { Cascader, Input ,Button } from "antd"
import Createteam from "../../Modal/Createteam"
import type { LeadFormValues } from "../../Modal/CreateLeadForm"

import { useState } from "react"
const Teamsearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-between px-4 py-2 gap-2.5">

        <div className="flex lg:flex-row md:flex-row flex-col gap-2 ">
          <Input.Search placeholder="Search Lead" variant="filled" className="w-[272px] h-8 max-w-full" />
          <Button
            className="!w-36 !h-8 !bg-gradient-to-r from-[#43319A] to-[#A7BEFE] !text-white font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            + Add New Team
          </Button>
          <Createteam
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={function (_formData?: LeadFormValues): void {
              setIsModalOpen(false)
            }}
          />
        </div>
        <div className="flex lg:flex-row flex-wrap gap-2.5">
          <Cascader
            placeholder="Status"
            className="w-full sm:w-auto max-w-[160px] h-auto min-h-[32px]"
            popupClassName="z-50"
          />

          <Cascader
            placeholder="Priority"
            className="w-full sm:w-auto max-w-[160px] h-auto min-h-[32px] mt-2 sm:mt-0"
            popupClassName="z-50"
          />
        </div>
      </div>
    </>
  )
}

export default Teamsearch