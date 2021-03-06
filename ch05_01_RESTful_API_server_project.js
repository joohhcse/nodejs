// ch05_01_RESTful_API_server_project

// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들어보기

//#HTTPie 설치
//#npm install --save-dev nodemon   //개발도구 변경사항 확잉용

/**
 *    블로그 포스팅 서비스
 *    - 로컬 파일을 데이터베이스로 활용할 예정(JSON)
 *    - 인증 로직은 넣지않음
 *    - RESTful API를 사용
 *    - package.json 등 기타세팅 강의참고
 */

// ch05_02_apiRouting_TestByHttpie

const http = require('http')


//JSDoc 형태
/**
 * @typedef post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
    {
        id: 'my_first_post',
        title: 'My first post',
        const: 'Hello!',
    },
    {
        id: 'my_second_post',
        title: 'My second post',
        content: 'Second post!',
    },
]


/**
 * Post
 * 
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
    // console.log(req.url)
    // console.log('request accepted!')

    const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/
    const postIdRegexResult =
        (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined

    if(req.url === '/posts/' && req.method === 'GET') {
        res.statusCode = 200
        res.end('List of posts')
    } else if(postIdRegexResult) {
        // GET /posts/:id
        const postId = postIdRegexResult[1]
        console.log(`postId: ${postId}`)
        res.statusCode = 200
        res.end('Reading a post')
    } else if(req.url === '/posts/' && req.method === 'POST') {
        res.statusCode = 200
        res.end('Creating post')
    } else {
        res.statusCode = 404
        res.end('Not found')
    }

})

const PORT = 4000

server.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`)
}) 


