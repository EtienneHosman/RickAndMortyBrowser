export const CHARACTER_PREVIEW_FRAGMENT = gql`
  fragment CharacterPreview on Character {
    id
    name
    status
    image
  }
`