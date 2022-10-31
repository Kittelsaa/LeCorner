import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
  return (
    <>
    <button onClick={onClick} className="overline italic text-slate-300 ml-16 mr-8 mt-12 w-32 h-4">{text}</button>
    </>
  )
}

Button.protoTypes ={
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
