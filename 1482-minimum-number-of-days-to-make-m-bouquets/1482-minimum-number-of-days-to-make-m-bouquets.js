/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if( m * k >= bloomDay.length) return -1;
    const checkBloomDay = (day) => {
        let bouquets = 0;
        for(let i = 0 ; i < bloomDay.length; i++) {
            let bloom = 0;
            while(i < bloomDay.length && bloomDay[i] <= day && bloom < k) {
                i++;
                bloom++;
            }

            if(bloom === k) {
                i--; //Begin with next one
                bouquets++;
            }

            if(bouquets === m) return true;
        }
        return false;
    }

    let left = 0, right = 10**9;

    while(left < right) {
        const mid = ~~((left + right) / 2);
        if(checkBloomDay(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
};