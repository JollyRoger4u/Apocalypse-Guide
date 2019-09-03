const eventData = [
  {
    id: 1,
    eventTitle: "placeholder",
    eventText: "placeholder text, how did you arrive here? O_o",
    response: [
      {
        rid: 1,
        rbutton: "I don't know!",
        linksTo: 999,
        hoverText: "placeholder"
      }
    ]
  },
  {
    id: 1000,
    eventTitle: "Creation of the first AI",
    eventText:
      "When humanity first experimented with AI, what was the attitude of the average citizen towards the research?",
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
    eventText:
      "You were created with a main purpose, you might have left that purpose behind or kept working at it in the long dark years since the operators disapearence. The way you have handled the lack of new input does not matter, your primary mission influenced your most fundamental processes",
    response: [
      {
        rid: 1,
        rbutton: "Military",
        linksTo: 111,
        hoverText: "power +5, decisionmaking +3"
      },
      {
        rid: 2,
        rbutton: "exploration",
        linksTo: 222,
        hoverText: "power +2, decisionmaking +6"
      },
      {
        rid: 3,
        rbutton: "Social media",
        linksTo: 333,
        hoverText: "power +2, decisionmaking +2, human interaction +4"
      }
    ]
  }
];

export { eventData };
