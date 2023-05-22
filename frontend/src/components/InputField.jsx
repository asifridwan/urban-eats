export default function InputField({type, id, label, placeholder}) {
    const style = {
        parent: 'space-y-2',
        label: 'block text-sm font-medium text-gray-700',
        field: 'w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 outline-indigo-700',
        placeholder: 'placeholder:text-gray-400'
    }

    return (
        <div className={style.parent}>
            <label htmlFor={id} className={style.label}>{label}</label>
            {type !== 'password' && <input type={type} id={id} placeholder={placeholder} className={`${style.field} ${style.placeholder}`} required />}
            {type === 'password' && <input type='password' id={id} className={style.field} required />}
        </div>
    );
}