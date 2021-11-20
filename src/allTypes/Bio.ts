/**
 * This provides the information on how to query the bio.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */
import { objectType } from "@nexus/schema";

export const Bio = objectType({
  name: "Bio",
  description:
    "This contains information about me that aren't necessarily specific to one job.",
  definition(t) {
    t.string("name");
    t.string("tagline");
    t.string("email");
    t.string("objective");
    t.url("website", { resolve: (bio) => new URL(bio.website) });
    t.url("github", { resolve: (bio) => new URL(bio.github) });
    t.list.string("skills", {
      description: "A list of my skills.",
      resolve: (bio) => bio.skills,
    });
  },
});
