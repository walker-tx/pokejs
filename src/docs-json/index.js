import berries from './berries.json' assert { type: "json"}
import contests from './contests.json' assert { type: "json"}
import encounters from './encounters.json' assert { type: "json"}
import evolution from './evolution.json' assert { type: "json"}
import games from './games.json' assert { type: "json"}
import items from './items.json' assert { type: "json"}
import locations from './locations.json' assert { type: "json"}
import machines from './machines.json' assert { type: "json"}
import moves from './moves.json' assert { type: "json"}
import pokemon from './pokemon.json' assert { type: "json"}

import resourceLists from './resource-lists.json' assert { type: "json"};
import utility from './utility.json' assert { type: "json"};

export default [
    {
        name: 'Resource Lists/Pagination',
        resources: resourceLists,
        description:
            "Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. By default, a list \"page\" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter to the GET request, e.g. `?limit=60`. You can use 'offset' to move to the next page, e.g. `?limit=60&offset=60`. `characteristic`, `contest-effect`, `evolution-chain`, `machine`, `super-contest-effect` endpoints are unnamed, the rest are named.",
        endOfSection: true,
    },
    { name: 'Berries', resources: berries },
    { name: 'Contests', resources: contests },
    { name: 'Encounters', resources: encounters },
    { name: 'Evolution', resources: evolution },
    { name: 'Games', resources: games },
    { name: 'Items', resources: items },
    { name: 'Locations', resources: locations },
    { name: 'Machines', resources: machines },
    { name: 'Moves', resources: moves },
    { name: 'Pokémon', resources: pokemon, endOfSection: true },
    { name: 'Utility', resources: utility },
];
