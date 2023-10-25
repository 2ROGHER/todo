import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import TaskContainer from './components/container/TaskContainer'
import Test from './pages/test/Test';
import CounterContainer from './components/container/CounterContainer';

/**
 * @returns React.Component
 */
 
function App() {
  return (
    <>
      {/* <IndexRoute /> */}
      {/* <TaskContainer /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/tasks" element={<TaskContainer />} />
        <Route path="/test" element={<Test />} />
        <Route path="/counter" element={<CounterContainer />} />
      </Routes>
    </>
  );
}

export default App
