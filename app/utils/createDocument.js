const dbURL = 'http://127.0.0.1:5800/habit'

export const createDocument = data => {
  fetch(dbURL, { method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.status !== 200) {
      console.log(response)
    }
  }).catch(e => e)
}
