import { useState } from 'react'
import { students } from './students.js'
import PickButton from './components/PickButton.jsx'
import NameDisplay from './components/NameDisplay.jsx'
import StudentList from './components/StudentList.jsx'

function App() {
  const [name, setName] = useState('-')
  const [activeIndex, setActiveIndex] = useState(null)
  const [isRolling, setIsRolling] = useState(false)

const pickRandomName = () => {
  if (isRolling) return

  setIsRolling(true)
  setName('-')

  const finalIndex = Math.floor(Math.random() * students.length)

  let currentIndex = Math.floor(Math.random() * students.length)
  let steps = 0
  const minRounds = students.length * 2
  const maxSteps = minRounds + finalIndex

  const roll = () => {
    setActiveIndex(currentIndex)

    currentIndex = (currentIndex + 1) % students.length
    steps++

    const delay = 50 + steps * 10

    if (steps <= maxSteps) {
      setTimeout(roll, delay)
    } else {
      setActiveIndex(finalIndex)
      setName(students[finalIndex])
      setIsRolling(false)
    }
  }

  roll()
}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-4">
        <header className="mb-8 text-center">
          <p className="animate-intro-title mt-6 text-3xl font-semibold bg-gradient-to-r from-pink-500/75 via-sky-400/75 to-cyan-300/75 bg-[length:150%_150%] bg-clip-text text-transparent">
            RANDOM NAME PICKER
          </p>
        </header>

        <main className="w-full animate-fade-in-content">
          <NameDisplay name={name} />
          <PickButton onPick={pickRandomName} isRolling={isRolling} />
          <StudentList students={students} activeIndex={activeIndex} />
        </main>

        <footer className="animate-fade-in-content"></footer>
      </div>
    </div>
  )
}

export default App