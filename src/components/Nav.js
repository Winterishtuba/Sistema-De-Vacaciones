import styled from "styled-components";
import logo from '../logo.png';
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightblue;
    width: 100vw;
    position: fixed; /* Fija la barra de navegación en la parte superior */
    top: 0; /* Coloca la barra de navegación en la parte superior */
    left: 0;
    z-index: 1000; /* Asegura que esté por encima de otros elementos */

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    img {
        height: 75px; 
    }
    
    a {
        text-decoration: none; /* Elimina el subrayado */
        color: #000; /* Cambia el color a negro (#000) o al que desees */
    }
    `;

export default function Navbar({ user }) {
    return (
        <StyledNav>

            <ul>
                <li><Link to={"/proyectos"}>Proyectos</Link></li>

                <li><Link to={"/propuestas"}>Propuestas</Link></li>

                <li><Link to={"/empleados"}>Empleados</Link></li>

                <li><Link to={"/vacaciones"}>Vacaciones</Link></li>

                <li><Link to={"/cuenta"}>Cuenta</Link></li>
            </ul>
            <img src={logo} alt='Logo' />

        </StyledNav>
    );
}