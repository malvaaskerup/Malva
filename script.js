var lettersToWords = {
    "A": "all the avoidance in the world a man you may be inclined to trust am i my identity ananas artist are gay as we have found our home in each other",
    "B": "balance balls fuck bitch bitch bites blah 420 blaze it bloempje boys!!!!!!! bullshit bitch bitch bites blah 420 blaze it bloempje boys!!!!!!! bullshit",
    "C": "cara capsbr 196 create beer",
    "D": "discurse donation 4 speakers done don’t have money for a lock",
    "E": "elsker deg enjoy life now",
    "F": "failure fly like a motherfucker fuck fuck fuck fungi",
    "G": "gay lif goat graphic design gras",
    "H": "happy ass hello hello are you good? humans are so kind hungry as fuck",
    "I": "I paint, therefore I exist i am a lantern my head a moon and japanese paper i feel like i can suceed you will i get the idea i heart you i jerk off! ik ben kamilla imorgen... independet yorkshire now! is anyone listening it’s not your locker i’m not going to survive i’m so tired of white people",
    "J": "jimchik just focus",
    "K": "kabk was here kantarion sound",
    "L": "language life is strange life shapes you lol loneliness love 4 bae love bread love is in the air love yourself stink luna+basia",
    "M": "make a decision make art not shit minimum moffie queen cuntz mom mom mom mom i’m on the internet",
    "N": "*nose exhale* nasty pea nice... no friends no love nostalgia",
    "O": "ocean sucks! oh shit support base line",
    "P": "#pizza period playboi tom proper pee / poo it was a good one (i can smell that) pula",
    "Q": "qt que? quickly quirky",
    "R": "rad radek radek is king of trash? radek is stupid! radek rulez ringo rob is a blob",
    "S": "satan is king say maybe to drugs school is temporary, woodburn art is eternal... sean sandoval was here shall we talk racism shit herpes paris shitty slack soul search start start here start now maybe start now start now suck this sup?",
    "T": "taken too much shit right now tax the poor!!! these stink penis soup neiter of us they don’t listen this whole list is bullshit! time space social norms ideology mirror trap tap",
    "U": "u are loverble un bear-ably cute understanding",
    "V": "vagina soup",
    "W": "watcha thinking we are so done what are you thinking what hazelnut spread soggy who are you i love you all! why would i care what somebody thinks about me? that doesnt effect my money woman",
    "X": "xanax is great",
    "Y": "yes your locker are you sure? you are also my favorite student you are my favorite student you you you you",
    "Z": "zucchini zu viel zu viel weed"
}

const chars = String( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ).split( '' );
const refreshSpeed = 100;

document.addEventListener( 'keyup', event => {
    const key = event.key.toUpperCase( );

    if ( chars.indexOf( key ) != -1 && lettersToWords[ key ] != undefined ) {
        const paragraph = document.createElement( 'span' );
        paragraph.dataset.sentence = lettersToWords[ key ] + " ";
        const text = lettersToWords[ key ]  + " ";
        let i = 0;
        document.querySelector(".box").append( paragraph );
        var interval = setInterval( function(){
          paragraph.innerText = text.substr(0, i);
          if (text.length == i){
            clearInterval(interval);
          }
          i++;
        }, refreshSpeed, paragraph, text);
    }
} );