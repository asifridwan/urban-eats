import InputField from '../resource/InputField';

export default function RenameModal() {
    const style = {
        parent: 'bg-white w-1/4 px-10 py-14 rounded-lg shadow-lg',
        parent_dark: 'dark:bg-gray-900 dark:shadow-none',
        form: 'space-y-7',
        contain: 'space-x-6',
        button: 'text-sm font-medium text-white px-5 py-2 rounded-md',
        confirm: 'bg-indigo-700 hover:bg-indigo-500',
        cancel: 'bg-rose-700 hover:bg-rose-500'
    };

    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            <form action='' className={style.form}>
                <InputField type='text' id='newname' label='Enter a new name for the collection' required={true} />
                <div className={style.contain}>
                    <button className={`${style.button} ${style.confirm}`}>Confirm</button>
                    <button className={`${style.button} ${style.cancel}`}>Cancel</button>
                </div>
            </form>
        </div>
    );
}