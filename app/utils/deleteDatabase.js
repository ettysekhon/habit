import databaseUrl from '../constants/databaseUrl'

export const deleteDatabase = () => {
  return fetch(databaseUrl, {
    method: 'DELETE'
  })
}
