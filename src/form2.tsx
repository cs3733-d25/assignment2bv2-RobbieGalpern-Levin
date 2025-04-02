import './App.css';

function Form2() {
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <br/><br/>

                <label htmlFor="rating">USCF Rating:</label>
                <input type="text" id="rating" name="rating" required/>
                <br/><br/>

                <label htmlFor="team">On WPI Chess Team:</label>
                <input type="checkbox" id="team" name="team"/>
                <br/><br/>

                <label htmlFor="coach">Have a Coach:</label>
                <input type="checkbox" id="coach" name="coach"/>
                <br/><br/>

                <label htmlFor="improve">Looking to improve:</label>
                <input type="checkbox" id="improve" name="improve"/>
                <br/><br/>

                <h3>Skill Level</h3>
                <input type="radio" id="Beginner" name="Beginner" value="Beginner"/>
                <label htmlFor="Beginner">Beginner</label><br/>
                <input type="radio" id="Intermediate" name="Intermediate" value="Intermediate"/>
                <label htmlFor="Intermediate">Intermediate</label><br/>
                <input type="radio" id="Advanced" name="Advanced" value="Advanced"/>
                <label htmlFor="Advanced">Advanced</label>
                <br/><br/>

                <label htmlFor="info">Any Other Info:</label><br/>
                <textarea id="info" name="info" rows="4" cols="50"></textarea><br/><br/>

                <label htmlFor="format">Favorite Format:</label>
                <select id="format" name="format">
                    <option value="bughouse">BugHouse</option>
                    <option value="classic">Classic</option>
                    <option value="chess960">Chess960</option>
                    <option value="crazy house">Crazy House</option>
                </select><br/><br/>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Form2
