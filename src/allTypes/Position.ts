import { objectType } from "@nexus/schema";
import { differenceInYears, differenceInMonths } from "date-fns";

export const Position = objectType({
  name: "Position",
  description: "The various positions I have held at various customers.",
  definition(t) {
    t.string("id");
    t.string("title", {
      description:
        "The title of my position for the project or at the company.",
    });
    t.string("company", {
      description: "The name of the company I worked for.",
    });
    t.date("startDate", {
      description: "The date I started at the work.",
      resolve: (position) => new Date(position.startDate),
    });
    t.date("endDate", {
      description:
        "The date I stopped / left work for this company or project.",
      resolve: (position) =>
        position.endDate ? new Date(position.endDate) : null,
    });
    t.int("years", {
      description: "How many full years I was at the company for.",
      resolve: ({ endDate, startDate }) =>
        differenceInYears(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ),
    });

    // Months is modulated by 12 to not have all months included.
    t.int("months", {
      description: "How many full months I was at the company for."
      resolve: ({ endDate, startDate }) =>
        differenceInMonths(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ) % 12,
    });

    t.string("employmentType", {
      description: "The nature of my employment for the company."
    });
    t.string("location", {
      description: "The location of the company."
    });
    t.list.string("achievements", {
      description: "A list of things I accomplished during my time with the project or company.",
      resolve: (position) => position.achievements,
    });
  },
});
