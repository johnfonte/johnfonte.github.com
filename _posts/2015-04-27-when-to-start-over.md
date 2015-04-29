---
layout: post
title: "When to Start Over"
description: ""
category: Software
tags: ["rebuilding", "architecture", "prototyping", "technical debt"]
---
{% include JB/setup %}

## Your Codebase Needs a Fresh Start

There are many stages in a project, particularly in a startup or freelance environment, where the codebase needs a fresh start. This isn't necessarily bad, but it does come with some questions. If it's a fully-built product, why are we getting rid of it? What led to this point? I'm going to explore a few different scenarios.
<!--more-->
### Prototyping
While prototyping is designed to create throwaway versions of software, I think projects will occasionally build on their prototyped product for their actual solution. It's important to outline the stages of your development process in order to make sure you DO throw away your prototype. If you bring along elements of your prototype to production, they should be clearly reworked and integrated, not left as-is.

### Technical Debt
The most common reason for rebuilding that I've been through is when technical debt overwhelms a project. Technical debt is any consequence arising from poor code, management, or architecture. In the case I'm describing, it's the feeling of "this code is too complicated to understand or fix anymore". I'm usually caught by technical or design debt when working on a web-based project. At this point, most developers make one of two decisions: fix it or scrap it.

### Fix it
Sometimes it's easy to reverse technical debt. If you have a small project or an excess of time, fixing your architecture may be trivial. But in most larger projects, technical debt sneaks up until its effects are too loud to ignore.  You're going to need significant developer time and strong architecture skills. Start by defining what your app does, or is supposed to do. Then, go through each class or file in your codebase with a sharp focus. Outline what a refactored class should look like, in terms of clarity, length, and functionality. This is also a good approach if you're limited on time, or your app is too complex to refactor all at once. You can apply the above tactics to the most buggy and complicated pieces of code. Use the [Pareto Principle](http://en.wikipedia.org/wiki/Pareto_principle) - 20% of the bugs could fix 80% of the crashes.

### Scrap it
There are a few instances where scrapping your project might be appropriate. Rebuilding from the ground up will give you the chance to re-evaluate your architecture without any transition steps from the current codebase. Be sure to define your feature set before attempting to reinvent your application. This is a more drastic attempt than refactoring. Usually, if you rewrite your project in the same language, you are going to add a framework or upgrade the language to a modern version.

### Change languages
An interesting but common decision that I've made is to change the project's language. It's the perfect time to do this if you've already decided the technical debt is too large to ignore. Consider this option and have a discussion about speed, robustness, and possible frameworks. This could be a double-edged sword for your project - you won't be confused by the old language or framework, but you will have to learn new idiosyncrasies that you had figured out in your old design.

### Implications
Although it's stressful to realize that a project is too big or complex, I think it's important to look at rebuilding as a learning experience. Thinking about project architecture doesn't always happen while a developer is shipping features. Rebuilding is also an opportunity to help new developers think about clarity and complexity while building great software.