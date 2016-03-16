import DATABASEURL from '../constants/databaseUrl'

export const createDatabase = () => {
  fetch(DATABASEURL).then(response => {
    if (response.status !== 200) {
      return fetch(DATABASEURL, { method: 'PUT' })
        .then(response => response.json())
        .then(data => data)
        .catch(e => e)
    }
  }).catch(e => e)
}
