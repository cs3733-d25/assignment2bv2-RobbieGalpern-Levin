import './App.css';

function Table2() {
    return (
        <div>
            <h4> My favorite Professional Chess players</h4>
            <table className="collapse">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Nationality</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Magnus Carlsen</td>
                    <td>2833</td>
                    <td>Norway</td>
                </tr>
                <tr>
                    <td>Hikaru Nakamura</td>
                    <td>2802</td>
                    <td>USA</td>
                </tr>
                <tr>
                    <td>Gary Kasparov</td>
                    <td>2851</td>
                    <td>Russia</td>
                </tr>
                <tr>
                    <td>Wesley So</td>
                    <td>2748</td>
                    <td>USA</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table2
