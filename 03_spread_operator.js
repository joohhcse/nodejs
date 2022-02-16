const ary = [1, 2, 3, 4, 5]

const [head, ...rest] = ary

console.log(head, rest) // 1 [ 2, 3, 4, 5 ]

console.log(head, ...rest) // 1 2 3 4 5

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

const shouldOverride = true    // or false

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

function foo(head, ...rest) {
    console.log(head)
    console.log(rest)
}

foo(1, 2, 3, 4)     // 1 [ 2, 3, 4]
