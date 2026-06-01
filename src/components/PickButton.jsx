function PickButton({ onPick }) {
  return (
    <button onClick={onPick} className="mt-8 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500/50 via-sky-400/50 to-cyan-300/50 px-6 py-3 font-semibold text-white/705shadow-lg transition-all duration-300 hover:text-black/75 hover:from-pink-500/75 hover:via-sky-400/75 hover:to-cyan-300/75 hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98]">Zufälligen Namen auswählen</button>
  )
}

export default PickButton