/**
 * This provides information on the type of data ingested from the data source.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

export interface Bio {
  name: string;
  tagline: string;
  email: string;
  github: string;
  website: string;
  objective: string;
}

export interface Position {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  employmentType: string;
  location: string;
  achievements: string[];
}
