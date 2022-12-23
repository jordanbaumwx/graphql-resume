/**
 * Defines information for the nexus package. Including output paths of schema and types.
 * Also defined is the interface location and type maps.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

import { makeSchema } from '@nexus/schema';
import * as types from './allTypes';
import path from 'path';
import { GraphQLSchema } from 'graphql';

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), 'src', 'generated', 'schema.graphql'),
    typegen: path.join(process.cwd(), 'src', 'generated', 'nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: 'faces',
        source: path.join(process.cwd(), 'src', 'interfaces.ts'),
      },
    ],
    backingTypeMap: {
      Date: 'Date',
      URL: 'URL',
    },
    debug: process.env.NODE_ENV === 'development',
  },
}) as unknown as GraphQLSchema;
