Hoisting - var

//ex1)
 console.log(x)
 var x = 1        // undefined
 //x라는 값을 참조는 할 수 있지만 초기화되지 않음

var x
 console.log(x)
 x = 1  // 즉 hoisting이란 변수의 선언(만)을
 // 해당 스코프의 맨 위로 끌어올리는 것을 뜻함

//ex2)
 console.log(x)
 x = 1
 // var도 없다면 변수의 선언 자체가 이루어지지 않으므로
 // ReferenceError가 발생

//ex3)
 function foo() {
     return 'foo'
 }
 console.log(foo())

console.log(foo())
 function foo() {
     return 'foo'
 }
 //위 두 코드의 실행결과는 동일
 // function도 hoisting의 대상이다
 // 함수의 선언과 값의 초기화는 서로 다르다 // function의 경우 선언밖에 없다


 //ex4)
 //Function, lexical scope
 function foo() {
     let x = 1
     function bar() {
         console.log(x)        //가장 가까운 스코프에 일치하는 변수(x)에 binding
     }
 }
 // js에서 binding은 lexical scope를 통해 이루어짐
 // lexical scope란 안쪽에서 바깥쪽 변수에 접근할 수 있다는 뜻

//ex5)
 function foo() {
     var x = 'Hello'
     console.log(x)    // 'Hello'
 }

console.log(x)    // Refer Error
 // lexcical scope에서는 밖에서 안을 참조할 수는 없다

//ex6)
 var x = 'Hello'

function foo() {
     console.log(x)    // 'Hello'
 }

console.log(x)    // 'Hello'
 //이 경우는 두 x가 모두 같은 문자열 객체를 가리킨다

//ex7)
 var x = 1
 if (true) {
     var x = 2
 }
 console.log(x)    //2
 // var는 block scoping의 대상이 아님
 // 그러나 let과 const는 block scoping이 된다