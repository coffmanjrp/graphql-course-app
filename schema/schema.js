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
    teachingAssists: [TeachingAssist]
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
    teachingAssists: [TeachingAssistInput]
  }

  input TeachingAssistInput {
    firstName: String
    lastName: String
    experience: Int
  }
`);

export default schema;
