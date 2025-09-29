import InputLabel from "./InputLabel"

const TimeSelect = () => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlfor="time">Horário</InputLabel>
      <select
        id="time"
        className="appearance-none rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>
    </div>
  )
}

export default TimeSelect
