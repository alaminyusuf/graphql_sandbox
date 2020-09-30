import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

// demo data
const users = [
  { id: '1', name: 'Adrean', email: 'adrean@gmail.com' },
  { id: '2', name: 'Mike', email: 'mike@gmail.com' },
  { id: '3', name: 'Paul', email: 'paul@gmail.com' },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return users;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
