import styled from 'styled-components';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

const Main = styled.main`
    display: flex;
    justify-content: space-around;

    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: stretch;
        width: 30vw;
        height: 50vh;
        background-color: lightblue;
        border: solid gray 3px;
    }

    div {
        flex-grow: 1;
    }

    input {
        display: block;
        width: 80%;
        height: 20%;
    }

    label {
        display: block;
        font-size: 1.5em;
    }


`;

function Login({user}) {
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const token = btoa(`${form.get("username")}:${form.get("password")}`);
        const loginRequest = new XMLHttpRequest();
        loginRequest.open("POST", "http://localhost:4000/api/login");
        loginRequest.setRequestHeader("Authorization", `Basic ${token}`);
        loginRequest.onload = () => {
            const data = JSON.parse(loginRequest.response);
            const route = ({
                RRHH: "/empleados",
                Comercial: "/propuestas",
                Tecnica: "/proyecto",
                Desarrollo: "/proyecto"
            })[data.area];
            data.token = token;
            user.set(data);
            navigate(route);
        };
        loginRequest.send();
    }

    return (
        <>
        <Nav user={user} />
        <Main>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' />
                </div>
                <button type="submit">Log In</button>
            </form>
        </Main>
        </>
    );
}
export default Login;
