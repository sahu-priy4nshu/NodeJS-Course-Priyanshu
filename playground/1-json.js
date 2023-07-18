// const fs=require('fs')
// // const book = {
// //     title: 'My Book',
// //     author: 'Priyanshu Sahu'
// // }

// // const bookJSON=JSON.stringify(book)
// // // console.log(bookJSON)
// // // console.log(JSON.parse(bookJSON).author)

// // fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
// const data = JSON.parse(dataBuffer)
// console.log(data.author)
// console.log(data.title)

const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer)
data.author = "Satyam Tripathi"
data.book = "College"
console.log(data.author)
console.log(data.book)

const overJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',overJSON)