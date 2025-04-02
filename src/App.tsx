import './App.css';
import Title from './title.tsx';
import Intro from './intro.tsx';
import Hobby1 from "./hobby1.tsx";
import Hobby2 from "./hobby2.tsx";

function App() {
  return (
    <div>
        <Title/>
        <Intro name1 = "Nick Kutschke" name2 ="Robbie Galpern-Levin" />
        <div class="grid-container">
            <Hobby1 class="grid-item"/>
            <Hobby2 class="grid-item"/>
        </div>
    </div>
  )
}

export default App
