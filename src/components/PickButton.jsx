function PickButton({ onPick }) {
  return (
    <button onClick={onPick} className="mt-8
  w-full
  rounded-xl
  bg-gradient-to-r
  from-pink-500/50
  via-sky-400/50
  to-cyan-300/50
  px-4
  py-3
  font-semibold
  text-black
  shadow-lg
  transition-all
  duration-300
  hover:text-white/90
  hover:from-pink-500/75
  hover:via-sky-400/75
  hover:to-cyan-300/75
  hover:shadow-sky-500/30
  hover:scale-[1.02]
  active:scale-[0.98]
      ">
      Zufälligen Namen auswählen
    </button>
  )
}

export default PickButton