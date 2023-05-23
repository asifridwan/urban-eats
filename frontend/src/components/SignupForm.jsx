import ErrorMessage from './ErrorMessage';
import InputField from './InputField';

export default function SignupForm() {
    const style = {
        parent: 'bg-white w-full px-12 py-16 rounded-lg shadow-lg',
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
                <InputField type='email' id='email' label='Email Address' />
                <InputField type='text' id='username' label='Username' />
                <InputField type='password' id='password_1' label='Password' />
                <InputField type='password' id='password_2' label='Confirm Password' />
                <button className={style.button}>Sign up</button>
                <p className={`${style.link} ${style.link_dark}`}>Already have an account ? Sign in</p>
            </form>
        </div>
    );
}