 // closure = function + environment
 // closure는 function이 하나 생길 때마다 하나씩 생긴다
 // environment는 함수 자신을 둘러싼, 접근할수있는 모든 스코프를 뜻함

 function and(x) {
    return function print(y) {
        return x + ' and ' + y
    }
}

const saltAnd = and('salt')
console.log(saltAnd('pepper'))    // salt and pepper
console.log(saltAnd('sugar'))    // salt and sugar

// and함수로 만들어진 saltAnd의 closure는
// 함수: print
// 환경: x->"salt"
// closure는 higher-order function을 만드는데 유용


function and(x) {
    return function print(y) {
        return x + ' and ' + y
    }
}

const saltAnd = and('salt')
console.log(saltAnd('pepper'))    // salt and pepper
console.log(saltAnd('sugar'))    // salt and sugar

const waterAnd = and('water')
console.log(waterAnd('juice'))    // water and juice
//saltAnd와 waterAnd 모두 함수는 같은 print이지만, 각각 주어진 변수가 다름
//saltAnd는 x가 "salt", waterAnd는 x가 "water"로 바인딩되어 있음
//즉, 둘은 서로다른 closure를 형성하고 있음