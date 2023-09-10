import styled from "styled-components";
import logo from '../logo.png';


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
`;

export default function Navbar({ user }) {
    return (
        <StyledNav>

            <ul>
                <li><p to="/proyecto">Proyecto</p></li>

                <li><p to="/propuestas">Propuestas</p></li>

                <li><p to="/empleados">Empleados</p></li>

                <li><p to="/vacaciones">Vacaciones</p></li>

                <li><p to="/cuenta">Cuenta</p></li>
            </ul>
            <img src={logo} alt='Logo' />

        </StyledNav>
    );
}