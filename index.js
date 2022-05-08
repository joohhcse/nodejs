//@ts-check
// const someString = 'Hello'
// const result = Math.log(someString)     //ts-check로 에러를 알려줌
// console.log(result)

const http = require('http')
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Hello')
})

const PORT = 4000
server.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}.`)
})