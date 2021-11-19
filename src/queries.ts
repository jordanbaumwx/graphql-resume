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
