---
title: 'Rust Ownership & KAIST Concurrency Deep Dive'
description: 'Learning Rust and systems programming. Completing Chapters 4 and 5 of the Brown University Rust Book and taking the Concurrency course from KAIST.'
pubDate: 'Jul 01 2026'
---

Today I am diving deep into systems programming! I started the **Concurrency Course from KAIST** and I am currently working through the interactive [Brown University Rust Book](https://rust-book.cs.brown.edu/).

Maintaining this public devlog and checking off action items as I complete them so I stay accountable. Let's ship!

## 🎯 Today's Action Items & Sprint Goals

- [ ] Complete **Chapter 4**: Understanding Ownership in the Brown Rust Book (`https://rust-book.cs.brown.edu/`)
- [ ] Complete **Chapter 5**: Using Structs to Structure Related Data
- [ ] Watch **KAIST Concurrency Lecture 1**: Introduction to Concurrent Memory Models & take architectural notes
- [x] Set up public accountability devlog on GitHub Pages

---

## 💡 Evening Reflection / Dev Notes

The interactive quizzes in the Brown University edition of the Rust Book make borrow checker concepts click so much faster than passive reading. 

The distinction between stack copying (`Copy` trait) and heap ownership moving (`Move`) is super clear now. Excited to see how Rust's ownership rules guarantee data-race freedom in concurrent code as we get deeper into the KAIST lectures!
