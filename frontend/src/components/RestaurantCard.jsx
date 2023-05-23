export default function RestaurantCard() {
    const style = {
        parent: 'bg-white w-2/5 px-6 py-4 rounded-md space-y-3 shadow-lg',
        parent_dark: 'dark:bg-gray-900 dark:shadow-none',
        name: 'text-sm font-medium text-gray-900',
        name_dark: 'dark:text-gray-100',
        datetime: 'text-sm text-gray-700',
        datetime_dark: 'dark:text-gray-300',
        button: 'text-sm font-medium text-white bg-rose-700 px-3 py-2 rounded-md hover:bg-rose-500',
        icon: 'ri-heart-fill',
        span: 'ml-2'
    };

    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            <p className={`${style.name} ${style.name_dark}`}>Name</p>
            <p className={`${style.datetime} ${style.datetime_dark}`}>Date and Time</p>
            <button className={style.button}>
                <i className={style.icon}></i>
                <span className={style.span}>Add To Collection</span>
            </button>
        </div>
    );
}