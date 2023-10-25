import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Test from "../pages/test/Test";
import Counter from "../components/pure/Counter";


const IndexRoute = () => {
  return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/count' element={<Counter />} />
    </Routes>
  );
};

export default IndexRoute;
