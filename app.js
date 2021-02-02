const notes=require('./notes.js')
const yargs=require('yargs')
const chalk=require('chalk')

yargs.version('1.1.0')

//add
yargs.command({
    command:'add',
    describe:'Adds a new note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note content',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
        // console.log('Title: '+argv.title)
        // console.log('Content: '+argv.body)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'Removes the note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        // console.log('Removing the note...')
    }
})
//read
yargs.command({
    command:'read',
    describe:'Reads the note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//list
yargs.command({
    command:'list',
    describe:'Lists all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()
// console.log(yargs.argv)



// const sum=require('./utils.js')
// //const name='sample11'
// //console.log(name)

// const sumval=sum(2,43)
// console.log(sumval)



// const func=require('./notes.js')
// const val=func()
// console.log(val)


// const validator=require('validator')
// console.log(validator.isEmail('abc@a.comc'))
// console.log(validator.isURL('wiki.org'))

// const chalk=require('chalk')
// console.log(chalk.blue('blue text'))
// console.log(chalk.blue('hello ')+' '+chalk.red('world ')+'!!!')