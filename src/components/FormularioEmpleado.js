import styled from "styled-components";
import Nav from "../components/Nav";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Main = styled.main`
    display: flex;
    justify-content: space-around;
    form {
        background-color: aqua;
    }
`;

export default function FormularioEmpleado({user}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (user.get() === null)
            navigate("/");
    });

    async function handleSubmit(event) {
        event.preventDefault();
        // const form = new FormData(event.target);
        // const body = new URLSearchParams(form);
        // body.append("username", user.get().credentials.username);
        // body.append("password", user.get().credentials.password);
        // let response;
        // try {
        //     response = await fetch(`http://${window.location.hostname}:4000/api/login`,{
        //         method: "POST",
        //         body: body,
        //     });
        // } catch (error) {
        //     console.log('error');
        //     console.log(error);
        //     return;
        // }
        // if (response.status !== 200)
        // return;
        // console.log('success');
    }

    return (
        <>
        <Nav user={user} />
        <Main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" name='username' />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="text" name='password' />
                </div>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name='name' />
                </div>
                <div>
                    <label htmlFor="surname">Apellido</label>
                    <input type="text" name='surname' />
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <input type="text" name='dni' />
                </div>
                <div>
                    <label htmlFor="tel">Telefono</label>
                    <input type="text" name='tel' />
                </div>
                <div>
                    <label htmlFor="address">Direccion</label>
                    <input type="text" name='address' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' />
                </div>
                <div>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input type="date" name='birthdate' />
                </div>
            </form>
        </Main>
        </>
    );
}