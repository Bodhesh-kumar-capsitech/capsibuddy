import Leadsearch from "../Leadscomponents/Leadsearch"
import Page from "../Leadscomponents/Page"
import Memberbox from "./Memberbox"

const Teammember = () => {
  return (
   <>
    <div className="flex flex-col min-h-screen w-full max-w-full h-auto lg:h-[1006px] lg:w-[1604px]">
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