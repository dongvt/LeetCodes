In java:
The right shift is always signed. So negative numbers would create an infinite loop.
​
So, when the number is negative we need to takeout the most significant bit. So, we use a mask for that.
​
If the number is positive we prosede to iterate until we get `n == 0` we just need to check the least significant bit and drop it of from the number.