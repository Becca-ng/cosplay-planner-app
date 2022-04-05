const Notes = () => {

    return (
        <div className="notesArea">

            <div className="notes1">
                <h1>Notes</h1>
            </div>
            <br/>


            <div className="notes2">
                <form>
                    <textarea cols="50" rows="3" className="notesText">
                    </textarea>
                </form>
            </div>

            <div className="notes3">
                <button className="notesButt">
                    Add
                </button>

                <button className="notesButt">
                    Save
                </button>
            </div>

        </div>

    )
}

export default Notes;