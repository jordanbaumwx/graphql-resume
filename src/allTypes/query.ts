import { queryType, idArg } from "@nexus/schema";
import { data } from "../data";
import { Bio, Position } from "./index";

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
