function melangeCarte(){
    var A1 = document.getElementById("c1");
    var A2 = document.getElementById("c2");
    var A3 = document.getElementById("c3");
    var A4 = document.getElementById("c4");
    var B1 = document.getElementById("c5");
    var B2 = document.getElementById("c6");
    var B3 = document.getElementById("c7");
    var B4 = document.getElementById("c8");
    var C1 = document.getElementById("c9");
    var C2 = document.getElementById("c10");
    var C3 = document.getElementById("c11");
    var C4 = document.getElementById("c12");
    var D1 = document.getElementById("c13");
    var D2 = document.getElementById("c14");
    var D3 = document.getElementById("c15");
    var D4 = document.getElementById("c16");

var place = [A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4];
    ranPlace = [];
    i = place.length;
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranPlace.push(place[j]);
    place.splice(j,1);
}
for (var i=0; i<16; i++){
    var carte = ['luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy', 'luke', 'abdiel', 'souhir', 'sam', 'kevin', 'jonathan', 'emma', 'dimy']
    ranPlace[i].classList.add(carte[i]); 
}
}
////////////////////////////////////////////////////////////////////////////

function clik(number){
    var carteselec = document.getElementById("c"+number);

    if (carteselec.className.match('hide')){
        console.log(carteselec.classList)
        carteselec.classList.remove('hide');
        
    }
    condition();
}

function condition(){
    var howmany = 0;

    for (var i=0; i<16; i++){
        if (ranPlace[i].className.match('hide')){
            howmany++;
        }
    }
    if (howmany <= 14){
        sleep(2000);
        for (var i=0; i<16; i++){
            ranPlace[i].classList.add('hide');
            }
        }
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }


// function clik(number){
//     var carteselec = document.getElementById("c"+number);
    
//     function tourcomplet(){
//         if(nbrclick >=2){     
//             carteselec.classList.add('hide');
//             console.log(ranPlace)
//             nbrclick = 0;
//         }
//     }

    // if (carteselec.className.match('hide')){
    //     carteselec.classList.remove('hide');
//         nbrclick++
//         console.log(nbrclick)
//         tourcomplet();
//     } else{
//         carteselec.classList.add('hide')
//     }
// }
