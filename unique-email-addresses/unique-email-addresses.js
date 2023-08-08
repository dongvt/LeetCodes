/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    for(const email of emails) {
        const [rawName,domain] = email.split('@');
        const leftName = rawName.split('+')[0];
        console.log(leftName)
        set.add(`${leftName.replace(/[.]/g,'')}@${domain}`);
    }
    console.log(set)
    return set.size;
};