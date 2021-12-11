import http from "../http-common";

const getAll = () => {
  return http.get("/user_accounts");
};

const get = account_no => {
  return http.get(`/tutorials/${account_no}`);
};

const create = data => {
  //return http.post("/tutorials", data);
  return http.post("/user", data);
};
const update = (account_no, data) => {
  return http.put(`/tutorials/${account_no}`, data);
};

const remove = account_no => {
  return http.delete(`/tutorials/${account_no}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTransaction = transaction => {
  return http.get(`/tutorials?transaction=${transaction}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTransaction
};