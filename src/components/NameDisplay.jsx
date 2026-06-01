function NameDisplay({ name }) {
  return (
  <div className="rounded-2xl
    border
    border-purple-300/30
    p-6
  ">
    <h3 className="text-center
    text-4xl
    font-bold
    bg-gradient-to-r
    from-pink-500
    via-sky-400
    to-cyan-300
    bg-[length:150%_150%]
    bg-clip-text
    text-transparent">{name}</h3>
  </div>
  )
}

export default NameDisplay