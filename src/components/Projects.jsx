import macHome from '../Macbook-home.png'
import { Link } from "react-router-dom"

function Projects () {
    return (
        <section id='projects'>
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                        <h2 className="text-4xl font-bold text-center">What projects have I done?</h2>
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-orange-100 ">
                            <img src={macHome} className="w-20 -mt-14" alt=''/>
                            <h5 className="text-lg font-bold">CTRL-ALT-DIVAS</h5>
                            <p className="text-sm text-blue">Dive into the captivating world of coding with "Ctrl Alt Divas" an electrifying runner game with a retro vibe that combines the thrill of high-speed action with the excitement of skill development. Players step into the shoes of these four inspiring protagonists, each hailing from diverse backgrounds and possessing unique strengths and abilities. Join them as they sprint through a pixelated landscape, collecting skills and conquering viruses on their journey to the top of the leaderboard.</p>
                           
                        </div>
                        <div>
                            {/* <Link to='https://github.com/lcontr1'>Github</Link> */}
                        </div>
                        <div>
                            {/* <p>developercontreras@gmail.com</p> */}
                        </div>
                    </div>
                    {/* button */}
                    <div className="my-16">
                    <a href='https://ctrl-alt-divas-game.onrender.com/' className='p-3 px-6 pt-2 text-lightblue bg-sienna rounded-full baseline hover:bg-sunset'>Play the Game!
                    </a>
                    </div>
                </div>
            </section>
    )
}

export default Projects