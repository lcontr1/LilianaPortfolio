function Features () {

    return (
        <section id='features'>
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">These are my technical skills:</h2>
                <p className="max-w-sm text-center text-lightblue md:text-left">I've been cultivating a love for developing for a few years now but have really honed in these skills in the past 6 months. I'm always learning more and more so come back to check what else I've learned!</p>
                </div>
                <div className="flex flex-col space-y-8 md:w-1/2">
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-sienna md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-sienna">
                            01
                            </div>
                                <h3 className="text-base font-bold md:hidden md:mb-4">
                                Proficient Skills
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Proficient Skills</h3>
                            <p className="text-lightblue">
                            Javascript
                            PostgreSQL
                            Express.js
                            Node.js
                            React
                            Redux
                            HTML5
                            CSS3
                            TailwindCSS
                            Github
                            Git
                            RESTful APIs

                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-sienna md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-sienna">
                            02
                            </div>
                                <h3 className="text-base font-bold md:hidden md:mb-4">
                                Knowledgable Skills
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Knowledgable Skills</h3>
                            <p className="text-lightblue">
                            PIXI.js
                            Matter.js
                            SQL
                            Render
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-sienna md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-sienna">
                            03
                            </div>
                                <h3 className="text-base font-bold md:hidden md:mb-4">
                                Cultivating Skills
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">Cultivating Skills</h3>
                            <p className="text-lightblue">
                            C#
                            Bootstrap
                            AWS 
                            Next.js
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
       
    )
}

export default Features