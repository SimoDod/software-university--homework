import { del, get, post, put } from "./api.js";

const endpoints = {
  login: "users/login",
  logout: "users/logout",
  register: "users/register",
  addAlbum: "data/albums",
  getAllItems: "data/albums?sortBy=_createdOn%20desc",
  getItemById: "data/albums/",
  onDelete: "data/albums/",
  edit: "data/albums/",
  getTotalLikes: "data/likes?where=albumId%3D%22",
  addLike: "data/likes",
  likeCheck: "data/likes?where=albumId%3D%22",
};

export async function onLogin(data) {
  return await post(endpoints.login, data);
}

export async function onLogout() {
  return await get(endpoints.logout);
}

export async function onRegister(data) {
  return await post(endpoints.register, data);
}

export async function onAddAlbum(data) {
  return await post(endpoints.addAlbum, data);
}

export async function getAllItems() {
  return await get(endpoints.getAllItems);
}

export async function getItemById(id) {
  return await get(endpoints.getItemById + id);
}

export async function onDelete(id) {
  return await del(endpoints.onDelete + id);
}

export async function onEdit(id, data) {
  return await put(endpoints.edit + id, data);
}

export async function getTotalLikes(itemId) {
  return await get(
    endpoints.getTotalLikes + itemId + "%22&distinct=_ownerId&count"
  );
}

export async function onAddLike(albumId) {
  return await post(endpoints.addLike, albumId);
}

export async function likeChecker(albumId, userId) {
  return await get(
    endpoints.likeCheck +
      albumId +
      "%22%20and%20_ownerId%3D%22" +
      userId +
      "%22&count"
  );
}
