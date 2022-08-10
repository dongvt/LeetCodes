The idea here is kind of giving each of the nodes a "column index" The column is then represented as idx into the BFS.
The order should be from to **top to down** and from left to right as specified in the question. But if we do DFS we are going in depth first.
​
DFS is a problem, imagine a situation when at the left subtree you have many nodes. If the right subtree has also many nodes and it happens that they share the same index (but not the same level in the level traversal) it will always put the left node first, even if the node is lower in the tree that the ones in the right node.
​
Now that we know that DFS generates that problem, we could probably use DFS keeping track of the level. Or BFS keeping track of the "column index"
​
I used the second option, BFS keeping track of the column index. In JS, I create a map to store all the arrays by index (left substree negative, right subtree positive).
Then do this actions of over the map:
1. convert the map to an array,
2. sort the array,
3. and extract just the data (at the end we dont need to return any  index)