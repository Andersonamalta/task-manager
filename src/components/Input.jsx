import InputLabel from "./InputLabel"

const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
      />
    </div>
  )
}

export default Input
