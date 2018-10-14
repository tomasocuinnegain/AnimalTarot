const API_BASE = "http://localhost:4141/fn"

const endpoint = (name, data) => {
  const url = `${API_BASE}/tea/${name}`
  return fetch(url, {
    method: 'post',
    body: (data),
  }).then(r => r.json())
}


document.querySelector('#sumb').addEventListener('click',  e => {
    const type = document.querySelector('#text-box').value
    const grade = document.querySelector('#time-box').value
    endpoint('teaCreate', JSON.stringify({
        type,
        grade,
    })).then(hash => {
        console.log(hash)
        endpoint('teaRead', hash).then(content => {
            console.log("get hash")
            console.log(content)
        })
    })

})

document.querySelector('#gettea').addEventListener('click', e=>{
    const type = document.querySelector('#text-box').value
    endpoint('getAllTea', type).then(content => {
        console.log("Call get all tea:")
        console.log(content)
    })
})
