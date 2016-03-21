export const deleteDoc = (dbUrl, headers, _id, _rev) => {
  return fetch(`${dbUrl}/${_id}?rev=${_rev}`, {
    method: 'DELETE',
    headers
  })
}
