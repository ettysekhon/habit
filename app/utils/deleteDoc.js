export const deleteDoc = (dbUrl, headers, id, rev) => {
  return fetch(`${dbUrl}/${id}?rev=${rev}`, {
    method: 'DELETE',
    headers
  })
}
