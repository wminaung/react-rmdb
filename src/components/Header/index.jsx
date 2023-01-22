import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => {
  return (
    <div className="bg-gray-900 py-5 px-0">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto">
        <img
          src={RMDBLogo}
          className={`w-[150px] sm:w-[200px] `}
          alt="rmdb_logo"
        />
        <img
          src={TMDBLogo}
          className={`w-[80px] sm:w-[100px]`}
          alt="tmdb_logo"
        />
      </div>
    </div>
  );
};

export default Header;
