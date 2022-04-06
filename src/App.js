import './App.css';
import Header from './Components/Header/Header';
import CenterMenu from './Components/HomePage/Center_Menu/CenterMenu';
import LeftMenu from './Components/HomePage/Left_Menu/LeftMenu';

function App() {
  return (
   <>
    <Header/>
    <div class="wrapper">
        <LeftMenu/>
        <CenterMenu/>
    </div>
   </>
  );
}

export default App;
