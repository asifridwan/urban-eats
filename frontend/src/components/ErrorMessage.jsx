export default function ErrorMessage({message}) {
    const style = {
        parent: 'border-2 border-rose-700 rounded-md bg-rose-100 text-rose-700 text-sm px-3 py-2',
        icon: 'ri-error-warning-fill text-lg',
        message: 'ml-2'
    }

    return (
        <div className={style.parent}>
            <i className={style.icon}></i>
            <span className={style.message}>{message}</span>
        </div>
    );
}