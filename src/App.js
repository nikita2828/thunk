import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
// import {getTodos} from "./store/todo/actions"
import {getTodosRequest, getTodosSuccess, getTodosError} from "./store/todo/actions"
import api from "./utills/api"


function App() {
const {todos, loading} = useSelector((state) => ({todos: state.todos.data, loading: state.todos.loading}))
const dispatch = useDispatch()
useEffect(() => {
  dispatch(dispatch => 
    dispatch(getTodosRequest()),
  api.todo.getTodos().then(data => {
    dispatch(getTodosSuccess(data))
  })
  .catch(err => dispatch(getTodosError(err))))
}, [])
  return (
    <>
    {loading&&<h1>Loading...</h1>}
    <ul>
      {todos.map((li) => <li key={li.id}>{li.title}</li>)}
    </ul>
    </>
  );
}

export default App;
