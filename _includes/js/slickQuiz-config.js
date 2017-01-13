// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p> This is the end of the test</p>",
        "level1":  "Ready",
        "level2":  "Contender",
        "level3":  "Amateur",
        "level4":  " Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Convert (0.625) to binary  ()2",
            "a": [
                {"option": "0.101",      "correct": true},
                {"option": "0.1011",     "correct": false},
                {"option": "0.1001",      "correct": false},
                {"option": "1.1001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Single True Answer
            "q": "Convert (0.375) to binary  ()2",
            "a": [
                {"option": "0.01101",      "correct": false},
                {"option": "0.011",     "correct": true},
                {"option": "0.1001",      "correct": false},
                {"option": "1.1101",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 3 - Multiple Choice, Single True Answer
            "q": "Convert (6.875) to binary  ()2",
            "a": [
                {"option": "100.101",      "correct": false},
                {"option": "111.111",     "correct": false},
                {"option": "110.11",      "correct": false},
                {"option": "110.111",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 4 - Multiple Choice, Single True Answer
            "q": "Convert (37) to octal number()8",
            "a": [
                {"option": "46",      "correct": false},
                {"option": "45",     "correct": true},
                {"option": "49",      "correct": false},
                {"option": "1.1001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 5 - Multiple Choice, Single True Answer
            "q": "Convert (548.3125) to binary  ()8",
            "a": [
                {"option": "1044.24",      "correct": true},
                {"option": "1144.24",     "correct": false},
                {"option": "1045.24",      "correct": false},
                {"option": "1044.34",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 6 - Multiple Choice, Single True Answer
            "q": "Convert (95) to hexadecimal ()16",
            "a": [
                {"option": "5A",      "correct": false},
                {"option": "5B",     "correct": false},
                {"option": "6F",      "correct": false},
                {"option": "5F",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 7 - Multiple Choice, Single True Answer
            "q": "Convert (5213.879) to hexadecimal ()16",
            "a": [
                {"option": "145D.E106",      "correct": true},
                {"option": "245D.F106",     "correct": false},
                {"option": "165D.A106",      "correct": false},
                {"option": "146D.C106",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 8 - Multiple Choice, Single True Answer
            "q": "Convert (110101)2 to decimal ().",
            "a": [
                {"option": "53",      "correct": true},
                {"option": "56",     "correct": false},
                {"option": "54",      "correct": false},
                {"option": "73",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 9 - Multiple Choice, Single True Answer
            "q": "Convert (1101.01)2 to decimal ().",
            "a": [
                {"option": "0.25",      "correct": false},
                {"option": "0.26",     "correct": false},
                {"option": "13.25",      "correct": true},
                {"option": "13",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
         { // Question 0 - Multiple Choice, Single True Answer
            "q": "Convert (B65F)16 to decimal ().",
            "a": [
                {"option": "46681",      "correct": false},
                {"option": "56687",     "correct": false},
                {"option": "46687",      "correct": true},
                {"option": "66687",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        }
    ]
};
