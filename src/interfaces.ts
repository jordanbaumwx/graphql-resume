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
