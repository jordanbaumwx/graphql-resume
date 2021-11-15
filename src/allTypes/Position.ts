import { objectType } from "@nexus/schema";

export const Position = objectType({
  name: "Position",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("company");
    t.string("startDate");
    t.string("endDate");
    t.string("employmentType");
    t.string("location");
    t.string("achievements");
  },
});
