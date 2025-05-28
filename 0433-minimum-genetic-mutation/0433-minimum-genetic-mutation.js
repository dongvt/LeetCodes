/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    //Try to get a path from startGene to endGene by checking the different genes
    const bankSet = new Set(bank);
    if(startGene !== endGene && !bankSet.has(endGene)) return -1;
    const q = new Queue();
    const visited = new Set();
    q.enqueue([startGene,0]);
    visited.add(startGene);


    while(q.size() > 0) {
        const [gene,step] = q.dequeue();
        if(gene === endGene) return step;
        const geneArr = gene.split('');

        for(let i = 0 ; i < geneArr.length; i++) {
            const old = geneArr[i];
            for(const c of "ACGT") {
                geneArr[i] = c;
                const mutation = geneArr.join('');
                if(!visited.has(mutation) && bankSet.has(mutation)) {
                    visited.add(mutation);
                    q.enqueue([mutation,step  + 1]);
                }
            }
            geneArr[i] = old;
        }
    }


    return -1;
};