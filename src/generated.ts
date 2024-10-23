
  // MARK: Types
  

export type NamedAPIResourceList_Response = {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource_Response[];
}





export type APIResourceList_Response = {
    
    count: number;
    
    next: string;
    
    previous: string;
    
    results: APIResource_Response[];
    
}



export type Berry_Response = {
    
    id: number;
    
    name: string;
    
    growth_time: number;
    
    max_harvest: number;
    
    natural_gift_power: number;
    
    size: number;
    
    smoothness: number;
    
    soil_dryness: number;
    
    firmness: NamedAPIResource_Response;
    
    flavors: BerryFlavorMap_Response[];
    
    item: NamedAPIResource_Response;
    
    natural_gift_type: NamedAPIResource_Response;
    
}



export type BerryFlavorMap_Response = {
    
    potency: number;
    
    flavor: NamedAPIResource_Response;
    
}



export type BerryFirmness_Response = {
    
    id: number;
    
    name: string;
    
    berries: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
}



export type BerryFlavor_Response = {
    
    id: number;
    
    name: string;
    
    berries: FlavorBerryMap_Response[];
    
    contest_type: NamedAPIResource_Response;
    
    names: Name_Response[];
    
}



export type FlavorBerryMap_Response = {
    
    potency: number;
    
    berry: NamedAPIResource_Response;
    
}



export type ContestType_Response = {
    
    id: number;
    
    name: string;
    
    berry_flavor: NamedAPIResource_Response;
    
    names: ContestName_Response[];
    
}



export type ContestName_Response = {
    
    name: string;
    
    color: string;
    
    language: NamedAPIResource_Response;
    
}



export type ContestEffect_Response = {
    
    id: number;
    
    appeal: number;
    
    jam: number;
    
    effect_entries: Effect_Response[];
    
    flavor_text_entries: FlavorText_Response[];
    
}



export type SuperContestEffect_Response = {
    
    id: number;
    
    appeal: number;
    
    flavor_text_entries: FlavorText_Response[];
    
    moves: NamedAPIResource_Response[];
    
}



export type EncounterMethod_Response = {
    
    id: number;
    
    name: string;
    
    order: number;
    
    names: Name_Response[];
    
}



export type EncounterCondition_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    values: NamedAPIResource_Response[];
    
}



export type EncounterConditionValue_Response = {
    
    id: number;
    
    name: string;
    
    condition: NamedAPIResource_Response;
    
    names: Name_Response[];
    
}



export type EvolutionChain_Response = {
    
    id: number;
    
    baby_trigger_item: NamedAPIResource_Response;
    
    chain: ChainLink_Response;
    
}



export type ChainLink_Response = {
    
    is_baby: boolean;
    
    species: NamedAPIResource_Response;
    
    evolution_details: EvolutionDetail_Response[];
    
    evolves_to: ChainLink_Response[];
    
}



export type EvolutionDetail_Response = {
    
    item: NamedAPIResource_Response;
    
    trigger: NamedAPIResource_Response;
    
    gender: number;
    
    held_item: NamedAPIResource_Response;
    
    known_move: NamedAPIResource_Response;
    
    known_move_type: NamedAPIResource_Response;
    
    location: NamedAPIResource_Response;
    
    min_level: number;
    
    min_happiness: number;
    
    min_beauty: number;
    
    min_affection: number;
    
    needs_overworld_rain: boolean;
    
    party_species: NamedAPIResource_Response;
    
    party_type: NamedAPIResource_Response;
    
    relative_physical_stats: number;
    
    time_of_day: string;
    
    trade_species: NamedAPIResource_Response;
    
    turn_upside_down: boolean;
    
}



export type EvolutionTrigger_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
}



export type Generation_Response = {
    
    id: number;
    
    name: string;
    
    abilities: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
    main_region: NamedAPIResource_Response;
    
    moves: NamedAPIResource_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
    types: NamedAPIResource_Response[];
    
    version_groups: NamedAPIResource_Response[];
    
}



export type Pokedex_Response = {
    
    id: number;
    
    name: string;
    
    is_main_series: boolean;
    
    descriptions: Description_Response[];
    
    names: Name_Response[];
    
    pokemon_entries: PokemonEntry_Response[];
    
    region: NamedAPIResource_Response;
    
    version_groups: NamedAPIResource_Response[];
    
}



export type PokemonEntry_Response = {
    
    entry_number: number;
    
    pokemon_species: NamedAPIResource_Response;
    
}



export type Version_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    version_group: NamedAPIResource_Response;
    
}



export type VersionGroup_Response = {
    
    id: number;
    
    name: string;
    
    order: number;
    
    generation: NamedAPIResource_Response;
    
    move_learn_methods: NamedAPIResource_Response[];
    
    pokedexes: NamedAPIResource_Response[];
    
    regions: NamedAPIResource_Response[];
    
    versions: NamedAPIResource_Response[];
    
}



export type Item_Response = {
    
    id: number;
    
    name: string;
    
    cost: number;
    
    fling_power: number;
    
    fling_effect: NamedAPIResource_Response;
    
    attributes: NamedAPIResource_Response[];
    
    category: NamedAPIResource_Response;
    
    effect_entries: VerboseEffect_Response[];
    
    flavor_text_entries: VersionGroupFlavorText_Response[];
    
    game_indices: GenerationGameIndex_Response[];
    
    names: Name_Response[];
    
    sprites: ItemSprites_Response;
    
    held_by_pokemon: ItemHolderPokemon_Response[];
    
    baby_trigger_for: APIResource_Response;
    
    machines: MachineVersionDetail_Response[];
    
}



export type ItemSprites_Response = {
    
    default: string;
    
}



export type ItemHolderPokemon_Response = {
    
    pokemon: NamedAPIResource_Response;
    
    version_details: ItemHolderPokemonVersionDetail_Response[];
    
}



export type ItemHolderPokemonVersionDetail_Response = {
    
    rarity: number;
    
    version: NamedAPIResource_Response;
    
}



export type ItemAttribute_Response = {
    
    id: number;
    
    name: string;
    
    items: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
    descriptions: Description_Response[];
    
}



export type ItemCategory_Response = {
    
    id: number;
    
    name: string;
    
    items: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
    pocket: NamedAPIResource_Response;
    
}



export type ItemFlingEffect_Response = {
    
    id: number;
    
    name: string;
    
    effect_entries: Effect_Response[];
    
    items: NamedAPIResource_Response[];
    
}



export type ItemPocket_Response = {
    
    id: number;
    
    name: string;
    
    categories: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
}



export type Location_Response = {
    
    id: number;
    
    name: string;
    
    region: ;
    
    names: Name_Response[];
    
    game_indices: GenerationGameIndex_Response[];
    
    areas: NamedAPIResource_Response[];
    
}



export type LocationArea_Response = {
    
    id: number;
    
    name: string;
    
    game_index: number;
    
    encounter_method_rates: EncounterMethodRate_Response[];
    
    location: NamedAPIResource_Response;
    
    names: Name_Response[];
    
    pokemon_encounters: PokemonEncounter_Response[];
    
}



export type EncounterMethodRate_Response = {
    
    encounter_method: ;
    
    version_details: EncounterVersionDetails_Response[];
    
}



export type EncounterVersionDetails_Response = {
    
    rate: number;
    
    version: ;
    
}



export type PokemonEncounter_Response = {
    
    pokemon: ;
    
    version_details: VersionEncounterDetail_Response[];
    
}



export type PalParkArea_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    pokemon_encounters: PalParkEncounterSpecies_Response[];
    
}



export type PalParkEncounterSpecies_Response = {
    
    base_score: number;
    
    rate: number;
    
    pokemon_species: ;
    
}



export type Region_Response = {
    
    id: number;
    
    locations: NamedAPIResource_Response[];
    
    name: string;
    
    names: Name_Response[];
    
    main_generation: ;
    
    pokedexes: NamedAPIResource_Response[];
    
    version_groups: NamedAPIResource_Response[];
    
}



export type Machine_Response = {
    
    id: number;
    
    item: NamedAPIResource_Response;
    
    move: NamedAPIResource_Response;
    
    version_group: NamedAPIResource_Response;
    
}



export type Move_Response = {
    
    id: number;
    
    name: string;
    
    accuracy: number;
    
    effect_chance: number;
    
    pp: number;
    
    priority: number;
    
    power: number;
    
    contest_combos: ContestComboSets_Response;
    
    contest_type: NamedAPIResource_Response;
    
    contest_effect: APIResource_Response;
    
    damage_class: NamedAPIResource_Response;
    
    effect_entries: VerboseEffect_Response[];
    
    effect_changes: AbilityEffectChange_Response[];
    
    learned_by_pokemon: NamedAPIResource_Response[];
    
    flavor_text_entries: MoveFlavorText_Response[];
    
    generation: ;
    
    machines: MachineVersionDetail_Response[];
    
    meta: MoveMetaData_Response;
    
    names: Name_Response[];
    
    past_values: PastMoveStatValues_Response[];
    
    stat_changes: MoveStatChange_Response[];
    
    super_contest_effect: ;
    
    target: ;
    
    type: ;
    
}



export type ContestComboSets_Response = {
    
    normal: ContestComboDetail_Response;
    
    super: ContestComboDetail_Response;
    
}



export type ContestComboDetail_Response = {
    
    use_before: NamedAPIResource_Response[];
    
    use_after: NamedAPIResource_Response[];
    
}



export type MoveFlavorText_Response = {
    
    flavor_text: string;
    
    language: NamedAPIResource_Response;
    
    version_group: NamedAPIResource_Response;
    
}



export type MoveMetaData_Response = {
    
    ailment: ;
    
    category: ;
    
    min_hits: number;
    
    max_hits: number;
    
    min_turns: number;
    
    max_turns: number;
    
    drain: number;
    
    healing: number;
    
    crit_rate: number;
    
    ailment_chance: number;
    
    flinch_chance: number;
    
    stat_chance: number;
    
}



export type MoveStatChange_Response = {
    
    change: number;
    
    stat: ;
    
}



export type PastMoveStatValues_Response = {
    
    accuracy: number;
    
    effect_chance: number;
    
    power: number;
    
    pp: number;
    
    effect_entries: VerboseEffect_Response[];
    
    type: ;
    
    version_group: ;
    
}



export type MoveAilment_Response = {
    
    id: number;
    
    name: string;
    
    moves: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
}



export type MoveBattleStyle_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
}



export type MoveCategory_Response = {
    
    id: number;
    
    name: string;
    
    moves: NamedAPIResource_Response[];
    
    descriptions: Description_Response[];
    
}



export type MoveDamageClass_Response = {
    
    id: number;
    
    name: string;
    
    descriptions: Description_Response[];
    
    moves: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
}



export type MoveLearnMethod_Response = {
    
    id: number;
    
    name: string;
    
    descriptions: Description_Response[];
    
    names: Name_Response[];
    
    version_groups: NamedAPIResource_Response[];
    
}



export type MoveTarget_Response = {
    
    id: number;
    
    name: string;
    
    descriptions: Description_Response[];
    
    moves: NamedAPIResource_Response[];
    
    names: Name_Response[];
    
}



export type Ability_Response = {
    
    id: number;
    
    name: string;
    
    is_main_series: boolean;
    
    generation: NamedAPIResource_Response;
    
    names: Name_Response[];
    
    effect_entries: VerboseEffect_Response[];
    
    effect_changes: AbilityEffectChange_Response[];
    
    flavor_text_entries: AbilityFlavorText_Response[];
    
    pokemon: AbilityPokemon_Response[];
    
}



export type AbilityEffectChange_Response = {
    
    effect_entries: Effect_Response[];
    
    version_group: NamedAPIResource_Response;
    
}



export type AbilityFlavorText_Response = {
    
    flavor_text: string;
    
    language: NamedAPIResource_Response;
    
    version_group: NamedAPIResource_Response;
    
}



export type AbilityPokemon_Response = {
    
    is_hidden: boolean;
    
    slot: number;
    
    pokemon: NamedAPIResource_Response;
    
}



export type Characteristic_Response = {
    
    id: number;
    
    gene_modulo: number;
    
    possible_values: number[];
    
    highest_stat: NamedAPIResource_Response;
    
    descriptions: Description_Response[];
    
}



export type EggGroup_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
}



export type Gender_Response = {
    
    id: number;
    
    name: string;
    
    pokemon_species_details: PokemonSpeciesGender_Response[];
    
    required_for_evolution: NamedAPIResource_Response[];
    
}



export type PokemonSpeciesGender_Response = {
    
    rate: number;
    
    pokemon_species: NamedAPIResource_Response;
    
}



export type GrowthRate_Response = {
    
    id: number;
    
    name: string;
    
    formula: string;
    
    descriptions: Description_Response[];
    
    levels: GrowthRateExperienceLevel_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
}



export type GrowthRateExperienceLevel_Response = {
    
    level: number;
    
    experience: number;
    
}



export type Nature_Response = {
    
    id: number;
    
    name: string;
    
    decreased_stat: NamedAPIResource_Response;
    
    increased_stat: NamedAPIResource_Response;
    
    hates_flavor: NamedAPIResource_Response;
    
    likes_flavor: NamedAPIResource_Response;
    
    pokeathlon_stat_changes: NatureStatChange_Response[];
    
    move_battle_style_preferences: MoveBattleStylePreference_Response[];
    
    names: Name_Response[];
    
}



export type NatureStatChange_Response = {
    
    max_change: number;
    
    pokeathlon_stat: NamedAPIResource_Response;
    
}



export type MoveBattleStylePreference_Response = {
    
    low_hp_preference: number;
    
    high_hp_preference: number;
    
    move_battle_style: NamedAPIResource_Response;
    
}



export type PokeathlonStat_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    affecting_natures: NaturePokeathlonStatAffectSets_Response;
    
}



export type NaturePokeathlonStatAffectSets_Response = {
    
    increase: NaturePokeathlonStatAffect_Response[];
    
    decrease: NaturePokeathlonStatAffect_Response[];
    
}



export type NaturePokeathlonStatAffect_Response = {
    
    max_change: number;
    
    nature: NamedAPIResource_Response;
    
}



export type Pokemon_Response = {
    
    id: number;
    
    name: string;
    
    base_experience: number;
    
    height: number;
    
    is_default: boolean;
    
    order: number;
    
    weight: number;
    
    abilities: PokemonAbility_Response[];
    
    forms: NamedAPIResource_Response[];
    
    game_indices: VersionGameIndex_Response[];
    
    held_items: PokemonHeldItem_Response[];
    
    location_area_encounters: string;
    
    moves: PokemonMove_Response[];
    
    past_types: PokemonTypePast_Response[];
    
    sprites: PokemonSprites_Response;
    
    cries: PokemonCries_Response;
    
    species: NamedAPIResource_Response;
    
    stats: PokemonStat_Response[];
    
    types: PokemonType_Response[];
    
}



export type PokemonAbility_Response = {
    
    is_hidden: boolean;
    
    slot: number;
    
    ability: NamedAPIResource_Response;
    
}



export type PokemonType_Response = {
    
    slot: number;
    
    type: NamedAPIResource_Response;
    
}



export type PokemonFormType_Response = {
    
    slot: number;
    
    type: NamedAPIResource_Response;
    
}



export type PokemonTypePast_Response = {
    
    generation: NamedAPIResource_Response;
    
    types: PokemonType_Response[];
    
}



export type PokemonHeldItem_Response = {
    
    item: NamedAPIResource_Response;
    
    version_details: PokemonHeldItemVersion_Response[];
    
}



export type PokemonHeldItemVersion_Response = {
    
    version: NamedAPIResource_Response;
    
    rarity: number;
    
}



export type PokemonMove_Response = {
    
    move: NamedAPIResource_Response;
    
    version_group_details: PokemonMoveVersion_Response[];
    
}



export type PokemonMoveVersion_Response = {
    
    move_learn_method: NamedAPIResource_Response;
    
    version_group: NamedAPIResource_Response;
    
    level_learned_at: number;
    
}



export type PokemonStat_Response = {
    
    stat: NamedAPIResource_Response;
    
    effort: number;
    
    base_stat: number;
    
}



export type PokemonSprites_Response = {
    
    front_default: string;
    
    front_shiny: string;
    
    front_female: string;
    
    front_shiny_female: string;
    
    back_default: string;
    
    back_shiny: string;
    
    back_female: string;
    
    back_shiny_female: string;
    
}



export type PokemonCries_Response = {
    
    latest: string;
    
    legacy: string;
    
}



export type LocationAreaEncounter_Response = {
    
    location_area: NamedAPIResource_Response;
    
    version_details: VersionEncounterDetail_Response[];
    
}



export type PokemonColor_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
}



export type PokemonForm_Response = {
    
    id: number;
    
    name: string;
    
    order: number;
    
    form_order: number;
    
    is_default: boolean;
    
    is_battle_only: boolean;
    
    is_mega: boolean;
    
    form_name: string;
    
    pokemon: NamedAPIResource_Response;
    
    types: PokemonFormType_Response[];
    
    sprites: PokemonFormSprites_Response;
    
    version_group: NamedAPIResource_Response;
    
    names: Name_Response[];
    
    form_names: Name_Response[];
    
}



export type PokemonFormSprites_Response = {
    
    front_default: string;
    
    front_shiny: string;
    
    back_default: string;
    
    back_shiny: string;
    
}



export type PokemonHabitat_Response = {
    
    id: number;
    
    name: string;
    
    names: Name_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
}



export type PokemonShape_Response = {
    
    id: number;
    
    name: string;
    
    awesome_names: AwesomeName_Response[];
    
    names: Name_Response[];
    
    pokemon_species: NamedAPIResource_Response[];
    
}



export type AwesomeName_Response = {
    
    awesome_name: string;
    
    language: NamedAPIResource_Response;
    
}



export type PokemonSpecies_Response = {
    
    id: number;
    
    name: string;
    
    order: number;
    
    gender_rate: number;
    
    capture_rate: number;
    
    base_happiness: number;
    
    is_baby: boolean;
    
    is_legendary: boolean;
    
    is_mythical: boolean;
    
    hatch_counter: number;
    
    has_gender_differences: boolean;
    
    forms_switchable: boolean;
    
    growth_rate: NamedAPIResource_Response;
    
    pokedex_numbers: PokemonSpeciesDexEntry_Response[];
    
    egg_groups: NamedAPIResource_Response[];
    
    color: NamedAPIResource_Response;
    
    shape: NamedAPIResource_Response;
    
    evolves_from_species: NamedAPIResource_Response;
    
    evolution_chain: APIResource_Response;
    
    habitat: NamedAPIResource_Response;
    
    generation: NamedAPIResource_Response;
    
    names: Name_Response[];
    
    pal_park_encounters: PalParkEncounterArea_Response[];
    
    flavor_text_entries: FlavorText_Response[];
    
    form_descriptions: Description_Response[];
    
    genera: Genus_Response[];
    
    varieties: PokemonSpeciesVariety_Response[];
    
}



export type Genus_Response = {
    
    genus: string;
    
    language: NamedAPIResource_Response;
    
}



export type PokemonSpeciesDexEntry_Response = {
    
    entry_number: number;
    
    pokedex: NamedAPIResource_Response;
    
}



export type PalParkEncounterArea_Response = {
    
    base_score: number;
    
    rate: number;
    
    area: NamedAPIResource_Response;
    
}



export type PokemonSpeciesVariety_Response = {
    
    is_default: boolean;
    
    pokemon: NamedAPIResource_Response;
    
}



export type Stat_Response = {
    
    id: number;
    
    name: string;
    
    game_index: number;
    
    is_battle_only: boolean;
    
    affecting_moves: MoveStatAffectSets_Response;
    
    affecting_natures: NatureStatAffectSets_Response;
    
    characteristics: APIResource_Response[];
    
    move_damage_class: NamedAPIResource_Response;
    
    names: Name_Response[];
    
}



export type MoveStatAffectSets_Response = {
    
    increase: MoveStatAffect_Response[];
    
    decrease: MoveStatAffect_Response[];
    
}



export type MoveStatAffect_Response = {
    
    change: number;
    
    move: NamedAPIResource_Response;
    
}



export type NatureStatAffectSets_Response = {
    
    increase: NamedAPIResource_Response[];
    
    decrease: NamedAPIResource_Response[];
    
}



export type Type_Response = {
    
    id: number;
    
    name: string;
    
    damage_relations: TypeRelations_Response;
    
    past_damage_relations: undefined[];
    
    game_indices: GenerationGameIndex_Response[];
    
    generation: NamedAPIResource_Response;
    
    move_damage_class: NamedAPIResource_Response;
    
    names: Name_Response[];
    
    pokemon: TypePokemon_Response[];
    
    moves: NamedAPIResource_Response[];
    
}



export type TypePokemon_Response = {
    
    slot: number;
    
    pokemon: NamedAPIResource_Response;
    
}



export type TypeRelations_Response = {
    
    no_damage_to: NamedAPIResource_Response[];
    
    half_damage_to: NamedAPIResource_Response[];
    
    double_damage_to: NamedAPIResource_Response[];
    
    no_damage_from: NamedAPIResource_Response[];
    
    half_damage_from: NamedAPIResource_Response[];
    
    double_damage_from: NamedAPIResource_Response[];
    
}



export type TypeRelationsPast_Response = {
    
    generation: NamedAPIResource_Response;
    
    damage_relations: TypeRelations_Response;
    
}



export type Language_Response = {
    
    id: number;
    
    name: string;
    
    official: boolean;
    
    iso639: string;
    
    iso3166: string;
    
    names: Name_Response[];
    
}



export type APIResource_Response = {
    
    url: string;
    
}



export type Description_Response = {
    
    description: string;
    
    language: NamedAPIResource_Response;
    
}



export type Effect_Response = {
    
    effect: string;
    
    language: NamedAPIResource_Response;
    
}



export type Encounter_Response = {
    
    min_level: number;
    
    max_level: number;
    
    condition_values: NamedAPIResource_Response[];
    
    chance: number;
    
    method: NamedAPIResource_Response;
    
}



export type FlavorText_Response = {
    
    flavor_text: string;
    
    language: NamedAPIResource_Response;
    
    version: NamedAPIResource_Response;
    
}



export type GenerationGameIndex_Response = {
    
    game_index: number;
    
    generation: NamedAPIResource_Response;
    
}



export type MachineVersionDetail_Response = {
    
    machine: ;
    
    version_group: NamedAPIResource_Response;
    
}



export type Name_Response = {
    
    name: string;
    
    language: NamedAPIResource_Response;
    
}



export type NamedAPIResource_Response = {
    
    name: string;
    
    url: string;
    
}



export type VerboseEffect_Response = {
    
    effect: string;
    
    short_effect: string;
    
    language: NamedAPIResource_Response;
    
}



export type VersionEncounterDetail_Response = {
    
    version: NamedAPIResource_Response;
    
    max_chance: number;
    
    encounter_details: Encounter_Response[];
    
}



export type VersionGameIndex_Response = {
    
    game_index: number;
    
    version: NamedAPIResource_Response;
    
}



export type VersionGroupFlavorText_Response = {
    
    text: string;
    
    language: NamedAPIResource_Response;
    
    version_group: NamedAPIResource_Response;
    
}


  
  // MARK: Classes
  class BaseWrapper<T = unknown> {
    #json: T

    constructor(json: T) {
        this.#json = json
    }

    get json() {
        return this.#json
    }
}


class NamedAPIResourceList extends BaseWrapper<NamedAPIResourceList_Response> {
    constructor(init: NamedAPIResourceList_Response) {
        super(init);
    }
}

class APIResourceList extends BaseWrapper<APIResourceList_Response> {
    constructor(init: APIResourceList_Response) {
        super(init);
    }
}

class Berry extends BaseWrapper<Berry_Response> {
    constructor(init: Berry_Response) {
        super(init);
    }
}

class BerryFlavorMap extends BaseWrapper<BerryFlavorMap_Response> {
    constructor(init: BerryFlavorMap_Response) {
        super(init);
    }
}

class BerryFirmness extends BaseWrapper<BerryFirmness_Response> {
    constructor(init: BerryFirmness_Response) {
        super(init);
    }
}

class BerryFlavor extends BaseWrapper<BerryFlavor_Response> {
    constructor(init: BerryFlavor_Response) {
        super(init);
    }
}

class FlavorBerryMap extends BaseWrapper<FlavorBerryMap_Response> {
    constructor(init: FlavorBerryMap_Response) {
        super(init);
    }
}

class ContestType extends BaseWrapper<ContestType_Response> {
    constructor(init: ContestType_Response) {
        super(init);
    }
}

class ContestName extends BaseWrapper<ContestName_Response> {
    constructor(init: ContestName_Response) {
        super(init);
    }
}

class ContestEffect extends BaseWrapper<ContestEffect_Response> {
    constructor(init: ContestEffect_Response) {
        super(init);
    }
}

class SuperContestEffect extends BaseWrapper<SuperContestEffect_Response> {
    constructor(init: SuperContestEffect_Response) {
        super(init);
    }
}

class EncounterMethod extends BaseWrapper<EncounterMethod_Response> {
    constructor(init: EncounterMethod_Response) {
        super(init);
    }
}

class EncounterCondition extends BaseWrapper<EncounterCondition_Response> {
    constructor(init: EncounterCondition_Response) {
        super(init);
    }
}

class EncounterConditionValue extends BaseWrapper<EncounterConditionValue_Response> {
    constructor(init: EncounterConditionValue_Response) {
        super(init);
    }
}

class EvolutionChain extends BaseWrapper<EvolutionChain_Response> {
    constructor(init: EvolutionChain_Response) {
        super(init);
    }
}

class ChainLink extends BaseWrapper<ChainLink_Response> {
    constructor(init: ChainLink_Response) {
        super(init);
    }
}

class EvolutionDetail extends BaseWrapper<EvolutionDetail_Response> {
    constructor(init: EvolutionDetail_Response) {
        super(init);
    }
}

class EvolutionTrigger extends BaseWrapper<EvolutionTrigger_Response> {
    constructor(init: EvolutionTrigger_Response) {
        super(init);
    }
}

class Generation extends BaseWrapper<Generation_Response> {
    constructor(init: Generation_Response) {
        super(init);
    }
}

class Pokedex extends BaseWrapper<Pokedex_Response> {
    constructor(init: Pokedex_Response) {
        super(init);
    }
}

class PokemonEntry extends BaseWrapper<PokemonEntry_Response> {
    constructor(init: PokemonEntry_Response) {
        super(init);
    }
}

class Version extends BaseWrapper<Version_Response> {
    constructor(init: Version_Response) {
        super(init);
    }
}

class VersionGroup extends BaseWrapper<VersionGroup_Response> {
    constructor(init: VersionGroup_Response) {
        super(init);
    }
}

class Item extends BaseWrapper<Item_Response> {
    constructor(init: Item_Response) {
        super(init);
    }
}

class ItemSprites extends BaseWrapper<ItemSprites_Response> {
    constructor(init: ItemSprites_Response) {
        super(init);
    }
}

class ItemHolderPokemon extends BaseWrapper<ItemHolderPokemon_Response> {
    constructor(init: ItemHolderPokemon_Response) {
        super(init);
    }
}

class ItemHolderPokemonVersionDetail extends BaseWrapper<ItemHolderPokemonVersionDetail_Response> {
    constructor(init: ItemHolderPokemonVersionDetail_Response) {
        super(init);
    }
}

class ItemAttribute extends BaseWrapper<ItemAttribute_Response> {
    constructor(init: ItemAttribute_Response) {
        super(init);
    }
}

class ItemCategory extends BaseWrapper<ItemCategory_Response> {
    constructor(init: ItemCategory_Response) {
        super(init);
    }
}

class ItemFlingEffect extends BaseWrapper<ItemFlingEffect_Response> {
    constructor(init: ItemFlingEffect_Response) {
        super(init);
    }
}

class ItemPocket extends BaseWrapper<ItemPocket_Response> {
    constructor(init: ItemPocket_Response) {
        super(init);
    }
}

class Location extends BaseWrapper<Location_Response> {
    constructor(init: Location_Response) {
        super(init);
    }
}

class LocationArea extends BaseWrapper<LocationArea_Response> {
    constructor(init: LocationArea_Response) {
        super(init);
    }
}

class EncounterMethodRate extends BaseWrapper<EncounterMethodRate_Response> {
    constructor(init: EncounterMethodRate_Response) {
        super(init);
    }
}

class EncounterVersionDetails extends BaseWrapper<EncounterVersionDetails_Response> {
    constructor(init: EncounterVersionDetails_Response) {
        super(init);
    }
}

class PokemonEncounter extends BaseWrapper<PokemonEncounter_Response> {
    constructor(init: PokemonEncounter_Response) {
        super(init);
    }
}

class PalParkArea extends BaseWrapper<PalParkArea_Response> {
    constructor(init: PalParkArea_Response) {
        super(init);
    }
}

class PalParkEncounterSpecies extends BaseWrapper<PalParkEncounterSpecies_Response> {
    constructor(init: PalParkEncounterSpecies_Response) {
        super(init);
    }
}

class Region extends BaseWrapper<Region_Response> {
    constructor(init: Region_Response) {
        super(init);
    }
}

class Machine extends BaseWrapper<Machine_Response> {
    constructor(init: Machine_Response) {
        super(init);
    }
}

class Move extends BaseWrapper<Move_Response> {
    constructor(init: Move_Response) {
        super(init);
    }
}

class ContestComboSets extends BaseWrapper<ContestComboSets_Response> {
    constructor(init: ContestComboSets_Response) {
        super(init);
    }
}

class ContestComboDetail extends BaseWrapper<ContestComboDetail_Response> {
    constructor(init: ContestComboDetail_Response) {
        super(init);
    }
}

class MoveFlavorText extends BaseWrapper<MoveFlavorText_Response> {
    constructor(init: MoveFlavorText_Response) {
        super(init);
    }
}

class MoveMetaData extends BaseWrapper<MoveMetaData_Response> {
    constructor(init: MoveMetaData_Response) {
        super(init);
    }
}

class MoveStatChange extends BaseWrapper<MoveStatChange_Response> {
    constructor(init: MoveStatChange_Response) {
        super(init);
    }
}

class PastMoveStatValues extends BaseWrapper<PastMoveStatValues_Response> {
    constructor(init: PastMoveStatValues_Response) {
        super(init);
    }
}

class MoveAilment extends BaseWrapper<MoveAilment_Response> {
    constructor(init: MoveAilment_Response) {
        super(init);
    }
}

class MoveBattleStyle extends BaseWrapper<MoveBattleStyle_Response> {
    constructor(init: MoveBattleStyle_Response) {
        super(init);
    }
}

class MoveCategory extends BaseWrapper<MoveCategory_Response> {
    constructor(init: MoveCategory_Response) {
        super(init);
    }
}

class MoveDamageClass extends BaseWrapper<MoveDamageClass_Response> {
    constructor(init: MoveDamageClass_Response) {
        super(init);
    }
}

class MoveLearnMethod extends BaseWrapper<MoveLearnMethod_Response> {
    constructor(init: MoveLearnMethod_Response) {
        super(init);
    }
}

class MoveTarget extends BaseWrapper<MoveTarget_Response> {
    constructor(init: MoveTarget_Response) {
        super(init);
    }
}

class Ability extends BaseWrapper<Ability_Response> {
    constructor(init: Ability_Response) {
        super(init);
    }
}

class AbilityEffectChange extends BaseWrapper<AbilityEffectChange_Response> {
    constructor(init: AbilityEffectChange_Response) {
        super(init);
    }
}

class AbilityFlavorText extends BaseWrapper<AbilityFlavorText_Response> {
    constructor(init: AbilityFlavorText_Response) {
        super(init);
    }
}

class AbilityPokemon extends BaseWrapper<AbilityPokemon_Response> {
    constructor(init: AbilityPokemon_Response) {
        super(init);
    }
}

class Characteristic extends BaseWrapper<Characteristic_Response> {
    constructor(init: Characteristic_Response) {
        super(init);
    }
}

class EggGroup extends BaseWrapper<EggGroup_Response> {
    constructor(init: EggGroup_Response) {
        super(init);
    }
}

class Gender extends BaseWrapper<Gender_Response> {
    constructor(init: Gender_Response) {
        super(init);
    }
}

class PokemonSpeciesGender extends BaseWrapper<PokemonSpeciesGender_Response> {
    constructor(init: PokemonSpeciesGender_Response) {
        super(init);
    }
}

class GrowthRate extends BaseWrapper<GrowthRate_Response> {
    constructor(init: GrowthRate_Response) {
        super(init);
    }
}

class GrowthRateExperienceLevel extends BaseWrapper<GrowthRateExperienceLevel_Response> {
    constructor(init: GrowthRateExperienceLevel_Response) {
        super(init);
    }
}

class Nature extends BaseWrapper<Nature_Response> {
    constructor(init: Nature_Response) {
        super(init);
    }
}

class NatureStatChange extends BaseWrapper<NatureStatChange_Response> {
    constructor(init: NatureStatChange_Response) {
        super(init);
    }
}

class MoveBattleStylePreference extends BaseWrapper<MoveBattleStylePreference_Response> {
    constructor(init: MoveBattleStylePreference_Response) {
        super(init);
    }
}

class PokeathlonStat extends BaseWrapper<PokeathlonStat_Response> {
    constructor(init: PokeathlonStat_Response) {
        super(init);
    }
}

class NaturePokeathlonStatAffectSets extends BaseWrapper<NaturePokeathlonStatAffectSets_Response> {
    constructor(init: NaturePokeathlonStatAffectSets_Response) {
        super(init);
    }
}

class NaturePokeathlonStatAffect extends BaseWrapper<NaturePokeathlonStatAffect_Response> {
    constructor(init: NaturePokeathlonStatAffect_Response) {
        super(init);
    }
}

class Pokemon extends BaseWrapper<Pokemon_Response> {
    constructor(init: Pokemon_Response) {
        super(init);
    }
}

class PokemonAbility extends BaseWrapper<PokemonAbility_Response> {
    constructor(init: PokemonAbility_Response) {
        super(init);
    }
}

class PokemonType extends BaseWrapper<PokemonType_Response> {
    constructor(init: PokemonType_Response) {
        super(init);
    }
}

class PokemonFormType extends BaseWrapper<PokemonFormType_Response> {
    constructor(init: PokemonFormType_Response) {
        super(init);
    }
}

class PokemonTypePast extends BaseWrapper<PokemonTypePast_Response> {
    constructor(init: PokemonTypePast_Response) {
        super(init);
    }
}

class PokemonHeldItem extends BaseWrapper<PokemonHeldItem_Response> {
    constructor(init: PokemonHeldItem_Response) {
        super(init);
    }
}

class PokemonHeldItemVersion extends BaseWrapper<PokemonHeldItemVersion_Response> {
    constructor(init: PokemonHeldItemVersion_Response) {
        super(init);
    }
}

class PokemonMove extends BaseWrapper<PokemonMove_Response> {
    constructor(init: PokemonMove_Response) {
        super(init);
    }
}

class PokemonMoveVersion extends BaseWrapper<PokemonMoveVersion_Response> {
    constructor(init: PokemonMoveVersion_Response) {
        super(init);
    }
}

class PokemonStat extends BaseWrapper<PokemonStat_Response> {
    constructor(init: PokemonStat_Response) {
        super(init);
    }
}

class PokemonSprites extends BaseWrapper<PokemonSprites_Response> {
    constructor(init: PokemonSprites_Response) {
        super(init);
    }
}

class PokemonCries extends BaseWrapper<PokemonCries_Response> {
    constructor(init: PokemonCries_Response) {
        super(init);
    }
}

class LocationAreaEncounter extends BaseWrapper<LocationAreaEncounter_Response> {
    constructor(init: LocationAreaEncounter_Response) {
        super(init);
    }
}

class PokemonColor extends BaseWrapper<PokemonColor_Response> {
    constructor(init: PokemonColor_Response) {
        super(init);
    }
}

class PokemonForm extends BaseWrapper<PokemonForm_Response> {
    constructor(init: PokemonForm_Response) {
        super(init);
    }
}

class PokemonFormSprites extends BaseWrapper<PokemonFormSprites_Response> {
    constructor(init: PokemonFormSprites_Response) {
        super(init);
    }
}

class PokemonHabitat extends BaseWrapper<PokemonHabitat_Response> {
    constructor(init: PokemonHabitat_Response) {
        super(init);
    }
}

class PokemonShape extends BaseWrapper<PokemonShape_Response> {
    constructor(init: PokemonShape_Response) {
        super(init);
    }
}

class AwesomeName extends BaseWrapper<AwesomeName_Response> {
    constructor(init: AwesomeName_Response) {
        super(init);
    }
}

class PokemonSpecies extends BaseWrapper<PokemonSpecies_Response> {
    constructor(init: PokemonSpecies_Response) {
        super(init);
    }
}

class Genus extends BaseWrapper<Genus_Response> {
    constructor(init: Genus_Response) {
        super(init);
    }
}

class PokemonSpeciesDexEntry extends BaseWrapper<PokemonSpeciesDexEntry_Response> {
    constructor(init: PokemonSpeciesDexEntry_Response) {
        super(init);
    }
}

class PalParkEncounterArea extends BaseWrapper<PalParkEncounterArea_Response> {
    constructor(init: PalParkEncounterArea_Response) {
        super(init);
    }
}

class PokemonSpeciesVariety extends BaseWrapper<PokemonSpeciesVariety_Response> {
    constructor(init: PokemonSpeciesVariety_Response) {
        super(init);
    }
}

class Stat extends BaseWrapper<Stat_Response> {
    constructor(init: Stat_Response) {
        super(init);
    }
}

class MoveStatAffectSets extends BaseWrapper<MoveStatAffectSets_Response> {
    constructor(init: MoveStatAffectSets_Response) {
        super(init);
    }
}

class MoveStatAffect extends BaseWrapper<MoveStatAffect_Response> {
    constructor(init: MoveStatAffect_Response) {
        super(init);
    }
}

class NatureStatAffectSets extends BaseWrapper<NatureStatAffectSets_Response> {
    constructor(init: NatureStatAffectSets_Response) {
        super(init);
    }
}

class Type extends BaseWrapper<Type_Response> {
    constructor(init: Type_Response) {
        super(init);
    }
}

class TypePokemon extends BaseWrapper<TypePokemon_Response> {
    constructor(init: TypePokemon_Response) {
        super(init);
    }
}

class TypeRelations extends BaseWrapper<TypeRelations_Response> {
    constructor(init: TypeRelations_Response) {
        super(init);
    }
}

class TypeRelationsPast extends BaseWrapper<TypeRelationsPast_Response> {
    constructor(init: TypeRelationsPast_Response) {
        super(init);
    }
}

class Language extends BaseWrapper<Language_Response> {
    constructor(init: Language_Response) {
        super(init);
    }
}

class APIResource extends BaseWrapper<APIResource_Response> {
    constructor(init: APIResource_Response) {
        super(init);
    }
}

class Description extends BaseWrapper<Description_Response> {
    constructor(init: Description_Response) {
        super(init);
    }
}

class Effect extends BaseWrapper<Effect_Response> {
    constructor(init: Effect_Response) {
        super(init);
    }
}

class Encounter extends BaseWrapper<Encounter_Response> {
    constructor(init: Encounter_Response) {
        super(init);
    }
}

class FlavorText extends BaseWrapper<FlavorText_Response> {
    constructor(init: FlavorText_Response) {
        super(init);
    }
}

class GenerationGameIndex extends BaseWrapper<GenerationGameIndex_Response> {
    constructor(init: GenerationGameIndex_Response) {
        super(init);
    }
}

class MachineVersionDetail extends BaseWrapper<MachineVersionDetail_Response> {
    constructor(init: MachineVersionDetail_Response) {
        super(init);
    }
}

class Name extends BaseWrapper<Name_Response> {
    constructor(init: Name_Response) {
        super(init);
    }
}

class NamedAPIResource extends BaseWrapper<NamedAPIResource_Response> {
    constructor(init: NamedAPIResource_Response) {
        super(init);
    }
}

class VerboseEffect extends BaseWrapper<VerboseEffect_Response> {
    constructor(init: VerboseEffect_Response) {
        super(init);
    }
}

class VersionEncounterDetail extends BaseWrapper<VersionEncounterDetail_Response> {
    constructor(init: VersionEncounterDetail_Response) {
        super(init);
    }
}

class VersionGameIndex extends BaseWrapper<VersionGameIndex_Response> {
    constructor(init: VersionGameIndex_Response) {
        super(init);
    }
}

class VersionGroupFlavorText extends BaseWrapper<VersionGroupFlavorText_Response> {
    constructor(init: VersionGroupFlavorText_Response) {
        super(init);
    }
}


 
   