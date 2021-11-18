import Head from "next/head";
import styles from "../styles/Home.module.css";
import resumeStyles from "../styles/Resume.module.css";

import {useQuery, gql} from "@apollo/client";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {print} from "graphql/language/printer";

import Experience from "../components/Experience";
import Contact from "../components/Contact";



const ResumeQuery = gql`
  query ResumeQuery{
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
  }`


export default function Home() {
  const {data, error, loading} = useQuery(ResumeQuery);

  if (error) {
    return <span>Error... oops!</span>
  }

  if (loading) { 
    return  (
      <div className="md:container md:mx-auto object-center p-20 align-middle">
          <h1 className="font-black md:mx-auto text-7xl object-center block text-center"> Jordan Baumgardner </h1>
          <h1 className="block md:mx-auto object-center text-center"> Loading Resume </h1>
      </div>
    )
  }

  const {bio, positions} = data;
  return (
    //p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4
    <div className="md:container md:mx-auto object-center align-middle">
      <Head>
        <title>{bio.name} Resume</title>
        <meta name="description" content={bio.tagline} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="md:container md:mx-auto object-center p-4 align-middle divide-y divide-gray-700">
        <div className="">
          <h1 className="font-black md:mx-auto text-3xl"> {bio.name} </h1>
          <h2 className="text-gray-700 md:mx-auto text-xl"> {bio.tagline} </h2>
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-700 p-4">
          
          <div className="col-span-1 md:container md:mx-auto object-center p-4">
            <div className="">
              <Contact bio={bio}/>
              <p> Query the API: /api/graphql </p>
              <SyntaxHighlighter language="graphql" style={vscDarkPlus}>
                {print(ResumeQuery)}
              </SyntaxHighlighter>
            </div> 
          </div>
          <div className="col-span-2 md:container md:mx-auto object-center p-4 divide-y divide-gray-700">
            <div>
              <h2 className="text-gray-700 font-bold md:mx-auto text-2xl">Profile</h2>
              <p>{bio.objective}</p>
            </div>
            <div>
              <h2 className="text-gray-700 font-bold md:mx-auto text-2xl pt-2">Experience</h2>
              <div className="overflow-y-auto">
                {
                  positions.map(position => {
                    return(
                      <Experience position={position} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
