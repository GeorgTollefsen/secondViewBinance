import React from 'react';

const Button = ({onClick}) => {
    const collectedData = [];

    async function getIt(tokenName, chosenMin, start, end) {
        chosenMin = chosenMin.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        start = start.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });

        const response = await fetch(`https://api.binance.com/api/v3/aggTrades?symbol=PIVXBTC&startTime=16169508${chosenMin}000&endTime=16169508${start}000&limit=1000`)
            .then(result => result.json())
            .catch(console.error)

        const pValues = response.flatMap((it) => it.p);
        const purchaseVolumes = response.flatMap((it) => parseFloat(it.p) * parseFloat(it.q));

        const formattedData = {
            second: chosenMin,
            highest: Math.max(...pValues),
            lowest: Math.min(...pValues),
            volum: purchaseVolumes.reduce((acc, cur) => acc + cur, 0),
            howManyOrders: response.length,
            topPurchase: Math.max(...purchaseVolumes)
        }
        onClick(formattedData);
        return formattedData;
    }

    function populate() {
        collectedData.forEach((it, idx) => {
            document.getElementById('root').innerHTML +=
                `<p>${idx + 1}. 
                    ${it.second}: 
                    High: ${it.highest}, 
                    Low: ${it.lowest}, 
                    Volume: ${it.volum}, 
                    Highest Purchase: ${it.topPurchase} 
                    Orders: ${it.howManyOrders}
                </p>`
        })
        // let string = JSON.stringify(array)
        // console.log(string)
        // addData.addData(array)
    }

    async function onclickProp() {
        let tokenName = document.getElementById('tokenName').value;
        let getTime = document.getElementById('timeChosen').value;
        let getSeconds = document.getElementById('seconds').value;
        let timeStamp = new Date(getTime).getTime();

        for (let i = 0; i < 2; i++) {
            collectedData.push(await getIt(tokenName.toUpperCase(), i, i + 1));
            //await new Promise(r => setTimeout(r, 500));
        }

        populate()

    }

    return (
        <button onClick={onclickProp}>OK</button>
    )
}

export default Button;