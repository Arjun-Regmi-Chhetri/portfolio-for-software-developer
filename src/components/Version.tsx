import { Link } from "react-router-dom"
const pathName = "http://arjunregmichhetri.vercel.app/"
const Version = () => {
  return (
    <Link to={pathName} className="version">
       <h2>V<sub>2</sub></h2>
    </Link>
  )
}

export default Version
