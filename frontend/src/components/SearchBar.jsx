export default function SearchBar() {
    const style = {
        parent: 'flex space-x-3',
        searchbox: 'bg-white w-max px-5 py-2 rounded-md border-2 border-gray-200 text-sm text-gray-900 font-light',
        searchbox_dark: 'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
        input: 'bg-inherit outline-none',
        icon: 'ri-search-line',
        select: 'outline-none rounded-md border-2 border-gray-200 text-sm text-gray-500 font-light',
        select_dark: 'dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
        option: 'text-gray-500 font-light',
        option_dark: 'dark:text-gray-100'
    };

    return (
        <div className={style.parent}>
            <div className={`${style.searchbox} ${style.searchbox_dark}`}>
                <input type='text' className={style.input} placeholder='Search...' />
                <i className={style.icon}></i>
            </div>
            <select name='' id='' className={`${style.select} ${style.select_dark}`}>
                <option value='' className={`${style.option} ${style.option_dark}`}>Name</option>
                <option value='' className={`${style.option} ${style.option_dark}`}>Date and Time</option>
            </select>
        </div>
    );
}