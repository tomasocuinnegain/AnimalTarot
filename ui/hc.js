const API_BASE = "http://localhost:4141/fn"

const endpoint = (name, data) => {
  const url = `${API_BASE}/sampleZome/${name}`
  return fetch(url, {
    method: 'post',
    body: (data),
  }).then(r => r.json())
}


document.querySelector('#sumb').addEventListener('click',  e => {
    const content = document.querySelector('#text-box').value
    const timestamp = document.querySelector('#time-box').value
    endpoint('sampleEntryCreate', JSON.stringify({
        content,
        timestamp,
    })).then(hash => {
        endpoint('sampleEntryRead', hash).then(content => {
            console.log(content)
        })
    })
})
