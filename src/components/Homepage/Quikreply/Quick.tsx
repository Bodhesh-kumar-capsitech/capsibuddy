import Page from "../Leadscomponents/page"
import Quickserch from "./Quickserch"

const Quick = () => {
  return (
    <>
   <div className="flex flex-col min-h-screen w-full max-w-full h-auto lg:h-[1006px] lg:w-[1604px]">
    <Quickserch/>
       <div className="mt-auto flex justify-end px-4 py-2">
        <Page />
      </div>
    </div>
    </>
  )
}

export default Quick