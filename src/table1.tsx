import './App.css';

function Table1() {
    return (
        <div>
            <table className="collapse">
                <caption>Recently Read Books:</caption>
                <tr className="collapse">
                    <th className="collapse">Title</th>
                    <th className="collapse">Author</th>
                    <th className="collapse">Rating (out of 5)</th>
                </tr>
                <tr className="collapse">
                    <td className="collapse">Killers of The Flower Moon</td>
                    <td className="collapse">David Grann</td>
                    <td className="collapse">5</td>
                </tr>
                <tr className="collapse">
                    <td className="collapse">Second Foundation</td>
                    <td className="collapse">Isaac Asimov</td>
                    <td className="collapse">4</td>
                </tr>
                <tr className="collapse">
                    <td className="collapse">Foundation and Empire</td>
                    <td className="collapse">Isaac Asimov</td>
                    <td className="collapse">5</td>
                </tr>
                <tr className="collapse">
                    <td className="collapse">Misery</td>
                    <td className="collapse">Stephen King</td>
                    <td className="collapse">4</td>
                </tr>
            </table>
        </div>
    )
}

export default Table1
