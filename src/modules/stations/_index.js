import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listStations } from './list-stations.js';
import { showStation } from './show-station.js';
import { showPath } from './../paths/show-path.js';
import { addStation } from './add-station.js';
import { editStation } from './edit-station.js';
import { removeStation } from './remove-station.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'stations', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    stations: () => {
      return listStations();
    },
    station: (_, args) => {
      return showStation({ id: args.id });
    }
  },
  Mutation: {
    createStation: (_, args) => {
      const result = addStation(args.input);

      pubsub.publish('STATION_CREATED', { stationCreated: result });

      return result;
    },
    updateStation: (_, args) => {
      return editStation({ id: args.id, ...args.input });
    },
    removeStation: (_, args) => {
      return removeStation({ id: args.id });
    }
  },
  Subscription: {
    stationCreated: {
      subscribe: () => pubsub.asyncIterator(['STATION_CREATED'])
    }
  },
  Station: {
    path: (parent) => {
      return showPath({ id: parent.path_id });
    },

    backward: (parent) => {
      if (!parent.backward_id) {
        return null;
      };

      const result = showStation({ id: parent.backward_id });

      return result;
    },

    forward: (parent) => {
      if (!parent.forward_id) {
        return null;
      };

      return showStation({ id: parent.forward_id });
    },
  }
};

export default {
  typeDefs,
  resolvers
};