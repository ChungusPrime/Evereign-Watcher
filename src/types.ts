export interface MasterDataObject {
  realms: Realm[];
  classes: Class[];
  class_resources: ClassResource[];
  items: Item[];
  attributes: Attribute[];
  abilities: Ability[];
  skills: Skill[];
  races: Race[];
  factions: Faction[];
  npcs: NPC[];
  nodes: Node[];
  quests: Quest[];
  land: Land[];
  damage_types: DamageType[];
  mechanics: Mechanic[];
  stats: Stat[];
  meta: Meta[];
  traits: Trait[];
  currency: Currency[];
  item_properties: ItemProperty[];
  world_objects: WorldObject[];
  loot_tables: LootTable[];
};

export interface Realm {
  id: string;
  name: string;
  address: string;
  players: number;
  status: string;
  type: string;
}

// game_abilities
export interface Ability {
  id: string;
  name: string;
  requirements: string;
  type: string;
  description: string;
}

// game_attributes
export interface Attribute {
  id: string;
  name: string;
  description: string;
}

// game_classes
export interface Class {
  id: string;
  name: string;
  description: string;
  traits: string;
  attributes: string;
  equipment: string;
  resource: string;
}

// game_class_resources
export interface ClassResource {
  id: string;
  name: string;
  description: string;
}

// game_damage_types
export interface DamageType {
  id: string;
  name: string;
  colour: string;
}

// game_factions
export interface Faction {
  id: string;
  name: string;
  description: string;
  type: string;
  joinable: boolean;
}

// game_items
export interface Item {
  id: string;
  name: string;
  type: string;
  subtype: string;
  requirements: string;
  properties: string;
  attack_effects: string;
  passive_effects: string;
  use_effects: string;
  cooldown: string;
  efficiency: string;
  range: string;
  rarity: string;
  upgrade_level: string;
  weight: string;
  value: string;
  stackable: string;
  quantity: string;
  sprite: string;
}

// game_land
export interface Land {
  id: string;
  name: string;
  owner: string;
  type: string;
  region: string;
}

// game_mechanics
export interface Mechanic {
  id: string;
  name: string;
  description: string;
}

// game_metadata
export interface Meta {
  id: string;
  meta_key: string;
  meta_val: string;
}

// game_nodes
export interface Node {
  id: string;
  region: string;
  type: string;
  respawn_time: string;
  resources: string;
  status: string;
}

// game_npcs
export interface NPC {
  id: string;
  name: string;
  x: string;
  y: string;
  title: string;
  class: string;
  faction: string;
  max_health: string;
  speed: string;
  vendor: string;
  quests: string;
  loot: string;
  region: string;
  sprite: string;
  trainer: string;
}

// game_quests
export interface Quest {
  id: string;
  name: string;
}

// game_races
export interface Race {
  id: string;
  name: string;
  description: string;
}

// game_skills
export interface Skill {
  id: string;
  name: string;
  type: string;
  description: string;
}

// game_stats
export interface Stat {
  id: string;
  name: string;
  description: string;
  attribute: string;
}

// game_traits
export interface Trait {
  id: string;
  name: string;
  requirements: string;
  type: string;
  description: string;
}

// game_currency
export interface Currency {
  id: string;
  name: string;
  description: string;
}

// game_world_objects
export interface WorldObject {
  id: string;
  region: string;
  type: string;
  items: string;
}

// game_item_properties
export interface ItemProperty {
  id: string;
  name: string;
  description: string;
}

// game_loot_tables
export interface LootTable {
  id: string;
  name: string;
  items: string;
  description: string;
}