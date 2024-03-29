/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        
        Queue<Node> q = new LinkedList<>();
        
        if(root != null) q.add(root);
        
        while(!q.isEmpty()) {
            int size = q.size();
            
            for(int i = 0; i < size; i++) {         
                //Set the next pointer
                Node current = q.poll();
                current.next = q.peek();
                
                if(current.left != null) q.add(current.left);
                if(current.right != null) q.add(current.right);
                if(i == size - 1) current.next = null;
            }
            
        }
        
        return root;
    }
}