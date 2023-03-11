import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
            <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">
                Sven Kroflin
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Student <a href="https://www.ffos.unios.hr/" target="_blank" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600" rel="noreffer noopener">@Filozofski fakultet Osijek</a>
            </p>
        </div>
    )
}

export default Intro;