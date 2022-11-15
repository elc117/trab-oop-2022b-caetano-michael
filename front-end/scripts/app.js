// const main = $('.app')
// main.load('src/views/course.html')

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'' : ''}
})

// const func = async () => { return await instance.get('/index') }
async function func() { return await instance.get('/index') }
console.log(await func())