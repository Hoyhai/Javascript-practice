// fetch 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // response is pure response not json
    // .then(res => console.log(res))
    // so i use .json() method to change pure response to json
    .then(res => res.json()) //
    .then(json => console.log(json))

// fetch response as promise (Resolve or Reject)
// .then is callback function to works with Resolve or Reject
// result
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// async await 
async function getApi() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    console.log(json)
}

getApi()