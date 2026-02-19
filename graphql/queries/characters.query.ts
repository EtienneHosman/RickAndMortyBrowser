import { CHARACTER_PREVIEW_FRAGMENT } from "../fragments/characterPreviews";
import { EPISODE_PREVIEW_FRAGMENT } from "../fragments/episodePreview";
import { INFO_PAGINATION_FRAGMENT } from "../fragments/infoFragment";

export const GET_ALL_CHARACTERS = gql`
  ${CHARACTER_PREVIEW_FRAGMENT}
  ${INFO_PAGINATION_FRAGMENT}

  query Characters(
    $name: String
    $status: String
    $gender: String
    $page: Int
  ) {
    characters(
      filter: { name: $name, status: $status, gender: $gender }
      page: $page
    ) {
      info {
        ...InfoPagination
      }
      results {
        ...CharacterPreview
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  ${CHARACTER_PREVIEW_FRAGMENT}
  ${EPISODE_PREVIEW_FRAGMENT}

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
        ...EpisodePreview
      }
      image
    }
  }
`;
