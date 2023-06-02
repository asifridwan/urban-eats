export default function LogoSmall({modal, text}) {
    const style = {
        parent: 'text-gray-900 uppercase text-lg font-bold',
        parent_dark: 'dark:text-gray-100',
        icon1: 'ri-restaurant-fill',
        icon2: 'ri-question-line',
        text: 'ml-2'
    };

    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            {modal ? <i className={style.icon2}></i> : <i className={style.icon1}></i>}
            <span className={style.text}>{text}</span>
        </div>
    );
}