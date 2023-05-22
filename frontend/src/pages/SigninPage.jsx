import Logo from '../components/Logo';
import SigninForm from '../components/SigninForm';

export default function SigninPage() {
    const style = {
        background: 'bg-slate-50 h-screen flex items-center justify-center',
        container: 'flex flex-col items-center space-y-6',
        tagline: 'text-gray-700 font-normal text-xl'
    }

    return (
        <section className={style.background}>
            <div className={style.container}>
                <Logo />
                <p className={style.tagline}>Sign in to browse restaurants and bookmark your favorite ones !</p>
                <SigninForm />
            </div>
        </section>
    );
}