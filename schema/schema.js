import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    getCourse(id: ID): Course
  }

  type Mutation {
    createCourse(input: CourseInput): Course
  }

  type Course {
    id: ID
    courseName: String
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    teachAssists: [TeachingAssist]
  }

  type TeachingAssist {
    firstName: String
    lastName: String
    experience: Int
  }

  enum Stack {
    WEB
    MOBILE
    OTHER
  }

  input CourseInput {
    id: ID
    courseName: String!
    category: String
    price: Int!
    language: String
    email: String
    stack: Stack
    teachAssists: [TeachingAssistInput]
  }

  input TeachingAssistInput {
    firstName: String
    lastName: String
    experience: Int
  }
`);

export default schema;
