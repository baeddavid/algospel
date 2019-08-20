# The Importance of Time

The study and readings of *Algorismus* is near impossible without understanding the importance that time plays in designing and creating Algorithms.

**Why is time important?**

In a recent article published by *gigaspaces*, it reported that Amazon found that every 100ms of latency cost them 1% in sales. Google found that an extra 0.5s in search page generation dropped traffic by 20%.

Speed is important. Time is important. So it is important that we design algorithms that are not only correct, but efficient.

Attempting to write algorithms that are **only** correct can lead to poor code organization and poor performance.

```
// A technically correct algorithm

function bogoSort(arr) {
    while(!isSorted(arr)) {
        shuffle(arr);
    }
  return arr;
}
```

**How do we analyze time then?**

It would be a waste of time to count each iteration of an algorithm to say that Algorithm ***E*** runs in **x** time.

We can generalize this by using something called **O** notation.

Also known as Big-O, this notation is a quick and easy way to convey how fast an algorithm is in its worst case. To be more formal it is: *the asymptotic upper bound* for any ƒ(x) where ƒ is our function.

| O | Time | Example |
|---|---|---|
| O(1) | Constant  | let x = 5  |
| O(log n)  | Logarithmic Time  | Binary Search*  |
|  O(n) | Linear Time  | for(let x of arr) ...  |
| O(n log n)  | Linearithmic Time  | Sort Engines  |
|  O(n<sup>2</sup>)** | Quadratic Time  |  Nested For Loops |
|  O(2<sup>n</sup>) | Exponential Time  | Power Set Generation  |
| O(n!)  | Factorial Time  | Permutation Generation  |

*Binary Search will be covered in-depth later on

**Some practitioners of *Algorismus* will claim that O(n<sup>2</sup>) is not quadratic, rather it is *Polynomial*. This is all semantical. A polynomial time is O(n<sup>x</sup>) where *x* is a real number. Do not be decieved by these fanatics.

Refer to the scriptures in this chapter to see in-depth analysis of examples of time complexities. 
