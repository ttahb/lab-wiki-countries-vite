import { Link } from "react-router-dom"
function Border({border}){

    return (
        <Link to={`/${border}`} >
            <p>{border}</p>
        </Link>
    )
}

export default Border;