const updateOdds = () => {

    // Getting the odds entered from the input fields
    const teamAOdds = parseFloat(document.getElementById('teamAOdds').value);
    // const drawOdds = parseFloat(document.getElementById('drawOdds').value);
    const teamBOdds = parseFloat(document.getElementById('teamBOdds').value);

    // //  checking if no odds where entered in the input fields when no f
    // if (isNaN(teamAOdds) || isNaN(drawOdds) || isNaN(teamBOdds) || teamAOdds <= 0 || drawOdds <= 0 || teamBOdds <= 0) {
    //     document.getElementById('result').style.display = 'none';
    //     return;
    // }
    //  checking if no odds where entered in the input fields when no f
    if (isNaN(teamAOdds) || isNaN(teamBOdds) || teamAOdds <= 0 || teamBOdds <= 0) {
        document.getElementById('result').style.display = 'none';
        return;
    }

    // Calculate implied probabilities
    const probA = 1 / teamAOdds;
    // const probDraw = 1 / drawOdds;
    const probB = 1 / teamBOdds;

    // Sum probabilities
    // const totalProb = probA + probDraw + probB;
    const totalProb = probA + probB;

    // Calculate no vig probabilities
    const noVigProbA = probA / totalProb;
    // const noVigProbDraw = probDraw / totalProb;
    const noVigProbB = probB / totalProb;

    // Convert back to no vig odds
    const noVigOddsA = (1 / noVigProbA).toFixed(2);
    // const noVigOddsDraw = (1 / noVigProbDraw).toFixed(2);
    const noVigOddsB = (1 / noVigProbB).toFixed(2);

    // Convert probabilities to percentages
    const noVigPercentA = (noVigProbA * 100).toFixed(2);
    // const noVigPercentDraw = (noVigProbDraw * 100).toFixed(2);
    const noVigPercentB = (noVigProbB * 100).toFixed(2);


    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div>
            <div>
                <h3>No Vig Odds:</h3>
                <p>Team A Odds: ${noVigOddsA}</p>
                <p>Team B Odds: ${noVigOddsB}</p>
            </div>
            <div>
            <h3>No-Vig% </h3>
                <p>Team A Odds: (${noVigPercentA}%)</p>
                <p>Team B Odds: (${noVigPercentB}%)</p>
            </div>
        </div>
    `;
};

document.getElementById('teamAOdds').addEventListener('input', updateOdds);
// document.getElementById('drawOdds').addEventListener('input', updateOdds);
document.getElementById('teamBOdds').addEventListener('input', updateOdds);