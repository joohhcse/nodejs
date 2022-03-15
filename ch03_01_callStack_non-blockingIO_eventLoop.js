
/***** # Event Loop - Callback queue *****/
//Quiz 1    // 순서는?
console.log('1')           // 1st

setTimeout(() => {          // 3rd
    console.log('2')
}, 0)

console.log('3')            // 2nd

/***** # Event Loop - Blocking *****/
//Quiz 2    
//5초동안 메시지는 몇 번이나 출력되는 것이 맞을까? 
setInterval(() => {
    console.timeLog('Hey!');
    while(true) {}
}, 1000)
//정답 : 1번 : while loop 도는동안 call stack이 절대 비지 않음
//이 동안 callback queue에서 콜백을 꺼낼 수가 없기 때문에,
//setInterval이 아무리 콜백을 쌓아도 메인스레드에서 실행될 수 없음 
// => event loop를 block한다


/***** # non-blocking I/O & offloading *****/
//여기서 node에게 파일을 읽어달라고 요청하고, 워커 스레드에서 파일을 읽기 시작
fs.readFile(fileName, (err, data) => {
    // Node가 파일을 다 읽고 나면
    // 1. callback queue에 이 함수에 err, data 인자를 채워서 넣고
    // 2. callback queue에서 꺼내질 때 이 부분이 실행
})

// readFile의 호출이 끝난 직후 바로 이 함수를 실행
// 이는 여전히 같은 콜백을 처리하는 중이기 때문
someTask()
// 브라우저나 Node.js에서나, Web API 혹은 Node API의 동작이 끝나면 callback queue에 등록
// 브라우저나 Node가 요청 받은 일을 하고 있는 동안 메인 스레드와 이벤트 루프는 영향을 받지않고 계속 실행
// 이것을 offloading이라 하며, Node 서버의 메인 스레드가 하나임에도 불구하고 빠르게 동작할 수 있는 이유
// -> 메인스레드가 오래 걸리는 일을 기다리지 않기 때문

/***** # Event Loop *****/
// 1. callback queue에서 콜백을 꺼내고 (없다면 생길 때까지 기다리고 )
// 2. 그 콜백의 처리가 끝날 때까지 실행하고
// 3. 이를 반복함
