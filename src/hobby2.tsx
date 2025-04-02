import './App.css';
import Form2 from './form2.tsx';
import Table2 from './table2.tsx';
import List2 from './list2.tsx';

function Hobby2() {
    return (
        <div>
            <img src="public/chessboard.jpg" width = '275' alt="chessboard"/>
            <p>My Chosen Hobby is chess. I've been playing chess since I was in kindergarten. It's an incredibly fun and complex board game.</p>
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    )
}

export default Hobby2
