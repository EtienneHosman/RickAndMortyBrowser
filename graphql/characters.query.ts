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