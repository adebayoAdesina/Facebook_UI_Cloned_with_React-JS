import './App.css';
import Header from './Components/Header/Header';
import CenterMenu from './Components/HomePage/Center_Menu/CenterMenu';
import LeftMenu from './Components/HomePage/Left_Menu/LeftMenu';
import RightMenu from './Components/HomePage/Right_Menu/RightMenu';

function App() {
  return (
   <>
    <Header/>
    <div class="wrapper">
        <LeftMenu/>
        <CenterMenu/>
        <RightMenu/>
    </div>
   </>
  );
}

export default App;
