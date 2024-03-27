function Cta () {

    return (
        <section id='cta' className="bg-sienna">
            {/* flex container */}
            <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md?py-12 md:flex-row md:space-y-0">
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:mx-w-xl md:text-left">
                Lets get to know each other!
                </h2>
                <div>
                    <a href='#' className='p-3 px-6 pt-2 text-sienna bg-white rounded-full shadow-2xl baseline hover:bg-orange-100'>Get in Touch
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Cta