class Solution {
    
    private String validated(String str) {
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < str.length() ; i++) {
            if(stack.isEmpty() && str.charAt(i) == '#') continue;
            
            if(str.charAt(i) == '#') stack.pop();
            else stack.push(str.charAt(i));
        }
        
        //System.out.println(stack.toString());
        
        StringBuilder sb = new StringBuilder();
        
        for(char c : stack) {
            sb.append(c);
        }
        return sb.toString();
    }
    
    public boolean backspaceCompare(String s, String t) {
        return validated(s).equals(validated(t));
    }
}