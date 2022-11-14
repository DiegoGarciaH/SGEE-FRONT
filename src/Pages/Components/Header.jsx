import { Link } from "react-router-dom"
import '../../styles/header.css';

export const Header = () => {
  return (
    <header className="header">
            <Link to="/" >
                <img src="../../../public/logo-SGEE.png" className="header-logo" />
            </Link>
    </header>
  )
}
