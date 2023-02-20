import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 6, end: 11 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1, end: 11 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 18, end: 26 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 13, end: 26 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "StandardError",
        loc: { start: 33, end: 46 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 51, end: 56 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ErrorType",
                loc: { start: 58, end: 67 },
              },
              loc: { start: 58, end: 67 },
            },
            loc: { start: 58, end: 68 },
          },
          directives: [],
          loc: { start: 51, end: 68 },
        },
      ],
      loc: { start: 28, end: 70 },
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "ErrorType", loc: { start: 77, end: 86 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 91, end: 100 },
          },
          directives: [],
          loc: { start: 91, end: 100 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 103, end: 125 },
          },
          directives: [],
          loc: { start: 103, end: 125 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 128, end: 143 },
          },
          directives: [],
          loc: { start: 128, end: 143 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 146, end: 162 },
          },
          directives: [],
          loc: { start: 146, end: 162 },
        },
      ],
      loc: { start: 72, end: 164 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 173, end: 181 } },
      directives: [],
      loc: { start: 166, end: 181 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 194, end: 199 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 204, end: 208 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 209, end: 211 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 213, end: 215 },
                  },
                  loc: { start: 213, end: 215 },
                },
                loc: { start: 213, end: 216 },
              },
              directives: [],
              loc: { start: 209, end: 216 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 219, end: 230 },
              },
              loc: { start: 219, end: 230 },
            },
            loc: { start: 219, end: 231 },
          },
          directives: [],
          loc: { start: 204, end: 231 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bookResults",
            loc: { start: 234, end: 245 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "BookResult",
                    loc: { start: 248, end: 258 },
                  },
                  loc: { start: 248, end: 258 },
                },
                loc: { start: 248, end: 259 },
              },
              loc: { start: 247, end: 260 },
            },
            loc: { start: 247, end: 261 },
          },
          directives: [],
          loc: { start: 234, end: 261 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "books", loc: { start: 264, end: 269 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Book",
                    loc: { start: 272, end: 276 },
                  },
                  loc: { start: 272, end: 276 },
                },
                loc: { start: 272, end: 277 },
              },
              loc: { start: 271, end: 278 },
            },
            loc: { start: 271, end: 279 },
          },
          directives: [],
          loc: { start: 264, end: 279 },
        },
      ],
      loc: { start: 182, end: 281 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 288, end: 292 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 297, end: 299 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 301, end: 303 },
              },
              loc: { start: 301, end: 303 },
            },
            loc: { start: 301, end: 304 },
          },
          directives: [],
          loc: { start: 297, end: 304 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 307, end: 311 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 313, end: 319 },
              },
              loc: { start: 313, end: 319 },
            },
            loc: { start: 313, end: 320 },
          },
          directives: [],
          loc: { start: 307, end: 320 },
        },
      ],
      loc: { start: 283, end: 322 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 329, end: 339 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 344, end: 350 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 352, end: 356 },
            },
            loc: { start: 352, end: 356 },
          },
          directives: [],
          loc: { start: 344, end: 356 },
        },
      ],
      loc: { start: 324, end: 358 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 366, end: 377 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 380, end: 390 },
          },
          loc: { start: 380, end: 390 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "StandardError",
            loc: { start: 393, end: 406 },
          },
          loc: { start: 393, end: 406 },
        },
      ],
      loc: { start: 360, end: 406 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 419, end: 424 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 429, end: 433 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 434, end: 436 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 438, end: 440 },
                  },
                  loc: { start: 438, end: 440 },
                },
                loc: { start: 438, end: 441 },
              },
              directives: [],
              loc: { start: 434, end: 441 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 444, end: 448 },
            },
            loc: { start: 444, end: 448 },
          },
          directives: [],
          loc: { start: 429, end: 448 },
        },
      ],
      loc: { start: 407, end: 450 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 457, end: 461 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 466, end: 468 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 470, end: 472 },
              },
              loc: { start: 470, end: 472 },
            },
            loc: { start: 470, end: 473 },
          },
          directives: [],
          loc: { start: 466, end: 473 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 476, end: 484 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 486, end: 492 },
              },
              loc: { start: 486, end: 492 },
            },
            loc: { start: 486, end: 493 },
          },
          directives: [],
          loc: { start: 476, end: 493 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 496, end: 505 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Book",
                    loc: { start: 508, end: 512 },
                  },
                  loc: { start: 508, end: 512 },
                },
                loc: { start: 508, end: 513 },
              },
              loc: { start: 507, end: 514 },
            },
            loc: { start: 507, end: 515 },
          },
          directives: [],
          loc: { start: 496, end: 515 },
        },
      ],
      loc: { start: 452, end: 517 },
    },
  ],
  loc: { start: 0, end: 517 },
} as unknown as DocumentNode;
