import Form from "../components/Form";

export default function Login() {
    return <h6> Login
        <Form>
            <label>
                Nombre: 
                <input type="text" name="name" />
            </label>
        </Form>
    </h6>;
}