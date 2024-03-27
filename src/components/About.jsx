import Liliana from '../liliana.jpg'

function About () {

    return (
        <section id='hero' className="container flex        flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Hello there, I am Liliana Contreras. I'm a Full Stack Developer.
                </h1>
                <p className="max-w-sm text-center text-lightblue md:text-left">Continously learning to make all your website dreams come true. Let's create something worthwhile together.
                </p>
                {/* could insert a button or something here */}
                <div className="flex justify-center md:jusitfy-start">
                                       
                </div>
                
            </div>
                
            <div className="md:w-1/2">
                    <img className='h-1/2 rounded' src={Liliana} alt='photo of Liliana Contreras' />
            </div>
        </section>
    )
}

export default About