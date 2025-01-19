import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchGroups = () => API.get("/groups");
export const createGroup = (groupData) => API.post("/groups", groupData);
export const deleteGroup = (id) => API.delete(`/groups/${id}`);
