class Solution {
    public int maxProfit(int k, int[] prices) {
        if(k==0 || prices.length<=1)
            return 0;
        else if(2*k > prices.length)
        {
            int result = 0;
            for(int i=1; i<prices.length ;i++)
                if(prices[i]>prices[i-1])   // buy every lower and sell every next higher
                    result += prices[i]-prices[i-1];
            return result;
        }
        else{
            int[] dp= new int[2*k]; // state maintain - even buy - odd sell
            for(int j=0; j<2*k ;j++){
                if(j%2==0)
                    dp[j] = Integer.MIN_VALUE;
                else if(j%2==1)
                    dp[j] = 0;
            }
            for(int p: prices){
                for(int j=0; j<2*k ;j++){
                    if(j==0)
                        dp[j] = Math.max(dp[j],-1*p);
                    else if(j%2==0)
                        dp[j] = Math.max(dp[j],dp[j-1]-1*p); //skip or buy
                    else if(j%2==1)
                        dp[j] = Math.max(dp[j],dp[j-1]+p);//skip or sell
                }
            }
            
            return dp[2*k-1];
        }
    }
}