import './App.css';
import Nav from './Components/Nav';
import Textform from './Components/Textform';

function App() {
  return (
    <>
    <Nav title="TextUtils"/>
    <div className='container my-3'>
    <Textform Heading="Enter the Text and analyze below"/>
     </div>

    </>
  );
}

export default App;

