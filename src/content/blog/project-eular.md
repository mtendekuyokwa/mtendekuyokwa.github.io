---
title: "Project Eular"
description: "How I used clojure to get in to project eular"
pubDate: "May 24 2026"
heroImage: "../../assets/images/eular.webp"
---

# ABOUT EULAR

[Project eular ](https://projecteuler.net/) is a like leetcode but more leaned into math.

# WHY CLOJURE

Clojure is a lisp dialect so it has that functional programming aspect that john mcarthy wrote about. I am also learning clojure right to get a feel of what the other side of OOP could be like.

# PROBLEM

A number is a perfect square, or a square number, if it is the square of a positive integer.
For example 25,
is a square number because 5 ^2=5 x 5=25
; it is also an odd square.

The first 5 square numbers are: 1,4,9,16,25
, and the sum of the odd squares is 1+9+25=35

Among the first 803 thousand square numbers, what is the sum of all the odd squares?

# THE SOLUTION

```clojure
(defn square[x] (* x x))
(defn square-vector [x]
  (map square x)
  )
(defn get-even-values [x]
  (map (fn [x] (if (odd? x) x

   0)) x)
  )
(reduce + (square-vector (get-even-values (range 1 806001))))


```

This SOLUTION is alot of things but perfect. I hope I make it better as I keep learning clojure.
