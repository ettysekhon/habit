export const createDoc = (dbUrl, headers, data) => {
  return fetch(dbUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
}
