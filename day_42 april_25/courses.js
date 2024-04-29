var express = require("express")
var cors = require('cors')
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")

// GraphQL Schema
let courseSchema = buildSchema(`
    type Query{
        course(id:Int):Course
        courses:[Course]
    }
    type Course{
        id:Int,
        title:String
        author:String
        description:String
        topic:String
        url:String
    }
`);

let courseData = [
    { id: 1, title: 'NodeJS', 'author': 'Author-1', description: 'Description-1', topic: 'Topic-1', url: 'url-1' },
    { id: 2, title: 'React', 'author': 'Author-2', description: 'Description-2', topic: 'Topic-2', url: 'url-2' }
]

let getCourse = function (args) {
    let id = args.id;
    return courseData.find(course => course.id == id);
}
let getAllCourses = function () {
    return courseData;
}
let root = {
    course: getCourse,
    courses: getAllCourses
}

// express
let app = express();
app.use(cors());

app.all(
    "/courses",
    createHandler({
        schema: courseSchema,
        rootValue: root,
    })
)

// Serve the GraphiQL IDE.
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/courses" }))
});

// Start the server at port
app.listen(5000)
console.log("Running a GraphQL API server at http://localhost:5000/courses")

