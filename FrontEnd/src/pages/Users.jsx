import {useSate} from 'react';
import From from '../components/Form';
import TextField from '../components/TextField';
import SecretField from '../components/SecretField'
import { Form } from 'react-router-dom';


export default function User(){
    const [data, setData] = useState({
        username: '',
        displayName: '',
        email: '',
    });

    return <Form
       title="Agregar usuario"
    >
        <TextField
        label="Nombre de usuario:"
        value={data.username}
        onChange={newValue => setData(data => ({ ...data, username: newValue }))}
        />

        <TextField
        label="Nombre de completo:"
        value={data.displayName}
        onChange={newValue => setData(data => ({ ... data, displayName: newValue }))}
        />


        <TextField 
        label="Correo electronico:" 
        value={data.email}
        onChange={newValue => setData(data => ({ ...data, email: newValue }))} 
        />

        <SecretField
        label="Contraseña:"
        value={data.password}
        onChange={newValue => setData(data => ({ ...data, password: newValue }))}
        />

        </Form>


}