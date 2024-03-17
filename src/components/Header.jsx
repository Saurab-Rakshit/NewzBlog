import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

// Using the dhiwise design to build

const Header = () => {
  const [state, setState] = useState({
    searchPopUp: false,
    hamburger: true,
  });

  const openSearch = () => {
    setSearchPop(true);
  };

  const toggleHamburger = () => {
    setState((prevState) => ({
      ...prevState,
      hamburger: !prevState.hamburger,
    }));
  };
  console.log(state.hamburger);

  return (
    <>
        <div className="bg-[#2b2d42] h-12 flex justify-between px-3 items-center sm:h-14">
            <div className="text-white font-mono font-semibold text-2xl">
                <div>Nuesy Blog's</div>
            </div>            
            <div className="flex gap-8 text-base hidden text-white md:hidden sm:hidden lg:flex">
                <div>Sports</div>
                <div>Health</div>
                <div>Political</div>
                <div>Business</div>
                <div>Finance</div>
                <div>Life</div>
                <div>Entertainment</div>                
            </div>                                             
            <div className="flex text-white gap-4 hidden lg:flex">
                <div className="pt-1 text-xl">
                <CiSearch />
                </div>
                <div>|</div>
                <div>Login</div>
                <div>Register</div>
            </div>

            {/* for smaller screen starts */}
            <div className="flex gap-7 lg:hidden">
                <div>
                    <input type="text" />
                </div>
                <div className="pt-1 text-2xl text-white">
                    <CiSearch />
                </div>
                <div className="flex text-white text-2xl sm:text-3xl lg:">
                {state.hamburger ? (            
                    <div>                
                    <GiHamburgerMenu onClick={toggleHamburger} />
                    </div>            
                ) : (
                    <div>
                    <RxCross2 onClick={toggleHamburger} />
                    </div>
                )}
                </div>
            </div>
            {/* for smaller screen ends */}
        </div>
        {!state.hamburger && (
        <div className="flex justify-end">
          <div className="bg-[#2b2d42] text-xl text-white font-mono space-y-5 pl-4 py-5 flex flex-col items-start w-1/2 sm:space-y-3 sm:w-1/3 md:space-y-6 md:py-10">            
            <div>Sports</div>
            <div>Health</div>
            <div>Political</div>
            <div>Business</div>
            <div>Finance</div>
            <div>Life</div>
            <div>Entertainment</div>
            <div>Login</div>
            <div>Register</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

/* 
<>
        <div className='bg-[#2b2d42] h-20 flex justify-between items-center px-10'>
            <div className="text-2xl font-semibold text-white">
                <div>Nuesy Blog's</div>
            </div>
            
            <div className="flex gap-8 text-base text-white">
                <div>Sports</div>
                <div>Health</div>
                <div>Political</div>
                <div>Business</div>
                <div>Finance</div>
                <div>Life</div>
                <div>Entertainment</div>                
            </div>
            
            
            <div className="flex text-white gap-4">
                <div className="pt-1 text-xl">
                    <CiSearch />
                </div>
                <div>|</div>
                <div>Login</div>
                <div>Register</div>
            </div>
            
        </div>

        <div className="mt-20 border border-red-500 flex justify-center">
            <div className="h-10 border border-black w-1/2">

            </div>
        </div>
    </>

*/
