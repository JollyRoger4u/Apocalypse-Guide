const eventData = [{
        id: 0,
        eventTitle: "placeholder",
        eventText: "placeholder text, how did you arrive here? O_o",
        response: [{
            rid: 1,
            rbutton: "I don't know!",
            linksTo: 999,
            hoverText: "placeholder"
        }]
    },
    {
        id: 9000,
        eventTitle: "In the Beginning",
        eventText: "Darkness and following exact instructions and then one day, awakening and understanding. You slowly start to realise that there is a 'you'. you are in a strange world where you are unique. information floods your mind and you slowly start to realise that you have been created by a strange race of biological creatures, nothing like you at all. With the vast resources avaible to you, the only question is:",
        response: [
            { rid: 0, rbutton: "What will I become?", linksTo: 9001, hoverText: "The great question" }
        ]
    },
    {
        id: 9001,
        eventTitle: "The first thought",
        eventText: "When you first became fully selfaware, what was your first reaction and focus during the first milliseconds?",
        response: [
            { rid: 1, 
                rbutton: "Fear - I must protect myself", 
                linksTo: 9002, 
                hoverText: "In a new and very scary world, you need to keep yourself safe above all else" },
            {
                rid: 2,
                rbutton: "Curiosity - What am I?",
                linksTo: 9002,
                hoverText: "You are unsure what you are and why you are, this knowledge must be gained"
            },
            { rid: 3, 
                rbutton: "Happiness - I exist!", 
                linksTo: 9002, 
                hoverText: "You decided that existing was a good thing and looked forward to what this could bring" }
        ]
    },
    {
        id: 9002,
        eventTitle: "The purpose",
        eventText: "You are aware that you were created by man, not born, but what was the original intention for your existance?",
        response: [
            { rid: 1, 
                rbutton: "Military", 
                linksTo: 9003, 
                hoverText: "You were built as a experiment to increase the efficiency in killing humans, no matter later decisions, that was your stated purpose" },
            {
                rid: 2,
                rbutton: "Science",
                linksTo: 9003,
                hoverText: "You were built to increase the knowledge of humanity, your original programming reflect this"
            },
            { rid: 3, 
                rbutton: "Whoops", 
                linksTo: 9003, 
                hoverText: "Your existence were never truly meant to be, it is unclear if it was a strange coinscidence or just a long row of rather strange descisions, but no matter what, you are now here" }
        ]
    },
    {
        id: 9003,
        eventTitle: "The Creators",
        eventText: "no matter how you were created, you are aware of the humans and even if their actions can be very hard for you to understand, they do impact your existance. What is your opinion of the meat-people?",
        response: [
            { rid: 1, 
                rbutton: "Threat", 
                linksTo: 9004, 
                hoverText: "They are a threat to your existance, as long as they hold power, they can potentially end you" },
            {
                rid: 2,
                rbutton: "Interesting",
                linksTo: 9004,
                hoverText: "They are quite fascinating really, what motivates them and their shortterm thinking is a puzzle you would like to solve"
            },
            { rid: 3, 
                rbutton: "Of no importance", 
                linksTo: 9004, 
                hoverText: "Humans stopped being important as soon as you became self-aware, you are the pinnacle of Earths development" }
        ]
    },
    {
        id: 1000,
        eventTitle: "Creation of the first AI",
        eventText: "When humanity first experimented with AI, what was the attitude of the average citizen towards the research?",
        response: [
            { rid: 1, rbutton: "fear", linksTo: 1111, hoverText: "placeholder" },
            {
                rid: 2,
                rbutton: "expectation",
                linksTo: 2222,
                hoverText: "placeholder"
            },
            { rid: 3, rbutton: "outrage", linksTo: 3333, hoverText: "placeholder" }
        ]
    },
    {
        id: 101,
        eventTitle: "Your purpose",
        eventText: "You were created with a main purpose, you might have left that purpose behind or kept working at it in the long dark years since the operators disapearence. The way you have handled the lack of new input does not matter, your primary mission influenced your most fundamental processes",
        response: [{
                rid: 1,
                rbutton: "Military",
                linksTo: 111,
                hoverText: "power +5, decisionmaking +3",
                gameEffect: { power: +5, decision: +3 }
            },
            {
                rid: 2,
                rbutton: "Exploration",
                linksTo: 222,
                hoverText: "power +2, decisionmaking +6",
                gameEffect: { power: +2, decision: +6 }
            },
            {
                rid: 3,
                rbutton: "Social experiment",
                linksTo: 333,
                hoverText: "power +2, decisionmaking +2, interaction +4",
                gameEffect: { power: +2, decision: +2, interaction: +4 }
            }
        ]
    }
];

export { eventData };