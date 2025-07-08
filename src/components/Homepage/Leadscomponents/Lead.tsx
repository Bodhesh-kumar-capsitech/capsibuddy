import Leadsearch from "./Leadsearch";
import Leadbox from "./Leadbox";
import Page from "./page";

const Lead = () => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-full h-auto lg:h-[1006px] lg:w-[1604px]">
      <Leadsearch />
      <Leadbox />

      <div className="mt-auto flex justify-end px-4 py-2">
        <Page />
      </div>
    </div>
  );
};

export default Lead;
