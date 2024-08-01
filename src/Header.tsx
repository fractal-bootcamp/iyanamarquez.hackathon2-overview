import FRACTAL_TECH from "./assets/page1assets/FRACTAL_TECH.svg";
import titlewrap from "./assets/page1assets/titlewrap.svg";

const Header = () => {
    // this is the first page view
    return <header id="header" className="firstPage ">
        <div id="header-bg" ></div>
        <div id="header-content" className="text-white header-content">
            <img className="absolute w-1/3" src={FRACTAL_TECH} alt="fractaltitle" />
            <img className="absolute top-20 left-40" src={titlewrap} alt="titlewrap" />

        </div>
        <div className="absolute bottom-0 left-0 bg-red-500 h-24 w-full">

        </div>

    </header>;
};

export default Header;

