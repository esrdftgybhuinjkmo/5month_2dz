 import {useState, useEffect} from 'react'

function App() {
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
     const saveName = localStorage.getItem('name') || ''
     const saveTasks = JSON.parse(localStorage.getItem('tasks')) || []
     setName(saveName)
     setTasks(saveTasks)
  }, [])

  const addToName = () => {
   const saveElements =  [...tasks, name]
   setTasks(saveElements)
   localStorage.setItem('tasks', JSON.stringify(saveElements))

  }
  

  return (
    <div>
      <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <button onClick={addToName}>Edit</button>
      
      {
        tasks.map((tasks, index) => (
          <h3 key={index}> {tasks}</h3>
        ))
      }

     
    </div>
  );
}

export default App;





