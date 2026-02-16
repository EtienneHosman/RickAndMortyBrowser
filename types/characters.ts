// types/episodes.ts
export interface CharacterPreview {
  id: string
  name: string
  status: string
  image: string
}

export interface ListInfo {
    count: number
    pages: number
    next: number | null
    prev: number | null
}

export interface CharacterQueryResult {
  characters: {
    info: ListInfo
    results: CharacterPreview[]
  }
}