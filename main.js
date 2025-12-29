const changeValues = {
    dollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
}

//MP3 file does not allow the tests to pass
const chappelleAudio = new Audio('chappelle-ah.mp3');



function calculateChange(){

    const paidAmt = parseFloat(document.getElementById("amount-received").value);
    const totalCost = parseFloat(document.getElementById("amount-due").value);
    const needMore = document.getElementById("need-more");

    needMore.innerText = ""

        if (totalCost > paidAmt){
            needMore.innerText = "You need more money.";
            return;
    }

    const centValue = Math.round(totalCost * 100);
    const paidInCents = Math.round(paidAmt * 100);
    let changeOwed = paidInCents - centValue




    const changeCounts = {
        dollar: 0,
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,

    }

 
    for (const unit in changeValues) {
        const value = changeValues[unit];

        if (changeOwed >= value) {
            const count = Math.floor(changeOwed / value);
            changeCounts[unit] = count;

            changeOwed %= value;
        }
    }

    document.getElementById("dollars-output").innerText = changeCounts.dollar
    document.getElementById("quarters-output").innerText = changeCounts.quarter
    document.getElementById("dimes-output").innerText = changeCounts.dime
    document.getElementById("nickels-output").innerText = changeCounts.nickel
    document.getElementById("pennies-output").innerText = changeCounts.penny
    
    return changeCounts;
    

}

    
            





function handleClickEvent(e){

    console.log("Calculate button works")

    console.log(calculateChange())

    chappelleAudio.currentTime = 0;
    chappelleAudio.play()
    
}