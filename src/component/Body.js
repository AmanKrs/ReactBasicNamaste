import { restuarantList } from "../constant";
import RestuarantCard from "./RestuarantCard";
const Body = () => (
  <>
    <div className="res-list">
      {restuarantList.map((rest, idx) => {
        return <RestuarantCard {...rest?.info} key={idx} />;
      })}
    </div>
  </>
);

export default Body;
