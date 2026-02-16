export const GET_ALL_CHARACTERS = gql`
    query Characters($name: String, $page: Int){ 
        characters(filter: {name: $name}, page: $page) {
            info {
                pages
                count
                next
                prev
            }
            results {
                id
                name
                status
                image
            }
        }
    }
`

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
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
        name
        episode
      }
      image
    }
  }
`