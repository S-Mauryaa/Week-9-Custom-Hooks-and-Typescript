
import './App.css'

function App() {
  return (
   <>
   <Todo
   title='hit there'
   description='hello'
   done={false}/>
    </>
    
  )
}
 interface Todoprop{
      title: string,
      description: string,
      done: boolean
    }
      function Todo(props:Todoprop){ 
        return <div>
          <h1>{props.title}</h1>
          <h2>{props.description}</h2>
        </div>
      }

export default App
