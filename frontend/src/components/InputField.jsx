export default function InputField({type, id, label}) {
    const style = {
        parent: 'space-y-2',
        label: 'block text-sm font-medium text-gray-700',
        label_dark: 'dark:text-gray-300',
        field: 'w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring focus:ring-indigo-700',
        field_dark: 'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100'
    };

    return (
        <div className={style.parent}>
            <label htmlFor={id} className={`${style.label} ${style.label_dark}`}>{label}</label>
            {type !== 'password' && <input type={type} id={id} className={`${style.field} ${style.field_dark}`} required />}
            {type === 'password' && <input type='password' id={id} className={`${style.field} ${style.field_dark}`} required />}
        </div>
    );
}