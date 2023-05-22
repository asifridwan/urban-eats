export default function Logo() {
    const style = {
        parent: 'text-gray-900 text-2xl font-bold uppercase',
        parent_dark: 'dark:text-gray-100',
        icon: 'ri-restaurant-fill',
        text: 'ml-2'
    }

    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            <i className={style.icon}></i>
            <span className={style.text}>Urban Eats</span>
        </div>
    );
}