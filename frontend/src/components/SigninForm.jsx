import ErrorMessage from '../resource/ErrorMessage';
import InputField from '../resource/InputField';

export default function SigninForm() {
    const style = {
        parent: 'bg-white w-1/4 px-12 py-16 rounded-lg shadow-lg',
        parent_dark: 'dark:bg-gray-900 dark:shadow-none',
        form: 'flex flex-col space-y-5',
        button: 'text-sm font-medium text-white bg-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-500',
        link: 'text-sm text-gray-600',
        link_dark: 'dark:text-gray-400'
    };

    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            <form action='' className={style.form}>
                <ErrorMessage message='Error Message' />
                <InputField type='text' id='signinid' label='Email or Username' required={true} />
                <InputField type='password' id='signinpassword' label='Password' required={true} />
                <button className={style.button}>Sign in</button>
                <p className={`${style.link} ${style.link_dark}`}>Don't have an account ? Sign up now</p>
            </form>
        </div>
    );
}