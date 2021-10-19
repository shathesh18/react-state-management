import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import EMX from './components/EMX';
import ReactHooks from './components/ReactHooks';

function App() {
  return (
    <>
      <FunctionalComponent/>
      <ClassComponent/>
      <ReactHooks/>
      <EMX/>
    </>
  );
}

export default App;
