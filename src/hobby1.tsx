import './App.css';
import Form1 from './form1.tsx';
import Table1 from './table1.tsx';
import List1 from './list1.tsx';

function Hobby2() {
    return (
        <div>
            <img src="public/books.jpg" width = '300' alt="Book Case"/>
            <p>Reading is one of the best hobbies someone can have to make themselves a better person. Depending on the book you read,
                you can drastically improve your knowledge. From the birth of the FBI
                (<a href="https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0307742482">Killers of the Flower Moon by David Grann</a>)
                , to the evolution of feathers
                (<a href="https://www.amazon.com/Feathers-Evolution-Natural-Thor-Hanson/dp/0465028780/ref=sr_1_1?crid=24OTOIOIJCD0Q&dib=eyJ2IjoiMSJ9.9bINhkwe4rZ8QKOPI8qs0-75gejcLIqBWaCVvUTYxDiMiRKYpBuzbgC-V9Q766wUSzT1C_ux9XRxTQC0ZepSWg.E3QG05owJYxkEr2LosnJU-Jji4lNgv_GSFDrPR8gFBI&dib_tag=se&keywords=feathers+by+thor+hanson&qid=1742751939&s=books&sprefix=feathers+by+thor+hanson%2Cstripbooks%2C95&sr=1-1">Feathers by Thor Hanson</a>
                ), if it interests you, odds are there is a book on it. Even if you are reading fiction for pleasure, you can increase your vocabulary as you destress!</p>
            <List1 />
            <Table1 />
            <Form1/>
        </div>
    )
}

export default Hobby2
