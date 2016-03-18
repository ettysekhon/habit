export const deleteDatabase = (databaseUrl) => {
  return fetch(databaseUrl, {
    method: 'DELETE'
  })
}
