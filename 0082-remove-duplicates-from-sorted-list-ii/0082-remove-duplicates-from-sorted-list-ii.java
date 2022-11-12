/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        Set<Integer> set = new HashSet<>();
        Set<Integer> repeated = new HashSet<>();
        ListNode it = head;
        while(it != null) {
            if(set.contains(it.val)) repeated.add(it.val);
            else set.add(it.val);
            it = it.next;
        }
        
        it = new ListNode(-1);
        ListNode sentinel = it;
        ListNode node = head;
        while(node != null) {
            
            if(repeated.contains(node.val)) {
                node = node.next;
                continue;
            }
            
            it.next = node;
            it = it.next;
            node= node.next;
        }
        
        it.next = null;
        
        return sentinel.next;
    }
}