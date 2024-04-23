import FilterButton from "../../modules/filterbutton/FilterButton"
import "./filterbar.css";

export default function Filterbar() {
  return (
    <section className="filterbar">
      <div className="properties">
        <FilterButton text="fiter by properties" />
        <FilterButton text="deleted" />
        <FilterButton text="archived" />

      </div>
      <div className="tag">
        <FilterButton text="filter" />
        <FilterButton text="add new tag" />
      </div>
    </section>
  );
};
