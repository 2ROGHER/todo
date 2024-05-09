import FilterbarContainer from "../../components/container/FilterbarContainer";
import GreetingContainer from "../../components/container/GreetingContainer";
import NavContainer from "../../components/container/NavContainer";
import NewTaskButton from "../../components/modules/newtaskbutton/NewTaskButton";
import ControlButton from "../../components/modules/controlsbutton/ControlButton";
import "./home.css";
import TaskList from "../../components/container/TaskList";
import NewTask from "../../components/pure/newtask/NewTask";

export default function Home() {
  return (
    <>
      <NavContainer />
      <main className="main">
        <GreetingContainer />
        <FilterbarContainer />

        <section className="task-section m-t-32">
          <ControlButton
            text="to do"
            quantity={2}
            color="#0AFAF2"
            quantityColor="#306CC7"
          />
          <ControlButton
            text="in proccess"
            quantity={4}
            color="#FAAA0A"
            quantityColor="#0AB6FA"
          />
          <ControlButton
            text="pending"
            quantity={2}
            color="#1E8BE4"
            quantityColor="#563EA5"
          />
          <ControlButton
            text="completed"
            quantity={8}
            color="#9A3EA5"
            quantityColor="#945E41"
          />

          <div className="main-col-1 p-16">
            <NewTaskButton />
            <NewTask />
            {/* Here all list for display in Home page */}
            <TaskList />
          </div>
          <div className="main-col-2 p-16 ">
            {/* Here we're going to list all  todo tasks. */}
            <TaskList />
          </div>
          <div className="main-col-3 p-16"></div>
          <div className="main-col-4 p-16"></div>
        </section>
      </main>
    </>
  );
}
