import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listPaths } from './list-paths.js';
import { showPath } from './show-path.js';
import { showMetro } from './../metros/show-metro.js';
import { addPath } from './add-path.js';
import { editPath } from './edit-path.js';
import { removePath } from './remove-path.js';
import { listStations } from './../stations/list-stations.js';
import { listPathLinks } from './list-path-links.js';
import { addPathLink } from './add-path-link.js';


const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'paths', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    paths: () => {
      return listPaths();
    },
    path: (_, args) => {
      return showPath({ id: args.id });
    }
  },
  Mutation: {
    createPath: (_, args) => {
      const result = addPath(args.input);

      pubsub.publish('PATH_CREATED', { pathCreated: result });

      return result;
    },
    updatePath: (_, args) => {
      return editPath({ id: args.id, ...args.input });
    },
    removePath: (_, args) => {
      return removePath({ id: args.id });
    },

    craeatePathLink: (_, args) => {
      const result = addPathLink(args.input);

      return result;
    }
  },
  Subscription: {
    pathCreated: {
      subscribe: () => pubsub.asyncIterator(['PATH_CREATED'])
    }
  },
  Path: {
    metro: (parent) => {
      return showMetro({ id: parent.metro_id });
    },
    stations: (parent) => {
      return listStations({ path_id: parent.id });
    },

    links: (parent) => {
      return listPathLinks({ path_id: parent.id });
    }
  },
  PathLink: {
    path: (parent) => {
      return showPath({ id: parent.path_id });
    },

    linked_path: (parent) => {
      return showPath({ id: parent.linked_id });
    }
  }
};

export default {
  typeDefs,
  resolvers
};
