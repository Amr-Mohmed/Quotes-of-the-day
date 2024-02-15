var arrayOfQuotes=
[
    {
        "quote":"And then I felt sad because I realized that once people are broken in certain ways, they can't ever be fixed, and this is something nobody ever tells you when you are young and it never fails to surprise you as you grow older as you see the people in your life break one by one. You wonder when your turn is going to be, or if it's already happened.",
        "author":"Douglas Coupland, Life After God"
    },
    {
        "quote":"I am going to take this bucket of water and pour it on the flames of hell, and then I am going to use this torch to burn down the gates of paradise so that people will not love God for want of heaven or fear of hell, but because He is God.",
        "author":"John Green, Looking for Alaska"
    },
    {
        "quote":"You're something between a dream and a miracle.",
        "author":"Elizabeth Barrett Browning"
    },
    {
        "quote":"Life is like a prism. What you see depends on how you turn the glass.",
        "author":"Jonathan Kellerman"
    },
    {
        "quote":"Love makes your soul crawl out from its hiding place.",
        "author":"Zora Neale Hurston"
    },
    {
        "quote":"You have everything needed for the extravagant journey that is your life.",
        "author":"Carlos Castaneda"
    },
    {
        "quote":"Whenever you think or you believe or you know, you're a lot of other people: but the moment you feel, you're nobody-but-yourself.",
        "author":"e.e. cummings"
    },
    {
        "quote":"As long as she thinks of a man, nobody objects to a woman thinking.",
        "author":"Virginia Woolf, Orlando"
    },
    {
        "quote":"No one is useless in this world who lightens the burdens of another.",
        "author":"Charles Dickens"
    }
];

function randomSelector(arrayLenght){
    return Math.floor(Math.random() * arrayLenght);
}

function generateQoute(){
    var randomNumber = randomSelector(arrayOfQuotes.length);


    document.getElementById('qoute').innerHTML=` " `+arrayOfQuotes[randomNumber].quote+` " `;
    document.getElementById('author').innerHTML=` - `+arrayOfQuotes[randomNumber].author+` - `;


}
