A *Pattern* is a solution to a problem in a context.
* the *context* is the situation in which the pattern applies. This should be a recurring situation.
* the *problem* refers to the goal you are trying to achieve in this context, but it also refers to any constrains that
occur in the context.
* the *solution* is what you are after: a general design that anyone can apply that resolves the goal and set of
constraints.

An *Anti-pattern* tells you how to go from a problem to a BAD solution.
# Design Principles

* Identify the aspects of your application that vary and separate them from what stays the same.
* Program to an interface, not an implementation.
* Favor composition over inheritance.
* Strive for loosely coupled designs between objects that interact.
* Classes should be open for extension, but closed for modification.
* Depend upon abstractions. Do not depend upon concrete classes.
* Talk only to your immediate friends.
* Don't call us, we'll call you (a low-level component never calls a high-level component directly).
* A class should have only one reason to change.
