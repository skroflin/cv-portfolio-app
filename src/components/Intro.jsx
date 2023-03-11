import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
            <h1 className="text-4xl md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold">
                Sven Kroflin
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Student <a href="https://www.ffos.unios.hr/" target="_blank" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600" rel="noreffer noopener">@Filozofski fakultet Osijek</a>
            </p>
            <p className="text-sm max-w-xl mb-6">
                My name is Sven Kroflin. I am 21 years old and I am a student at the Faculty of Humanities and Social Sciences. I am currently pursuing a undergraduate in Information and Library Sciences. 
                I am currently aspiring to one day work in the IT industry, preferably as a Frontend developer.
            </p>
        </div>
    )
}

export default Intro;