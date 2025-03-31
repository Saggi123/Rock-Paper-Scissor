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

const computerchoiceval=getComputerchoice();

function getHumanChoice()
{
    let humanchoiceval=prompt('Please Enter Your Choice');

    return humanchoiceval.toLowerCase();
}



function playround(computerSelection)
{
    for(let i=0;i<5;i++)
    {
        const humanchoicevalue=getHumanChoice();

        if(humanchoicevalue==computerSelection)
        {
            alert(`It is a tie.Both chose-${computerchoiceval}`);
    
            humanScore++;
            computerScore++
    
            alert(`The Scores are Human-${humanScore} & Computer-${computerScore}`)
        }
        else if(
            (humanchoicevalue=="rock" && computerSelection=="scissors") || (humanchoicevalue=="paper" && computerSelection=="rock") || (humanchoicevalue=="scissors" && computerSelection=="paper"))
        {
            alert(`You Win!! ${humanchoicevalue} beats ${computerSelection}`)
            humanScore++;
            alert(`Human-${humanScore} & Computer- ${computerScore}`)
        }
        else 
        {
            alert(`Sorry You Lost!${computerSelection} beats ${humanchoicevalue}`);
            computerScore++;
            alert(`Human-${humanScore} & Computer-${computerScore}`)
        }
    }
   
}

playround(computerchoiceval)