
import { Box } from "@mui/material"
import { Link } from "react-router-dom"



const Header = () => {


    return(
        <Box>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart</Link>
        </Box>
    )
}

export default Header