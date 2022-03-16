 // ch04 modernJs 02_let, const

// let과 const는 ES2015(ES6)에 추가된 변수 선언 키워드
 // hoisting 규칙이 없고, block scoping을 지원, 따라서 var보다 예측 가능한 코드를 짜도록 도와줌

 let x = 1
 x = 2 // OK

const y = 1
 y = 1 // Uncaught TypeError

// var와 달리 let, const는 같은 스코프에서 변수를 두 번 이상 정의할 수 없다
 // var와 달리 let, const는 정의하기 전에는 사용할 수 없다

var x = 1
 {
     var x = 2
     console.log(x) //2
 }
 console.log(x)    //2


 const x = 1
 {
     const x = 2
     console.log(x)    //2
 }
 console.log(x)    //1

// let과 const 모두 같은 scoping rule을 따름

// let과 const의 예측 가능성, 유지보수성이 var보다 훨씬 뛰어남

// 가능하다면 const만 쓰고, 필요한 경우에 한해 let을 쓰고, var는 ㄴㄴ


