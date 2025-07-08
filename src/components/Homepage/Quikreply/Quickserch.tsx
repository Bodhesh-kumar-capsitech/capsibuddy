import { Input ,Button } from "antd"
import type { LeadFormValues } from "../../Models/CreateLeadForm"
import Quickcomponent from "./Quickcomponent"

import { useState } from "react"
import Newquestion from "../../Models/Newquestion"
const Quickserch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col px-4 py-2 gap-2.5">

        <div className="flex lg:flex-row justify-between md:flex-row flex-col gap-2 ">
            <div>
                <Input.Search placeholder="Search Lead" variant="filled" className="w-[272px] h-8 max-w-full" />
            </div>
           <div>
                <Button
            className="!w-36 !h-8 !bg-gradient-to-r from-[#43319A] to-[#A7BEFE] !text-white font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            + Add New Question
          </Button>
           </div>
          <Newquestion
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={function (_formData?: LeadFormValues): void {
              setIsModalOpen(false)
            }}
          />
        </div>
        <div>
            <Quickcomponent/>
        </div>
      </div>
    </>
  )
}

export default Quickserch