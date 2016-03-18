export const readDatabase = (databaseUrl) => {
  return fetch(`${databaseUrl}/_all_docs`, {
    method: 'GET'
  })
}
