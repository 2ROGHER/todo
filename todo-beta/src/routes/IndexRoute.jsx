import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Test from "../pages/test/Test";
import CounterContainer from "../components/container/CounterContainer";
import TaskContainer from "../components/container/TaskContainer";

const IndexRoute = () => {
  return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route exact='/tasks' element={<TaskContainer />} />
        <Route path='/test' element={<Test />} />
        <Route path='/counter' element={<CounterContainer />} />
    </Routes>
  );
};

export default IndexRoute;
