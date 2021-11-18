import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import resumeStyles from "../styles/Resume.module.css";

import {useQuery, gql} from "@apollo/client";
import {format} from "date-fns"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {print} from "graphql/language/printer";

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
      <div className={styles.container}>
        <header>
          <h1> Jordan Baumgardner </h1>
          <h1> Loading Resume </h1>
        </header>
      </div>
    )
  }

  const {bio, positions} = data;
  return (
    <div className={resumeStyles.container}>
      <Head>
        <title>{bio.name} Resume</title>
        <meta name="description" content={bio.tagline} />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={resumeStyles.header}>
        <h1> {bio.name} Resume </h1>
        <h2> {bio.tagline} </h2>
        <div className={resumeStyles.split}>
          <div className={resumeStyles.left}> 
            <h2> Contact </h2>
            <p> 
              <strong>Email </strong>{" "}
              <a href={`mailto:${bio.email}`}>{bio.email}</a>
            </p>
            <p> 
              <strong>Github </strong>{" "}
              <a href={`${bio.github}`}>{bio.github.replace("https://github.com/", "")}</a>
            </p>
            <p> 
              <strong>Website </strong>{" "}
              <a href={`${bio.website}`}>{new URL(bio.website).host}</a>
            </p>

            <SyntaxHighlighter language="graphql" style={vscDarkPlus}>
              {print(ResumeQuery)}
            </SyntaxHighlighter>
          </div>
          <div className={resumeStyles.right}>
            <h2>Objective</h2>
            <p>{bio.objective}</p>
            <h2>Experience</h2>
            {
              positions.map(position => {
                const length = [
                  position.years > 0 ? `${position.years} years` : null,
                  position.months > 0 ? `${position.months} months` : null,
                ].filter(str => str).join(" ");

                return(
                <div key={position.id}>
                  <h3>{position.title}</h3>
                  <p className={resumeStyles.light}>{position.company} | {position.location}</p>
                  <p>
                    {format(new Date(position.startDate), "MMM yyyy")} - {position.endDate ? format(new Date(position.endDate), "MMM yyyy") : "Current"}
                    {" | "}
                    {length}
                  </p>
                  <ul>
                    {position.achievements.map(achievement => 
                      <li key={achievement}>{achievement}</li>
                    )}
                  </ul>
                  
                </div>
                )
                
              })
            }
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
