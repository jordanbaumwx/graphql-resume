import { queryType } from "@nexus/schema";
import { data } from "../data";
import { Bio } from "./index";

export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });
  },
});
