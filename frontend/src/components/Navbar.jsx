import LogoSmall from './LogoSmall';

export default function Navbar() {
    const style = {
        nav: 'bg-white flex justify-evenly px-5 py-3',
        nav_dark: 'dark:bg-gray-900',
        ul: 'text-gray-700 font-medium flex space-x-12',
        ul_dark: 'dark:text-gray-300',
        i: 'ri-user-fill',
        span: 'ml-2'
    };

    return (
        <nav className={`${style.nav} ${style.nav_dark}`}>
            <LogoSmall />
            <ul className={`${style.ul} ${style.ul_dark}`}>
                <li>Browse</li>
                <li>Collections</li>
                <li>Sign out</li>
                <li>Toggle Theme</li>
                <li>
                    <i className={style.i}></i>
                    <span className={style.span}>Username</span>
                </li>
            </ul>
        </nav>
    );
}