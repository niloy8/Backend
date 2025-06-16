

console.log(new Date());

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))


const Data = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
}
Data()


/**Post request */
const datas = {
    title: 'foo',
    email: 'hello@gmail.com'
}


const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(datas)
}

const fun = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    const data = await response.json()
    console.log(data)
}

fun()