import { CHARACTER_PREVIEW_FRAGMENT } from "../fragments/characterPreviews";
import { EPISODE_PREVIEW_FRAGMENT } from "../fragments/episodePreview";
import { INFO_PAGINATION_FRAGMENT } from "../fragments/infoFragment";

export const GET_ALL_EPISODES = gql`
  ${EPISODE_PREVIEW_FRAGMENT}
  ${INFO_PAGINATION_FRAGMENT}

  query Episodes($name: String, $episode: String, $page: Int) {
    episodes(filter: { name: $name, episode: $episode }, page: $page) {
      info {
        ...InfoPagination
      }
      results {
        ...EpisodePreview
      }
    }
  }
`;

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
`;
