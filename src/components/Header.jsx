import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route == location.pathname) {
      return true;
    }
  };
  return (
    <>
      <div className='sticky top-0 z-50 bg-white border-b shadow-sm'>
        <header className='flex items-center justify-between max-w-6xl px-3 mx-auto'>
          <div>
            <Link to='/'>
              <img className='h-5 cursor-pointer ' src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' />
            </Link>
          </div>
          <div>
            <ul className='flex space-x-10'>
              <Link to='/' className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}>
                Home
              </Link>
              <Link to='/offers' className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}>
                Offers
              </Link>
              <Link to='/sign-in' className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}>
                Sign In
              </Link>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
