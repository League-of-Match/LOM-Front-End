import logo from "../../assets/logo.svg";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";

export function Header() {
  
  return (
    <StyledHeader>
      <img src={logo} alt="Logo do Site" />

      <button>
        <span></span>
        <span></span>
      </button>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link className="emphasis" to={"/players"}>Dashboard</Link>
          </li>

          <li>
            <Link to={"/myprofile"}>Meu Perfil</Link>
          </li>

          <li>
            <Link to={"/login"}>Sair</Link>
          </li>
        </ul>
      </nav>

    </StyledHeader>
  );
}
