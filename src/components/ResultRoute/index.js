import './index.css'

const ResultRoute = props => {
  const {itemDetails} = props
  const {userInput, letterCount} = itemDetails
  return (
    <li className="list">
      <p className="result">
        {userInput}: {letterCount}
      </p>
    </li>
  )
}

export default ResultRoute
