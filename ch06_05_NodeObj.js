
// @ts-check

// Node.js 내장 객체들

// process.stdin.pipe(process.stdout)
// process.exit(1)

// setInterval(() => {
//     console.log('Interval')
// }, 1000)

const timeoutHandle = setTimeout(() => {
    console.log('Timeout!')
}, 1000);

clearTimeout(timeoutHandle)




