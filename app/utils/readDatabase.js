import DATABASEURL from '../constants/databaseUrl'

export const readDatabase = () => {
  return fetch(`${DATABASEURL}/_all_docs`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
