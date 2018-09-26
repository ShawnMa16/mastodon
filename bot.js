console.log("init successed")
const config = require('./config.js')

const Mastodon = require('mastodon-api')
const M = new Mastodon(config)
// console.log(M)

const params = {
    status:"hello, space"
}

M.post('statuses', params, (error, data) => {
    if (error) {
        console.error(error)
        console.log(error)
    } else {
        console.log(data.id + " at " + data.created_at)
        console.log("id: ${data.id}, created: ${data.created_at}")
    }
})


