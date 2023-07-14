import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listStations } from './list-stations.js';
import { showStation } from './show-station.js';
import { showPath } from './../paths/show-path.js';
import { addStation } from './add-station.js';
import { editStation } from './edit-station.js';
import { removeStation } from './remove-station.js';
import { listStationLinks } from './list-station-links.js';
import { showStationLink } from './show-station-link.js';
import { addStationsLink } from './add-station-links.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'stations', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    stations: () => {
      return listStations();
    },
    station: (_, args) => {
      return showStation({ id: args.id });
    },

    stationLinks: () => {
      return listStationLinks();
    },

    stationLink: (_, args) => {
      return showStationLink({ id: args.id });
    },
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
    },

    craeateStationLink: (_, args) => {
      const result = addStationsLink(args.input);

      return result;
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

    StationLink: (parent) => {
      return listStationLinks({ station_id: parent.id });
    }
  },
  StationLink: {
    station: (parent) => {
      return showStation({ id: parent.station_id });
    },

    linked_station: (parent) => {
      return showStation({ id: parent.linked_id });
    }
  }
};

export default {
  typeDefs,
  resolvers
};