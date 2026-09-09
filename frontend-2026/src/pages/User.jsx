import { useState } from "react";
import Form from "../components/Form";
import TextField from "../components/TextField";
import SecretField from "../components/SecretField";
import SelectField from "../components/SelectField";

export default function User() {
    const [data, setData] = useState({
        username: '',
        displayName: '',
        email: '',
        password: '',
        role: 'user'
    });



    return   <Form
        title="Agregar usuario"
    > 
        <TextField 
        label="Nombre de Usuario:" 
        value={data.username}
        onChange={newValue => setData(data => ({...data, username: newValue}))}
        />

        <TextField
        label="Nombre Completo:"
        value={data.displayName}
        onChange={newValue => setData(data => ({...data, displayName: newValue}))}
        />

        <TextField
        label="Correo electronico:"
        value={data.email}
        onChange={newValue => setData(data => ({...data, email: newValue}))}
        />

        <SecretField
        label="Contraseña:"
        value={data.password}
        onChange={newValue => setData(data => ({...data, password: newValue}))}
        />
        <SelectField
        label="Rol:"
        value={data.role}
        onChange={newValue => setData(data => ({...data, role: newValue}))}
        options={[
            {value: 'user', label: 'Usuario'},
            {value: 'admin', label: 'Administrador'}
        ]}  
        />  

    </Form>
}