import Leadsearch from "../Leadscomponents/Leadsearch"
import Page from "../Leadscomponents/Page"
import Memberbox from "./Memberbox"

const Teammember = () => {
  return (
   <>
  <div className="flex flex-col h-[850px] w-[1604px] max-w-full overflow-hidden  bg-[#FFFFFF] p-4 !rounded-[10px]">
      <Leadsearch />
    <Memberbox/>

      <div className="mt-auto flex justify-end px-4 py-2">
        <Page />
      </div>
    </div>
    </>
  )
}

export default Teammember