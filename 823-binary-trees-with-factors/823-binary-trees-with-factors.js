/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const MOD = 10**9 + 7;
    const dp = new Array(arr.length).fill(1);
    const map = new Map();

    
    arr.sort((a,b) => a - b);
    const countSubtree = (currSum, num1) => {
        const num2 = currSum / num1;
        if (map.has(num2)) {
            const res = map.get(currSum) + map.get(num1) * map.get(num2);
            map.set(currSum, res);
        }
    }
    
    let ans = 0;
    for (let i = 0; i < arr.length; ++i){
        map.set(arr[i], 1);
        for (let j = 0; j < i; ++j) {
            if (arr[i] % arr[j] === 0) { 
                countSubtree(arr[i], arr[j]);
            }
        }
        ans += map.get(arr[i]);
        ans %= MOD;
    }
    
    
    

    return ans;
};