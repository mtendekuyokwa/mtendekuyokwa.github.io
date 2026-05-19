---
title: "End of the semester"
description: "A story on how I plan to spend my Holiday"
pubDate: "May 19 2026"
heroImage: "../../assets/end-of-semester.jpeg"
---

# TL;DR

I plan to learn clojure and pytorch

# INTRODUCTION

[Cult repo ](https://www.youtube.com/@cultrepo) released a documentary on clojure. One of the lisp dialects. 5 seconds in, I saw a familiar curly guy speaking, but I couldn’t point out where I saw him. Luckily, someone commented on his _simple made easy talk_ and everything clicked.
I revisted the talk and thought about how it is so third eye opening. After light pondering I realised the best way to try out what he preached than learn a language he built.

Secondly, I have been meaning to grasp AI from a first _principles-ish_. I think learning PyTorch is the way, in the sense that it provides just the right amount of abstraction I need for a solid grasp.

# ON CLOJURE

Clojure is weird. I have been reading [Clojure brave and true ](https://www.braveclojure.com/getting-started/) and wow, this is very different from what we learned in class. I come from a Typescript and Dart background, so I expect languages to follow some kind of object-oriented pattern at some level. And clojure being a hosted language on java, this is what I expected to see in my _first look_ lesson. The parentheses turned me off. But I realised that if you always work on something you are familiar with, you’ll learn nothing.

I also went to the community and [asked](https://www.reddit.com/r/Clojure/comments/1t8zwho/thinking_about_clojure/) about the language in term of its quirks and not being staticly typed , and I got a lot of positive responses.
The hammer on the coffin of doubts was the comment, “people think they need types, but their problems do not actually need types as a solution.”

It made me think whether Typescript in my project is a solution to a non-problem. I mean the biggest bank in south america, _Nubank_, can do without types. I use TypeScript over JavaScript mostly because types work better with LSP, and I do not have to guess what I wrote in the class attribute. I mean, with JavaScript, you have cases where you call a mispelled method.

# ON PYTORCH

I will not be learning PyTorch per say but I will be going through the book, [deep learning for coders](https://course.fast.ai/). I read part of the first chapter. It is a dense but solid book. Most of the material mentioned are also spat out in the podcast [MachineLearningStreetTalk](https://www.youtube.com/c/MachineLearningStreetTalk) which shows the relevancy of the content sill.

Understanding machine learning from first principles will help me get the direction of how best to use AI in my dev work. Everyone on Hacker News and Lobsters makes these hot takes, but 9 out of 10 times, most of these people do not have a solid grasp on what AI core fundamentals are, and they make a judgment on what they think it is and not what it actually is. I mean, some of them do not even understand forward pass propagation and underfitting as a concept.

# THE INTEROP

The beauty of Clojure is that it’s what I call the “pluginability”. It can work with the JVM, Python, and even go. I plan to build my models with Clojure and see how far I can extend this Lisp dialect.
