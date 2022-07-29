import axios from "axios";

class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getPizzas(categoryId, sortProperty, searchValue, currentPage) {
    return axios.get(
      `${this._url}/items?page=${currentPage}&limit=4&${
        //пагинация с бэка
        categoryId > 0 ? `category=${categoryId}` : "" //сортировку по типу
      }&sortBy=${sortProperty.replace("-", "")}&order=${
        //сортировка по убыванию/повышению цены, популярности, по алфавиту
        sortProperty.includes("-") ? "asc" : "desc"
      }&&${
        searchValue ? `search=${searchValue}` : "" //фильтрация по поиску слова в header
      }`,
      {
        headers: this._headers,
      }
    );
  }
}

const api = new Api({
  url: "https://62c80ec00f32635590d05660.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
