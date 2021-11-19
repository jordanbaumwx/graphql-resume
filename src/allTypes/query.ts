/**
 * This provides information on where to point queries to the data.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

import { queryType, idArg } from "@nexus/schema";
import { Bio, Position } from "./index";

// Import data as the data source.
import { data } from "../data";

// Setup the queries available. In this case: bio, positions, and position.
export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });

    t.list.field("positions", {
      type: Position,
      resolve: () => data.positions,
    });
    t.field("position", {
      type: Position,
      args: { id: idArg() },
      resolve: (parent, { id }: { id: string }, ctx) =>
        data.positions.find((position) => position.id === id),
    });
  },
});
