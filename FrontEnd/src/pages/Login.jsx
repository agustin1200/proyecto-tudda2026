import { useState } from "react";
import  {useNavigate} from "react-router-dom";
import Form from "../components/Form";
import TextField from "../components/TextField";
import SecretField from "../components/SecretField";
import useLogin from "../services/useLogin"; 

 


export default function Login(){
    const navigate = useNavigate();
    const {login} = useLogin();
    const [data, setData] = useState({
        username: '',
        password: '',
});

async function handleSubmit(e){
    e.preventDefault();
    const res = await login(data);
    console.log(res);
}


function cancelHandler(){
    navigate('/');
}

return <Form 
        onSubmit={handleSubmit}
        onCancel={cancelHandler}
        title="Login"
        sumbitLabel="Iniciar sesión"
>

    <TextField
        label="Nombre de usuario: "
        value={data.username}
        onChange={newValue => setData(data => ({...data, username: newValue}))}
        required
    />  
    <SecretField
        label="Contraseña: "
        value={data.password}
        onChange={newValue => setData(data => ({...data, password: newValue}))}
        required
    />
</Form>;

}
