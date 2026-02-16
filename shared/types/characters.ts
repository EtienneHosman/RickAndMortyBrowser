// types/episodes.ts
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
    id: number
    name: string
    status: CharacterStatus
    species: string
    type: string
    gender: string
    origin: {
      name: string
    }
    location: {
      name: string
    }
    episode: [
      {
        name: string
        episode: string
      }
    ]
    image: string
  }
}