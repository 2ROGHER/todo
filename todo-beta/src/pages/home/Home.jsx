import React from "react";
import TaskContainer from "../../components/container/TaskContainer";
import Nav from "../../layouts/navbar/Nav";
import FilterBar from "../../layouts/filterbar/FilterBar";
import Alert from "../../layouts/alerts/Alert";
import { AiOutlineStop } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";
import TaskForm from "../../components/pure/form/TaskForm";
import TaskFormContainer from "../../components/container/TaskFormContainer";
import FilterContainer from "../../components/container/FilterContainer";

// These are all styles fot home page
const homeStyles = {
  background: "#2b2b2b",
  position: "relative",
  height: "100vh",
};
function Home() {
  return (
    <div className="home-container" style={homeStyles}>
      {/* TODO: implements the method if alerts occur here  */}
      {/* <Alert
        icon={<MdOutlineDoneOutline />}
        text="Task created successfully, good job!"
        stroke={"#2DC071"}
        fill={"#384b3f"}
      /> */}
      
      <Nav />
      <FilterBar />
      <TaskFormContainer />
      <TaskContainer />
    </div>
  );
}

export default Home;
