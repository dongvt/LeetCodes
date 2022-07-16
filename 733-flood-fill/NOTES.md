## Initial idea
Basically is get the value of the old color `image[sr][sc]` then do BFS from that point (4 directionally) the first example shows the 1 on the botom right (2,2) that means we are not working in all 8 directions . Replacing all the old colors by the new one.
The base case in the recursive call is simply that we are out of the grid or the current value is diferent than the old color.
​
Important, if the current color is the same as the old one, don't do anything, return image instead