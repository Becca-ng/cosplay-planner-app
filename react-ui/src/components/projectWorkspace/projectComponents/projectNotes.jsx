const Notes = ({  handleSave, project }) => {

    return (
        <div className="notesArea">

            <div className="notes1">
                <h1>Notes</h1>
            </div>
            <br />


            <div className="notes2">
                <form>
                    <textarea
                        cols="50"
                        rows="3"
                        id="blurb"
                        className="notesText"
                        placeholder={project && project.project.blurb}>
                    </textarea>
                    <div className="notes3">
                        <button onClick={handleSave} type="submit" className="notesButt" update="blurb">
                            Save!
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Notes;