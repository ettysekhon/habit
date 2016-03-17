import DATABASEURL from '../constants/databaseUrl'

export const deleteDocument = data => {
  console.log('deleteDocument', data)
  return fetch(DATABASEURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
