import Page from "../Leadscomponents/Page"
import Quickserch from "./Quickserch"

const Quick = () => {
  return (
    <>
      <div className="flex flex-col h-[784px] w-[1604px] max-w-full overflow-hidden">
    <Quickserch/>
       <div className="mt-auto flex justify-end px-4 py-2">
        <Page />
      </div>
    </div>
    </>
  )
}

export default Quick