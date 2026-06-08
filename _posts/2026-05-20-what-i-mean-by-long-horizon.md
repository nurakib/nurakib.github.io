---
layout: post
title: "What I mean by \"long horizon\""
date: 2026-05-20
excerpt: "A short note on the problem I keep coming back to in my research."
---

Most of the ways we measure language models look at a single turn. You ask a question
and you check the answer. But a lot of what people actually want from these systems
happens over a much longer stretch. An assistant that plans a trip, or an agent that
runs a multi-step job, has to keep track of what it's doing, hold on to the right
information, and notice when it has gone wrong.

That longer stretch is what I mean by "long horizon."

People sometimes assume a bigger context window takes care of this. I don't think it
does. A context window is something the model has to re-read every time. Memory is
something it can keep, update, or drop. The tricky part isn't storing more. It's
knowing what is no longer true and not acting on it anyway.

I'll use this space for short notes: mostly things I'm reading, and experiments that
didn't go the way I expected.
