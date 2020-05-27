document.body.onload = function() {
    var quoteOfMoment = quoteBank[Math.floor(Math.random() * quoteBank.length)]
    document.getElementById("quote").innerHTML = quoteOfMoment
}

var quoteBank  = 
[
    "That's what she said!",
    "It's Britney, bitxh",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay?",
    "I have cause. It is beCAUSE I hate him.",
    "Well, well, well, how the turntables.",
    "I love inside jokes. I'd love to be a part of one someday."
]