import httpService from "./httpService";

const url = "/users";

export function register(user) {
  return httpService.post(url, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}

export function getMovie(id) {
  return httpService.get(`${url}/${id}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(`${url}/${movie._id}`, body);
  }

  return httpService.post(url, movie);
}

export function deleteMovie(id) {
  return httpService.delete(`${url}/${id}`);
}
