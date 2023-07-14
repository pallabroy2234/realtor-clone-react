import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-50 bg-white border-b shadow-sm'>
        <header className='flex items-center justify-between max-w-6xl px-3 mx-auto'>
          <div>
            <NavLink to='/'>
              <img className='h-5 cursor-pointer ' src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' />
            </NavLink>
          </div>
          <div>
            <nav className='py-3 space-x-10'>
              <NavLink to='/' className={({isActive}) => (isActive ? "text-black  border-b-red-400 border-b-[3px] py-3 font-semibold" : "text-gray-400 font-semibold")}>
                Home
              </NavLink>
              <NavLink to='/offers' className={({isActive}) => (isActive ? "font-semibold text-black border-b-red-400 border-b-[3px] py-3 " : "font-semibold text-gray-400")}>
                Offers
              </NavLink>
              <NavLink to='/sign-in' className={({isActive}) => (isActive ? "text-black font-semibold  border-b-red-400 border-b-[3px] py-3 " : "font-semibold text-gray-400")}>
                Sign In
              </NavLink>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
