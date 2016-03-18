export const readAllDocuments = (databaseUrl, headers) => {
  return fetch(`${databaseUrl}/_all_docs?include_docs=true`, {
    method: 'GET',
    headers
  })
}
