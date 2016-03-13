import SERVER from '../constants/server'

const HEADERS = {
  'Cache-Control': 'no-cache',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Origin': '',
  'Host': 'app.fitbird.com'
}

export const getAll = () => {
  return fetch(`${SERVER}/habit/all`, {
    method: 'GET',
    headers: HEADERS
  })
}
