/**
 * This component displays information for a generic experience.
 * 
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

// This package formats the date so it looks nice.
import {format} from "date-fns"

export default function Experience({position}) {
    /* 
    This formats how long I was at the company in an easy to read 
    by humans format. 
    */
    const length = [
        position.years > 0 ? `${position.years} years` : null,
        position.months > 0 ? `${position.months} months` : null,
      ].filter(str => str).join(" ");
      
    return (
        <div className='pt-4 px-6 pb-4'>
            {/* Display company information and my position title. */}
            <div className="grid grid-cols-1">
                <h3 className="col-span-1 text-gray-900 sm:font-medium text-m sm:text-xl sm:align-left">{position.title}</h3>
                <p className="col-span-2 text-gray-700 p=2 font-light text-s sm:text-xl sm:align-right">{position.company} | {position.location}</p>
            </div>
            {/* Display information about the time I was with the company. */}
            <p className="text-gray-700 font-light">
                {format(new Date(position.startDate), "MMM yyyy")} - {position.endDate ? format(new Date(position.endDate), "MMM yyyy") : "Current"}
                {" | "}
                {length}
            </p>
            {/* Creates a list of accomplishments while I was at this position.*/}
            <ul className="list-disc px-8">
                {position.achievements.map(achievement => 
                    <li key={achievement}>{achievement}</li>
                )}
            </ul>     
        </div>
    )
}