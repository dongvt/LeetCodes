/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const res = new ListNode();
    let resIt = res;

    while(l1 !== null || l2 !== null) {
        let n1, n2;
        if(l1 !== null) n1 = l1.val; else n1 = 0;
        if(l2 !== null) n2 = l2.val; else n2 = 0;

        const sum = n1 + n2 + carry;
        const d = sum % 10;
        carry = ~~(sum / 10);
        resIt.next = new ListNode(d);
        resIt = resIt.next;

        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }

    if(carry !== 0) {
        resIt.next = new ListNode(carry);
    }

    return res.next;
};