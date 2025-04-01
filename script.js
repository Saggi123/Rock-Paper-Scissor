console.log("Hello World!")
var humanScore=0;
var computerScore=0;
function getComputerchoice()
{
    const randomnumber=Math.floor(Math.random()*3);
    if(randomnumber==0)
        return "rock";
    else if(randomnumber==1)
        return "paper";
    else if(randomnumber==2)
        return "scissors"
}



function getHumanChoice()
{
    let humanchoiceval=prompt('Please Enter Your Choice');

    return humanchoiceval.toLowerCase();
}



function playround(computerchoiceval)
{
        const humanchoicevalue=getHumanChoice();

        if(humanchoicevalue==computerchoiceval)
        {
            alert(`It is a tie.Both chose-${computerchoiceval}`);
    
            humanScore++;
            computerScore++
    
            alert(`The Scores are Human-${humanScore} & Computer-${computerScore}`)
        }
        else if(
            (humanchoicevalue=="rock" && computerchoiceval=="scissors") || (humanchoicevalue=="paper" && computerchoiceval=="rock") || (humanchoicevalue=="scissors" && computerchoiceval=="paper"))
        {
            alert(`You Win!! ${humanchoicevalue} beats ${computerchoiceval}`)
            humanScore++;
            alert(`Human-${humanScore} & Computer- ${computerScore}`)
        }
        else 
        {
            alert(`Sorry You Lost!${computerchoiceval} beats ${humanchoicevalue}`);
            computerScore++;
            alert(`Human-${humanScore} & Computer-${computerScore}`)
        }
   
}
for(let i=1;i<=5;i++)
{
    const computerchoiceval=getComputerchoice(); 
    playround(computerchoiceval)
}
