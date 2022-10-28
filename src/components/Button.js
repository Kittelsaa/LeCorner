import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
  return (
    <>
    <button onClick={onClick} className="overline italic text-slate-300 m-0 pl-40 mt-12 w-64 h-4">{text}</button>
    </>
  )
}

Button.protoTypes ={
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
