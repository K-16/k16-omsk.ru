/* 
 * normRand.js
 *
 * upisfree / Senya Pugach
 * github.com/upisfree
 * upisfree@outlook.com
*/

var normRandMin;
var normRandMax;

function normRand(normRandMin, normRandMax) 
{
  return Math.floor(Math.random() * (normRandMax - normRandMin + 1)) + normRandMin; 
};
