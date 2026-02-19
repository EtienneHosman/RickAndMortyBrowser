export interface EpisodesQueryResults {
  episodes: {
    info: PaginationInfo
    results: EpisodePreview[]
  }
}

export interface EpisodeDetailQueryResult {
    episode: {
        id: number
        name: string
        episode: string
        air_date: string
        characters: CharacterPreview[]
    }
}

export interface EpisodePreview {
    id: number
    name: string
    episode: string
}