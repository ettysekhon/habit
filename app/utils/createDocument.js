export const createDocument = (databaseUrl, headers, data) => {
  return fetch(databaseUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
}
