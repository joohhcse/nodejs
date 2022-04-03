// API서버만들기_06_가독성과 유지보수성을 살리는 리펙토링01

// @ts-check

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
        body: {},
    }),
    },

    {
        url: '/posts/:id', // TODO: RegExp로 고쳐야 함
        method: 'GET',
        callback: async () => ({
            // TODO: implement
            statusCode: 200,
            body: {},
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
