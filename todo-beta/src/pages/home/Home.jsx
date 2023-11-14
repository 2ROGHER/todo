import React from "react";
import TaskContainer from "../../components/container/TaskContainer";
import Nav from "../../layouts/navbar/Nav";

function Home() {
  return (
    <div className="home-container">
     <Nav/>
     <TaskContainer />
    </div>
  );
}

export default Home;
