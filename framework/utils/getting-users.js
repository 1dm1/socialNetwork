import api from './apiMiddleware'

export const users = Promise.all([api('GET', '/posts'),api('GET', '/users')]).then(response => {
    const [posts,users] = response
    getUsersPost(posts,users)
    return users  
})

function getUsersPost (posts,users) {
    users.forEach(user => {
        createPostList(posts,user)
    })
}

function createPostList(posts,user) {
    const postArr = []
    posts.forEach(post => {
        if(post.userId === user.id) {
            postArr.push({
                title: post.title,
                body: post.body
            })
            user.posts = postArr
        }
    })
}











