/**
 * This is the main page for the resume website.
 * It provides the layout and a few components.
 * 
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

import Head from "next/head";
import {useQuery} from "@apollo/client";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {print} from "graphql/language/printer";

// Custom Components
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const ResumeQuery = gql`
query ResumeQuery {
  bio {
    name
    email
    tagline
    website
    github
    objective
  }
  positions {
    id
    title
    company
    location
    years
    months
    startDate
    endDate
    achievements
  }
}
`;


export default function Home() {
  // Start the query for the resume.
  const {data, error, loading} = useQuery(ResumeQuery);

  // If there is an error; show it.
  // TODO: Make the error page look better.
  if (error) {
    return <span>Error... oops!</span>
  }

  // If the query is loading, show a loading message.
  if (loading) { 
    return  (
      <div className="md:container md:mx-auto object-center p-20 align-middle">
          <h1 className="font-black md:mx-auto text-7xl object-center block text-center"> Jordan Baumgardner </h1>
          <h1 className="block md:mx-auto object-center text-center"> Loading Resume </h1>
      </div>
    )
  }

  /*
   If we are at this point; than the query has succeeded and we have fetched new data.
   We will extract the bio and position elements from the data returned.
  */
  const {bio, positions} = data;
  return (
    <div className="md:container md:mx-auto object-center align-middle">
      {/* Setup the browser meta-information. */}
      <Head>
        <title>{bio.name} Resume</title>
        <meta name="description" content={bio.tagline} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Setup the container */}
      <main className="md:container md:mx-auto object-center p-4 align-middle divide-y divide-gray-700">
        {/* This acts as the header for the resume and displays basic information about me. */}
        <div className="Header">
          <h1 className="font-black md:mx-auto text-3xl"> {bio.name} </h1>
          <h2 className="text-gray-700 md:mx-auto text-xl"> {bio.tagline} </h2>
        </div>

        {/* Here is where the meat of the bio lays. This splits the page into 2 columns (1/3 & 2/3) */}
        <div className="grid grid-cols-3 divide-x divide-gray-700 p-4">
          {/* Setup the 1/3rd column width which is contact and query information. */}
          <div className="col-span-1 md:container md:mx-auto object-center p-4">
            <div className="">
              {/* Display the contact component. */}
              <Contact bio={bio}/>
              {/* This display the graphql query */}
              <p> Query the API: /api/graphql </p>
              <SyntaxHighlighter language="graphql" style={vscDarkPlus}>
                {print(ResumeQuery)}
              </SyntaxHighlighter>
            </div> 
          </div>
          {/* Setup the 2/3rd column width which is profile and experience */}
          <div className="col-span-2 md:container md:mx-auto object-center p-4 divide-y divide-gray-700">
            {/* Add brief information for my profile at the top of the section */}
            <div>
              <h2 className="text-gray-700 font-bold md:mx-auto text-2xl">Profile</h2>
              <p>{bio.objective}</p>
            </div>
            {/* Add information below my profile for my experiences */}
            <div>
              <h2 className="text-gray-700 font-bold md:mx-auto text-2xl pt-2">Experience</h2>
              <div className="overflow-y-auto">
                {
                  positions.map(position => {
                    return(
                      <Experience key={position.id} position={position} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
