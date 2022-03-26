
//Polyfill : js standard library에 표준으로 등록되어 있으나
//아직 브라우저나 Node.js에서 구현되지 않은 기능을 미리써 볼수있도록 만들어진 구현체
// 예)core.js core-js 환경설정하기 -> npm install core-js

// @ts-check

//require('core-js')

const original = 'abcabc123'
const changed = original.replaceAll('abc', '123')
console.log(changed)

function sleep(duration) {
    return new Promise((resolve) => {
        console.log('sleep start')
        setTimeout(() => {
            console.log('sleep done', duration)
            resolve(duration)
        }, duration)
    })
}

function alwaysReject() {
    return new Promise((resolve, reject) => {
        reject()
    })
}

Promise.all([
    sleep(1000),
    sleep(150),
    sleep(2000),
    alwaysReject()
]).then((value) => {
    console.log('Promise.allSettled done!', value)
})


 

//Transpile 이란?
//코드를 A언어에서 B언어로 변환하는 작업
//js의 경우 보통 구형 런타임(브라우저 or 구버전 node 등)에서 신규 문법적요소(optional chaining 등) 
//활용하기 위해 사용
//즉, 신규 언어 스펙(ES6+)에서 구형 언어 스펙(ES5 등)으로 트랜스파일을 할 때 주로 사용됨
//js를 대상으로하는 트랜스파일러는 Babel, ts complier, ESBuild 등 있음
//"build": esbuild main.js --bundle --outfile=build/main.js --target=node10.4

//optional chaining 

const objs = [
    {
        foo: {
            bar: {
                bax: 1,
            },
        },
    },
    {},
    {
        foo: {},
    },
]

console.log(
    objs.map((obj) => {
        const { foo } = obj
        if(foo) {
            const { bar } = foo
            if(bar) {
                return bar.baz
            }
        }
        return undefined
    })
)

console.log(objs.map((obj) => obj.foo?.bar?.baz))




