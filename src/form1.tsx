import './App.css';

function Form1() {
    return (
        <div >
            <form>
                <label htmlFor="bookTitle">Book Title: </label>
                <input type="text" id="bookTitle"/>
                <br/>
                <br/>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author"/>
                <br/>
                <br/>
                <label htmlFor="genre">Genre:</label>
                <select id="genre">
                    <option value="Choose">Choose a Genre</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Realistic Fiction">Realistic Fiction</option>
                    <option value="Narrative Nonfiction">Narrative Nonfiction</option>
                    <option value="Formal Nonfiction">Formal Nonfiction</option>
                </select>
                <br/>
                <br/>
                <input type="checkbox" id="Good Plot"/>
                <label htmlFor="Good Plot"> Good Plot</label>
                <br/>
                <input type="checkbox" id="Good Characters"/>
                <label htmlFor="Good Characters">Good Characters </label>
                <br/>
                <input type="checkbox" id="Emotional"/>
                <label htmlFor="Emotional">Emotional </label>
                <br/>
                <input type="checkbox" id="Thought Provoking"/>
                <label htmlFor="Thought Provoking"> Thought Provoking</label>
                <br/>
                <br/>
                <input type="radio" id="READ NOW" name="urgency" checked/>
                <label htmlFor="READ NOW"> READ NOW!</label>
                <br/>
                <input type="radio" id="Read soon" name="urgency" checked/>
                <label htmlFor="Read soon"> Read soon</label>
                <br/>
                <input type="radio" id="Put it on the list" name="urgency" checked/>
                <label htmlFor="Put it on the list"> Put it on the list</label>
                <br/>
                <input type="radio" id="Avoid" name="urgency" checked/>
                <label htmlFor="Avoid"> Avoid</label>
                <br/>
                <br/>
                <label id="Comments">Comments:</label>
                <textarea name="Comments" rows="10" cols="30">
        </textarea>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form1
