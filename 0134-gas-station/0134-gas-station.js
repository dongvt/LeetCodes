/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    //There shuold be more or equal gas than cost, if there is more cost then impossible to run the circuit

    //Since there is a unique solution, eventually the every run would get out of gas
    //The index that doesn't run out of gas is the answer for possible circuits
    const n = gas.length;
    let total = 0;
    let current = 0;
    let res = 0;
    for(let i = 0 ; i < n; i++) {
        total += gas[i] - cost[i];
        current += gas[i] - cost[i];

        if(current < 0) {
            res = i + 1;
            current = 0;
        }
    }
    // console.log(total)
    return total < 0 ? -1 : res;
};