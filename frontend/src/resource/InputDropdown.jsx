export default function InputDropdown({id, label}) {
    const style = {
        parent: 'space-y-2',
        label: 'block text-sm font-medium text-gray-700',
        label_dark: 'dark:text-gray-300',
        select: 'w-full outline-none border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900',
        select_dark: 'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
        option: 'text-gray-900',
        option_dark: 'dark:text-gray-100'
    };

    return (
        <div className={style.parent}>
            <label htmlFor={id} className={`${style.label} ${style.label_dark}`}>{label}</label>
            <select name='oldcollection' id={id} className={`${style.select} ${style.select_dark}`}>
                <option value='' className={`${style.option} ${style.option_dark}`}>Option 1</option>
                <option value='' className={`${style.option} ${style.option_dark}`}>Option 1</option>
                <option value='' className={`${style.option} ${style.option_dark}`}>Option 1</option>
            </select>
        </div>
    );
}