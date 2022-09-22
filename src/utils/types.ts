export type DashboardTableType = {
  key: React.Key;
  title: string;
  release_date: string;
  director: string;
  producer: string;
  episode_id: string;
  characters: string;
};

export type PeopleTableType = {
  key: React.Key;
  name: string;
  birth_year: string;
  gender: string;
  hair_color: string;
  height: string;
  created: string;
};

export type SpeciesTableType = {
  key: React.Key;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  average_height: string;
  created: string;
};

export type StarshipsTableType = {
  key: React.Key;
  name: string;
  model: string;
  starship_class: string;
  passengers: string;
  length: string;
  created: string;
};
