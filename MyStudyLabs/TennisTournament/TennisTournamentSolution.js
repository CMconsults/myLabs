

function solution(P, C) {
    //Provide Your solution here 
    const numberOfGames = Math.floor(P/2);
    if (numberOfGames <= C){
        return numberOfGames;
    }
    else{
        return C;
    }
   
}

module.exports = solution;