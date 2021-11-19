import styles from "../styles/Home.module.css";
import {format} from "date-fns"

export default function Experience({position}) {
    const length = [
        position.years > 0 ? `${position.years} years` : null,
        position.months > 0 ? `${position.months} months` : null,
      ].filter(str => str).join(" ");
      
    return (
        <div className='pt-4 px-6'>
            <div className="grid grid-cols-1">
                <h3 className="col-span-1 text-gray-900 font-medium text-xl align-left">{position.title}</h3>
                <p className="col-span-2 text-gray-700 font-light text-xl align-right">{position.company} | {position.location}</p>
            </div>
            <p className="text-gray-700 font-light">
                {format(new Date(position.startDate), "MMM yyyy")} - {position.endDate ? format(new Date(position.endDate), "MMM yyyy") : "Current"}
                {" | "}
                {length}
            </p>
            <ul className="list-disc px-8">
                {position.achievements.map(achievement => 
                    <li key={achievement}>{achievement}</li>
                )}
            </ul>     
        </div>
    )
}