/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    //Pick between the three options the cheaper one
    //Need to check if a range can cover multiple days
    //To know if a day is covered in a range, we just add the ticket size in days to the current index
    //We recurse from the first index which days[idx] > last in range
    //Eg a 7 day ticket in day 2 will range from 2 to 9, we get the index of smaller number > 9

    const [d1,d7,d30] = costs;
    const nextIdx = (start,target) => {
        let i = start;
        while(days[i] <= target && i < days.length) {
            i++;
        }
        return i;
    }

    const memo = new Array(366).fill(-1);
    const dp = (i) => {
        if(i >= days.length) return 0;
        if(memo[i] !== -1) return memo[i];
        const j = nextIdx(i,days[i] + 6);
        const k = nextIdx(i,days[i] + 29);

        memo[i] = Math.min(dp(i+1) + d1,dp(j) + d7, dp(k) + d30);

        return memo[i];
    }

    return dp(0);
};