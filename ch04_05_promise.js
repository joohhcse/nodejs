
 // ch04_05_promise

// @ts_check

/* eslint-disable no-new */
 /* eslint-disable no-console */

/*
 new Promise((resolve, reject) => {
     
     console.log('Inside promise')
     reject(new Error('First reject))
     resolve('First resolve')    // resolve 이뤄지면 promise는 다음단계를 진행할수있음
     console.log('after resolve')
 })
     .catch((error) => {
         console.log('error', error)    //
     })
     .then((value) => {
     console.log('Inside first then')
     console.log('value', value)
     })
 */

//     new Promise((resolve, reject) => {
//         console.log('Before timeout')
//         setTimeout(() => {        // 비동기 코드 예시
//             resolve(Math.random())
//             console.log('After resolve')
//         }, 1000)
//    })
//    .then((value) => {
//         console.log('then 1')
//         console.log('value', value)
//    })
//    .then(() => {
//        console.log('then 2')
//    })
//    .then(() => {
//         console.log('then 3')
//    })

    function returnPromiseForTimeout() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.random())
            }, 1000)
        })
    }

// 

//ex) 비동기코드임에도 불구하고 위에서 아래로 시간순서대로 잘 정리가 되어있음
//  모든 스코프가 분리되어 있기 때문에 상호참조가 일어나지 않게된다

   returnPromiseForTimeout()
   .then((value) => {
        console.log(value)
        return returnPromiseForTimeout()
   })
   .then(() => {
        console.log(value)
        return returnPromiseForTimeout()
   })
   .then(() => {
        console.log(value)
        return returnPromiseForTimeout()
    })
    .then(() => {
        console.log(value)
        return returnPromiseForTimeout()
    })

   returnPromiseForTimeout()

//ex) without-promise
// 시간순으로 타고 들어가려면 점점 code-indentation이 오른쪽으로 들어감
// 마지막 setTimeout()에서 다른값을 실수로 접근할수있게됨

setTimeout(() => {
    const value = Math.random()
    console.log(value)

    setTimeout(() => {
        const value = Math.random()
        console.log(value)
        
        setTimeout(() => {
            const value = Math.random()
            console.log(value)

            setTimeout(() => {
                const value = Math.random()
                console.log(value)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

////


//ex) node-promise.js

    const fs = require('fs')
const { resolve } = require('path')

/**
 * @param {string} fileName
 */

    function readFileInPromise(fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile('.gitignore', 'utf-8', (error, value) => {
                if(error) {
                    reject(error)
                }
                resolve(value)
            })
        })
    }

    fs.promises.readFile('.gitignore', 'utf-8').then((value) => console.log(value))
    readFileInPromise'.gitignore', 'utf-8').then((value) => console.log(value))


//ex) async.js
    
/**
 * @param {number} duration
 */
async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(undefined)
        }, duration)
    })
}

// Promise를 리턴한 함수는 async로 만들수있고
// async함수는 다른 async 함수 안에서 await를 할수있다
// returnPromiseForTimeout then chain과 같음    //*promise와 async와 관계
// async function 안에서도 try catch 사용하여 error handling
async function main() {
    console.log('first')
    await sleep(1000)
    console.log('second')
    await sleep(1000)
    console.log('third')
    await sleep(1000)
    console.log('finish!')
}

main()

////

