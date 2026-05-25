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
},
{
    question: "Which of the following is not a Java feature?",
    answers: [
        { text: "Object-Oriented", correct: false },
        { text: "Portable", correct: false },
        { text: "Pointer Support", correct: true },
        { text: "Secure", correct: false }
    ]
},
{
    question: "Which method is the entry point of a Java program?",
    answers: [
        { text: "start()", correct: false },
        { text: "main()", correct: true },
        { text: "run()", correct: false },
        { text: "init()", correct: false }
    ]
},
{
    question: "Which keyword is used to inherit a class in Java?",
    answers: [
        { text: "implements", correct: false },
        { text: "inherits", correct: false },
        { text: "extends", correct: true },
        { text: "super", correct: false }
    ]
},
{
    question: "Java is a _____ language.",
    answers: [
        { text: "Procedural", correct: false },
        { text: "Object-Oriented", correct: true },
        { text: "Assembly", correct: false },
        { text: "Machine", correct: false }
    ]
},
{
    question: "Which package is imported by default?",
    answers: [
        { text: "java.util", correct: false },
        { text: "java.io", correct: false },
        { text: "java.lang", correct: true },
        { text: "java.net", correct: false }
    ]
},
{
    question: "Which operator is used for object creation?",
    answers: [
        { text: "new", correct: true },
        { text: "create", correct: false },
        { text: "object", correct: false },
        { text: "instance", correct: false }
    ]
},
{
    question: "Which keyword is used to define a constant?",
    answers: [
        { text: "const", correct: false },
        { text: "static", correct: false },
        { text: "final", correct: true },
        { text: "fixed", correct: false }
    ]
},
{
    question: "What is the size of int in Java?",
    answers: [
        { text: "2 bytes", correct: false },
        { text: "4 bytes", correct: true },
        { text: "8 bytes", correct: false },
        { text: "1 byte", correct: false }
    ]
},
{
    question: "Which loop executes at least once?",
    answers: [
        { text: "for", correct: false },
        { text: "while", correct: false },
        { text: "do-while", correct: true },
        { text: "foreach", correct: false }
    ]
},
{
    question: "Which exception occurs when dividing by zero?",
    answers: [
        { text: "IOException", correct: false },
        { text: "ArithmeticException", correct: true },
        { text: "NullPointerException", correct: false },
        { text: "NumberFormatException", correct: false }
    ]
},
{
    question: "Which keyword refers to current object?",
    answers: [
        { text: "super", correct: false },
        { text: "current", correct: false },
        { text: "this", correct: true },
        { text: "self", correct: false }
    ]
},
{
    question: "Which collection stores unique elements?",
    answers: [
        { text: "ArrayList", correct: false },
        { text: "LinkedList", correct: false },
        { text: "Set", correct: true },
        { text: "Vector", correct: false }
    ]
},
{
    question: "Which class is used to take user input?",
    answers: [
        { text: "Scanner", correct: true },
        { text: "Reader", correct: false },
        { text: "Input", correct: false },
        { text: "Buffer", correct: false }
    ]
},
{
    question: "Which access modifier allows access everywhere?",
    answers: [
        { text: "private", correct: false },
        { text: "protected", correct: false },
        { text: "public", correct: true },
        { text: "default", correct: false }
    ]
},
{
    question: "Which concept allows one method to have many forms?",
    answers: [
        { text: "Inheritance", correct: false },
        { text: "Polymorphism", correct: true },
        { text: "Abstraction", correct: false },
        { text: "Encapsulation", correct: false }
    ]
},
{
    question: "Which keyword is used for exception handling?",
    answers: [
        { text: "catch", correct: false },
        { text: "throw", correct: false },
        { text: "try", correct: true },
        { text: "error", correct: false }
    ]
},
{
    question: "Which interface is implemented by ArrayList?",
    answers: [
        { text: "Set", correct: false },
        { text: "List", correct: true },
        { text: "Map", correct: false },
        { text: "Queue", correct: false }
    ]
},
{
    question: "What is JVM responsible for?",
    answers: [
        { text: "Compilation", correct: false },
        { text: "Execution of bytecode", correct: true },
        { text: "Editing code", correct: false },
        { text: "Debugging", correct: false }
    ]
},
{
    question: "Which keyword is used to stop inheritance?",
    answers: [
        { text: "stop", correct: false },
        { text: "private", correct: false },
        { text: "final", correct: true },
        { text: "static", correct: false }
    ]
},
{
    question: "Which class is parent of all classes?",
    answers: [
        { text: "Main", correct: false },
        { text: "Object", correct: true },
        { text: "Class", correct: false },
        { text: "Parent", correct: false }
    ]
},
{
    question: "Which keyword is used to create a subclass?",
    answers: [
        { text: "extends", correct: true },
        { text: "implements", correct: false },
        { text: "inherits", correct: false },
        { text: "super", correct: false }
    ]
},
{
    question: "Which of these is a wrapper class?",
    answers: [
        { text: "Integer", correct: true },
        { text: "int", correct: false },
        { text: "float", correct: false },
        { text: "double", correct: false }
    ]
},
{
    question: "What is the default value of boolean?",
    answers: [
        { text: "true", correct: false },
        { text: "false", correct: true },
        { text: "0", correct: false },
        { text: "null", correct: false }
    ]
},
{
    question: "Which keyword is used to inherit an interface?",
    answers: [
        { text: "extends", correct: true },
        { text: "implements", correct: false },
        { text: "inherits", correct: false },
        { text: "interface", correct: false }
    ]
},
{
    question: "Which collection allows duplicate values?",
    answers: [
        { text: "Set", correct: false },
        { text: "HashSet", correct: false },
        { text: "ArrayList", correct: true },
        { text: "TreeSet", correct: false }
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
    question: "Which method is used to start a thread?",
    answers: [
        { text: "run()", correct: false },
        { text: "execute()", correct: false },
        { text: "start()", correct: true },
        { text: "begin()", correct: false }
    ]
},
{
    question: "Which exception occurs when an object reference is null?",
    answers: [
        { text: "IOException", correct: false },
        { text: "ArithmeticException", correct: false },
        { text: "NullPointerException", correct: true },
        { text: "ArrayIndexOutOfBoundsException", correct: false }
    ]
},
{
    question: "Which collection stores key-value pairs?",
    answers: [
        { text: "List", correct: false },
        { text: "Set", correct: false },
        { text: "Map", correct: true },
        { text: "Queue", correct: false }
    ]
},
{
    question: "Which class implements the List interface?",
    answers: [
        { text: "HashMap", correct: false },
        { text: "ArrayList", correct: true },
        { text: "HashSet", correct: false },
        { text: "TreeMap", correct: false }
    ]
},
{
    question: "Which keyword is used to call parent constructor?",
    answers: [
        { text: "this", correct: false },
        { text: "parent", correct: false },
        { text: "super", correct: true },
        { text: "base", correct: false }
    ]
},
{
    question: "What is the size of char in Java?",
    answers: [
        { text: "1 byte", correct: false },
        { text: "2 bytes", correct: true },
        { text: "4 bytes", correct: false },
        { text: "8 bytes", correct: false }
    ]
},
{
    question: "Which keyword prevents method overriding?",
    answers: [
        { text: "static", correct: false },
        { text: "private", correct: false },
        { text: "final", correct: true },
        { text: "const", correct: false }
    ]
},
{
    question: "Which class is used for random numbers?",
    answers: [
        { text: "Random", correct: true },
        { text: "Math", correct: false },
        { text: "Number", correct: false },
        { text: "Generate", correct: false }
    ]
},
{
    question: "Which loop is best when iterations are known?",
    answers: [
        { text: "while", correct: false },
        { text: "do-while", correct: false },
        { text: "for", correct: true },
        { text: "switch", correct: false }
    ]
},
{
    question: "Which keyword is used to throw an exception?",
    answers: [
        { text: "throws", correct: false },
        { text: "throw", correct: true },
        { text: "try", correct: false },
        { text: "catch", correct: false }
    ]
},
{
    question: "Which interface supports multiple inheritance?",
    answers: [
        { text: "Class", correct: false },
        { text: "Interface", correct: true },
        { text: "Method", correct: false },
        { text: "Package", correct: false }
    ]
},
{
    question: "Which keyword is used for package declaration?",
    answers: [
        { text: "import", correct: false },
        { text: "package", correct: true },
        { text: "include", correct: false },
        { text: "using", correct: false }
    ]
},
{
    question: "Which method converts String to integer?",
    answers: [
        { text: "Integer.parseInt()", correct: true },
        { text: "parse()", correct: false },
        { text: "toInt()", correct: false },
        { text: "convert()", correct: false }
    ]
},
{
    question: "Which Java feature allows code reuse?",
    answers: [
        { text: "Inheritance", correct: true },
        { text: "Compilation", correct: false },
        { text: "Execution", correct: false },
        { text: "Packaging", correct: false }
    ]
},
{
    question: "Which collection follows FIFO?",
    answers: [
        { text: "Stack", correct: false },
        { text: "Queue", correct: true },
        { text: "Set", correct: false },
        { text: "Map", correct: false }
    ]
},
{
    question: "Which keyword is used to define an interface?",
    answers: [
        { text: "class", correct: false },
        { text: "interface", correct: true },
        { text: "implements", correct: false },
        { text: "extends", correct: false }
    ]
},
{
    question: "Which class is immutable in Java?",
    answers: [
        { text: "String", correct: true },
        { text: "StringBuilder", correct: false },
        { text: "ArrayList", correct: false },
        { text: "Scanner", correct: false }
    ]
},
{
    question: "What is the return type of main()?",
    answers: [
        { text: "int", correct: false },
        { text: "String", correct: false },
        { text: "void", correct: true },
        { text: "boolean", correct: false }
    ]
},
{
    question: "Which class is used for file handling?",
    answers: [
        { text: "File", correct: true },
        { text: "Folder", correct: false },
        { text: "Directory", correct: false },
        { text: "Path", correct: false }
    ]
},
{
    question: "Which collection class is synchronized?",
    answers: [
        { text: "ArrayList", correct: false },
        { text: "Vector", correct: true },
        { text: "HashSet", correct: false },
        { text: "HashMap", correct: false }
    ]
},
{
    question: "Which keyword is used for abstraction?",
    answers: [
        { text: "abstract", correct: true },
        { text: "interface", correct: false },
        { text: "virtual", correct: false },
        { text: "hidden", correct: false }
    ]
},
{
    question: "Which method returns string length?",
    answers: [
        { text: "size()", correct: false },
        { text: "count()", correct: false },
        { text: "length()", correct: true },
        { text: "len()", correct: false }
    ]
},
{
    question: "Which collection does not allow duplicates?",
    answers: [
        { text: "ArrayList", correct: false },
        { text: "Set", correct: true },
        { text: "Vector", correct: false },
        { text: "LinkedList", correct: false }
    ]
},
{
    question: "Java source files have which extension?",
    answers: [
        { text: ".java", correct: true },
        { text: ".class", correct: false },
        { text: ".jar", correct: false },
        { text: ".jav", correct: false }
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
},
{
    question: "Which keyword is used to define a function in Python?",
    answers: [
        { text: "function", correct: false },
        { text: "def", correct: true },
        { text: "fun", correct: false },
        { text: "define", correct: false }
    ]
},
{
    question: "Which data type is immutable in Python?",
    answers: [
        { text: "List", correct: false },
        { text: "Dictionary", correct: false },
        { text: "Set", correct: false },
        { text: "Tuple", correct: true }
    ]
},
{
    question: "What is the output of len('Python')?",
    answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false }
    ]
},
{
    question: "Which symbol is used for comments in Python?",
    answers: [
        { text: "#", correct: true },
        { text: "//", correct: false },
        { text: "/*", correct: false },
        { text: "--", correct: false }
    ]
},
{
    question: "Which function is used to get user input?",
    answers: [
        { text: "scan()", correct: false },
        { text: "input()", correct: true },
        { text: "read()", correct: false },
        { text: "get()", correct: false }
    ]
},
{
    question: "Which keyword is used for conditional statements?",
    answers: [
        { text: "if", correct: true },
        { text: "for", correct: false },
        { text: "while", correct: false },
        { text: "def", correct: false }
    ]
},
{
    question: "Which operator is used for exponentiation?",
    answers: [
        { text: "^", correct: false },
        { text: "**", correct: true },
        { text: "*", correct: false },
        { text: "//", correct: false }
    ]
},
{
    question: "What is the output of 10 // 3?",
    answers: [
        { text: "3", correct: true },
        { text: "3.33", correct: false },
        { text: "4", correct: false },
        { text: "1", correct: false }
    ]
},
{
    question: "Which collection is unordered?",
    answers: [
        { text: "List", correct: false },
        { text: "Tuple", correct: false },
        { text: "Set", correct: true },
        { text: "String", correct: false }
    ]
},
{
    question: "Which keyword is used to create a class?",
    answers: [
        { text: "object", correct: false },
        { text: "class", correct: true },
        { text: "define", correct: false },
        { text: "new", correct: false }
    ]
},
{
    question: "Python is a _____ language.",
    answers: [
        { text: "Compiled", correct: false },
        { text: "Interpreted", correct: true },
        { text: "Assembly", correct: false },
        { text: "Machine", correct: false }
    ]
},
{
    question: "Which method converts a string to lowercase?",
    answers: [
        { text: "lower()", correct: true },
        { text: "small()", correct: false },
        { text: "down()", correct: false },
        { text: "case()", correct: false }
    ]
},
{
    question: "Which keyword is used to exit a loop?",
    answers: [
        { text: "continue", correct: false },
        { text: "pass", correct: false },
        { text: "break", correct: true },
        { text: "stop", correct: false }
    ]
},
{
    question: "Which function returns the type of an object?",
    answers: [
        { text: "type()", correct: true },
        { text: "typeof()", correct: false },
        { text: "datatype()", correct: false },
        { text: "class()", correct: false }
    ]
},
{
    question: "Which library is used for numerical computing?",
    answers: [
        { text: "NumPy", correct: true },
        { text: "Pandas", correct: false },
        { text: "Matplotlib", correct: false },
        { text: "Tkinter", correct: false }
    ]
},
{
    question: "Which keyword is used for exception handling?",
    answers: [
        { text: "try", correct: true },
        { text: "catch", correct: false },
        { text: "throw", correct: false },
        { text: "error", correct: false }
    ]
},
{
    question: "Which loop is used to iterate over a sequence?",
    answers: [
        { text: "for", correct: true },
        { text: "if", correct: false },
        { text: "switch", correct: false },
        { text: "case", correct: false }
    ]
},
{
    question: "Which data type stores key-value pairs?",
    answers: [
        { text: "List", correct: false },
        { text: "Tuple", correct: false },
        { text: "Dictionary", correct: true },
        { text: "Set", correct: false }
    ]
},
{
    question: "Which function is used to display output?",
    answers: [
        { text: "display()", correct: false },
        { text: "show()", correct: false },
        { text: "print()", correct: true },
        { text: "output()", correct: false }
    ]
},
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
    question: "Which keyword is used to create an anonymous function?",
    answers: [
        { text: "lambda", correct: true },
        { text: "func", correct: false },
        { text: "anonymous", correct: false },
        { text: "def", correct: false }
    ]
},
{
    question: "Which method adds an element to a list?",
    answers: [
        { text: "insert()", correct: false },
        { text: "append()", correct: true },
        { text: "add()", correct: false },
        { text: "push()", correct: false }
    ]
},
{
    question: "Which function returns the largest value?",
    answers: [
        { text: "top()", correct: false },
        { text: "max()", correct: true },
        { text: "high()", correct: false },
        { text: "largest()", correct: false }
    ]
},
{
    question: "Which function returns the smallest value?",
    answers: [
        { text: "min()", correct: true },
        { text: "small()", correct: false },
        { text: "lowest()", correct: false },
        { text: "bottom()", correct: false }
    ]
},
{
    question: "Which operator checks equality?",
    answers: [
        { text: "=", correct: false },
        { text: "==", correct: true },
        { text: "!=", correct: false },
        { text: "===", correct: false }
    ]
},
{
    question: "What is the output of type(5)?",
    answers: [
        { text: "float", correct: false },
        { text: "str", correct: false },
        { text: "int", correct: true },
        { text: "number", correct: false }
    ]
},
{
    question: "Which module is used for mathematical operations?",
    answers: [
        { text: "calc", correct: false },
        { text: "math", correct: true },
        { text: "mathematics", correct: false },
        { text: "number", correct: false }
    ]
},
{
    question: "Which keyword is used to import modules?",
    answers: [
        { text: "include", correct: false },
        { text: "using", correct: false },
        { text: "import", correct: true },
        { text: "package", correct: false }
    ]
},
{
    question: "Which method removes an item from a list?",
    answers: [
        { text: "delete()", correct: false },
        { text: "remove()", correct: true },
        { text: "erase()", correct: false },
        { text: "drop()", correct: false }
    ]
},
{
    question: "Which statement is used to handle exceptions?",
    answers: [
        { text: "try-except", correct: true },
        { text: "catch-finally", correct: false },
        { text: "if-else", correct: false },
        { text: "switch-case", correct: false }
    ]
},
{
    question: "Which keyword skips the current iteration?",
    answers: [
        { text: "break", correct: false },
        { text: "continue", correct: true },
        { text: "skip", correct: false },
        { text: "pass", correct: false }
    ]
},
{
    question: "What is the output of len([1,2,3,4])?",
    answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "2", correct: false }
    ]
},
{
    question: "Which symbol is used for list indexing?",
    answers: [
        { text: "()", correct: false },
        { text: "{}", correct: false },
        { text: "[]", correct: true },
        { text: "<>", correct: false }
    ]
},
{
    question: "Which data type is ordered and mutable?",
    answers: [
        { text: "Tuple", correct: false },
        { text: "Set", correct: false },
        { text: "List", correct: true },
        { text: "String", correct: false }
    ]
},
{
    question: "Which function converts a value to string?",
    answers: [
        { text: "string()", correct: false },
        { text: "str()", correct: true },
        { text: "toString()", correct: false },
        { text: "convert()", correct: false }
    ]
},
{
    question: "Which function converts a string to integer?",
    answers: [
        { text: "int()", correct: true },
        { text: "integer()", correct: false },
        { text: "toInt()", correct: false },
        { text: "number()", correct: false }
    ]
},
{
    question: "Which method converts text to uppercase?",
    answers: [
        { text: "upper()", correct: true },
        { text: "capital()", correct: false },
        { text: "uppercase()", correct: false },
        { text: "big()", correct: false }
    ]
},
{
    question: "Which collection allows duplicate elements?",
    answers: [
        { text: "Set", correct: false },
        { text: "List", correct: true },
        { text: "Dictionary", correct: false },
        { text: "None", correct: false }
    ]
},
{
    question: "Which keyword is used for inheritance?",
    answers: [
        { text: "extends", correct: false },
        { text: "inherits", correct: false },
        { text: "class Child(Parent)", correct: true },
        { text: "implement", correct: false }
    ]
},
{
    question: "Which operator is used for logical AND?",
    answers: [
        { text: "&&", correct: false },
        { text: "&", correct: false },
        { text: "and", correct: true },
        { text: "AND", correct: false }
    ]
},
{
    question: "Which operator is used for logical OR?",
    answers: [
        { text: "||", correct: false },
        { text: "or", correct: true },
        { text: "|", correct: false },
        { text: "OR", correct: false }
    ]
},
{
    question: "Which keyword is used to define a generator?",
    answers: [
        { text: "yield", correct: true },
        { text: "return", correct: false },
        { text: "generate", correct: false },
        { text: "gen", correct: false }
    ]
},
{
    question: "Which library is commonly used for data analysis?",
    answers: [
        { text: "NumPy", correct: false },
        { text: "Pandas", correct: true },
        { text: "Tkinter", correct: false },
        { text: "Pygame", correct: false }
    ]
},
{
    question: "Which library is used for plotting graphs?",
    answers: [
        { text: "Matplotlib", correct: true },
        { text: "NumPy", correct: false },
        { text: "Pandas", correct: false },
        { text: "TensorFlow", correct: false }
    ]
},
{
    question: "Which keyword creates a loop that runs while a condition is true?",
    answers: [
        { text: "for", correct: false },
        { text: "loop", correct: false },
        { text: "while", correct: true },
        { text: "repeat", correct: false }
    ]
},
{
    question: "Python files have which extension?",
    answers: [
        { text: ".py", correct: true },
        { text: ".python", correct: false },
        { text: ".pt", correct: false },
        { text: ".p", correct: false }
    ]
},
{
    question: "Which function returns the absolute value?",
    answers: [
        { text: "abs()", correct: true },
        { text: "absolute()", correct: false },
        { text: "mod()", correct: false },
        { text: "value()", correct: false }
    ]
},
{
    question: "Which built-in type represents True or False values?",
    answers: [
        { text: "bool", correct: true },
        { text: "boolean", correct: false },
        { text: "logic", correct: false },
        { text: "binary", correct: false }
    ]
},
{
    question: "What is the output of 3 * 'Hi'?",
    answers: [
        { text: "HiHiHi", correct: true },
        { text: "Hi3", correct: false },
        { text: "Error", correct: false },
        { text: "3Hi", correct: false }
    ]
},
{
    question: "Which keyword is used to define a class constructor?",
    answers: [
        { text: "__init__", correct: true },
        { text: "constructor", correct: false },
        { text: "__constructor__", correct: false },
        { text: "init", correct: false }
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
},
{
    question: "Which is the national animal of India?",
    answers: [
        { text: "Lion", correct: false },
        { text: "Tiger", correct: true },
        { text: "Elephant", correct: false },
        { text: "Leopard", correct: false }
    ]
},
{
    question: "Who was the first President of India?",
    answers: [
        { text: "Jawaharlal Nehru", correct: false },
        { text: "Rajendra Prasad", correct: true },
        { text: "Sardar Patel", correct: false },
        { text: "B. R. Ambedkar", correct: false }
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Mercury", correct: false }
    ]
},
{
    question: "What is the capital of Karnataka?",
    answers: [
        { text: "Mysuru", correct: false },
        { text: "Hubli", correct: false },
        { text: "Bengaluru", correct: true },
        { text: "Mangaluru", correct: false }
    ]
},
{
    question: "Who invented the telephone?",
    answers: [
        { text: "Thomas Edison", correct: false },
        { text: "Alexander Graham Bell", correct: true },
        { text: "Newton", correct: false },
        { text: "Einstein", correct: false }
    ]
},
{
    question: "Which is the largest ocean in the world?",
    answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false }
    ]
},
{
    question: "Who is known as the Missile Man of India?",
    answers: [
        { text: "Vikram Sarabhai", correct: false },
        { text: "A. P. J. Abdul Kalam", correct: true },
        { text: "Homi Bhabha", correct: false },
        { text: "C. V. Raman", correct: false }
    ]
},
{
    question: "Which is the smallest continent?",
    answers: [
        { text: "Europe", correct: false },
        { text: "Australia", correct: true },
        { text: "Africa", correct: false },
        { text: "Antarctica", correct: false }
    ]
},
{
    question: "What is the currency of Japan?",
    answers: [
        { text: "Won", correct: false },
        { text: "Dollar", correct: false },
        { text: "Yen", correct: true },
        { text: "Euro", correct: false }
    ]
},
{
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Hydrogen", correct: false }
    ]
},
{
    question: "Who wrote the Indian National Anthem?",
    answers: [
        { text: "Bankim Chandra Chatterjee", correct: false },
        { text: "Rabindranath Tagore", correct: true },
        { text: "Sarojini Naidu", correct: false },
        { text: "Subhash Chandra Bose", correct: false }
    ]
},
{
    question: "Which is the longest river in India?",
    answers: [
        { text: "Yamuna", correct: false },
        { text: "Godavari", correct: true },
        { text: "Krishna", correct: false },
        { text: "Narmada", correct: false }
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
    question: "Who discovered gravity?",
    answers: [
        { text: "Galileo", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "Einstein", correct: false },
        { text: "Kepler", correct: false }
    ]
},
{
    question: "Which is the highest mountain peak in the world?",
    answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "Makalu", correct: false }
    ]
},
{
    question: "Which festival is known as the Festival of Lights?",
    answers: [
        { text: "Holi", correct: false },
        { text: "Diwali", correct: true },
        { text: "Dussehra", correct: false },
        { text: "Pongal", correct: false }
    ]
},
{
    question: "Who was the first Prime Minister of India?",
    answers: [
        { text: "Mahatma Gandhi", correct: false },
        { text: "Jawaharlal Nehru", correct: true },
        { text: "Sardar Patel", correct: false },
        { text: "Rajendra Prasad", correct: false }
    ]
},
{
    question: "Which blood group is known as the universal donor?",
    answers: [
        { text: "AB+", correct: false },
        { text: "O-", correct: true },
        { text: "A+", correct: false },
        { text: "B+", correct: false }
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
    question: "How many states are there in India?",
    answers: [
        { text: "27", correct: false },
        { text: "28", correct: true },
        { text: "29", correct: false },
        { text: "30", correct: false }
    ]
},
{
    question: "Which is the national bird of India?",
    answers: [
        { text: "Peacock", correct: true },
        { text: "Parrot", correct: false },
        { text: "Sparrow", correct: false },
        { text: "Pigeon", correct: false }
    ]
},
{
    question: "Who is known as the Father of the Indian Constitution?",
    answers: [
        { text: "Jawaharlal Nehru", correct: false },
        { text: "B. R. Ambedkar", correct: true },
        { text: "Mahatma Gandhi", correct: false },
        { text: "Sardar Patel", correct: false }
    ]
},
{
    question: "Which is the largest planet in our solar system?",
    answers: [
        { text: "Earth", correct: false },
        { text: "Saturn", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Mars", correct: false }
    ]
},
{
    question: "What is the capital of Australia?",
    answers: [
        { text: "Sydney", correct: false },
        { text: "Melbourne", correct: false },
        { text: "Canberra", correct: true },
        { text: "Perth", correct: false }
    ]
},
{
    question: "Who discovered penicillin?",
    answers: [
        { text: "Alexander Fleming", correct: true },
        { text: "Louis Pasteur", correct: false },
        { text: "Edward Jenner", correct: false },
        { text: "Robert Koch", correct: false }
    ]
},
{
    question: "Which is the largest desert in the world?",
    answers: [
        { text: "Sahara", correct: true },
        { text: "Gobi", correct: false },
        { text: "Thar", correct: false },
        { text: "Kalahari", correct: false }
    ]
},
{
    question: "Which state is known as the 'Spice Garden of India'?",
    answers: [
        { text: "Tamil Nadu", correct: false },
        { text: "Kerala", correct: true },
        { text: "Karnataka", correct: false },
        { text: "Goa", correct: false }
    ]
},
{
    question: "Which is the national flower of India?",
    answers: [
        { text: "Rose", correct: false },
        { text: "Lotus", correct: true },
        { text: "Sunflower", correct: false },
        { text: "Jasmine", correct: false }
    ]
},
{
    question: "Who was the first woman Prime Minister of India?",
    answers: [
        { text: "Pratibha Patil", correct: false },
        { text: "Indira Gandhi", correct: true },
        { text: "Sarojini Naidu", correct: false },
        { text: "Sonia Gandhi", correct: false }
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
    question: "Which gas is most abundant in Earth's atmosphere?",
    answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: true },
        { text: "Carbon Dioxide", correct: false },
        { text: "Hydrogen", correct: false }
    ]
},
{
    question: "What is the currency of the United Kingdom?",
    answers: [
        { text: "Euro", correct: false },
        { text: "Dollar", correct: false },
        { text: "Pound Sterling", correct: true },
        { text: "Yen", correct: false }
    ]
},
{
    question: "Which Indian city is known as the Pink City?",
    answers: [
        { text: "Udaipur", correct: false },
        { text: "Jaipur", correct: true },
        { text: "Jodhpur", correct: false },
        { text: "Bhopal", correct: false }
    ]
},
{
    question: "Who wrote 'Wings of Fire'?",
    answers: [
        { text: "R. K. Narayan", correct: false },
        { text: "A. P. J. Abdul Kalam", correct: true },
        { text: "Chetan Bhagat", correct: false },
        { text: "Ruskin Bond", correct: false }
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
    question: "What is the SI unit of force?",
    answers: [
        { text: "Joule", correct: false },
        { text: "Newton", correct: true },
        { text: "Pascal", correct: false },
        { text: "Watt", correct: false }
    ]
},
{
    question: "Which river is known as the Ganga of South India?",
    answers: [
        { text: "Krishna", correct: false },
        { text: "Godavari", correct: true },
        { text: "Kaveri", correct: false },
        { text: "Tungabhadra", correct: false }
    ]
},
{
    question: "Which Indian state has the longest coastline?",
    answers: [
        { text: "Tamil Nadu", correct: false },
        { text: "Andhra Pradesh", correct: false },
        { text: "Gujarat", correct: true },
        { text: "Kerala", correct: false }
    ]
},
{
    question: "Who invented the light bulb?",
    answers: [
        { text: "Nikola Tesla", correct: false },
        { text: "Thomas Edison", correct: true },
        { text: "Alexander Bell", correct: false },
        { text: "Newton", correct: false }
    ]
},
{
    question: "How many continents are there in the world?",
    answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
    ]
},
{
    question: "Which is the tallest animal in the world?",
    answers: [
        { text: "Elephant", correct: false },
        { text: "Camel", correct: false },
        { text: "Giraffe", correct: true },
        { text: "Horse", correct: false }
    ]
},
{
    question: "What is the national currency of India?",
    answers: [
        { text: "Dollar", correct: false },
        { text: "Rupee", correct: true },
        { text: "Yen", correct: false },
        { text: "Euro", correct: false }
    ]
},
{
    question: "Which organ purifies blood in the human body?",
    answers: [
        { text: "Heart", correct: false },
        { text: "Lungs", correct: false },
        { text: "Kidneys", correct: true },
        { text: "Liver", correct: false }
    ]
},
{
    question: "Who was the first Indian woman in space?",
    answers: [
        { text: "Sunita Williams", correct: false },
        { text: "Kalpana Chawla", correct: true },
        { text: "Indira Gandhi", correct: false },
        { text: "Kiran Bedi", correct: false }
    ]
},
{
    question: "Which is the largest freshwater lake in India?",
    answers: [
        { text: "Dal Lake", correct: false },
        { text: "Wular Lake", correct: true },
        { text: "Loktak Lake", correct: false },
        { text: "Chilika Lake", correct: false }
    ]
},
{
    question: "Which country is called the Land of Thousand Lakes?",
    answers: [
        { text: "Norway", correct: false },
        { text: "Sweden", correct: false },
        { text: "Finland", correct: true },
        { text: "Denmark", correct: false }
    ]
},
{
    question: "Which is the fastest land animal?",
    answers: [
        { text: "Lion", correct: false },
        { text: "Tiger", correct: false },
        { text: "Cheetah", correct: true },
        { text: "Leopard", correct: false }
    ]
},
{
    question: "Who is known as the Nightingale of India?",
    answers: [
        { text: "Lata Mangeshkar", correct: false },
        { text: "Sarojini Naidu", correct: true },
        { text: "Indira Gandhi", correct: false },
        { text: "Annie Besant", correct: false }
    ]
},
{
    question: "What is the largest organ in the human body?",
    answers: [
        { text: "Heart", correct: false },
        { text: "Brain", correct: false },
        { text: "Skin", correct: true },
        { text: "Liver", correct: false }
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
    question: "What is 15% of 200?",
    answers: [
        { text: "20", correct: false },
        { text: "30", correct: true },
        { text: "25", correct: false },
        { text: "35", correct: false }
    ]
},
{
    question: "If x = 5, then x² = ?",
    answers: [
        { text: "10", correct: false },
        { text: "20", correct: false },
        { text: "25", correct: true },
        { text: "30", correct: false }
    ]
},
{
    question: "A train travels 120 km in 2 hours. Its speed is?",
    answers: [
        { text: "50 km/hr", correct: false },
        { text: "60 km/hr", correct: true },
        { text: "70 km/hr", correct: false },
        { text: "80 km/hr", correct: false }
    ]
},
{
    question: "What is the average of 10, 20, and 30?",
    answers: [
        { text: "15", correct: false },
        { text: "20", correct: true },
        { text: "25", correct: false },
        { text: "30", correct: false }
    ]
},
{
    question: "What is 25% of 400?",
    answers: [
        { text: "80", correct: false },
        { text: "90", correct: false },
        { text: "100", correct: true },
        { text: "120", correct: false }
    ]
},
{
    question: "If 8 workers complete a job in 10 days, how many worker-days are required?",
    answers: [
        { text: "80", correct: true },
        { text: "70", correct: false },
        { text: "90", correct: false },
        { text: "100", correct: false }
    ]
},
{
    question: "What is the simple interest on ₹1000 at 10% per annum for 2 years?",
    answers: [
        { text: "₹100", correct: false },
        { text: "₹150", correct: false },
        { text: "₹200", correct: true },
        { text: "₹250", correct: false }
    ]
},
{
    question: "Find the next number: 2, 4, 8, 16, ?",
    answers: [
        { text: "20", correct: false },
        { text: "24", correct: false },
        { text: "32", correct: true },
        { text: "36", correct: false }
    ]
},
{
    question: "What is 3/4 of 200?",
    answers: [
        { text: "100", correct: false },
        { text: "120", correct: false },
        { text: "150", correct: true },
        { text: "180", correct: false }
    ]
},
{
    question: "A shopkeeper gains 20% on an item sold for ₹120. Cost price is?",
    answers: [
        { text: "₹100", correct: true },
        { text: "₹110", correct: false },
        { text: "₹90", correct: false },
        { text: "₹80", correct: false }
    ]
},
{
    question: "Find the missing number: 5, 10, 20, 40, ?",
    answers: [
        { text: "60", correct: false },
        { text: "70", correct: false },
        { text: "80", correct: true },
        { text: "90", correct: false }
    ]
},
{
    question: "What is 40% of 500?",
    answers: [
        { text: "150", correct: false },
        { text: "180", correct: false },
        { text: "200", correct: true },
        { text: "220", correct: false }
    ]
},
{
    question: "A car covers 240 km in 4 hours. Its speed is?",
    answers: [
        { text: "50 km/hr", correct: false },
        { text: "55 km/hr", correct: false },
        { text: "60 km/hr", correct: true },
        { text: "65 km/hr", correct: false }
    ]
},
{
    question: "What is the ratio of 20 to 30?",
    answers: [
        { text: "2:3", correct: true },
        { text: "3:2", correct: false },
        { text: "1:2", correct: false },
        { text: "2:5", correct: false }
    ]
},
{
    question: "Find the next number: 1, 4, 9, 16, ?",
    answers: [
        { text: "20", correct: false },
        { text: "25", correct: true },
        { text: "30", correct: false },
        { text: "36", correct: false }
    ]
},
{
    question: "If the perimeter of a square is 20 cm, its side is?",
    answers: [
        { text: "4 cm", correct: false },
        { text: "5 cm", correct: true },
        { text: "6 cm", correct: false },
        { text: "7 cm", correct: false }
    ]
},
{
    question: "What is the value of 12 × 8?",
    answers: [
        { text: "86", correct: false },
        { text: "94", correct: false },
        { text: "96", correct: true },
        { text: "98", correct: false }
    ]
},
{
    question: "The average of 5 numbers is 20. Their total is?",
    answers: [
        { text: "80", correct: false },
        { text: "90", correct: false },
        { text: "100", correct: true },
        { text: "110", correct: false }
    ]
},
{
    question: "Find the next number: 3, 6, 12, 24, ?",
    answers: [
        { text: "36", correct: false },
        { text: "42", correct: false },
        { text: "48", correct: true },
        { text: "54", correct: false }
    ]
},
{
    question: "A sum doubles in 10 years at simple interest. What is the rate of interest?",
    answers: [
        { text: "5%", correct: false },
        { text: "8%", correct: false },
        { text: "10%", correct: true },
        { text: "12%", correct: false }
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
    question: "What is 30% of 250?",
    answers: [
        { text: "65", correct: false },
        { text: "70", correct: false },
        { text: "75", correct: true },
        { text: "80", correct: false }
    ]
},
{
    question: "If a train travels 300 km in 5 hours, its speed is?",
    answers: [
        { text: "50 km/hr", correct: false },
        { text: "60 km/hr", correct: true },
        { text: "70 km/hr", correct: false },
        { text: "80 km/hr", correct: false }
    ]
},
{
    question: "Find the next number: 7, 14, 21, 28, ?",
    answers: [
        { text: "35", correct: true },
        { text: "36", correct: false },
        { text: "42", correct: false },
        { text: "49", correct: false }
    ]
},
{
    question: "A man buys an item for ₹500 and sells it for ₹600. Profit percentage is?",
    answers: [
        { text: "10%", correct: false },
        { text: "15%", correct: false },
        { text: "20%", correct: true },
        { text: "25%", correct: false }
    ]
},
{
    question: "The average of 15, 20 and 25 is?",
    answers: [
        { text: "18", correct: false },
        { text: "20", correct: true },
        { text: "22", correct: false },
        { text: "25", correct: false }
    ]
},
{
    question: "What is the square root of 144?",
    answers: [
        { text: "10", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false }
    ]
},
{
    question: "Find the next number: 2, 6, 12, 20, ?",
    answers: [
        { text: "28", correct: false },
        { text: "30", correct: true },
        { text: "32", correct: false },
        { text: "36", correct: false }
    ]
},
{
    question: "What is 5/8 of 160?",
    answers: [
        { text: "90", correct: false },
        { text: "100", correct: true },
        { text: "110", correct: false },
        { text: "120", correct: false }
    ]
},
{
    question: "A rectangle has length 10 cm and width 5 cm. Its area is?",
    answers: [
        { text: "40 cm²", correct: false },
        { text: "45 cm²", correct: false },
        { text: "50 cm²", correct: true },
        { text: "55 cm²", correct: false }
    ]
},
{
    question: "What is 12.5% of 80?",
    answers: [
        { text: "8", correct: false },
        { text: "10", correct: true },
        { text: "12", correct: false },
        { text: "15", correct: false }
    ]
},
{
    question: "Find the next number: 1, 8, 27, 64, ?",
    answers: [
        { text: "81", correct: false },
        { text: "100", correct: false },
        { text: "125", correct: true },
        { text: "144", correct: false }
    ]
},
{
    question: "What is the ratio of 45 to 60?",
    answers: [
        { text: "2:3", correct: false },
        { text: "3:4", correct: true },
        { text: "4:5", correct: false },
        { text: "5:6", correct: false }
    ]
},
{
    question: "If 12 workers finish a job in 15 days, total worker-days are?",
    answers: [
        { text: "150", correct: false },
        { text: "180", correct: true },
        { text: "200", correct: false },
        { text: "220", correct: false }
    ]
},
{
    question: "What is 18 × 7?",
    answers: [
        { text: "116", correct: false },
        { text: "126", correct: true },
        { text: "136", correct: false },
        { text: "146", correct: false }
    ]
},
{
    question: "The perimeter of a rectangle is 30 cm. If length is 10 cm, width is?",
    answers: [
        { text: "4 cm", correct: false },
        { text: "5 cm", correct: true },
        { text: "6 cm", correct: false },
        { text: "7 cm", correct: false }
    ]
},
{
    question: "Find the next number: 11, 22, 44, 88, ?",
    answers: [
        { text: "132", correct: false },
        { text: "166", correct: false },
        { text: "176", correct: true },
        { text: "188", correct: false }
    ]
},
{
    question: "What is the simple interest on ₹2000 at 5% for 2 years?",
    answers: [
        { text: "₹150", correct: false },
        { text: "₹200", correct: true },
        { text: "₹250", correct: false },
        { text: "₹300", correct: false }
    ]
},
{
    question: "A cyclist covers 90 km in 3 hours. Speed is?",
    answers: [
        { text: "25 km/hr", correct: false },
        { text: "30 km/hr", correct: true },
        { text: "35 km/hr", correct: false },
        { text: "40 km/hr", correct: false }
    ]
},
{
    question: "What is 45% of 200?",
    answers: [
        { text: "80", correct: false },
        { text: "85", correct: false },
        { text: "90", correct: true },
        { text: "95", correct: false }
    ]
},
{
    question: "Find the next number: 4, 9, 16, 25, ?",
    answers: [
        { text: "30", correct: false },
        { text: "36", correct: true },
        { text: "49", correct: false },
        { text: "64", correct: false }
    ]
},
{
    question: "A shopkeeper sells an item for ₹800 with a profit of ₹100. Cost price is?",
    answers: [
        { text: "₹600", correct: false },
        { text: "₹650", correct: false },
        { text: "₹700", correct: true },
        { text: "₹750", correct: false }
    ]
},
{
    question: "What is the cube of 4?",
    answers: [
        { text: "16", correct: false },
        { text: "32", correct: false },
        { text: "64", correct: true },
        { text: "128", correct: false }
    ]
},
{
    question: "The average of 8, 12 and 16 is?",
    answers: [
        { text: "10", correct: false },
        { text: "12", correct: true },
        { text: "14", correct: false },
        { text: "16", correct: false }
    ]
},
{
    question: "What is 20% of 350?",
    answers: [
        { text: "60", correct: false },
        { text: "70", correct: true },
        { text: "80", correct: false },
        { text: "90", correct: false }
    ]
},
{
    question: "A car travels 180 km in 3 hours. Speed is?",
    answers: [
        { text: "50 km/hr", correct: false },
        { text: "55 km/hr", correct: false },
        { text: "60 km/hr", correct: true },
        { text: "65 km/hr", correct: false }
    ]
},
{
    question: "Find the next number: 5, 10, 17, 26, ?",
    answers: [
        { text: "35", correct: false },
        { text: "37", correct: true },
        { text: "39", correct: false },
        { text: "41", correct: false }
    ]
},
{
    question: "What is the value of 25 × 4?",
    answers: [
        { text: "90", correct: false },
        { text: "95", correct: false },
        { text: "100", correct: true },
        { text: "110", correct: false }
    ]
},
{
    question: "If the cost price is ₹500 and selling price is ₹450, the loss is?",
    answers: [
        { text: "₹25", correct: false },
        { text: "₹50", correct: true },
        { text: "₹75", correct: false },
        { text: "₹100", correct: false }
    ]
},
{
    question: "What is the square of 13?",
    answers: [
        { text: "156", correct: false },
        { text: "169", correct: true },
        { text: "196", correct: false },
        { text: "225", correct: false }
    ]
},
{
    question: "Find the next number: 100, 90, 80, 70, ?",
    answers: [
        { text: "50", correct: false },
        { text: "55", correct: false },
        { text: "60", correct: true },
        { text: "65", correct: false }
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

        const startScreen = document.getElementById("start-screen");

        startScreen.style.display = "flex";
        startScreen.style.flexDirection = "column";
        startScreen.style.alignItems = "center";
        startScreen.style.justifyContent = "center";

        document.getElementById("welcome-user").innerText = username;

    } else {
        alert("Invalid Login Details");
    }
}


function startQuiz() {

    document.getElementById("start-screen").style.display = "none";

    const categoryScreen = document.getElementById("category-screen");

    categoryScreen.style.display = "flex";

    
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

    localStorage.setItem("certificateName", certificateName);
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