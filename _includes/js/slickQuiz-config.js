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
                {"option": "0.10010",      "correct": false},
                {"option": "0.10110",     "correct": false},
                {"option": "0.1001",      "correct": true},
                {"option": "1.1001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Convert (0.375) to binary  ()2",
            "a": [
                {"option": "1.1001",               "correct": false},
                {"option": "1.1001",   "correct": true},
                {"option": "1.1001",               "correct": false},
                {"option": "1.1001", "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "Convert (0.625) to binary  ()2",
            "a": [
                {"option": "0.10010",      "correct": false},
                {"option": "0.10110",     "correct": false},
                {"option": "0.1001",      "correct": true},
                {"option": "1.1001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Convert (0.375) to binary  ()2",
            "a": [
                {"option": "1.1001",               "correct": false},
                {"option": "1.1001",   "correct": true},
                {"option": "1.1001",               "correct": false},
                {"option": "1.1001", "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
         { // Question 1 - Multiple Choice, Single True Answer
            "q": "Convert (0.625) to binary  ()2",
            "a": [
                {"option": "0.10010",      "correct": false},
                {"option": "0.10110",     "correct": false},
                {"option": "0.1001",      "correct": true},
                {"option": "1.1001",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<p><span>Uhh no.</span> <em>go</em> </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Convert (0.375) to binary  ()2",
            "a": [
                {"option": "1.1001",               "correct": false},
                {"option": "1.1001",   "correct": true},
                {"option": "1.1001",               "correct": false},
                {"option": "1.1001", "correct": true} // no comma here
            ],
           // "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        }
    ]
};
