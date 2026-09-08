import Field from "./Field";

export default function TextField({
    label,
    value,
    onChange    
}) {
    return  <Field label="Nombre de usuario: ">
    
        <input 
        type="text" 
        value={(value)} 
        onInput={(e) => onChange?.(e.target.value)}
        />

    </Field>;
}