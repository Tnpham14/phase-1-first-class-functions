function receivesAFunction(cookEggs){
    cookEggs();
}
const bet = function fn(a,b){
    return a + b
}
function returnsANamedFunction(){
    return bet
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}