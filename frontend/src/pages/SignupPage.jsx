import LogoBig from '../components/LogoBig';
import SignupForm from '../components/SignupForm';

export default function SignupPage() {
    const style = {
        background: 'bg-gray-100 h-screen flex items-center justify-center',
        background_dark: 'dark:bg-gray-950',
        container: 'flex flex-col items-center space-y-6',
        tagline: 'text-gray-700 font-normal text-xl',
        tagline_dark: 'dark:text-gray-200'
    };

    return (
        <section className={`${style.background} ${style.background_dark}`}>
            <div className={style.container}>
                <LogoBig />
                <p className={`${style.tagline} ${style.tagline_dark}`}>Sign up to check out restaurants and bookmark your favorite ones !</p>
                <SignupForm />
            </div>
        </section>
    );
}