let questions = [];

const quizData = {
    java: [
    {
        question: "Java is developed by?",
        answers: [
            { text: "Sun Microsystems", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Apple", correct: false }
        ]
    },

    {
        question: "Which keyword is used to create an object in Java?",
        answers: [
            { text: "new", correct: true },
            { text: "create", correct: false },
            { text: "object", correct: false },
            { text: "class", correct: false }
        ]
    },

    {
        question: "Which method is the entry point of Java program?",
        answers: [
            { text: "main()", correct: true },
            { text: "start()", correct: false },
            { text: "run()", correct: false },
            { text: "init()", correct: false }
        ]
    },

    {
        question: "Java is a _____ language.",
        answers: [
            { text: "Object-Oriented", correct: true },
            { text: "Assembly", correct: false },
            { text: "Machine", correct: false },
            { text: "Markup", correct: false }
        ]
    },

    {
        question: "Which symbol is used to end a statement in Java?",
        answers: [
            { text: ";", correct: true },
            { text: ":", correct: false },
            { text: ".", correct: false },
            { text: ",", correct: false }
        ]
    },

    {
        question: "Which package is automatically imported in Java?",
        answers: [
            { text: "java.lang", correct: true },
            { text: "java.util", correct: false },
            { text: "java.io", correct: false },
            { text: "java.net", correct: false }
        ]
    },

    {
        question: "Which data type is used for decimal values?",
        answers: [
            { text: "float", correct: true },
            { text: "int", correct: false },
            { text: "char", correct: false },
            { text: "boolean", correct: false }
        ]
    },

    {
        question: "Which loop executes at least once?",
        answers: [
            { text: "do-while", correct: true },
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "if", correct: false }
        ]
    },

    {
        question: "Which operator is used for comparison?",
        answers: [
            { text: "==", correct: true },
            { text: "=", correct: false },
            { text: "+", correct: false },
            { text: "%", correct: false }
        ]
    },

    {
        question: "Which keyword is used for inheritance?",
        answers: [
            { text: "extends", correct: true },
            { text: "implements", correct: false },
            { text: "inherits", correct: false },
            { text: "super", correct: false }
        ]
    },
    {
        question: "Which keyword is used to define a class in Java?",
        answers: [
            { text: "class", correct: true },
            { text: "define", correct: false },
            { text: "create", correct: false },
            { text: "object", correct: false }
        ]
    },

    {
        question: "Which keyword is used to stop a loop?",
        answers: [
            { text: "break", correct: true },
            { text: "stop", correct: false },
            { text: "exit", correct: false },
            { text: "continue", correct: false }
        ]
    },

    {
        question: "Which keyword is used to skip one iteration?",
        answers: [
            { text: "continue", correct: true },
            { text: "break", correct: false },
            { text: "skip", correct: false },
            { text: "next", correct: false }
        ]
    },

    {
        question: "Which access modifier makes members accessible everywhere?",
        answers: [
            { text: "public", correct: true },
            { text: "private", correct: false },
            { text: "protected", correct: false },
            { text: "default", correct: false }
        ]
    },

    {
        question: "Which keyword is used to inherit a class?",
        answers: [
            { text: "extends", correct: true },
            { text: "implements", correct: false },
            { text: "super", correct: false },
            { text: "inherit", correct: false }
        ]
    },

   {
        question: "Which keyword refers to current object?",
        answers: [
            { text: "this", correct: true },
            { text: "super", correct: false },
            { text: "self", correct: false },
            { text: "object", correct: false }
        ]
    },

   {
        question: "Which keyword refers to parent class?",
        answers: [
            { text: "super", correct: true },
            { text: "this", correct: false },
            { text: "parent", correct: false },
            { text: "base", correct: false }
        ]
    },

    {
        question: "Which concept allows same method name with different parameters?",
        answers: [
            { text: "Method Overloading", correct: true },
            { text: "Method Overriding", correct: false },
            { text: "Inheritance", correct: false },
            { text: "Encapsulation", correct: false }
        ]
    },

    {
        question: "Which concept allows same method in parent and child class?",
        answers: [
            { text: "Method Overriding", correct: true },
            { text: "Method Overloading", correct: false },
            { text: "Polymorphism", correct: false },
            { text: "Abstraction", correct: false }
        ]
    },

    {
        question: "Which keyword is used for exception handling?",
        answers: [
            { text: "try", correct: true },
            { text: "check", correct: false },
            { text: "error", correct: false },
            { text: "attempt", correct: false }
        ]
    },
    {
        question: "Which keyword is used to create an interface in Java?",
        answers: [
            { text: "interface", correct: true },
            { text: "implements", correct: false },
            { text: "abstract", correct: false },
            { text: "extends", correct: false }
        ]
    },

    {
        question: "Which keyword is used to implement an interface?",
        answers: [
            { text: "extends", correct: false },
            { text: "implements", correct: true },
            { text: "interface", correct: false },
            { text: "inherit", correct: false }
        ]
    },

    {
        question: "Which keyword is used to prevent inheritance?",
        answers: [
            { text: "static", correct: false },
            { text: "final", correct: true },
            { text: "constant", correct: false },
            { text: "private", correct: false }
        ]
    },

    {
        question: "Which keyword is used to create constant variables?",
        answers: [
            { text: "static", correct: false },
            { text: "final", correct: true },
            { text: "const", correct: false },
            { text: "fixed", correct: false }
        ]
    },

    {
        question: "Which data type is used to store a single character?",
        answers: [
            { text: "String", correct: false },
            { text: "char", correct: true },
            { text: "character", correct: false },
            { text: "text", correct: false }
        ]
    },

{
    question: "Which operator is used for logical AND?",
    answers: [
        { text: "&&", correct: true },
        { text: "||", correct: false },
        { text: "!", correct: false },
        { text: "&", correct: false }
    ]
},

{
    question: "Which operator is used for logical OR?",
    answers: [
        { text: "&&", correct: false },
        { text: "||", correct: true },
        { text: "!", correct: false },
        { text: "&", correct: false }
    ]
},

{
    question: "Which statement is used for multiple conditions?",
    answers: [
        { text: "if", correct: false },
        { text: "switch", correct: true },
        { text: "while", correct: false },
        { text: "for", correct: false }
    ]
},

{
    question: "Which keyword is used to inherit thread class?",
    answers: [
        { text: "implements", correct: false },
        { text: "extends", correct: true },
        { text: "thread", correct: false },
        { text: "run", correct: false }
    ]
},

{
    question: "Which method starts a thread in Java?",
    answers: [
        { text: "run()", correct: false },
        { text: "start()", correct: true },
        { text: "begin()", correct: false },
        { text: "execute()", correct: false }
    ]
},
{
    question: "Which package contains Scanner class?",
    answers: [
        { text: "java.io", correct: false },
        { text: "java.util", correct: true },
        { text: "java.lang", correct: false },
        { text: "java.net", correct: false }
    ]
},

{
    question: "Which class is used to take user input in Java?",
    answers: [
        { text: "Input", correct: false },
        { text: "Scanner", correct: true },
        { text: "Reader", correct: false },
        { text: "Writer", correct: false }
    ]
},

{
    question: "Which keyword is used to create an abstract class?",
    answers: [
        { text: "interface", correct: false },
        { text: "abstract", correct: true },
        { text: "extends", correct: false },
        { text: "implements", correct: false }
    ]
},

{
    question: "Can we create an object of abstract class directly?",
    answers: [
        { text: "Yes", correct: false },
        { text: "No", correct: true },
        { text: "Sometimes", correct: false },
        { text: "Only once", correct: false }
    ]
},

{
    question: "Which keyword is used to inherit an interface?",
    answers: [
        { text: "implements", correct: true },
        { text: "extends", correct: false },
        { text: "interface", correct: false },
        { text: "super", correct: false }
    ]
},

{
    question: "Which keyword is used to handle exceptions after try block?",
    answers: [
        { text: "throw", correct: false },
        { text: "catch", correct: true },
        { text: "throws", correct: false },
        { text: "finally", correct: false }
    ]
},

{
    question: "Which block always executes whether exception occurs or not?",
    answers: [
        { text: "catch", correct: false },
        { text: "finally", correct: true },
        { text: "throw", correct: false },
        { text: "try", correct: false }
    ]
},

{
    question: "Which keyword is used to throw an exception manually?",
    answers: [
        { text: "throws", correct: false },
        { text: "throw", correct: true },
        { text: "error", correct: false },
        { text: "exception", correct: false }
    ]
},

{
    question: "Which collection stores elements in key-value pairs?",
    answers: [
        { text: "List", correct: false },
        { text: "Map", correct: true },
        { text: "Set", correct: false },
        { text: "Array", correct: false }
    ]
},

{
    question: "Which collection does not allow duplicate values?",
    answers: [
        { text: "List", correct: false },
        { text: "Set", correct: true },
        { text: "ArrayList", correct: false },
        { text: "Vector", correct: false }
    ]
},
{
    question: "Which class is used to store dynamic arrays in Java?",
    answers: [
        { text: "Array", correct: false },
        { text: "ArrayList", correct: true },
        { text: "HashMap", correct: false },
        { text: "Set", correct: false }
    ]
},

{
    question: "Which method is used to add elements in ArrayList?",
    answers: [
        { text: "insert()", correct: false },
        { text: "add()", correct: true },
        { text: "push()", correct: false },
        { text: "put()", correct: false }
    ]
},

{
    question: "Which method is used to remove elements from ArrayList?",
    answers: [
        { text: "delete()", correct: false },
        { text: "remove()", correct: true },
        { text: "pop()", correct: false },
        { text: "clear()", correct: false }
    ]
},

{
    question: "Which method is used to find length of a String?",
    answers: [
        { text: "size()", correct: false },
        { text: "length()", correct: true },
        { text: "count()", correct: false },
        { text: "get()", correct: false }
    ]
},

{
    question: "Which method converts string to lowercase?",
    answers: [
        { text: "lower()", correct: false },
        { text: "toLowerCase()", correct: true },
        { text: "small()", correct: false },
        { text: "convert()", correct: false }
    ]
},

{
    question: "Which method converts string to uppercase?",
    answers: [
        { text: "upper()", correct: false },
        { text: "toUpperCase()", correct: true },
        { text: "big()", correct: false },
        { text: "convert()", correct: false }
    ]
},

{
    question: "Which operator is used for increment?",
    answers: [
        { text: "--", correct: false },
        { text: "++", correct: true },
        { text: "+=", correct: false },
        { text: "==", correct: false }
    ]
},

{
    question: "Which operator is used for decrement?",
    answers: [
        { text: "++", correct: false },
        { text: "--", correct: true },
        { text: "-=", correct: false },
        { text: "==", correct: false }
    ]
},

{
    question: "Which keyword is used to define a package?",
    answers: [
        { text: "import", correct: false },
        { text: "package", correct: true },
        { text: "include", correct: false },
        { text: "library", correct: false }
    ]
},

{
    question: "Which keyword is used to include a package?",
    answers: [
        { text: "package", correct: false },
        { text: "import", correct: true },
        { text: "include", correct: false },
        { text: "using", correct: false }
    ]
}
],

    python: [
    {
        question: "Who developed Python?",
        answers: [
            { text: "James Gosling", correct: false },
            { text: "Guido van Rossum", correct: true },
            { text: "Dennis Ritchie", correct: false },
            { text: "Bjarne Stroustrup", correct: false }
        ]
    },

    {
        question: "Python is a _____ language.",
        answers: [
            { text: "Markup", correct: false },
            { text: "Object-Oriented", correct: true },
            { text: "Assembly", correct: false },
            { text: "Machine", correct: false }
        ]
    },

    {
        question: "Which symbol is used for comments in Python?",
        answers: [
            { text: "//", correct: false },
            { text: "#", correct: true },
            { text: "/*", correct: false },
            { text: "--", correct: false }
        ]
    },

    {
        question: "Which function is used to display output in Python?",
        answers: [
            { text: "display()", correct: false },
            { text: "print()", correct: true },
            { text: "show()", correct: false },
            { text: "output()", correct: false }
        ]
    },

    {
        question: "Which keyword is used to define a function in Python?",
        answers: [
            { text: "func", correct: false },
            { text: "define", correct: false },
            { text: "def", correct: true },
            { text: "function", correct: false }
        ]
    },

    {
        question: "Which data type is used to store whole numbers?",
        answers: [
            { text: "float", correct: false },
            { text: "int", correct: true },
            { text: "string", correct: false },
            { text: "list", correct: false }
        ]
    },

    {
        question: "Which data type is used to store text?",
        answers: [
            { text: "int", correct: false },
            { text: "string", correct: true },
            { text: "float", correct: false },
            { text: "bool", correct: false }
        ]
    },

    {
        question: "Which operator is used for equality comparison?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: true },
            { text: "!=", correct: false },
            { text: "+", correct: false }
        ]
    },

    {
        question: "Which loop is used when the number of iterations is known?",
        answers: [
            { text: "while", correct: false },
            { text: "for", correct: true },
            { text: "if", correct: false },
            { text: "switch", correct: false }
        ]
    },

    {
        question: "Which loop executes while condition is true?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: true },
            { text: "if", correct: false },
            { text: "do", correct: false }
        ]
    },

    {
        question: "Which keyword is used for conditional statements?",
        answers: [
            { text: "if", correct: true },
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "loop", correct: false }
        ]
    },

    {
        question: "Which keyword is used for alternative condition?",
        answers: [
            { text: "elseif", correct: false },
            { text: "elif", correct: true },
            { text: "else if", correct: false },
            { text: "alternate", correct: false }
        ]
    },

    {
        question: "Which keyword is used to stop a loop?",
        answers: [
            { text: "continue", correct: false },
            { text: "break", correct: true },
            { text: "stop", correct: false },
            { text: "exit", correct: false }
        ]
    },

    {
        question: "Which keyword is used to skip one iteration?",
        answers: [
            { text: "break", correct: false },
            { text: "continue", correct: true },
            { text: "skip", correct: false },
            { text: "next", correct: false }
        ]
    },

    {
        question: "Which collection type uses square brackets []?",
        answers: [
            { text: "Tuple", correct: false },
            { text: "List", correct: true },
            { text: "Set", correct: false },
            { text: "Dictionary", correct: false }
        ]
    },

    {
        question: "Which collection type uses curly braces {} with key-value pairs?",
        answers: [
            { text: "List", correct: false },
            { text: "Dictionary", correct: true },
            { text: "Tuple", correct: false },
            { text: "String", correct: false }
        ]
    },

    {
        question: "Which collection type is immutable?",
        answers: [
            { text: "List", correct: false },
            { text: "Tuple", correct: true },
            { text: "Dictionary", correct: false },
            { text: "Set", correct: false }
        ]
    },

    {
        question: "Which keyword is used to create a class in Python?",
        answers: [
            { text: "object", correct: false },
            { text: "class", correct: true },
            { text: "define", correct: false },
            { text: "new", correct: false }
        ]
    },

    {
        question: "Which keyword is used to handle exceptions?",
        answers: [
            { text: "check", correct: false },
            { text: "try", correct: true },
            { text: "error", correct: false },
            { text: "attempt", correct: false }
        ]
    },

    {
        question: "Which file extension is used for Python files?",
        answers: [
            { text: ".java", correct: false },
            { text: ".py", correct: true },
            { text: ".cpp", correct: false },
            { text: ".html", correct: false }
        ]
    },
    {
    question: "Which function is used to take input from user in Python?",
    answers: [
        { text: "get()", correct: false },
        { text: "input()", correct: true },
        { text: "scan()", correct: false },
        { text: "read()", correct: false }
    ]
},

{
    question: "Which keyword is used to create a loop in Python?",
    answers: [
        { text: "for", correct: true },
        { text: "repeat", correct: false },
        { text: "loop", correct: false },
        { text: "iterate", correct: false }
    ]
},

{
    question: "Which operator is used for exponentiation in Python?",
    answers: [
        { text: "^", correct: false },
        { text: "**", correct: true },
        { text: "//", correct: false },
        { text: "%", correct: false }
    ]
},

{
    question: "Which operator is used for floor division?",
    answers: [
        { text: "/", correct: false },
        { text: "//", correct: true },
        { text: "%", correct: false },
        { text: "**", correct: false }
    ]
},

{
    question: "Which data type stores only True or False values?",
    answers: [
        { text: "int", correct: false },
        { text: "bool", correct: true },
        { text: "float", correct: false },
        { text: "string", correct: false }
    ]
},

{
    question: "Which keyword is used to import modules?",
    answers: [
        { text: "include", correct: false },
        { text: "import", correct: true },
        { text: "using", correct: false },
        { text: "package", correct: false }
    ]
},

{
    question: "Which module is used for mathematical functions?",
    answers: [
        { text: "random", correct: false },
        { text: "math", correct: true },
        { text: "string", correct: false },
        { text: "sys", correct: false }
    ]
},

{
    question: "Which function gives the length of a list?",
    answers: [
        { text: "count()", correct: false },
        { text: "len()", correct: true },
        { text: "size()", correct: false },
        { text: "length()", correct: false }
    ]
},

{
    question: "Which method is used to add an item to a list?",
    answers: [
        { text: "insert()", correct: false },
        { text: "append()", correct: true },
        { text: "add()", correct: false },
        { text: "push()", correct: false }
    ]
},

{
    question: "Which method is used to remove an item from a list?",
    answers: [
        { text: "delete()", correct: false },
        { text: "remove()", correct: true },
        { text: "popall()", correct: false },
        { text: "cut()", correct: false }
    ]
},
{
    question: "Which method is used to convert text to lowercase in Python?",
    answers: [
        { text: "lower()", correct: true },
        { text: "small()", correct: false },
        { text: "tolower()", correct: false },
        { text: "convert()", correct: false }
    ]
},

{
    question: "Which method is used to convert text to uppercase in Python?",
    answers: [
        { text: "upper()", correct: true },
        { text: "big()", correct: false },
        { text: "toupper()", correct: false },
        { text: "convert()", correct: false }
    ]
},

{
    question: "Which symbol is used for list slicing in Python?",
    answers: [
        { text: ":", correct: true },
        { text: ";", correct: false },
        { text: ".", correct: false },
        { text: ",", correct: false }
    ]
},

{
    question: "Which function is used to generate random numbers?",
    answers: [
        { text: "math()", correct: false },
        { text: "random()", correct: true },
        { text: "rand()", correct: false },
        { text: "number()", correct: false }
    ]
},

{
    question: "Which keyword is used to define anonymous functions?",
    answers: [
        { text: "def", correct: false },
        { text: "lambda", correct: true },
        { text: "func", correct: false },
        { text: "anonymous", correct: false }
    ]
},

{
    question: "Which keyword is used to create inheritance in Python?",
    answers: [
        { text: "extends", correct: false },
        { text: "class", correct: true },
        { text: "inherit", correct: false },
        { text: "super", correct: false }
    ]
},

{
    question: "Which keyword is used to handle exceptions in Python?",
    answers: [
        { text: "try", correct: true },
        { text: "catch", correct: false },
        { text: "error", correct: false },
        { text: "attempt", correct: false }
    ]
},

{
    question: "Which block runs if exception occurs?",
    answers: [
        { text: "finally", correct: false },
        { text: "except", correct: true },
        { text: "try", correct: false },
        { text: "throw", correct: false }
    ]
},

{
    question: "Which block always executes in exception handling?",
    answers: [
        { text: "except", correct: false },
        { text: "finally", correct: true },
        { text: "try", correct: false },
        { text: "raise", correct: false }
    ]
},

{
    question: "Which keyword is used to raise exceptions manually?",
    answers: [
        { text: "throw", correct: false },
        { text: "raise", correct: true },
        { text: "error", correct: false },
        { text: "except", correct: false }
    ]
},
{
    question: "Which function is used to find the type of a variable in Python?",
    answers: [
        { text: "typeof()", correct: false },
        { text: "type()", correct: true },
        { text: "datatype()", correct: false },
        { text: "check()", correct: false }
    ]
},

{
    question: "Which function is used to convert a string into integer?",
    answers: [
        { text: "str()", correct: false },
        { text: "int()", correct: true },
        { text: "float()", correct: false },
        { text: "convert()", correct: false }
    ]
},

{
    question: "Which function is used to convert integer into string?",
    answers: [
        { text: "string()", correct: false },
        { text: "str()", correct: true },
        { text: "text()", correct: false },
        { text: "char()", correct: false }
    ]
},

{
    question: "Which function is used to convert integer into float?",
    answers: [
        { text: "int()", correct: false },
        { text: "float()", correct: true },
        { text: "decimal()", correct: false },
        { text: "double()", correct: false }
    ]
},

{
    question: "Which collection type does not allow duplicate values?",
    answers: [
        { text: "List", correct: false },
        { text: "Set", correct: true },
        { text: "Tuple", correct: false },
        { text: "Dictionary", correct: false }
    ]
},

{
    question: "Which collection type stores key-value pairs?",
    answers: [
        { text: "List", correct: false },
        { text: "Dictionary", correct: true },
        { text: "Tuple", correct: false },
        { text: "Set", correct: false }
    ]
},

{
    question: "Which method is used to remove all items from a list?",
    answers: [
        { text: "delete()", correct: false },
        { text: "clear()", correct: true },
        { text: "remove()", correct: false },
        { text: "pop()", correct: false }
    ]
},

{
    question: "Which function is used to sort a list?",
    answers: [
        { text: "order()", correct: false },
        { text: "sort()", correct: true },
        { text: "arrange()", correct: false },
        { text: "sequence()", correct: false }
    ]
},

{
    question: "Which keyword is used to stop a program completely?",
    answers: [
        { text: "break", correct: false },
        { text: "exit()", correct: true },
        { text: "stop()", correct: false },
        { text: "end()", correct: false }
    ]
},

{
    question: "Which library is commonly used for data analysis in Python?",
    answers: [
        { text: "math", correct: false },
        { text: "pandas", correct: true },
        { text: "string", correct: false },
        { text: "random", correct: false }
    ]
}
],

    gk: [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },

    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },

    {
        question: "Who is known as the Father of the Nation in India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Bhagat Singh", correct: false }
        ]
    },

    {
        question: "How many continents are there in the world?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false }
        ]
    },

    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },

    {
        question: "Who wrote the National Anthem of India?",
        answers: [
            { text: "Bankim Chandra Chatterjee", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Sarojini Naidu", correct: false },
            { text: "Premchand", correct: false }
        ]
    },

    {
        question: "Which is the national animal of India?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Tiger", correct: true },
            { text: "Elephant", correct: false },
            { text: "Peacock", correct: false }
        ]
    },

    {
        question: "Which is the national bird of India?",
        answers: [
            { text: "Parrot", correct: false },
            { text: "Peacock", correct: true },
            { text: "Sparrow", correct: false },
            { text: "Crow", correct: false }
        ]
    },

    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },

    {
        question: "Which festival is known as the Festival of Lights?",
        answers: [
            { text: "Holi", correct: false },
            { text: "Diwali", correct: true },
            { text: "Eid", correct: false },
            { text: "Christmas", correct: false }
        ]
    },

    {
        question: "Which is the smallest state in India by area?",
        answers: [
            { text: "Sikkim", correct: false },
            { text: "Goa", correct: true },
            { text: "Tripura", correct: false },
            { text: "Manipur", correct: false }
        ]
    },

    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Newton", correct: false },
            { text: "Tesla", correct: false }
        ]
    },

    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Ganga", correct: false },
            { text: "Yamuna", correct: false }
        ]
    },

    {
        question: "Which country is known as the Land of Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "Korea", correct: false }
        ]
    },

    {
        question: "How many days are there in a leap year?",
        answers: [
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "364", correct: false },
            { text: "367", correct: false }
        ]
    },

    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Tiger", correct: false },
            { text: "Horse", correct: false }
        ]
    },

    {
        question: "Who was the first President of India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Dr. Rajendra Prasad", correct: true },
            { text: "Sardar Patel", correct: false },
            { text: "Dr. APJ Abdul Kalam", correct: false }
        ]
    },

    {
        question: "Which blood group is known as universal donor?",
        answers: [
            { text: "AB+", correct: false },
            { text: "O-", correct: true },
            { text: "B+", correct: false },
            { text: "A+", correct: false }
        ]
    },

    {
        question: "Which organ purifies blood in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Kidney", correct: true },
            { text: "Lungs", correct: false },
            { text: "Liver", correct: false }
        ]
    },

    {
        question: "Which is the national flower of India?",
        answers: [
            { text: "Rose", correct: false },
            { text: "Lotus", correct: true },
            { text: "Sunflower", correct: false },
            { text: "Lily", correct: false }
        ]
    },
    {
    question: "Which is the largest planet in our solar system?",
    answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Mars", correct: false },
        { text: "Venus", correct: false }
    ]
},

{
    question: "Which is the national sport of India (commonly accepted in quizzes)?",
    answers: [
        { text: "Cricket", correct: false },
        { text: "Hockey", correct: true },
        { text: "Football", correct: false },
        { text: "Kabaddi", correct: false }
    ]
},

{
    question: "Who discovered gravity?",
    answers: [
        { text: "Albert Einstein", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "Galileo", correct: false },
        { text: "Thomas Edison", correct: false }
    ]
},

{
    question: "Which is the largest mammal in the world?",
    answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false }
    ]
},

{
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
        { text: "Germany", correct: false },
        { text: "France", correct: true },
        { text: "Italy", correct: false },
        { text: "Spain", correct: false }
    ]
},

{
    question: "Which is the currency of Japan?",
    answers: [
        { text: "Dollar", correct: false },
        { text: "Yen", correct: true },
        { text: "Won", correct: false },
        { text: "Peso", correct: false }
    ]
},

{
    question: "Which is the hardest natural substance?",
    answers: [
        { text: "Gold", correct: false },
        { text: "Diamond", correct: true },
        { text: "Iron", correct: false },
        { text: "Silver", correct: false }
    ]
},

{
    question: "Which planet is closest to the Sun?",
    answers: [
        { text: "Venus", correct: false },
        { text: "Mercury", correct: true },
        { text: "Earth", correct: false },
        { text: "Mars", correct: false }
    ]
},

{
    question: "Who was known as the Missile Man of India?",
    answers: [
        { text: "Homi Bhabha", correct: false },
        { text: "Dr. A.P.J. Abdul Kalam", correct: true },
        { text: "C.V. Raman", correct: false },
        { text: "Vikram Sarabhai", correct: false }
    ]
},

{
    question: "Which is the tallest mountain in the world?",
    answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "Makalu", correct: false }
    ]
},
{
    question: "Which is the smallest planet in our solar system?",
    answers: [
        { text: "Mars", correct: false },
        { text: "Mercury", correct: true },
        { text: "Venus", correct: false },
        { text: "Pluto", correct: false }
    ]
},

{
    question: "Which Indian city is known as the Pink City?",
    answers: [
        { text: "Udaipur", correct: false },
        { text: "Jaipur", correct: true },
        { text: "Jodhpur", correct: false },
        { text: "Bikaner", correct: false }
    ]
},

{
    question: "Who invented the light bulb?",
    answers: [
        { text: "Nikola Tesla", correct: false },
        { text: "Thomas Edison", correct: true },
        { text: "Alexander Bell", correct: false },
        { text: "James Watt", correct: false }
    ]
},

{
    question: "Which is the national tree of India?",
    answers: [
        { text: "Neem", correct: false },
        { text: "Banyan", correct: true },
        { text: "Mango", correct: false },
        { text: "Peepal", correct: false }
    ]
},

{
    question: "Which metal is liquid at room temperature?",
    answers: [
        { text: "Iron", correct: false },
        { text: "Mercury", correct: true },
        { text: "Copper", correct: false },
        { text: "Aluminium", correct: false }
    ]
},

{
    question: "Which country is famous for the Eiffel Tower?",
    answers: [
        { text: "Italy", correct: false },
        { text: "France", correct: true },
        { text: "Germany", correct: false },
        { text: "Spain", correct: false }
    ]
},

{
    question: "Who is called the Nightingale of India?",
    answers: [
        { text: "Indira Gandhi", correct: false },
        { text: "Sarojini Naidu", correct: true },
        { text: "Lata Mangeshkar", correct: false },
        { text: "Mother Teresa", correct: false }
    ]
},

{
    question: "Which is the largest desert in the world?",
    answers: [
        { text: "Thar Desert", correct: false },
        { text: "Sahara Desert", correct: true },
        { text: "Gobi Desert", correct: false },
        { text: "Kalahari Desert", correct: false }
    ]
},

{
    question: "Which freedom fighter is known as Netaji?",
    answers: [
        { text: "Bhagat Singh", correct: false },
        { text: "Subhas Chandra Bose", correct: true },
        { text: "Sardar Patel", correct: false },
        { text: "Jawaharlal Nehru", correct: false }
    ]
},

{
    question: "Which is the largest state in India by area?",
    answers: [
        { text: "Maharashtra", correct: false },
        { text: "Rajasthan", correct: true },
        { text: "Madhya Pradesh", correct: false },
        { text: "Uttar Pradesh", correct: false }
    ]
},
{
    question: "Which is the largest country in the world by area?",
    answers: [
        { text: "China", correct: false },
        { text: "Russia", correct: true },
        { text: "USA", correct: false },
        { text: "Canada", correct: false }
    ]
},

{
    question: "Which river is known as the Ganga of the South?",
    answers: [
        { text: "Krishna", correct: false },
        { text: "Godavari", correct: true },
        { text: "Kaveri", correct: false },
        { text: "Tungabhadra", correct: false }
    ]
},

{
    question: "Who wrote the Indian National Song 'Vande Mataram'?",
    answers: [
        { text: "Rabindranath Tagore", correct: false },
        { text: "Bankim Chandra Chatterjee", correct: true },
        { text: "Sarojini Naidu", correct: false },
        { text: "Premchand", correct: false }
    ]
},

{
    question: "Which is the national fruit of India?",
    answers: [
        { text: "Banana", correct: false },
        { text: "Mango", correct: true },
        { text: "Apple", correct: false },
        { text: "Orange", correct: false }
    ]
},

{
    question: "Which instrument is used to measure temperature?",
    answers: [
        { text: "Barometer", correct: false },
        { text: "Thermometer", correct: true },
        { text: "Hygrometer", correct: false },
        { text: "Speedometer", correct: false }
    ]
},

{
    question: "Which vitamin is obtained from sunlight?",
    answers: [
        { text: "Vitamin A", correct: false },
        { text: "Vitamin D", correct: true },
        { text: "Vitamin C", correct: false },
        { text: "Vitamin B", correct: false }
    ]
},

{
    question: "Which country is known as the Land of Thousand Lakes?",
    answers: [
        { text: "Sweden", correct: false },
        { text: "Finland", correct: true },
        { text: "Norway", correct: false },
        { text: "Denmark", correct: false }
    ]
},

{
    question: "Who painted the Mona Lisa?",
    answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Michelangelo", correct: false }
    ]
},

{
    question: "Which is the smallest continent in the world?",
    answers: [
        { text: "Europe", correct: false },
        { text: "Australia", correct: true },
        { text: "Antarctica", correct: false },
        { text: "South America", correct: false }
    ]
},

{
    question: "Which gas is most abundant in Earth’s atmosphere?",
    answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: true },
        { text: "Carbon Dioxide", correct: false },
        { text: "Hydrogen", correct: false }
    ]
}
],

    aptitude: [
    {
        question: "5 + 7 = ?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false }
        ]
    },

    {
        question: "15 × 3 = ?",
        answers: [
            { text: "45", correct: true },
            { text: "35", correct: false },
            { text: "40", correct: false },
            { text: "50", correct: false }
        ]
    },

    {
        question: "Square root of 81 is?",
        answers: [
            { text: "7", correct: false },
            { text: "9", correct: true },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ]
    },

    {
        question: "20% of 200 = ?",
        answers: [
            { text: "30", correct: false },
            { text: "40", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },

    {
        question: "If a train travels 60 km in 1 hour, speed is?",
        answers: [
            { text: "60 km/hr", correct: true },
            { text: "50 km/hr", correct: false },
            { text: "70 km/hr", correct: false },
            { text: "80 km/hr", correct: false }
        ]
    },

    {
        question: "Average of 10, 20, 30 = ?",
        answers: [
            { text: "15", correct: false },
            { text: "20", correct: true },
            { text: "25", correct: false },
            { text: "30", correct: false }
        ]
    },

    {
        question: "If cost price = 100 and selling price = 120, profit = ?",
        answers: [
            { text: "10", correct: false },
            { text: "20", correct: true },
            { text: "30", correct: false },
            { text: "40", correct: false }
        ]
    },

    {
        question: "1 dozen = ?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]
    },

    {
        question: "What is 25% of 80?",
        answers: [
            { text: "15", correct: false },
            { text: "20", correct: true },
            { text: "25", correct: false },
            { text: "30", correct: false }
        ]
    },

    {
        question: "Simple Interest on ₹1000 at 10% for 1 year = ?",
        answers: [
            { text: "50", correct: false },
            { text: "100", correct: true },
            { text: "150", correct: false },
            { text: "200", correct: false }
        ]
    },

    {
        question: "Next number: 2, 4, 6, 8, ?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false }
        ]
    },

    {
        question: "If 3 pens cost ₹30, cost of 1 pen = ?",
        answers: [
            { text: "5", correct: false },
            { text: "10", correct: true },
            { text: "15", correct: false },
            { text: "20", correct: false }
        ]
    },

    {
        question: "50 ÷ 5 = ?",
        answers: [
            { text: "8", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "15", correct: false }
        ]
    },

    {
        question: "Perimeter of square with side 4 = ?",
        answers: [
            { text: "8", correct: false },
            { text: "16", correct: true },
            { text: "12", correct: false },
            { text: "20", correct: false }
        ]
    },

    {
        question: "Area of square with side 5 = ?",
        answers: [
            { text: "20", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "15", correct: false }
        ]
    },

    {
        question: "What comes next: A, C, E, G, ?",
        answers: [
            { text: "H", correct: false },
            { text: "I", correct: true },
            { text: "J", correct: false },
            { text: "K", correct: false }
        ]
    },

    {
        question: "If 2x = 10, x = ?",
        answers: [
            { text: "2", correct: false },
            { text: "5", correct: true },
            { text: "10", correct: false },
            { text: "20", correct: false }
        ]
    },

    {
        question: "1000 meters = ?",
        answers: [
            { text: "10 km", correct: false },
            { text: "1 km", correct: true },
            { text: "100 km", correct: false },
            { text: "500 m", correct: false }
        ]
    },

    {
        question: "How many months are there in a year?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "11", correct: false },
            { text: "13", correct: false }
        ]
    },

    {
        question: "Which number is divisible by 2?",
        answers: [
            { text: "15", correct: false },
            { text: "18", correct: true },
            { text: "21", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
    question: "If 5 workers complete a job in 10 days, how many days will 10 workers take?",
    answers: [
        { text: "10 days", correct: false },
        { text: "5 days", correct: true },
        { text: "15 days", correct: false },
        { text: "20 days", correct: false }
    ]
},

{
    question: "A shopkeeper buys an item for ₹200 and sells it for ₹250. Profit percentage is?",
    answers: [
        { text: "20%", correct: false },
        { text: "25%", correct: true },
        { text: "30%", correct: false },
        { text: "15%", correct: false }
    ]
},

{
    question: "Find the next number: 3, 6, 9, 12, ?",
    answers: [
        { text: "14", correct: false },
        { text: "15", correct: true },
        { text: "16", correct: false },
        { text: "18", correct: false }
    ]
},

{
    question: "What is 30% of 150?",
    answers: [
        { text: "35", correct: false },
        { text: "45", correct: true },
        { text: "50", correct: false },
        { text: "60", correct: false }
    ]
},

{
    question: "If the ratio of boys to girls is 2:3 and total students are 25, number of boys is?",
    answers: [
        { text: "10", correct: true },
        { text: "15", correct: false },
        { text: "12", correct: false },
        { text: "8", correct: false }
    ]
},

{
    question: "Simple Interest on ₹2000 at 5% for 2 years = ?",
    answers: [
        { text: "150", correct: false },
        { text: "200", correct: true },
        { text: "250", correct: false },
        { text: "300", correct: false }
    ]
},

{
    question: "The average of 5, 10, 15, 20 is?",
    answers: [
        { text: "10", correct: false },
        { text: "12.5", correct: true },
        { text: "15", correct: false },
        { text: "17.5", correct: false }
    ]
},

{
    question: "Perimeter of rectangle with length 6 and breadth 4 = ?",
    answers: [
        { text: "18", correct: false },
        { text: "20", correct: true },
        { text: "22", correct: false },
        { text: "24", correct: false }
    ]
},

{
    question: "Area of rectangle with length 8 and breadth 5 = ?",
    answers: [
        { text: "35", correct: false },
        { text: "40", correct: true },
        { text: "45", correct: false },
        { text: "50", correct: false }
    ]
},

{
    question: "Find the odd one out: 2, 4, 6, 9, 8",
    answers: [
        { text: "6", correct: false },
        { text: "9", correct: true },
        { text: "8", correct: false },
        { text: "4", correct: false }
    ]
},
{
    question: "If 12 pencils cost ₹60, cost of 1 pencil = ?",
    answers: [
        { text: "₹4", correct: false },
        { text: "₹5", correct: true },
        { text: "₹6", correct: false },
        { text: "₹3", correct: false }
    ]
},

{
    question: "What is 15% of 300?",
    answers: [
        { text: "35", correct: false },
        { text: "45", correct: true },
        { text: "50", correct: false },
        { text: "60", correct: false }
    ]
},

{
    question: "Find the next number: 5, 10, 15, 20, ?",
    answers: [
        { text: "22", correct: false },
        { text: "25", correct: true },
        { text: "30", correct: false },
        { text: "35", correct: false }
    ]
},

{
    question: "If x + 7 = 15, x = ?",
    answers: [
        { text: "6", correct: false },
        { text: "8", correct: true },
        { text: "10", correct: false },
        { text: "12", correct: false }
    ]
},

{
    question: "A triangle has how many sides?",
    answers: [
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false },
        { text: "5", correct: false }
    ]
},

{
    question: "What is the cube of 3?",
    answers: [
        { text: "9", correct: false },
        { text: "27", correct: true },
        { text: "18", correct: false },
        { text: "36", correct: false }
    ]
},

{
    question: "How many hours are there in 2 days?",
    answers: [
        { text: "24", correct: false },
        { text: "48", correct: true },
        { text: "36", correct: false },
        { text: "72", correct: false }
    ]
},

{
    question: "If 1 kg = 1000 g, then 3 kg = ?",
    answers: [
        { text: "2000 g", correct: false },
        { text: "3000 g", correct: true },
        { text: "4000 g", correct: false },
        { text: "5000 g", correct: false }
    ]
},

{
    question: "Which number is a prime number?",
    answers: [
        { text: "9", correct: false },
        { text: "11", correct: true },
        { text: "15", correct: false },
        { text: "21", correct: false }
    ]
},

{
    question: "What is the value of 9 × 9?",
    answers: [
        { text: "72", correct: false },
        { text: "81", correct: true },
        { text: "99", correct: false },
        { text: "90", correct: false }
    ]
},
{
    question: "What is 50 ÷ 2?",
    answers: [
        { text: "20", correct: false },
        { text: "25", correct: true },
        { text: "30", correct: false },
        { text: "15", correct: false }
    ]
},

{
    question: "If a car travels 100 km in 2 hours, speed is?",
    answers: [
        { text: "40 km/hr", correct: false },
        { text: "50 km/hr", correct: true },
        { text: "60 km/hr", correct: false },
        { text: "70 km/hr", correct: false }
    ]
},

{
    question: "What is the square of 12?",
    answers: [
        { text: "124", correct: false },
        { text: "144", correct: true },
        { text: "121", correct: false },
        { text: "132", correct: false }
    ]
},

{
    question: "Find LCM of 4 and 6?",
    answers: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false },
        { text: "8", correct: false }
    ]
},

{
    question: "Find HCF of 12 and 18?",
    answers: [
        { text: "3", correct: false },
        { text: "6", correct: true },
        { text: "9", correct: false },
        { text: "12", correct: false }
    ]
},

{
    question: "What is 1000 - 750?",
    answers: [
        { text: "200", correct: false },
        { text: "250", correct: true },
        { text: "300", correct: false },
        { text: "350", correct: false }
    ]
},

{
    question: "If price is doubled, profit becomes?",
    answers: [
        { text: "Same", correct: false },
        { text: "Increases", correct: true },
        { text: "Decreases", correct: false },
        { text: "Zero", correct: false }
    ]
},

{
    question: "How many seconds are there in 1 minute?",
    answers: [
        { text: "100", correct: false },
        { text: "60", correct: true },
        { text: "120", correct: false },
        { text: "90", correct: false }
    ]
},

{
    question: "Which is the smallest 3-digit number?",
    answers: [
        { text: "100", correct: true },
        { text: "101", correct: false },
        { text: "110", correct: false },
        { text: "99", correct: false }
    ]
},

{
    question: "What is 8 × 7?",
    answers: [
        { text: "54", correct: false },
        { text: "56", correct: true },
        { text: "58", correct: false },
        { text: "64", correct: false }
    ]
}
]
};
const certificateButton = document.getElementById("certificate-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const startButton = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let currentUser = "";
let score = 0;
let currentQuestionIndex = 0;

function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("quizUsername", username);
    localStorage.setItem("quizPassword", password);

    alert("Registration Successful!");
}

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUser = localStorage.getItem("quizUsername");
    const savedPass = localStorage.getItem("quizPassword");

    if (username === savedUser && password === savedPass) {
        currentUser = username;

        document.getElementById("auth-container").style.display = "none";
        document.getElementById("start-screen").style.display = "block";
        document.getElementById("welcome-user").innerText = username;
    } else {
        alert("Invalid Login Details");
    }
}


function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("category-screen").style.display = "block";
}
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    let progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

    progressBar.style.width = progressPercent + "%";

    progressText.innerText =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}
function showQuestion() {
    updateProgressBar();
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    let shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        score++;
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        resetTimer();
    } else {
    showResult();
}
});

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's Up!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timerElement.innerText = `Time Left: ${timeLeft}s`;
    startTimer();
}
function showResult() {
    document.getElementById("question").style.display = "none";
    document.getElementById("answer-buttons").style.display = "none";
    nextButton.style.display = "none";
    timerElement.style.display = "none";

    const resultBox = document.getElementById("result");
    const scoreText = document.getElementById("score-text");

    resultBox.style.display = "block";
    scoreText.innerText = `You scored ${score} out of ${questions.length}`;
    const certificateName = currentUser || localStorage.getItem("quizUsername");

    document.getElementById("certificate-name").innerText = certificateName;
    restartButton.style.display = "block";
    certificateButton.style.display = "block";
    let scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    const username = currentUser || localStorage.getItem("quizUsername");

    scores.push({
        name: username,
        score: score
    });

    scores.sort((a, b) => b.score - a.score);

    localStorage.setItem("quizScores", JSON.stringify(scores));

    leaderboardList.innerHTML = "";

   scores.slice(0, 5).forEach((user, index) => {
    const li = document.createElement("li");
    li.innerText = `Rank ${index + 1}: ${user.name} - ${user.score} points`;
    leaderboardList.appendChild(li);
    });
}
restartButton.addEventListener("click", () => {
    location.reload();
})
function startCategoryQuiz(category) {
    let allQuestions = quizData[category];

    questions = allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    document.getElementById("category-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    currentQuestionIndex = 0;
    score = 0;

    showQuestion();
    startTimer();
}
certificateButton.addEventListener("click", () => {
    window.open("certificate.html", "_blank");
});