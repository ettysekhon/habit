import SERVER from '../constants/server'

const HEADERS = {
  'Cache-Control': 'no-cache',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Origin': '',
  'Host': 'app.fitbird.com'
}

export const login = (email, password) => {
  return fetch(`${SERVER}/login/email`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password
    })
  })
}
