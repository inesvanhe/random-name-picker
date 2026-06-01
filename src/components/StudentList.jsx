function StudentList({ students }) {
  return (
    <section className="max-w-md mx-auto mt-16 mb-8 rounded-2xl border border-sky-300/10 py-4">
      <h3 className="text-center mb-3 text-xl font-semibold">Klassenliste</h3>
      <div className="mx-auto h-0.5 max-w-sm rounded-full bg-gradient-to-r from-pink-500/30 via-sky-400/30 to-cyan-300/30 mb-8"></div>
      <ul className="grid grid-cols-3 gap-2 pb-2">{students.map((student) => (
        <li key={student} className="text-center text-white/50">{student}</li>))}
      </ul>
    </section>
  )
}

export default StudentList