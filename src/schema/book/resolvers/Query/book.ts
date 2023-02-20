import type { QueryResolvers } from "./../../../types.generated";
export const book: NonNullable<QueryResolvers["book"]> = (
  _parent,
  { id },
  { data }
) => {
  const book = data.books[id];
  if (!book) {
    return {
      error: "NOT_FOUND",
    };
  }

  return {
    result: book,
  };
};
