const API_URL = 'http://165.245.241.134:7070/api/v1';
const LOGIN_ENDPOINT = "/auth/login";

async function handleHttpErrors(res) {
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(errorMessage || `Request failed (${res.status})`);
  }

  return res.json();
}

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token');
};

const loggedIn = () => {
  return getToken() != null;
};

const logout = () => {
  localStorage.removeItem('token');
};

const makeOptions = (method, addToken, body) => {
  const opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  };

  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }

  if (body) {
    opts.body = JSON.stringify(body);
  }

  return opts;
};

const login = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password
  });

  return fetch(API_URL + LOGIN_ENDPOINT, options)
    .then(handleHttpErrors)
    .then(res => {
      setToken(res.token);
      return res;
    });
};

const fetchData = (url) => {
  const options = makeOptions("GET", true);

  return fetch(API_URL + url, options)
    .then(handleHttpErrors);
};

const getTokenData = () => {
  const token = getToken();

  if (!token) return null;

  const payloadBase64 = token.split('.')[1];

  return JSON.parse(atob(payloadBase64));
};

const getUserRoles = () => {
  const tokenData = getTokenData();

  if (tokenData) {
    return tokenData.roles;
  }

  return "";
};

const hasUserAccess = (neededRole, isLoggedIn) => {
  const roles = getUserRoles();

  return isLoggedIn &&
    (Array.isArray(roles)
      ? roles.includes(neededRole)
      : String(roles).split(',').includes(neededRole));
};

const facade = {
  setToken,
  getToken,
  loggedIn,
  login,
  logout,
  makeOptions,
  fetchData,
  getTokenData,
  getUserRoles,
  hasUserAccess
};

export default facade;