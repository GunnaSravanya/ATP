/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter
let After_filter = temperatures.filter((temp) => temp > 35);
console.log(`temperatures above 35: ${After_filter}`);
//map
let Farenheit_temp = temperatures.map((temp) => temp * (9 / 5) + 32);
console.log(`Farenheit temperatures: ${Farenheit_temp}`);
//reduce
let Average_temp = temperatures.reduce(
  (accumulator, temp) => (accumulator + temp) / temperatures.length,
);
console.log(`Average temperature: ${Average_temp}`);
//find()
let After_find = temperatures.find((temp) => temp > 40);
console.log(`to find temperature: ${After_find}`);
//findIndex
let Index = temperatures.findIndex((temp) => temp === 28);
console.log(`index of temp 28: ${Index}`);
