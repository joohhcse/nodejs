// ch05_#API서버만들기_06_가독성과 유지보수성을 살리는 리펙토링01
// ch05_#API서버만들기_06_가독성과 유지보수성을 살리는 리펙토링02
// ch05_#API서버만들기_07_JSON 파일을 데이터베이스로 활용해 마무리하기
// json 파일을 DB로 활용하면서 라우트기능도 노드의 기본기능을 활용해 짜본 예제

// @ts-check

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
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {number} statusCode
 */

/**
 * @typedef Route 
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIResponse} callback
 */

/** @type {Route[]} */
const routes = [
    {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
        // TODO: implement
        statusCode: 200,
        body: posts,
    }),
    },

    {
        url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
        method: 'GET',
        callback: async () => ({

        }),
    },

    {
        url: '/posts',
        method: 'POST',
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
        }),
    },
]

module.exports = {
    routes,
}
