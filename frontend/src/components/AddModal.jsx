import ErrorMessage from '../resource/ErrorMessage';
import InputField from '../resource/InputField';
import InputDropdown from '../resource/InputDropdown';

export default function AddModal() {
    const style = {
        parent: 'bg-white w-1/3 px-12 py-16 rounded-lg shadow-lg',
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
                <ErrorMessage message='Error Message' />
                <InputField type='text' id='newcollection' label='Enter a name of the new collection' />
                <InputDropdown id='oldcollection' label='Or select from an existing collection' />
                <div className={style.contain}>
                    <button className={`${style.button} ${style.confirm}`}>Confirm</button>
                    <button className={`${style.button} ${style.cancel}`}>Cancel</button>
                </div>
            </form>
        </div>
    );
}