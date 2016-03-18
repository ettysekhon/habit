export const deleteDocument = (databaseUrl, headers, id) => {
  return fetch(`${databaseUrl}/${id}`, {
    method: 'DELETE',
    headers
  })
}
