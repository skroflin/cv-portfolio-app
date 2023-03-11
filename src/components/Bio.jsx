import React from "react";
import bio from "../data/bio";
import BioItem from "./BioItem";
import Title from "./Title";

function Bio() {
    return (
        <div className="flex flex-col md:flex-row items-center
        justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bio.map(education => (
                    <BioItem
                        title={education.title}
                        name={education.name}
                        imgUrl={education.imgUrl}
                        keyword={education.keyword}
                        link={education.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Bio;