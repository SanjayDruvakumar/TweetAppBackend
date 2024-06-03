For register: http:localhost:4000/app/v1/user/register
body:json{
"name":"",
"email":"",
"password":"",
"confirmedPassword":""
}
For login: http:localhost:4000/app/v1/user/login
body:json{
"email":"",
"password":""
}

For addTweets: http:localhost:4000/app/v1/tweets

For viewTweets: http:localhost:4000/app/v1/user/:id/timeline
