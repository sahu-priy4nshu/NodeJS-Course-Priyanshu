const fs = require('fs')
const getNotes = () => {
    return "Your notes..."
}
const addNote = (title, body) => {
    const notes = loadNotes()
    
    // const duplicateNotes = notes.filter((test) => test.title ===title)
    const duplicateNote = notes.find((test) => test.title === title)
    // const duplicateNotes = notes.filter(function(test){
    //     return test.title === title
    // })
    if(!duplicateNote)
    {
        notes.push ({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log('New note added')
    }
    else{
        console.log('title already taken')
    }

}


const saveNotes = (notes) => {
    const JSONstringi = JSON.stringify(notes)
    fs.writeFileSync('notes.json',JSONstringi)
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const notestoKeep = notes.filter((test) => test.title !== title)
    if(notestoKeep.length === notes.length){
        console.log("Note not found")
    }
    else{
        saveNotes(notestoKeep)
        console.log('Note Removed')
    }
    
}
const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    }
    catch (e) {
        return []
    }
    
}
const listNotes = () => {
    const notes = loadNotes()

    console.log('Your notes')

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log('Note not found!')
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}