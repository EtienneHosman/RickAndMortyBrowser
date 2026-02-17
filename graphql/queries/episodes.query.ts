import { CHARACTER_PREVIEW_FRAGMENT } from '../fragments/characterPreviews'

export const GET_EPISODE_BY_ID = gql`
    ${CHARACTER_PREVIEW_FRAGMENT}
    query GetEpisodeById($id: ID!) {
        episode(id: $id) {
            id
            name
            episode
            characters {
                ...CharacterPreview
            }
            air_date
        }
    }
`