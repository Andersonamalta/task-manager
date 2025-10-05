import InputLabel from "./InputLabel"
import InputErrorMessage from "./InputErrorMessage"

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
      />
      {error && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </div>
  )
}

/*const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        ref={ref}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
      />
      {error && (
        <span className="text-left text-xs text-red-500">{error.message}</span>
      )}
    </div>
  )
})*/

export default Input
