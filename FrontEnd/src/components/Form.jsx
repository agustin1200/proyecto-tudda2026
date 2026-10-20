export default function Form({ 
    title,
    children,
    onSubmit,
    sumbitLabel = 'Enviar',
    onCancel,
    cancelLabel = 'Cancelar'    

}) {
    return <form onSubmit={onSubmit}
        >

            {title && <h3>{title}</h3>}
            {children}
            {onCancel && <input 
            type="button" 
            value={cancelLabel} 
            onClick={onCancel} />}

            <input type="submit" value={sumbitLabel} />
        </form>
 
        
}