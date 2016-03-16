import SERVERURL from '../constants/serverUrl'

const HEADERS = {
  'Cache-Control': 'no-cache',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Origin': '',
  'Host': 'app.fitbird.com'
}

export const login = (email, password) => {
  return fetch(`${SERVERURL}/login/email`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password
    })
  })
}
