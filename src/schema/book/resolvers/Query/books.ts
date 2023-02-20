import type { QueryResolvers } from "./../../../types.generated";
export const books: NonNullable<QueryResolvers["books"]> = (
  _parent,
  _arg,
  { data }
) => {
  return Object.values(data.books);
};
