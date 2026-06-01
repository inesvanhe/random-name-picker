import { useState } from 'react'
import './App.css'
import { students } from './students.js'
import PickButton from './components/PickButton.jsx'
import NameDisplay from './components/NameDisplay.jsx'
import StudentList from './components/StudentList.jsx'

function App() {
  const [name, setName] = useState('Noch niemand ausgewählt')
  const pickRandomName = () => {
    const randomIndex = Math.floor(Math.random() * students.length)
    setName(students[randomIndex])
  }
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <header>
        <p>RANDOM NAME PICKER</p>
      </header>
      <main>
        <NameDisplay name={name} />
        <PickButton onPick={pickRandomName} />
        <StudentList students={students} />
      </main>
      <footer>Erstellt für den Unterricht</footer>
    </div>
    </>
  )
}

export default App
