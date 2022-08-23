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
    boolean checkPalindrome(ArrayList<Integer> list) {
        int i = 0, j = list.size() - 1;
        while(i < j) {
            if(list.get(i) != list.get(j)) return false;
            i++;
            j--;
        }
        return true;
    }
    
    public boolean isPalindrome(ListNode head) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        ListNode node = head;
        
        while(node != null) {
            list.add(node.val);
            node = node.next;
        }
        
        return checkPalindrome(list);
    }
}