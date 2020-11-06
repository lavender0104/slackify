const queryString = require('query-string')
require('dotenv').config()

export default async function (req, res) {

    if (!req.query.code) {
        res.statusCode = 404
        res.end('Error 404 Page Not Found')
        return
    }
    const SLACK_CLIENT_ID = process.env.SLACK_CLIENT_ID
    const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET
    const params = {
        client_id: SLACK_CLIENT_ID,
        client_secret: SLACK_CLIENT_SECRET,
        code: req.query.code
    }
    const stringified = queryString.stringify(params)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const oAuthObj = await fetch(`https://slack.com/api/oauth2.v2.access/?${stringified}`, options)
    const data = await oAuthObj.json()

    console.log(data.access_token)
}