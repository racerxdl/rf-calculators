/**
 * Created by Lucas Teske on 21/04/17.
 */

const lambdaA = 0.338;
const lambdaB = 0.597;
const lambdaC = 0.860;
const lambdaD = 0.961;
const lambdaE = 1.600;
const lambdaF = 0.080;
const lambdaG = 0.178;
const lambdaH = 0.301;
const lambdaI = 0.491;
const lambdaJ = 0.626;

const lambdaFeedSeptum = 1;
const lambdaFeedRear = 0.19;
const lambdaFeed = 0.185;
const lambdaSheet = 0.008;

export class Calculator {

  /**
   * @return {number}
   */
  static TrimFloat(value, decimalPoints) {
    return Math.round(value * (10**decimalPoints)) / (10**decimalPoints);
  }

  static SeptumCalculate(frequencyMHz, decimalPoints=4) {
    const waveLength = (300.0 / frequencyMHz) * 1000.0;
    return {
      params: {
        A: Calculator.TrimFloat(waveLength * lambdaA, decimalPoints),
        B: Calculator.TrimFloat(waveLength * lambdaB, decimalPoints),
        C: Calculator.TrimFloat(waveLength * lambdaC, decimalPoints),
        D: Calculator.TrimFloat(waveLength * lambdaD, decimalPoints),
        E: Calculator.TrimFloat(waveLength * lambdaE, decimalPoints),
        F: Calculator.TrimFloat(waveLength * lambdaF, decimalPoints),
        G: Calculator.TrimFloat(waveLength * lambdaG, decimalPoints),
        H: Calculator.TrimFloat(waveLength * lambdaH, decimalPoints),
        I: Calculator.TrimFloat(waveLength * lambdaI, decimalPoints),
        J: Calculator.TrimFloat(waveLength * lambdaJ, decimalPoints),
      },
      distanceOutputToSeptum: Calculator.TrimFloat(waveLength * lambdaFeedSeptum, decimalPoints),
      distanceFeedToRearWall: Calculator.TrimFloat(waveLength * lambdaFeedRear, decimalPoints),
      feedSize: Calculator.TrimFloat(waveLength * lambdaFeed, decimalPoints),
      septumThickness: Calculator.TrimFloat(waveLength * lambdaSheet, decimalPoints),
      frequency: Calculator.TrimFloat(frequencyMHz, decimalPoints),
      waveLength: Calculator.TrimFloat(waveLength, decimalPoints)
    };
  }
}
