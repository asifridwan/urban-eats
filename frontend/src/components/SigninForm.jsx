import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

export default function SigninForm() {
    const style = {
        parent: 'bg-white w-full px-12 py-16 rounded-lg',
        parent_dark: 'dark:bg-gray-900',
        form: 'flex flex-col space-y-5',
        button: 'text-sm font-medium text-white bg-indigo-700 px-3 py-2 rounded-md hover:bg-indigo-500',
        register: 'text-sm text-gray-600',
        register_dark: 'dark:text-gray-400'
    }

    return (
        <div className={`${style.parent} ${style.parent_dark}`}>
            <form action='' className={style.form}>
                <ErrorMessage message='Error Message' />
                <InputField type='text' id='signinid' label='Email or Username' placeholder='name@example.com' />
                <InputField type='password' id='signinpassword' label='Password' />
                <button className={style.button}>Sign in</button>
                <p className={`${style.register} ${style.register_dark}`}>Don't have an account ? Sign up now</p>
            </form>
        </div>
    );
}