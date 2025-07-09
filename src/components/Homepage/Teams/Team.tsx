import Teamnew from "./Teamnew"
import Page from "../Leadscomponents/Page"
import Teamsearch from "./Teamsearch"

const Team = () => {
  return (
    <>
    <div className="flex flex-col h-[850px] w-[1604px] max-w-full overflow-hidden  bg-[#FFFFFF] p-4 !rounded-[10px]">
         <Teamsearch/>
        <Teamnew/>
        <div className="mt-auto flex justify-end px-4 py-2">
        <Page />
      </div>
    </div>
    </>
  )
}

export default Team