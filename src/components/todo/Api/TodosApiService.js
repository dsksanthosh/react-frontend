import { apiClient } from "./ApiClient"


export const retrieveTodosApi = (username) => apiClient.get(`/users/${username}/todos`)

export const deleteTodosApi = (username,id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveTodoApi = (username,id) => apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoApi = (username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)

export const addTodoApi = (username,todo) => apiClient.post(`/users/${username}/todos`,todo)



