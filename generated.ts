/**
 * MARK: BERRY GROUP
 */

class BerryResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
  growth_time: number;
  /** The maximum number of these berries that can grow on one tree in Generation IV. */
  max_harvest: number;
  /** The power of the move "Natural Gift" when used with this Berry. */
  natural_gift_power: number;
  /** The size of this Berry, in millimeters. */
  size: number;
  /** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
  smoothness: number;
  /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
  soil_dryness: number;
  /** The firmness of this berry, used in making Pokéblocks or Poffins. */
  firmness: NamedAPIResourceWrapper<BerryFirmnessResponseModel>;
  /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
  flavors: Array<BerryFlavorMapResponseModel>;
  /** Berries are actually items. This is a reference to the item specific data for this berry. */
  item: NamedAPIResourceWrapper<ItemResponseModel>;
  /** The type inherited by "Natural Gift" when used with this Berry. */
  natural_gift_type: NamedAPIResourceWrapper<TypeResponseModel>;
}

class BerryFlavorMapResponseModel {
  /** How powerful the referenced flavor is for this berry. */
  potency: number;
  /** The referenced berry flavor. */
  flavor: NamedAPIResourceWrapper<BerryFlavorResponseModel>;
}

class BerryFirmnessResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of the berries with this firmness. */
  berries: Array<NamedAPIResourceWrapper<BerryResponseModel>>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class BerryFlavorResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of the berries with this flavor. */
  berries: Array<FlavorBerryMapResponseModel>;
  /** The contest type that correlates with this berry flavor. */
  contest_type: NamedAPIResourceWrapper<ContestTypeResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class FlavorBerryMapResponseModel {
  /** How powerful the referenced flavor is for this berry. */
  potency: number;
  /** The berry with the referenced flavor. */
  berry: NamedAPIResourceWrapper<BerryResponseModel>;
}

/**
 * MARK: UTILITY GROUP
 */

class LanguageResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Whether or not the games are published in this language. */
  official: boolean;
  /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
  iso639: string;
  /** The two-letter code of the language. Note that it is not unique. */
  iso3166: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class APIResourceWrapper<T> {
  url: string;

  async load(): Promise<T> {
    const response = await fetch(this.url);
    return response.json();
  }
}

class DescriptionResponseModel {
  /** The localized description for an API resource in a specific language. */
  description: string;
  /** The language this name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class EffectResponseModel {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class EncounterResponseModel {
  /** The lowest level the Pokémon could be encountered at. */
  min_level: number;
  /** The highest level the Pokémon could be encountered at. */
  max_level: number;
  /** A list of condition values that must be in effect for this encounter to occur. */
  condition_values: Array<NamedAPIResourceWrapper<EncounterConditionValueResponseModel>>;
  /** Percent chance that this encounter will occur. */
  chance: number;
  /** The method by which this encounter happens. */
  method: NamedAPIResourceWrapper<EncounterMethodResponseModel>;
}

class FlavorTextResponseModel {
  /** The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this <a href='https://github.com/veekun/pokedex/issues/218#issuecomment-339841781' >issue</a> to find out more.  */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
  /** The game version this flavor text is extracted from. */
  version: NamedAPIResourceWrapper<VersionResponseModel>;
}

class GenerationGameIndexResponseModel {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The generation relevent to this game index. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
}

class MachineVersionDetailResponseModel {
  /** The machine that teaches a move from an item. */
  machine: APIResourceWrapper<MachineResponseModel>;
  /** The version group of this specific machine. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

class NameResponseModel {
  /** The localized name for an API resource in a specific language. */
  name: string;
  /** The language this name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class NamedAPIResourceWrapper<T> {
  name: string;
  url: string;

  async load(): Promise<T> {
    const response = await fetch(this.url);
    return response.json();
  }
}

class VerboseEffectResponseModel {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The localized effect text in brief. */
  short_effect: string;
  /** The language this effect is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class VersionEncounterDetailResponseModel {
  /** The game version this encounter happens in. */
  version: NamedAPIResourceWrapper<VersionResponseModel>;
  /** The total percentage of all encounter potential. */
  max_chance: number;
  /** A list of encounters and their specifics. */
  encounter_details: Array<EncounterResponseModel>;
}

class VersionGameIndexResponseModel {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The version relevent to this game index. */
  version: NamedAPIResourceWrapper<VersionResponseModel>;
}

class VersionGroupFlavorTextResponseModel {
  /** The localized name for an API resource in a specific language. */
  text: string;
  /** The language this name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
  /** The version group which uses this flavor text. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

/**
 * MARK: POKEMON GROUP
 */

class AbilityResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Whether or not this ability originated in the main series of the video games. */
  is_main_series: boolean;
  /** The generation this ability originated in. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** The effect of this ability listed in different languages. */
  effect_entries: Array<VerboseEffectResponseModel>;
  /** The list of previous effects this ability has had across version groups. */
  effect_changes: Array<AbilityEffectChangeResponseModel>;
  /** The flavor text of this ability listed in different languages. */
  flavor_text_entries: Array<AbilityFlavorTextResponseModel>;
  /** A list of Pokémon that could potentially have this ability. */
  pokemon: Array<AbilityPokemonResponseModel>;
}

class AbilityEffectChangeResponseModel {
  /** The previous effect of this ability listed in different languages. */
  effect_entries: Array<EffectResponseModel>;
  /** The version group in which the previous effect of this ability originated. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

class AbilityFlavorTextResponseModel {
  /** The localized name for an API resource in a specific language. */
  flavor_text: string;
  /** The language this text resource is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
  /** The version group that uses this flavor text. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

class AbilityPokemonResponseModel {
  /** Whether or not this a hidden ability for the referenced Pokémon. */
  is_hidden: boolean;
  /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
  slot: number;
  /** The Pokémon this ability could belong to. */
  pokemon: NamedAPIResourceWrapper<PokemonResponseModel>;
}

class CharacteristicResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The remainder of the highest stat/IV divided by 5. */
  gene_modulo: number;
  /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
  possible_values: Array<number>;
  /** The stat which results in this characteristic. */
  highest_stat: NamedAPIResourceWrapper<StatResponseModel>;
  /** The descriptions of this characteristic listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
}

class EggGroupResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of all Pokémon species that are members of this egg group. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}

class GenderResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
  pokemon_species_details: Array<PokemonSpeciesGenderResponseModel>;
  /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
  required_for_evolution: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}

class PokemonSpeciesGenderResponseModel {
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
  rate: number;
  /** A Pokémon species that can be the referenced gender. */
  pokemon_species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
}

class GrowthRateResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The formula used to calculate the rate at which the Pokémon species gains level. */
  formula: string;
  /** The descriptions of this characteristic listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
  /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
  levels: Array<GrowthRateExperienceLevelResponseModel>;
  /** A list of Pokémon species that gain levels at this growth rate. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}

class GrowthRateExperienceLevelResponseModel {
  /** The level gained. */
  level: number;
  /** The amount of experience required to reach the referenced level. */
  experience: number;
}

class NatureResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The stat decreased by 10% in Pokémon with this nature. */
  decreased_stat: NamedAPIResourceWrapper<StatResponseModel>;
  /** The stat increased by 10% in Pokémon with this nature. */
  increased_stat: NamedAPIResourceWrapper<StatResponseModel>;
  /** The flavor hated by Pokémon with this nature. */
  hates_flavor: NamedAPIResourceWrapper<BerryFlavorResponseModel>;
  /** The flavor liked by Pokémon with this nature. */
  likes_flavor: NamedAPIResourceWrapper<BerryFlavorResponseModel>;
  /** A list of Pokéathlon stats this nature effects and how much it effects them. */
  pokeathlon_stat_changes: Array<NatureStatChangeResponseModel>;
  /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
  move_battle_style_preferences: Array<MoveBattleStylePreferenceResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class NatureStatChangeResponseModel {
  /** The amount of change. */
  max_change: number;
  /** The stat being affected. */
  pokeathlon_stat: NamedAPIResourceWrapper<PokeathlonStatResponseModel>;
}

class MoveBattleStylePreferenceResponseModel {
  /** Chance of using the move, in percent, if HP is under one half. */
  low_hp_preference: number;
  /** Chance of using the move, in percent, if HP is over one half. */
  high_hp_preference: number;
  /** The move battle style. */
  move_battle_style: NamedAPIResourceWrapper<MoveBattleStyleResponseModel>;
}

class PokeathlonStatResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
  affecting_natures: NaturePokeathlonStatAffectSetsResponseModel;
}

class NaturePokeathlonStatAffectSetsResponseModel {
  /** A list of natures and how they change the referenced Pokéathlon stat. */
  increase: Array<NaturePokeathlonStatAffectResponseModel>;
  /** A list of natures and how they change the referenced Pokéathlon stat. */
  decrease: Array<NaturePokeathlonStatAffectResponseModel>;
}

class NaturePokeathlonStatAffectResponseModel {
  /** The maximum amount of change to the referenced Pokéathlon stat. */
  max_change: number;
  /** The nature causing the change. */
  nature: NamedAPIResourceWrapper<NatureResponseModel>;
}

class PokemonResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The base experience gained for defeating this Pokémon. */
  base_experience: number;
  /** The height of this Pokémon in decimetres. */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species. */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;
  /** The weight of this Pokémon in hectograms. */
  weight: number;
  /** A list of abilities this Pokémon could potentially have. */
  abilities: Array<PokemonAbilityResponseModel>;
  /** A list of forms this Pokémon can take on. */
  forms: Array<NamedAPIResourceWrapper<PokemonFormResponseModel>>;
  /** A list of game indices relevent to Pokémon item by generation. */
  game_indices: Array<VersionGameIndexResponseModel>;
  /** A list of items this Pokémon may be holding when encountered. */
  held_items: Array<PokemonHeldItemResponseModel>;
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups. */
  moves: Array<PokemonMoveResponseModel>;
  /** A list of details showing types this pokémon had in previous generations */
  past_types: Array<PokemonTypePastResponseModel>;
  /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
  sprites: PokemonSpritesResponseModel;
  /** A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at <a href='https://github.com/PokeAPI/cries#cries'>PokeAPI/cries</a> */
  cries: PokemonCriesResponseModel;
  /** The species this Pokémon belongs to. */
  species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
  /** A list of base stat values for this Pokémon. */
  stats: Array<PokemonStatResponseModel>;
  /** A list of details showing types this Pokémon has. */
  types: Array<PokemonTypeResponseModel>;
}

class PokemonAbilityResponseModel {
  /** Whether or not this is a hidden ability. */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pokémon species. */
  slot: number;
  /** The ability the Pokémon may have. */
  ability: NamedAPIResourceWrapper<AbilityResponseModel>;
}

class PokemonTypeResponseModel {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The type the referenced Pokémon has. */
  type: NamedAPIResourceWrapper<TypeResponseModel>;
}

class PokemonFormTypeResponseModel {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The type the referenced Form has. */
  type: NamedAPIResourceWrapper<TypeResponseModel>;
}

class PokemonTypePastResponseModel {
  /** The last generation in which the referenced pokémon had the listed types. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** The types the referenced pokémon had up to and including the listed generation. */
  types: Array<PokemonTypeResponseModel>;
}

class PokemonHeldItemResponseModel {
  /** The item the referenced Pokémon holds. */
  item: NamedAPIResourceWrapper<ItemResponseModel>;
  /** The details of the different versions in which the item is held. */
  version_details: Array<PokemonHeldItemVersionResponseModel>;
}

class PokemonHeldItemVersionResponseModel {
  /** The version in which the item is held. */
  version: NamedAPIResourceWrapper<VersionResponseModel>;
  /** How often the item is held. */
  rarity: number;
}

class PokemonMoveResponseModel {
  /** The move the Pokémon can learn. */
  move: NamedAPIResourceWrapper<MoveResponseModel>;
  /** The details of the version in which the Pokémon can learn the move. */
  version_group_details: Array<PokemonMoveVersionResponseModel>;
}

class PokemonMoveVersionResponseModel {
  /** The method by which the move is learned. */
  move_learn_method: NamedAPIResourceWrapper<MoveLearnMethodResponseModel>;
  /** The version group in which the move is learned. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
  /** The minimum level to learn the move. */
  level_learned_at: number;
}

class PokemonStatResponseModel {
  /** The stat the Pokémon has. */
  stat: NamedAPIResourceWrapper<StatResponseModel>;
  /** The effort points (EV) the Pokémon has in the stat. */
  effort: number;
  /** The base value of the stat. */
  base_stat: number;
}

class PokemonSpritesResponseModel {
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: string;
  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny: string;
  /** The female depiction of this Pokémon from the front in battle. */
  front_female: string;
  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female: string;
  /** The default depiction of this Pokémon from the back in battle. */
  back_default: string;
  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny: string;
  /** The female depiction of this Pokémon from the back in battle. */
  back_female: string;
  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female: string;
}

class PokemonCriesResponseModel {
  /** The latest depiction of this Pokémon's cry. */
  latest: string;
  /** The legacy depiction of this Pokémon's cry. */
  legacy: string;
}

class LocationAreaEncounterResponseModel {
  /** The location area the referenced Pokémon can be encountered in. */
  location_area: NamedAPIResourceWrapper<LocationAreaResponseModel>;
  /** A list of versions and encounters with the referenced Pokémon that might happen. */
  version_details: Array<VersionEncounterDetailResponseModel>;
}

class PokemonColorResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of the Pokémon species that have this color. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}

class PokemonFormResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
  order: number;
  /** The order in which forms should be sorted within a species' forms. */
  form_order: number;
  /** True for exactly one form used as the default for each Pokémon. */
  is_default: boolean;
  /** Whether or not this form can only happen during battle. */
  is_battle_only: boolean;
  /** Whether or not this form requires mega evolution. */
  is_mega: boolean;
  /** The name of this form. */
  form_name: string;
  /** The Pokémon that can take on this form. */
  pokemon: NamedAPIResourceWrapper<PokemonResponseModel>;
  /** A list of details showing types this Pokémon form has. */
  types: Array<PokemonFormTypeResponseModel>;
  /** A set of sprites used to depict this Pokémon form in the game. */
  sprites: PokemonFormSpritesResponseModel;
  /** The version group this Pokémon form was introduced in. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
  /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
  names: Array<NameResponseModel>;
  /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
  form_names: Array<NameResponseModel>;
}

class PokemonFormSpritesResponseModel {
  /** The default depiction of this Pokémon form from the front in battle. */
  front_default: string;
  /** The shiny depiction of this Pokémon form from the front in battle. */
  front_shiny: string;
  /** The default depiction of this Pokémon form from the back in battle. */
  back_default: string;
  /** The shiny depiction of this Pokémon form from the back in battle. */
  back_shiny: string;
}

class PokemonHabitatResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of the Pokémon species that can be found in this habitat. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}

class PokemonShapeResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The "scientific" name of this Pokémon shape listed in different languages. */
  awesome_names: Array<AwesomeNameResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of the Pokémon species that have this shape. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}

class AwesomeNameResponseModel {
  /** The localized "scientific" name for an API resource in a specific language. */
  awesome_name: string;
  /** The language this "scientific" name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class PokemonSpeciesResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
  order: number;
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
  gender_rate: number;
  /** The base capture rate; up to 255. The higher the number, the easier the catch. */
  capture_rate: number;
  /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
  base_happiness: number;
  /** Whether or not this is a baby Pokémon. */
  is_baby: boolean;
  /** Whether or not this is a legendary Pokémon. */
  is_legendary: boolean;
  /** Whether or not this is a mythical Pokémon. */
  is_mythical: boolean;
  /** Initial hatch counter: one must walk Y × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. Y varies per generation. In Generations II, III, and VII, Egg cycles are 256 steps long. In Generation IV, Egg cycles are 255 steps long. In Pokémon Brilliant Diamond and Shining Pearl, Egg cycles are also 255 steps long, but are shorter on special dates. In Generations V and VI, Egg cycles are 257 steps long. In Pokémon Sword and Shield, and in Pokémon Scarlet and Violet, Egg cycles are 128 steps long. */
  hatch_counter: number;
  /** Whether or not this Pokémon has visual gender differences. */
  has_gender_differences: boolean;
  /** Whether or not this Pokémon has multiple forms and can switch between them. */
  forms_switchable: boolean;
  /** The rate at which this Pokémon species gains levels. */
  growth_rate: NamedAPIResourceWrapper<GrowthRateResponseModel>;
  /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
  pokedex_numbers: Array<PokemonSpeciesDexEntryResponseModel>;
  /** A list of egg groups this Pokémon species is a member of. */
  egg_groups: Array<NamedAPIResourceWrapper<EggGroupResponseModel>>;
  /** The color of this Pokémon for Pokédex search. */
  color: NamedAPIResourceWrapper<PokemonColorResponseModel>;
  /** The shape of this Pokémon for Pokédex search. */
  shape: NamedAPIResourceWrapper<PokemonShapeResponseModel>;
  /** The Pokémon species that evolves into this Pokemon_species. */
  evolves_from_species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
  /** The evolution chain this Pokémon species is a member of. */
  evolution_chain: APIResourceWrapper<EvolutionChainResponseModel>;
  /** The habitat this Pokémon species can be encountered in. */
  habitat: NamedAPIResourceWrapper<PokemonHabitatResponseModel>;
  /** The generation this Pokémon species was introduced in. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of encounters that can be had with this Pokémon species in pal park. */
  pal_park_encounters: Array<PalParkEncounterAreaResponseModel>;
  /** A list of flavor text entries for this Pokémon species. */
  flavor_text_entries: Array<FlavorTextResponseModel>;
  /** Descriptions of different forms Pokémon take on within the Pokémon species. */
  form_descriptions: Array<DescriptionResponseModel>;
  /** The genus of this Pokémon species listed in multiple languages. */
  genera: Array<GenusResponseModel>;
  /** A list of the Pokémon that exist within this Pokémon species. */
  varieties: Array<PokemonSpeciesVarietyResponseModel>;
}

class GenusResponseModel {
  /** The localized genus for the referenced Pokémon species */
  genus: string;
  /** The language this genus is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class PokemonSpeciesDexEntryResponseModel {
  /** The index number within the Pokédex. */
  entry_number: number;
  /** The Pokédex the referenced Pokémon species can be found in. */
  pokedex: NamedAPIResourceWrapper<PokedexResponseModel>;
}

class PalParkEncounterAreaResponseModel {
  /** The base score given to the player when the referenced Pokémon is caught during a pal park run. */
  base_score: number;
  /** The base rate for encountering the referenced Pokémon in this pal park area. */
  rate: number;
  /** The pal park area where this encounter happens. */
  area: NamedAPIResourceWrapper<PalParkAreaResponseModel>;
}

class PokemonSpeciesVarietyResponseModel {
  /** Whether this variety is the default variety. */
  is_default: boolean;
  /** The Pokémon variety. */
  pokemon: NamedAPIResourceWrapper<PokemonResponseModel>;
}

class StatResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** ID the games use for this stat. */
  game_index: number;
  /** Whether this stat only exists within a battle. */
  is_battle_only: boolean;
  /** A detail of moves which affect this stat positively or negatively. */
  affecting_moves: MoveStatAffectSetsResponseModel;
  /** A detail of natures which affect this stat positively or negatively. */
  affecting_natures: NatureStatAffectSetsResponseModel;
  /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
  characteristics: Array<APIResourceWrapper<CharacteristicResponseModel>>;
  /** The class of damage this stat is directly related to. */
  move_damage_class: NamedAPIResourceWrapper<MoveDamageClassResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class MoveStatAffectSetsResponseModel {
  /** A list of moves and how they change the referenced stat. */
  increase: Array<MoveStatAffectResponseModel>;
  /** A list of moves and how they change the referenced stat. */
  decrease: Array<MoveStatAffectResponseModel>;
}

class MoveStatAffectResponseModel {
  /** The maximum amount of change to the referenced stat. */
  change: number;
  /** The move causing the change. */
  move: NamedAPIResourceWrapper<MoveResponseModel>;
}

class NatureStatAffectSetsResponseModel {
  /** A list of natures and how they change the referenced stat. */
  increase: Array<NamedAPIResourceWrapper<NatureResponseModel>>;
  /** A list of nature sand how they change the referenced stat. */
  decrease: Array<NamedAPIResourceWrapper<NatureResponseModel>>;
}

class TypeResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A detail of how effective this type is toward others and vice versa. */
  damage_relations: TypeRelationsResponseModel;
  /** A list of details of how effective this type was toward others and vice versa in previous generations */
  past_damage_relations: Array<TypeRelationsPastResponseModel>;
  /** A list of game indices relevent to this item by generation. */
  game_indices: Array<GenerationGameIndexResponseModel>;
  /** The generation this type was introduced in. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** The class of damage inflicted by this type. */
  move_damage_class: NamedAPIResourceWrapper<MoveDamageClassResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of details of Pokémon that have this type. */
  pokemon: Array<TypePokemonResponseModel>;
  /** A list of moves that have this type. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
}

class TypePokemonResponseModel {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The Pokémon that has the referenced type. */
  pokemon: NamedAPIResourceWrapper<PokemonResponseModel>;
}

class TypeRelationsResponseModel {
  /** A list of types this type has no effect on. */
  no_damage_to: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
  /** A list of types this type is not very effect against. */
  half_damage_to: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
  /** A list of types this type is very effect against. */
  double_damage_to: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
  /** A list of types that have no effect on this type. */
  no_damage_from: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
  /** A list of types that are not very effective against this type. */
  half_damage_from: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
  /** A list of types that are very effective against this type. */
  double_damage_from: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
}

class TypeRelationsPastResponseModel {
  /** The last generation in which the referenced type had the listed damage relations */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** The damage relations the referenced type had up to and including the listed generation */
  damage_relations: TypeRelationsResponseModel;
}

/**
 * MARK: ITEMS GROUP
 */

class ItemResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The price of this item in stores. */
  cost: number;
  /** The power of the move Fling when used with this item. */
  fling_power: number;
  /** The effect of the move Fling when used with this item. */
  fling_effect: NamedAPIResourceWrapper<ItemFlingEffectResponseModel>;
  /** A list of attributes this item has. */
  attributes: Array<NamedAPIResourceWrapper<ItemAttributeResponseModel>>;
  /** The category of items this item falls into. */
  category: NamedAPIResourceWrapper<ItemCategoryResponseModel>;
  /** The effect of this ability listed in different languages. */
  effect_entries: Array<VerboseEffectResponseModel>;
  /** The flavor text of this ability listed in different languages. */
  flavor_text_entries: Array<VersionGroupFlavorTextResponseModel>;
  /** A list of game indices relevent to this item by generation. */
  game_indices: Array<GenerationGameIndexResponseModel>;
  /** The name of this item listed in different languages. */
  names: Array<NameResponseModel>;
  /** A set of sprites used to depict this item in the game. */
  sprites: ItemSpritesResponseModel;
  /** A list of Pokémon that might be found in the wild holding this item. */
  held_by_pokemon: Array<ItemHolderPokemonResponseModel>;
  /** An evolution chain this item requires to produce a bay during mating. */
  baby_trigger_for: APIResourceWrapper<EvolutionChainResponseModel>;
  /** A list of the machines related to this item. */
  machines: Array<MachineVersionDetailResponseModel>;
}

class ItemSpritesResponseModel {
  /** The default depiction of this item. */
  default: string;
}

class ItemHolderPokemonResponseModel {
  /** The Pokémon that holds this item. */
  pokemon: NamedAPIResourceWrapper<PokemonResponseModel>;
  /** The details for the version that this item is held in by the Pokémon. */
  version_details: Array<ItemHolderPokemonVersionDetailResponseModel>;
}

class ItemHolderPokemonVersionDetailResponseModel {
  /** How often this Pokémon holds this item in this version. */
  rarity: number;
  /** The version that this item is held in by the Pokémon. */
  version: NamedAPIResourceWrapper<VersionResponseModel>;
}

class ItemAttributeResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of items that have this attribute. */
  items: Array<NamedAPIResourceWrapper<ItemResponseModel>>;
  /** The name of this item attribute listed in different languages. */
  names: Array<NameResponseModel>;
  /** The description of this item attribute listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
}

class ItemCategoryResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of items that are a part of this category. */
  items: Array<NamedAPIResourceWrapper<ItemResponseModel>>;
  /** The name of this item category listed in different languages. */
  names: Array<NameResponseModel>;
  /** The pocket items in this category would be put in. */
  pocket: NamedAPIResourceWrapper<ItemPocketResponseModel>;
}

class ItemFlingEffectResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The result of this fling effect listed in different languages. */
  effect_entries: Array<EffectResponseModel>;
  /** A list of items that have this fling effect. */
  items: Array<NamedAPIResourceWrapper<ItemResponseModel>>;
}

class ItemPocketResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of item categories that are relevant to this item pocket. */
  categories: Array<NamedAPIResourceWrapper<ItemCategoryResponseModel>>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

/**
 * MARK: CONTESTS GROUP
 */

class ContestTypeResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The berry flavor that correlates with this contest type. */
  berry_flavor: NamedAPIResourceWrapper<BerryFlavorResponseModel>;
  /** The name of this contest type listed in different languages. */
  names: Array<ContestNameResponseModel>;
}

class ContestNameResponseModel {
  /** The name for this contest. */
  name: string;
  /** The color associated with this contest's name. */
  color: string;
  /** The language that this name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
}

class ContestEffectResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The base number of hearts the user of this move gets. */
  appeal: number;
  /** The base number of hearts the user's opponent loses. */
  jam: number;
  /** The result of this contest effect listed in different languages. */
  effect_entries: Array<EffectResponseModel>;
  /** The flavor text of this contest effect listed in different languages. */
  flavor_text_entries: Array<FlavorTextResponseModel>;
}

class SuperContestEffectResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The level of appeal this super contest effect has. */
  appeal: number;
  /** The flavor text of this super contest effect listed in different languages. */
  flavor_text_entries: Array<FlavorTextResponseModel>;
  /** A list of moves that have the effect when used in super contests. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
}

/**
 * MARK: ENCOUNTERS GROUP
 */

class EncounterMethodResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A good value for sorting. */
  order: number;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class EncounterConditionResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of possible values for this encounter condition. */
  values: Array<NamedAPIResourceWrapper<EncounterConditionValueResponseModel>>;
}

class EncounterConditionValueResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The condition this encounter condition value pertains to. */
  condition: NamedAPIResourceWrapper<EncounterConditionResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

/**
 * MARK: GAMES GROUP
 */

class GenerationResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of abilities that were introduced in this generation. */
  abilities: Array<NamedAPIResourceWrapper<AbilityResponseModel>>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** The main region travelled in this generation. */
  main_region: NamedAPIResourceWrapper<RegionResponseModel>;
  /** A list of moves that were introduced in this generation. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
  /** A list of Pokémon species that were introduced in this generation. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
  /** A list of types that were introduced in this generation. */
  types: Array<NamedAPIResourceWrapper<TypeResponseModel>>;
  /** A list of version groups that were introduced in this generation. */
  version_groups: Array<NamedAPIResourceWrapper<VersionGroupResponseModel>>;
}

class PokedexResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Whether or not this Pokédex originated in the main series of the video games. */
  is_main_series: boolean;
  /** The description of this resource listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of Pokémon catalogued in this Pokédex and their indexes. */
  pokemon_entries: Array<PokemonEntryResponseModel>;
  /** The region this Pokédex catalogues Pokémon for. */
  region: NamedAPIResourceWrapper<RegionResponseModel>;
  /** A list of version groups this Pokédex is relevant to. */
  version_groups: Array<NamedAPIResourceWrapper<VersionGroupResponseModel>>;
}

class PokemonEntryResponseModel {
  /** The index of this Pokémon species entry within the Pokédex. */
  entry_number: number;
  /** The Pokémon species being encountered. */
  pokemon_species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
}

class VersionResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** The version group this version belongs to. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

class VersionGroupResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
  order: number;
  /** The generation this version was introduced in. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** A list of methods in which Pokémon can learn moves in this version group. */
  move_learn_methods: Array<NamedAPIResourceWrapper<MoveLearnMethodResponseModel>>;
  /** A list of Pokédexes introduces in this version group. */
  pokedexes: Array<NamedAPIResourceWrapper<PokedexResponseModel>>;
  /** A list of regions that can be visited in this version group. */
  regions: Array<NamedAPIResourceWrapper<RegionResponseModel>>;
  /** The versions this version group owns. */
  versions: Array<NamedAPIResourceWrapper<VersionResponseModel>>;
}

/**
 * MARK: MACHINES GROUP
 */

class MachineResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The TM or HM item that corresponds to this machine. */
  item: NamedAPIResourceWrapper<ItemResponseModel>;
  /** The move that is taught by this machine. */
  move: NamedAPIResourceWrapper<MoveResponseModel>;
  /** The version group that this machine applies to. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

/**
 * MARK: MOVES GROUP
 */

class MoveResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The percent value of how likely this move is to be successful. */
  accuracy: number;
  /** The percent value of how likely it is this moves effect will happen. */
  effect_chance: number;
  /** Power points. The number of times this move can be used. */
  pp: number;
  /** A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail. */
  priority: number;
  /** The base power of this move with a value of 0 if it does not have a base power. */
  power: number;
  /** A detail of normal and super contest combos that require this move. */
  contest_combos: ContestComboSetsResponseModel;
  /** The type of appeal this move gives a Pokémon when used in a contest. */
  contest_type: NamedAPIResourceWrapper<ContestTypeResponseModel>;
  /** The effect the move has when used in a contest. */
  contest_effect: APIResourceWrapper<ContestEffectResponseModel>;
  /** The type of damage the move inflicts on the target, e.g. physical. */
  damage_class: NamedAPIResourceWrapper<MoveDamageClassResponseModel>;
  /** The effect of this move listed in different languages. */
  effect_entries: Array<VerboseEffectResponseModel>;
  /** The list of previous effects this move has had across version groups of the games. */
  effect_changes: Array<AbilityEffectChangeResponseModel>;
  /** List of Pokemon that can learn the move */
  learned_by_pokemon: Array<NamedAPIResourceWrapper<PokemonResponseModel>>;
  /** The flavor text of this move listed in different languages. */
  flavor_text_entries: Array<MoveFlavorTextResponseModel>;
  /** The generation in which this move was introduced. */
  generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** A list of the machines that teach this move. */
  machines: Array<MachineVersionDetailResponseModel>;
  /** Metadata about this move */
  meta: MoveMetaDataResponseModel;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of move resource value changes across version groups of the game. */
  past_values: Array<PastMoveStatValuesResponseModel>;
  /** A list of stats this moves effects and how much it effects them. */
  stat_changes: Array<MoveStatChangeResponseModel>;
  /** The effect the move has when used in a super contest. */
  super_contest_effect: APIResourceWrapper<SuperContestEffectResponseModel>;
  /** The type of target that will receive the effects of the attack. */
  target: NamedAPIResourceWrapper<MoveTargetResponseModel>;
  /** The elemental type of this move. */
  type: NamedAPIResourceWrapper<TypeResponseModel>;
}

class ContestComboSetsResponseModel {
  /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
  normal: ContestComboDetailResponseModel;
  /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
  super: ContestComboDetailResponseModel;
}

class ContestComboDetailResponseModel {
  /** A list of moves to use before this move. */
  use_before: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
  /** A list of moves to use after this move. */
  use_after: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
}

class MoveFlavorTextResponseModel {
  /** The localized flavor text for an api resource in a specific language. */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResourceWrapper<LanguageResponseModel>;
  /** The version group that uses this flavor text. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

class MoveMetaDataResponseModel {
  /** The status ailment this move inflicts on its target. */
  ailment: NamedAPIResourceWrapper<MoveAilmentResponseModel>;
  /** The category of move this move falls under, e.g. damage or ailment. */
  category: NamedAPIResourceWrapper<MoveCategoryResponseModel>;
  /** The minimum number of times this move hits. Null if it always only hits once. */
  min_hits: number;
  /** The maximum number of times this move hits. Null if it always only hits once. */
  max_hits: number;
  /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
  min_turns: number;
  /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
  max_turns: number;
  /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
  drain: number;
  /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
  healing: number;
  /** Critical hit rate bonus. */
  crit_rate: number;
  /** The likelihood this attack will cause an ailment. */
  ailment_chance: number;
  /** The likelihood this attack will cause the target Pokémon to flinch. */
  flinch_chance: number;
  /** The likelihood this attack will cause a stat change in the target Pokémon. */
  stat_chance: number;
}

class MoveStatChangeResponseModel {
  /** The amount of change. */
  change: number;
  /** The stat being affected. */
  stat: NamedAPIResourceWrapper<StatResponseModel>;
}

class PastMoveStatValuesResponseModel {
  /** The percent value of how likely this move is to be successful. */
  accuracy: number;
  /** The percent value of how likely it is this moves effect will take effect. */
  effect_chance: number;
  /** The base power of this move with a value of 0 if it does not have a base power. */
  power: number;
  /** Power points. The number of times this move can be used. */
  pp: number;
  /** The effect of this move listed in different languages. */
  effect_entries: Array<VerboseEffectResponseModel>;
  /** The elemental type of this move. */
  type: NamedAPIResourceWrapper<TypeResponseModel>;
  /** The version group in which these move stat values were in effect. */
  version_group: NamedAPIResourceWrapper<VersionGroupResponseModel>;
}

class MoveAilmentResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that cause this ailment. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class MoveBattleStyleResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class MoveCategoryResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that fall into this category. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
  /** The description of this resource listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
}

class MoveDamageClassResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
  /** A list of moves that fall into this damage class. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

class MoveLearnMethodResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of version groups where moves can be learned through this method. */
  version_groups: Array<NamedAPIResourceWrapper<VersionGroupResponseModel>>;
}

class MoveTargetResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Array<DescriptionResponseModel>;
  /** A list of moves that that are directed at this target. */
  moves: Array<NamedAPIResourceWrapper<MoveResponseModel>>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
}

/**
 * MARK: LOCATIONS GROUP
 */

class LocationResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The region this location can be found in. */
  region: NamedAPIResourceWrapper<RegionResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of game indices relevent to this location by generation. */
  game_indices: Array<GenerationGameIndexResponseModel>;
  /** Areas that can be found within this location. */
  areas: Array<NamedAPIResourceWrapper<LocationAreaResponseModel>>;
}

class LocationAreaResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
  encounter_method_rates: Array<EncounterMethodRateResponseModel>;
  /** The region this location area can be found in. */
  location: NamedAPIResourceWrapper<LocationResponseModel>;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
  pokemon_encounters: Array<PokemonEncounterResponseModel>;
}

class EncounterMethodRateResponseModel {
  /** The method in which Pokémon may be encountered in an area.. */
  encounter_method: NamedAPIResourceWrapper<EncounterMethodResponseModel>;
  /** The chance of the encounter to occur on a version of the game. */
  version_details: Array<EncounterVersionDetailsResponseModel>;
}

class EncounterVersionDetailsResponseModel {
  /** The chance of an encounter to occur. */
  rate: number;
  /** The version of the game in which the encounter can occur with the given chance. */
  version: NamedAPIResourceWrapper<VersionResponseModel>;
}

class PokemonEncounterResponseModel {
  /** The Pokémon being encountered. */
  pokemon: NamedAPIResourceWrapper<PokemonResponseModel>;
  /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
  version_details: Array<VersionEncounterDetailResponseModel>;
}

class PalParkAreaResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of Pokémon encountered in thi pal park area along with details. */
  pokemon_encounters: Array<PalParkEncounterSpeciesResponseModel>;
}

class PalParkEncounterSpeciesResponseModel {
  /** The base score given to the player when this Pokémon is caught during a pal park run. */
  base_score: number;
  /** The base rate for encountering this Pokémon in this pal park area. */
  rate: number;
  /** The Pokémon species being encountered. */
  pokemon_species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
}

class RegionResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** A list of locations that can be found in this region. */
  locations: Array<NamedAPIResourceWrapper<LocationResponseModel>>;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** The generation this region was introduced in. */
  main_generation: NamedAPIResourceWrapper<GenerationResponseModel>;
  /** A list of pokédexes that catalogue Pokémon in this region. */
  pokedexes: Array<NamedAPIResourceWrapper<PokedexResponseModel>>;
  /** A list of version groups where this region can be visited. */
  version_groups: Array<NamedAPIResourceWrapper<VersionGroupResponseModel>>;
}

/**
 * MARK: EVOLUTIONS GROUP
 */

class EvolutionChainResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. */
  baby_trigger_item: NamedAPIResourceWrapper<ItemResponseModel>;
  /** The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. */
  chain: ChainLinkResponseModel;
}

class ChainLinkResponseModel {
  /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link. */
  is_baby: boolean;
  /** The Pokémon species at this point in the evolution chain. */
  species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
  /** All details regarding the specific details of the referenced Pokémon species evolution. */
  evolution_details: Array<EvolutionDetailResponseModel>;
  /** A List of chain objects. */
  evolves_to: Array<ChainLinkResponseModel>;
}

class EvolutionDetailResponseModel {
  /** The item required to cause evolution this into Pokémon species. */
  item: NamedAPIResourceWrapper<ItemResponseModel>;
  /** The type of event that triggers evolution into this Pokémon species. */
  trigger: NamedAPIResourceWrapper<EvolutionTriggerResponseModel>;
  /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
  gender: number;
  /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
  held_item: NamedAPIResourceWrapper<ItemResponseModel>;
  /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
  known_move: NamedAPIResourceWrapper<MoveResponseModel>;
  /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
  known_move_type: NamedAPIResourceWrapper<TypeResponseModel>;
  /** The location the evolution must be triggered at. */
  location: NamedAPIResourceWrapper<LocationResponseModel>;
  /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
  min_level: number;
  /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
  min_happiness: number;
  /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
  min_beauty: number;
  /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
  min_affection: number;
  /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
  needs_overworld_rain: boolean;
  /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
  party_species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
  /** The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. */
  party_type: NamedAPIResourceWrapper<TypeResponseModel>;
  /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
  relative_physical_stats: number;
  /** The required time of day. Day or night. */
  time_of_day: string;
  /** Pokémon species for which this one must be traded. */
  trade_species: NamedAPIResourceWrapper<PokemonSpeciesResponseModel>;
  /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
  turn_upside_down: boolean;
}

class EvolutionTriggerResponseModel {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Array<NameResponseModel>;
  /** A list of pokemon species that result from this evolution trigger. */
  pokemon_species: Array<NamedAPIResourceWrapper<PokemonSpeciesResponseModel>>;
}