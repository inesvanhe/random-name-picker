function NameDisplay({ name }) {
  return (
  <div className="mx-auto w-full p-6">
    <p className="my-4 text-sm text-center uppercase tracking-widest text-white/50">Du bist dran:</p>
    <h3 className="text-center text-6xl font-bold drop-shadow-[0_0_60px_rgba(192,132,252,0.9)]">{name}</h3>
  </div>
  )
}

export default NameDisplay