// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles) {
    let maxCandle = candles[0];
    let numberCandlesTallest = 0;

    candles.forEach((candle) => {
        if (candle >= maxCandle) {
            maxCandle = candle;
        }
    });

    candles.forEach((candle) => {
        if (candle === maxCandle) {
            numberCandlesTallest++;
        }
    });

   return numberCandlesTallest;
}