type Monster = {
  index: string;
  name: string;
  type: string;
  alignment: string;
  armor_class: any;
  speed: any;
  proficiencies: any;
  damage_vulnerabilities: any;
  damage_resistances: [];
  damage_immunities: [];
  condition_immunities: [];
  senses: any;
  [key: string]: any | undefined;
};
