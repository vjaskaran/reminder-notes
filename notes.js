 const fs=require('fs')
 const chalk=require('chalk')
// //fs.writeFileSync('note.txt','sample text2')
// fs.appendFileSync('note.txt','\nsample appended text')


const addNote = (title,body)=>{
    
    const notes=loadNotes()
    // const duplicateNotes=notes.filter((note)=> note.title===title)
    const duplicateNote=notes.find((note)=> note.title === title)

    //debugger

    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        console.log(notes)//remove
        saveNotes(notes)
        console.log(chalk.black.bgGreenBright(' Note added '))
    }
    else{
        console.log(chalk.black.bgRedBright(' Title already taken '))
    }
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const newnotes=notes.filter((note)=> note.title!==title)
    //console.log(newnotes)//remove
    if(notes.length!==newnotes.length){
        saveNotes(newnotes)
        console.log(chalk.black.bgGreenBright(' Note is removed '))
    }
    else{
        console.log(chalk.black.bgRedBright(' Note not found '))
    }
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('Listing notes:'))
    notes.forEach((note)=> console.log(note.title))
}

const readNote=(title)=>{
    const notes=loadNotes()
    const noteToFind=notes.find((note)=> note.title === title)
    if(noteToFind){
        console.log(chalk.inverse(noteToFind.title))
        console.log(noteToFind.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes= (notes)=>{
    const notejson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',notejson)
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const datajson=dataBuffer.toString()
        return JSON.parse(datajson)
    }
    catch(e){
        return []
    }
}


module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}