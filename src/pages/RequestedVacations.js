import styled from "styled-components";
import Nav from "../components/Navbar";

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
            <div className="vacations">
                {vacationRequests === null ? <p>cargando</p> : 
                (vacationRequests.length === 0 ? <p>no hay vacaciones</p> :
                vacationRequests.filter(vacation => vacation.estado === "En observacion").map(vacation => <VacationCard vacation={vacation} />))}
            </div>
        </Main>
        </>
    );
}