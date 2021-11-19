/**
 * This component holds links to contact me.
 * 
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

// Import icons used for the hyperlinks.
import { FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import {MdWebAsset} from 'react-icons/md';


/*
* @param {Object} props - The props of this component are immediately stripped for 
* only the bio information.
*/
export default function Contact({bio}) {
    return (
        <div className="grid grid-cols-2 items-center">
             <h2 className="text-gray-700 font-bold text-2xl col-span-1 content-start"> Contact </h2>
            <p className="flex col-span-1 items-end"> 
              <a className="flex-initial px-2" href={`mailto:${bio.email}`}><GrMail /></a>
              <a className="flex-initial px-2" href={`${bio.github}`}><FaGithub /></a>
              <a className="flex-initial px-2" href={`${bio.website}`}><MdWebAsset /></a>
            </p>
        </div>

    )
}