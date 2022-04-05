const Notes = ({project, handleSave}) => {

    return (
        <div className="notesArea">

            <div className="notes1">
                <h1>Notes</h1>
            </div>
            <br />


            <div className="notes2">
                <form onSubmit={handleSave}>
                    <textarea
                        cols="50"
                        rows="3"
                        className="notesText"
                        value={project && project.project.blurb}>
                    </textarea>
                </form>
            </div>

            <div className="notes3">
                <button type="submit" className="notesButt">
                    Save!
                </button>
            </div>

        </div>

    )
}

export default Notes;