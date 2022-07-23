/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    
    let res = new Array(nums.length).fill(0);
    let indices = new Array(nums.length).fill().map((it,idx) => idx);
    
    
    let merge = (start, end, mid) => {
        let temp = [];
        let i = start, j = mid;
        while(i < mid && j < end) {
            if(nums[indices[i]] <= nums[indices[j]]) {
                res[indices[i]] += (j - mid);
                temp.push(indices[i]);
                i++;
            } else {
                temp.push(indices[j]);
                j++;
            }
        }
        while(i < mid) {
            res[indices[i]] += (j - mid);
            temp.push(indices[i]);
            i++;
        }
        
        while(j < end) {
           temp.push(indices[j]);
           j++ ;
        }

        for(let k = start; k < end; k++) {
            indices[k] = temp[k-start];
        }
    }
    
    let mergeSort = (start, end) => {
        if(end - start <= 1) {
            return ;
        }
        
        let mid = ~~((start+end)/2)
        mergeSort(start, mid);
        mergeSort(mid, end);
        merge(start, end, mid);
    }
    
    mergeSort(0, nums.length);
    return res;
};