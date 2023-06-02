import LogoBig from '../components/LogoBig';
import SigninForm from '../components/SigninForm';

export default function SigninPage() {
    const style = {
        background: 'bg-gray-100 h-screen flex flex-col items-center justify-center space-y-6',
        background_dark: 'dark:bg-gray-950',
        tagline: 'text-gray-700 text-xl',
        tagline_dark: 'dark:text-gray-200'
    };

    return (
        <section className={`${style.background} ${style.background_dark}`}>
            <LogoBig />
            <p className={`${style.tagline} ${style.tagline_dark}`}>Sign in to browse and manage your favorite restaurants</p>
            <SigninForm />
        </section>
    );
}