import { CHARACTER_PREVIEW_FRAGMENT } from '../fragments/characterPreviews'

export const GET_ALL_CHARACTERS = gql`
    ${CHARACTER_PREVIEW_FRAGMENT}

    query Characters(
      $name: String
      $status: String
      $gender: String
      $page: Int
    ) {
      characters(
        filter: {
          name: $name
          status: $status
          gender: $gender
        }
        page: $page
      ) {
        info {
          pages
          count
          next
          prev
        }
        results {
          ...CharacterPreview
        }
      }
    }
`

export const GET_CHARACTER_BY_ID = gql`
  ${CHARACTER_PREVIEW_FRAGMENT}

  query GetCharacterById($id: ID!) {
    character(id: $id) {
      ...CharacterPreview
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        episode
      }
      image
    }
  }
`