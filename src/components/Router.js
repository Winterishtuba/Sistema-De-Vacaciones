import {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import EmpleadoRecursosHumanos from '../pages/EmpleadoRecursosHumanos'
import Vacaciones from '../pages/Vacaciones'

export default function MyRouter(props) {
    const userState = useState(null);
    const user = {get: () => userState[0], set: userState[1]};
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Login user={user} />} />
                    <Route path='empleados'>
                        <Route index element={<EmpleadoRecursosHumanos user={user} />} />
                        {/* <Route path='/nuevo' element={<FormularioEmpleado user={user} />} /> */}
                        {/* <Route path=":idEmpleado" element={<Empleado user={user} />} /> */}
                    </Route>
                    <Route path="vacaciones">
                        <Route index element={<Vacaciones user={user} />} />
                    </Route>
                    
                </Route>
                <Route path='/*' element={<p>feeerdy404</p>} />
            </Routes>
        </BrowserRouter>
    );
}