class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      console.log(JSON.parse("res"));
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/items`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const api = new Api({
  url: "https://62c80ec00f32635590d05660.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
