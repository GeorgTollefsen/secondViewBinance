import React from 'react';

const Button = (addData)=>{
    let high = 0;
    let low = 10;
    let volume = 0;
    let orders = 0;
    let highestPurchaser = 0;
    let array = [];

    function getIt(tokenName, chosenMin, start, end){

        chosenMin = chosenMin.toLocaleString('en-US',{
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        start = start.toLocaleString('en-US',{
            minimumIntegerDigits: 2,
            useGrouping: false
        });

        // console.log('getit sier: '+tokenName)
        fetch(`https://api.binance.com/api/v3/aggTrades?symbol=PIVXBTC&startTime=16169508${chosenMin}000&endTime=16169508${start}000&limit=1000`)
        // fetch(`https://api.binance.com/api/v3/aggTrades?symbol=PIVXBTC&startTime=1616950804501&endTime=1616950805000&limit=1000`)

            .then(result =>{
                result.json()
                    .then(raw=>{
                        for (let i=0; i<raw.length; i++){
                            if (raw[i].p > high){
                                high = raw[i].p;
                            }
                            if (raw[i].p < low){
                                low= raw[i].p;
                            }
                            if ((raw[i].p*raw[i].q)>highestPurchaser){
                                highestPurchaser = raw[i].p*raw[i].q
                            }
                            volume += (raw[i].p*raw[i].q)
                        }
                        array.push({
                            second: chosenMin,
                            highest: `${high}`,
                            lowest: low,
                            volum: volume,
                            howManyOrders: raw.length,
                            topPurchase: highestPurchaser
                        });
                        addData.addData({
                            second: `${chosenMin}`,
                            highest: `${high}`,
                            lowest: `${low}`,
                            volum: `${volume}`,
                            howManyOrders: `${raw.length}`,
                            topPurchase: `${highestPurchaser}`
                        })
                        //husk å skrive navnet på funkajsonen i proppen :) tok lang tid å finne ut av det: https://stackoverflow.com/questions/59663809/react-typeerror-x-is-not-a-function


                    }).catch(err=>console.log(err))
            })
            .catch(err=>console.log(err));

        high=0;
        low = 10;
        volume=0;
        orders=0;
        highestPurchaser=0;

    }

    function populate(){
        for (let i=0; i<array.length; i++){
            document.getElementById('root').innerHTML += `<p>${array[i].second}: High: ${array[i].highest}, low:${array[i].lowest}, Volume:${array[i].volum}, highest Purchase:${array[i].topPurchase}  Orders: ${array[i].howManyOrders}</p>`
        }
        // let string = JSON.stringify(array)
        // console.log(string)
        // addData.addData(array)
    }

    async function onclickProp(){
        let tokenName = document.getElementById('tokenName').value;
        let getTime = document.getElementById('timeChosen').value;
        let getSeconds = document.getElementById('seconds').value;
        let timeStamp = new Date(getTime).getTime();

        for (let i=0; i<2; i++){
            getIt(tokenName.toUpperCase(), i, (i+1));
            await new Promise(r => setTimeout(r, 500));
        }

        populate()

    }

    return(
        <button onClick={onclickProp}>OK</button>
    )
}

export default Button;