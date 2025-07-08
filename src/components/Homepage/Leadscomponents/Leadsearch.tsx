import { Cascader, Input } from "antd"

const Leadsearch = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-between px-4 py-2 gap-2.5">

        <div>
          <Input.Search placeholder="Search Lead" variant="filled" className="w-[272px] h-8 max-w-full" />
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

export default Leadsearch