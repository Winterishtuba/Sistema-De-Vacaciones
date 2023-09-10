import styled from "styled-components";
import Overlay from "./overlay";
import { useState } from "react";
import vacaciones from "./Vacaciones";
import empleadoHistorial from "./empleadoHistorial";
import VacationCard from "./vacacionescard";

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export default function EmpleadoCarta({employee, vacationRequests}) {
    const [showEmployee, setShowEmployee] = useState(false);
    const filteredVacations = vacationRequests.filter(
        request => employee.PK_dni === request.employee.PK_dni && 
                    ["Aprobado", "Rechazado"].includes(request.estado));
    return (
        <>
        <Div>
            <h2>{employee.nombre}</h2>
            <button onClick={() => setShowEmployee(!showEmployee)}>Historial</button>
        </Div>
        <Overlay show={showEmployee}>
            <EmpleadoCarta employee={employee}>
                {filteredVacations.map(vacation => <VacationCard vacation={vacation} />)}
            </EmpleadoCarta>
            <button onClick={() => setShowEmployee(!showEmployee)}>close</button>
        </Overlay>
        </>
    );
}