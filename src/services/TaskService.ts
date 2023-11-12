import axios from "axios";

const apiClient=axios.create({
    baseURL:'https://my-json-server.typicode.com/medhanafi/test',
    withCredentials:false,
    headers:{
        Accept:'appllication/json',
        'Content-Type':'appllication/json',
    },
})
export default{
    getTasks(){
        return apiClient.get('/tasks')
    },
    getTask(id){
        return apiClient.get('/tasks/'+id)
    },
}