import Logo from '../components/Logo';
import SigninForm from '../components/SigninForm';

export default function SigninPage() {
    const style = {
        background: 'bg-gray-50 h-screen flex items-center justify-center',
        background_dark: 'dark:bg-gray-950',
        container: 'flex flex-col items-center space-y-6',
        tagline: 'text-gray-700 font-normal text-xl',
        tagline_dark: 'dark:text-gray-200'
    }

    return (
        <section className={`${style.background} ${style.background_dark}`}>
            <div className={style.container}>
                <Logo />
                <p className={`${style.tagline} ${style.tagline_dark}`}>Sign in to browse restaurants and bookmark your favorite ones !</p>
                <SigninForm />
            </div>
        </section>
    );
}