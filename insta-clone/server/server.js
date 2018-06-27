const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

let schema = buildSchema(`
    type User {
        id: String!
        nickname: String!
        avatar: String!
    }
    type Post {
        id: String!
        user: User!
        caption: String!
        image: String!
    }
    type Query {
        user(id: String): User!
        post(user_id: String, post_id: String): Post!
        posts(user_id: String) : [Post]
    }
`);

const userslist = {
    a: {
        id: 'a',
        nickname: 'Chang hao',
        avatar: 'https://scontent-icn1-1.xx.fbcdn.net/v/t31.0-8/30167677_1760540084032567_6128127439270289570_o.jpg?_nc_cat=0&oh=dc759244a38d9c8f940fc1f0dba7ee93&oe=5B9D8B06',
    }
}

const postslist = {
    a: {
        a: {
            id: 'a',
            user: userslist['a'],
            caption: 'play with laser',
            image: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/17103696_1322708301149083_2358544392747268828_n.jpg?_nc_cat=0&oh=e8a50272ee93fded71615097bc3d31d0&oe=5B86A620'
        },
        b: {
            id: 'b',
            user: userslist['a'],
            caption: 'transmission',
            image: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/17155608_1322708487815731_1639944529404887644_n.jpg?_nc_cat=0&oh=200fe96205ca55b934b1e2eeb94b2032&oe=5B5750E6'
        },
        c: {
            id: "c",
            user: userslist["a"],
            caption: "Me at Frontstack.io",
            image: "https://pbs.twimg.com/media/DNNhrp6W0AAbk7Y.jpg:large"
          },
        d: {
            id: "d",
            user: userslist["a"],
            caption: "Moving the community!",
            image: "https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          }
    }
}

let root = {
    user: function({ id }) {
      return userslist[id];
    },
    post: function({ user_id , post_id }) {
      return postslist[user_id][post_id];
    },
    posts: function({ user_id }){
      return Object.values(postslist[user_id]);
    }
  };

const app = express();
app.use(cors());
app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
);

app.listen(4000);