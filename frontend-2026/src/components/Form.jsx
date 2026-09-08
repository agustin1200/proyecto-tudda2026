export default function Form({ children }) {
    return (
        <form>
            {children}
            <input type="submit" value="Enviar" />
        </form>
    );
}