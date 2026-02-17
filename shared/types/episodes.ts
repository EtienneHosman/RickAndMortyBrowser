export interface EpisodeDetailQueryResult {
    episode: {
        id: number
        name: string
        episode: string
        air_date: string
        characters: CharacterPreview[]
    }
}