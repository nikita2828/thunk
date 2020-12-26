const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = {
    todo: {
        getTodos: () => fetch(`${BASE_URL}/todos`).then(res => res.json())
    },
}
export default api