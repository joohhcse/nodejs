// Spread syntax(...)
 // ES2015 추가된 syntax // 병합, 구조 분배 할당(destructuring) 등엥 다양하게 활용

 const pets = ['dog', 'cat']
 const predators = ['wolf', 'cougar']
 const animals = [...pets, ...predators]
 console.log(animals)    // 'dog', 'cat', 'wolf', 'cougar'

const [head, ...rest] = [1, 2, 3]
 console.log(head)    // 1
 console.log(rest)    // [2, 3]

/***********************************************************************/

const ary = [1, 2, 3, 4, 5]

const [head, ...rest] = ary

console.log(head, rest) // 1 [ 2, 3, 4, 5 ]

console.log(head, ...rest) // 1 2 3 4 5

//

const personalData = {
     email: 'abc@def.com',
     password: '****',
 }

const publicData = {
     nickname: 'foo'
 }

const overrides = {
     email: 'fff@fff.com',
 }

const user = {
     ...personalData,
     ...publicData,
 }

console.log(user) // { email: 'abc@def.com', password: '****', nickname: 'foo' }

/***********************************************************************/

const shouldOverride = true    // or false    // syntax 활용

const user2 = {
     ...{
         eamil: 'abc@def.com',
         password: '****',
     },
     ...{
         nickname: 'foo',
     },
     ...ary(shouldOverride
         ? {
             email: 'fff@fff.com',
         }
         : null),
 }

/***********************************************************************/

function foo(head, ...rest) {
     console.log(head)
     console.log(rest)
 }

foo(1, 2, 3, 4)     // 1 [ 2, 3, 4]