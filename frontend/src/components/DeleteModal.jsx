import LogoSmall from '../resource/LogoSmall';

export default function DeleteModal() {
    const style = {
        parent: 'bg-white w-1/5 px-12 py-8 space-y-4 rounded-lg shadow-lg flex flex-col items-center',
        parent_dark: 'dark:bg-gray-900 dark:shadow-none',
        tagline: 'text-gray-700 dark:text-gray-200',
        contain: 'space-x-6',
        button: 'text-sm font-medium text-white px-5 py-2 rounded-md',
        confirm: 'bg-indigo-700 hover:bg-indigo-500',
        cancel: 'bg-rose-700 hover:bg-rose-500'
    };
    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            <LogoSmall modal={true} text='Are you sure ?' />
            <p className={style.tagline}>This action can't be undone !</p>
            <div className={style.contain}>
                <button className={`${style.button} ${style.confirm}`}>Confirm</button>
                <button className={`${style.button} ${style.cancel}`}>Cancel</button>
            </div>
        </div>
    );
}