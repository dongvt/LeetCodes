/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
    var numMatchingSubseq = function(s, words) {
            let count=0;
            let map=new Map();
            for(let str of words){
                if(map.has(str)){
                    map.set(str,map.get(str)+1);
                }
                else{
                    map.set(str,1);
                }
            }

            for(let str of map.keys()){
                if(isSubsequence(s,str)){
                    count+=map.get(str);
                }
            }
            return count;
        };

        function isSubsequence(a,b){
            let i=0;
            let j=0;
            if(a.length<b.length){
                return false;
            }
            while(j<b.length && i<a.length){
                if(a[i]==b[j]){
                    i++;
                    j++;
                }
                else{
                    i++;
                }
            }
            return j==b.length;
    };