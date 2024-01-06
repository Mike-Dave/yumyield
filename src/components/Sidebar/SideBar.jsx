import SideBarImage from "./SideBarImage";
import SideBarList from "./SideBarList";
function SideBar() {
  return (
    <div className="w-full md:w-[12.5rem] h-full bg-slate-200 top-0 right-0 fixed shadow-lg">
      <div className=" flex justify-end">
        <SideBarImage />
      </div>
      <SideBarList />
    </div>
  );
}

export default SideBar;
