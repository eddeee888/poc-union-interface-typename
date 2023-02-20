import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers["book"]> = (
  _parent,
  { id },
  { data }
) => {
  const book = data.books[id];
  if (!book) {
    return {
      __typename: "StandardError",
      error: "NOT_FOUND",
    };
  }

  return {
    __typename: "BookResult",
    result: book,
  };
};
