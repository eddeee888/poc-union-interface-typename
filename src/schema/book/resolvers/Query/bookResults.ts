import type { QueryResolvers } from "./../../../types.generated";
export const bookResults: NonNullable<QueryResolvers["bookResults"]> = (
  _parent,
  _arg,
  { data }
) => {
  return Object.values(data.books).map((book) => ({ result: book }));
};
