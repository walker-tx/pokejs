import fs from "fs";
import berryGroup from "../../src/docs-json/berries.json" assert { type: "json" };
import contestsGroup from "../../src/docs-json/contests.json" assert { type: "json" };
import encountersGroup from "../../src/docs-json/encounters.json" assert { type: "json" };
import evolutionGroup from "../../src/docs-json/evolution.json" assert { type: "json" };
import gamesGroup from "../../src/docs-json/games.json" assert { type: "json" };
import itemsGroup from "../../src/docs-json/items.json" assert { type: "json" };
import locationsGroup from "../../src/docs-json/locations.json" assert { type: "json" };
import machinesGroup from "../../src/docs-json/machines.json" assert { type: "json" };
import movesGroup from "../../src/docs-json/moves.json" assert { type: "json" };
import pokemonGroup from "../../src/docs-json/pokemon.json" assert { type: "json" };
import utilityGroup from "../../src/docs-json/utility.json" assert { type: "json" };
import { EndpointSpecSchema } from "./schema";
import { ResourceGroup } from "./models";

async function main() {
  const rawGroups = {
    Berry: berryGroup,
    Utility: utilityGroup,
    Pokemon: pokemonGroup,
    Items: itemsGroup,
    Contests: contestsGroup,
    Encounters: encountersGroup,
    Games: gamesGroup,
    Machines: machinesGroup,
    Moves: movesGroup,
    Locations: locationsGroup,
    Evolutions: evolutionGroup,
  };

  let cleanedGroups = Object.entries(rawGroups).map(([name, group]) => {
    let cleaned = JSON.stringify(group);
    cleaned = cleaned.replaceAll('"NamedAPIResource  "', '"NamedAPIResource"');
    cleaned = cleaned.replaceAll('"NamedAPIResource "', '"NamedAPIResource"');
    cleaned = cleaned.replaceAll('"APIResource "', '"APIResource"');
    const endpoints = EndpointSpecSchema.array().parse(JSON.parse(cleaned));
    return new ResourceGroup(name, endpoints);
  });

  fs.writeFileSync(
    "./generated.ts",
    cleanedGroups.map((group) => group.render()).join("\n\n")
  );
}

main();
