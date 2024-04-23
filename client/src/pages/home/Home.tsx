import ControlsContainer from "../../components/container/ControlsContainer";
import FilterbarContainer from "../../components/container/FilterbarContainer";
import GreetingContainer from "../../components/container/GreetingContainer";
import NavContainer from "../../components/container/NavContainer";

const style = {
  padding: "0px 112px",
}
export default function Home() {
  return (
    <>
      <NavContainer />
      <main style={style}>
        <GreetingContainer />
        <FilterbarContainer />
        <ControlsContainer />
      </main>
    </>
  );
}
