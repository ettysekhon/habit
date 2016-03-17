import SERVERURL from '../constants/serverUrl'

const HEADERS = {
  'Cache-Control': 'no-cache',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Origin': '',
  'Host': 'app.fitbird.com'
}

export const getAll = () => {
  return fetch(`${SERVERURL}/habit/all`, {
    method: 'GET',
    headers: HEADERS
  })
}
