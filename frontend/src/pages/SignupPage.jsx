import LogoBig from '../components/LogoBig';
import SignupForm from '../components/SignupForm';

export default function SignupPage() {
    const style = {
        background: 'bg-gray-100 h-screen flex flex-col items-center justify-center space-y-6',
        background_dark: 'dark:bg-gray-950',
        tagline: 'text-gray-700 text-xl',
        tagline_dark: 'dark:text-gray-200'
    };

    return (
        <section className={`${style.background} ${style.background_dark}`}>
            <LogoBig />
            <p className={`${style.tagline} ${style.tagline_dark}`}>Sign up to check out restaurants and bookmark your favorite ones !</p>
            <SignupForm />
        </section>
    );
}