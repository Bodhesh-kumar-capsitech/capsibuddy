import Leadsearch from "./Leadsearch";
import Leadbox from "./Leadbox";
import Page from "./Page";

const Lead = () => {
  return (
    <div className="flex flex-col h-[850px] w-[1604px] max-w-full overflow-hidden bg-[#FFFFFF] p-4 !rounded-[10px]">
      <div className="w-full">
        <Leadsearch />
      </div>

      <div className="flex-1 mt-4">
        <Leadbox />
      </div>

      <div className="mt-auto flex justify-end pt-4">
        <Page />
      </div>
    </div>
  );
};

export default Lead;
