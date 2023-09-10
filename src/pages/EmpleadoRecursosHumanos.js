import styled from "styled-components";
import Nav from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import empleadoHistorial from "../components/empleadoHistorial";
import Overlay from "../components/overlay";
import vacacionescard from "../components/vacacionescard";
import empleadoCarta from "../components/empleadoCarta";
import VacationCard from "../components/vacacionescard";

const Main = styled.main`
    display: flex;
    justify-content: space-around;

    div.employees, div.vacations {
        width: 15vw;
        background-color: red;
    }


`;

export default function Empleados({user}) {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState(null);
    const [vacationRequests, setVacationRequests] = useState(null);

    useEffect(() => {
        if (user.get() === null)
            navigate("/");
        async function fetchData() {
            // const response = await fetch(`http://${user.username}:${user.password}@${window.location.hostname}:4000/api/empleados`);
            // const data = await response.json();
            // setEmployees(data.employees);
            // setVacationRequests(data.vacationRequests);
            const employees = [{nombre: "empleado1", PK_dni: "dni1"}, {nombre: "empleado2", PK_dni: "dni2"}];
            const vacationRequests = [
                {employee: employees[0], desde: "99", hasta: "9999", estado: "Aprobado"}, 
                {employee: employees[1], desde: "69", hasta: "96969", estado: "Rechazado"},
                {employee: employees[1], desde: "77", hasta: "77777", estado: "En observacion"}
            ];
            setEmployees(employees);
            setVacationRequests(vacationRequests);
        }
        fetchData();
    },[]);

    return (
        <>
        <Nav user={user} />
        <Main>
            <div className="employees">
                <Link to="/empleados/new">Agregar empleado</Link>
                {employees === null ? <p>cargando</p> : 
                (employees.length === 0 ? <p>no hay nadie</p> :
                employees.map(employee => <empleadoCarta employee={employee} vacationRequests={vacationRequests} />))}
            </div>
            <div className="Vacations">
            <button onClick={navigate("./RequestedVacations")}>Ir a Ver Requests</button>
            </div>
        </Main>
        </>
    );
}