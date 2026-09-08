import { useState } from "react";
import Form from "../components/Form";
import TextField from "../components/TextField";



export default function Login(){
const [username, setUsername] = useState("");

return <h6>
 Login

<Form>
    <TextField
        label="Nombre de usuario: "
        value={username}
        onChange={setUsername}
    />  
</Form>

<div>
    <p>Nombre de usuario: {username}</p>
</div>

</h6>;
}
