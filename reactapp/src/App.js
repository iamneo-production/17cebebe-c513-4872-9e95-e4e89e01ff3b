import './App.css';
import Form2 from './Form2';
import ClippedDrawer from './dummy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import UncontrolledExample from './Carousel';


function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<SignIn />}></Route>
    //       <Route path='/signIn' element={<Form2 />}></Route>
    //       <Route path='/case' element={<ClippedDrawer />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div>
      <UncontrolledExample />
    </div>
  );
}

export default App;
