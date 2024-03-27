import logo from '../logo.png'
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer () {
    const iconStyles = { color: 'white', fontSize: "50px" }
    return (
        <footer className="bg-darkblue">
                <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* logo and social links container */}
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                <div className="flex mx-auto my-6 text-center text-white md:hidden">
                Copyright <FaRegCopyright /> 2024, All Rights Reserved
                </div>
                {/* logo */}
                    <div className="mt-10 md:mb-10">
                        <img src={logo} className="h-20" alt=''/>
                    </div>
                {/* social links container */}
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/lilianacontreras/">
                            <LiaLinkedin style={iconStyles}/>
                        </a>
                        <a href="https://github.com/lcontr1">
                            <FaGithub style={iconStyles} />
                        </a>
                    

                    </div>
                </div>
                {/* list container */}
                <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-sunset">Tecknical Skills</a>
                <a href="#" className="hover:text-sunset">Projects</a>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-sunset">About Me</a>
                <a href="#" className="hover:text-sunset">Let's Chat</a>
                </div>
                </div>
                {/* input container */}
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="send me a message"/>
                            <button className="px-6 py-2 text-white rounded-full bg-sienna hover:bg-orange-100 focus:outline-none">
                            Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden flex text-white md:block md:flex">
                    Copyright<FaRegCopyright /> 2024, All Rights Reserved



                    </div>
                </div>
                </div>
            </footer>
    )
}

export default Footer