function StudentList({ students, activeIndex }) {
  return (
    <section className="max-w-md mx-auto mt-16 mb-8 rounded-2xl border border-sky-300/10 py-4">
      <h3 className="mb-3 text-center text-xl font-semibold">
        Klassenliste
      </h3>

      <div className="mx-auto mb-8 h-0.5 max-w-sm rounded-full bg-gradient-to-r from-pink-500/30 via-sky-400/30 to-cyan-300/30"></div>

      <ul className="grid grid-cols-3 gap-2 pb-2">
        {students.map((student, index) => (
          <li
            key={student}
            className={
              index === activeIndex
                ? 'scale-110 bg-gradient-to-r from-pink-400/70 via-fuchsia-300/70 via-sky-200/70 to-cyan-300/70 bg-clip-text text-center font-bold text-transparent transition-all duration-150'
                : 'text-center text-white/50 transition-all duration-150'
            }
          >
            {student}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StudentList