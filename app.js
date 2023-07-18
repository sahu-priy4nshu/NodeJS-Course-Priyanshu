const fs= require('fs')
// fs.writeFileSync('notes.txt','This file was created by Node.js! Updated;')
// fs.appendFileSync('notes.txt','This is the appended text.')

// const diffname = require('./utils.js')
// // console.log(diffname)
// const sum = diffname(4,5)
// console.log(sum)

// const fs = require('fs');
// fs.writeFileSync('notes.js','This is a new File')

const notesApp = require('./notes.js')
// console.log(getNotes())

const yargs = require('yargs')
// console.log(process.argv) 
 // create add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesApp.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Removing a new note')
        notesApp.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List a new note', 
    handler(argv){
        notesApp.listNotes(argv.title,argv.body)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesApp.readNote(argv.title)
    }
})

console.log(yargs.argv)


// const chalk = require('chalk')
// const greenMsg = chalk.green.inverse.bold('Success')
// console.log(greenMsg)
// const validator = require('validator')
// console.log(validator.isEmail('priyanshu@gmail.com'))
// console.log(validator.isURL('priyanshugmail.com'))
// // console.log(chalk.green('success'))


