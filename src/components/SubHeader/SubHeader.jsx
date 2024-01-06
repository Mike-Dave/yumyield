import foodImage from "../../assets/images/Food.jpg";
import Search from "../Search/Search";
const backgroundImageStyle = {
  backgroundImage: `url("${foodImage}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "300px",
};
function SubHeader() {
  return (
    <div>
      <div className="text-center space-y-2 pt-8" style={backgroundImageStyle}>
        <Search />
        <h3 className="text-[1.7rem] font-normal px-7 font-ptSerif text-white">
          Which dishes truly tantalize your taste buds?
        </h3>
        <p className="uppercase text-white font-ptSerif font-bold">
          Shape your own experience
        </p>
      </div>
    </div>
  );
}

export default SubHeader;
