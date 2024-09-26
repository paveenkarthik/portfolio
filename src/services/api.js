import axios from 'axios';

const API="https://66ee8db43ed5bb4d0bf14800.mockapi.io"

const getProjects=()=>axios.get(`${API}/cluster`)
const getprojectID=()=>axios.get(`${API}/cluster/${id}`)
const addProject=(projectdata)=> axios.post(`${API}/cluster`,projectdata)
const editproject=(id,projectdata)=>axios.put( `${API}/cluster/${id}`,projectdata)
const deleteProject=(id)=>axios.delete(`${API}/cluster/${id}`)
export {getProjects,addProject, editproject,deleteProject,getprojectID }