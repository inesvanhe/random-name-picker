import { useState } from 'react'
import { students } from './students.js'
import PickButton from './components/PickButton.jsx'
import NameDisplay from './components/NameDisplay.jsx'
import StudentList from './components/StudentList.jsx'

function App() {
  const [name, setName] = useState('-')
  const pickRandomName = () => {
    const randomIndex = Math.floor(Math.random() * students.length)
    setName(students[randomIndex])
  }
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-4">
        <header className="mb-8 text-center">
          <p className="animate-intro-title text-3xl mt-6 font-semibold bg-gradient-to-r from-pink-500/75 via-sky-400/75 to-cyan-300/75 bg-[length:150%_150%] bg-clip-text text-transparent">RANDOM NAME PICKER</p>
        </header>
      </div>
      < main className="w-full animate-fade-in-content">
        <NameDisplay name={name} />
        <PickButton onPick={pickRandomName} />
        <StudentList students={students} />
      </main>
      <footer className="animate-fade-in-content"></footer>
    </div>
    </>
  )
}

export default App
