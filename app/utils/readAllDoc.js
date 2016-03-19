export const readAllDoc = (dbUrl, headers) => {
  return fetch(`${dbUrl}/_all_docs?include_docs=true`, {
    method: 'GET',
    headers
  })
}
