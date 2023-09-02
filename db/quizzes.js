import {v4 as uuid} from "uuid";

const quizzes = {
    data: [
        {
            /**As each quiz will have multiple question to identify each quiz we give them a uuid */
            id : uuid(),
            category : "Marvel",
            title: "Marvel",
            image :"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/02/marvel-2.jpg?fit=1200%2C630&ssl=1",
            description: " Marvel Comics is a renowned American comic book publisher that has brought to life beloved superheroes and captivating stories, creating a vast interconnected universe known as the Marvel Cinematic Universe (MCU).",
            quiz : [
                {
                    id: uuid(),
                    question : "Black Panther is set in which fictional country",
                options:[
                    {id : uuid(), option: "Wakanda", isCorrect : true},
                    {id : uuid(), option: "Takanda", isCorrect : false},
                    {id : uuid(), option: "Kakanda", isCorrect : false},
                    {id : uuid(), option: "Zakanda", isCorrect : false},
                ]               
             }, 
             {
                id: uuid(),
                    question : "Which character in the Marvel Cinematic Universe (MCU) is known for wielding the mystical hammer called Mjölnir?",
                options:[
                    {id : uuid(), option: "Captain America", isCorrect : false},
                    {id : uuid(), option: "Iron Man", isCorrect : false},
                    {id : uuid(), option: "Thor", isCorrect : true},
                    {id : uuid(), option: "Hulk", isCorrect : false},
                ]     

             },
             {
                id: uuid(),
                question : "In the Marvel Cinematic Universe, which character wields a magical hammer called Mjölnir and is known as the God of Thunder?",
            options:[
                {id : uuid(), option: "Thor", isCorrect : true},
                {id : uuid(), option: "Loki", isCorrect : false},
                {id : uuid(), option: "Odin", isCorrect : false},
                {id : uuid(), option: "Heimdall", isCorrect : false},
            ]               
         },
         {
            id: uuid(),
            question : "Which Marvel superhero has the ability to shrink in size while increasing his strength and is also a founding member of the Avengers?",
        options:[
            {id : uuid(), option: "Black Panther", isCorrect : false},
            {id : uuid(), option: "Hawkeye", isCorrect : false},
            {id : uuid(), option: "Doctor Strange", isCorrect : false},
            {id : uuid(), option: "Ant-Man", isCorrect : true},
        ]               
     },
         

            ]


        }, 
        {
            id: uuid(),
            category : "DC",
            title: "DC",
            image : "https://wallpapercave.com/wp/wp2588483.jpg",
            description: "DC Comics is a legendary comic book company recognized for iconic superheroes and timeless tales, offering a rich multiverse of characters and narratives, with characters like Superman, Batman, and Wonder Woman leading the way.",
            quiz : [
                {
                id : uuid(),
                question: "Who is the iconic superhero known for protecting Gotham City and is often referred to as the Dark Knight?",
                options : [
                    {id: uuid(), option: "Superman", isCorrect: false},
                    {id: uuid(), option: "Green Lantern", isCorrect: false},
                    {id: uuid(), option: "The Flash", isCorrect: false},
                    {id: uuid(), option: "Batman", isCorrect: true},
                ]
                },
                {
                    id : uuid(),
                    question: "Which fictional city serves as the home base for most of the DC Comics superheroes and is often depicted as a hub of hero activity?",
                    options : [
                        {id: uuid(), option: "Metropolis", isCorrect: true},
                        {id: uuid(), option: "Star City", isCorrect: false},
                        {id: uuid(), option: "Central City ", isCorrect: false},
                        {id: uuid(), option: "Gotham City", isCorrect: false},
                    ]
                    },
                {
                        id : uuid(),
                        question: "Which DC superhero is an Amazonian warrior princess and possesses superhuman strength, agility, and the Lasso of Truth?",
                        options : [
                            {id: uuid(), option: " Black Canary", isCorrect: false},
                            {id: uuid(), option: "Wonder Woman", isCorrect: true},
                            {id: uuid(), option: "Supergirl ", isCorrect: false},
                            {id: uuid(), option: "Batgirl", isCorrect: false},
                        ]
                        },
                    {
                            id : uuid(),
                            question: "Who is Batman's arch-nemesis, known for his chaotic and unpredictable nature, and often wears face paint resembling a clown?",
                            options : [
                                {id: uuid(), option: "The Penguin", isCorrect: false},
                                {id: uuid(), option: "Two-Face", isCorrect: false},
                                {id: uuid(), option: "The Joker", isCorrect: true},
                                {id: uuid(), option: "The Riddler", isCorrect: false},
                            ]
                            },


                ]
            
        }
    ]
}

export default quizzes;