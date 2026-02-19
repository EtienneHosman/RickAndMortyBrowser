export const INFO_PAGINATION_FRAGMENT = gql`
  fragment InfoPagination on Info {
    pages
    count
    next
    prev
  }
`;
