const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': 'trix'
})

export const getAllCategories = () =>
  fetch('https://immense-peak-63715.herokuapp.com/categories', {headers})
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch('https://immense-peak-63715.herokuapp.com/posts', {headers})
    .then(res => res.json())
    .then(data => data)

export const getSinglePost = (postId) =>
  fetch(`https://immense-peak-63715.herokuapp.com/posts/${postId}`, {headers})
    .then(res => res.json())
    .then(data => data)

export const getAllComments = (id) =>
  fetch(`https://immense-peak-63715.herokuapp.com/posts/${id}/comments`, {headers})
    .then(res => res.json())
    .then(data => data)

export const addAPost = (post) =>
  fetch('https://immense-peak-63715.herokuapp.com/posts/', {headers, method: 'POST', body: JSON.stringify(post)})
    .then(res => res.json())
    .then(data => data)

export const addAComment = (comment) =>
  fetch('https://immense-peak-63715.herokuapp.com/comments/', {headers, method: 'POST', body: JSON.stringify(comment)})
    .then(res => res.json())
    .then(data => data)

export const vote = (vote) =>
  fetch(`https://immense-peak-63715.herokuapp.com/posts/${vote.id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify(vote.option)
  })
    .then(res => res.json())
    .then(data => data)


export const voteAComment = (vote) =>
  fetch(`https://immense-peak-63715.herokuapp.com/comments/${vote.id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify(vote.option)
  })
    .then(res => res.json())
    .then(data => data)

export const deleteAPost = (postId) =>
  fetch(`https://immense-peak-63715.herokuapp.com/posts/${postId}`, {headers, method: 'DELETE'})
    .then(res => res.json())
    .then(data => data)

export const deleteAComment = (commentId) =>
  fetch(`https://immense-peak-63715.herokuapp.com/comments/${commentId}`, {headers, method: 'DELETE'})
    .then(res => res.json())
    .then(data => data)


export const editAPost = (post) =>
  fetch(`https://immense-peak-63715.herokuapp.com/posts/${post.id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)

export const editAComment = (comment) =>
  fetch(`https://immense-peak-63715.herokuapp.com/comments/${comment.id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)

