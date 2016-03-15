const dbURL = 'http://127.0.0.1:5800/habit'

export const createDatabase = () => {
  fetch(dbURL).then(response => {
    if (response.status !== 200) {
      return fetch(dbURL, { method: 'PUT' })
      .then(response => response.json()).then(data => { return data })
      .catch(e => e)
    }
  }).catch(e => e)
}
