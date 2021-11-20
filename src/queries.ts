/**
 * This is a common place to store all graphql queries the user interface needs to use.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

import { gql } from "@apollo/client";

export const ResumeQuery = gql`
  query ResumeQuery {
    bio {
      name
      email
      tagline
      website
      github
      objective
      skills
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
