export interface CharacterPreview {
  id: string
  name: string
  status: CharacterStatus
  image: string
}

export enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown'
}

export interface CharactersQueryResult {
  characters: {
    info: PaginationInfo
    results: CharacterPreview[]
  }
}

export interface CharacterDetailQueryResult {
  character: {
    id: string
    name: string
    status: CharacterStatus
    species: string
    type: string
    gender: string
    image: string
    origin: {
      name: string
    }
    location: {
      name: string
    }
    episode: EpisodePreview[]
  }
}

export interface CharacterByIdsQueryResult {
  charactersByIds: CharacterPreview[]
}