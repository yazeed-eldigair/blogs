---
title: Keep your best practices away from me
slug: coding-standards
coverImage: /images/posts/blog-posts.jpg
date: 2023-04-22T21:55:15.361Z
excerpt: I value beautiful code, and coding standards are usually helpful. But there's a fine line between following them and becoming dogmatic.
tags:
  - Rant
  - Coding
---

Not how I envisioned my first blog would go.

Coding standards, guidlines, best practices and all that fun jazz. I simply can't help but get agitated when these buzzwords get thrown around in discussions and PR reviews I'm invovled in with the intention of making a point. Can you objectively tell me what is wrong with my code instead of just throwing in a "_because best practices_"?

So, what makes a truly valuable code review? Here are some key criteria to consider when reviewing pull requests, moving beyond the buzzwords and towards actionable feedback:

### Consistency
Does the PR adhere to the existing coding conventions and project structure? Point out specific inconsistencies. Don't be afraid to be nitpicky as long as your feedback is viable.

### Readability
Unless the PR contains complex business logic that isn't easy to digest, if you are having a bad time reviewing a PR, that is generally an indicator of a poor PR. Remember, the first reviewer of the code should always be the author themselves. Encourage them to self-critique their work before hitting that "Request review" button.

### Maintainability
Think about the souls inheriting the code six months from now. Will they be cursing as they build features on top of the code? Maintainability is key.

### Testability
Whether you are a beliver or skeptic in writing tests, thinking about testitiblity while writing code will generally improve its quality. Testable code will tend to be more modular, which improves readability and maintainability.

### Conclusion
By focusing on these practical criteria,  code reviews become more collaborative and instructive. Moving beyond the "best practices" jargon and other buzzwords, we can provide specific and actionable feedback.
