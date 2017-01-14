// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!! Quiz 2",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p> This is the end of the test</p> ",
        "level1":  "Ready",
        "level2":  "Contender",
        "level3":  "Amateur",
        "level4":  " Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Convert (4021.2)<sub>5</sub> to decimal ().",
            "a": [
                {"option": "511.4",      "correct": true},
                {"option": "512.4",     "correct": false},
                {"option": "5.A",      "correct": false},
                {"option": "1.1001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Single True Answer
            "q": "Convert (A2F)<sub>16</sub> to decimal ().",
            "a": [
                {"option": "2606",      "correct": false},
                {"option": "2617",     "correct": false},
                {"option": "2207",      "correct": false},
                {"option": "2607",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 3 - Multiple Choice, Single True Answer
            "q": "Convert (147.3)<sub>8</sub> to decimal ().",
            "a": [
                {"option": "101",      "correct": false},
                {"option": "57.375",     "correct": true},
                {"option": "57.475",      "correct": false},
                {"option": "56.475",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 4 - Multiple Choice, Single True Answer
            "q": "Convert (231.3)<sub>4</sub> to decimal ().",
            "a": [
                {"option": "6.75",      "correct": false},
                {"option": "55.75",     "correct": true},
                {"option": "55.65",      "correct": false},
                {"option": "75.55",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 5 - Multiple Choice, Single True Answer
            "q": "Convert (212)<sub>3</sub>  to decimal ().",
            "a": [
                {"option": "23",      "correct": true},
                {"option": "24",     "correct": false},
                {"option": "25",      "correct": false},
                {"option": "22",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 6 - Multiple Choice, Single True Answer
            "q": "Convert (0.513) to Octal().",
            "a": [
                {"option": "0.001001011",      "correct": false},
                {"option": "1.101001011",     "correct": false},
                {"option": "0.101001010",      "correct": false},
                {"option": "0.101001011",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 7 - Multiple Choice, Single True Answer
            "q": "Convert (1110111011101)<sub>2</sub> to Hexadecimal ()<sub>16</sub>.",
            "a": [
                {"option": "1DDD",      "correct": true},
                {"option": "1FAD",     "correct": false},
                {"option": "1DFD",      "correct": false},
                {"option": "1EEE",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 8 - Multiple Choice, Single True Answer
            "q": "Convert (123.4)<sub>8</sub> to Binary ()<sub>2</sub>.",
            "a": [
                {"option": "1010011.1",      "correct": true},
                {"option": "1010011",     "correct": false},
                {"option": "1.1010011",      "correct": false},
                {"option": "1010011.101",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 9 - Multiple Choice, Single True Answer
            "q": "Convert (673.124)<sub>8</sub> to Binary ()<sub>2</sub>.",
            "a": [
                {"option": "110111011.1010101",      "correct": false},
                {"option": "100111011.0010100",     "correct": false},
                {"option": "110111011.1010100",      "correct": true},
                {"option": "110111011.0010100",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 0 - Multiple Choice, Single True Answer
            "q": "Convert (111001110.010011)<sub>2</sub> to hexadecimal ()<sub>16</sub>.",
            "a": [
                {"option": "1CF.4C",      "correct": false},
                {"option": "2CE.4C",     "correct": false},
                {"option": "1CE.4C",      "correct": true},
                {"option": "1CE.4E",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        }
    ]
};
