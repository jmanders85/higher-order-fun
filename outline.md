# Functional Programming, Fun of a Higher Order

## Yay Math!

Functional programming is built on the idea that software is composed out of functions
and that those functions should behave like functions in mathematics. f(x) = x + 2
will always return 4 when provided the argument 2.  That predictability is not to be
underestimated and is known as **Referential Transparency**!  Probably guaranteed
a job if you say that in an interview.

```JavaScript
let counter = 0;

function imNotReferentiallyTransparent(x) {
  counter++;

  return x + counter;
}
```

## Keep It Pure

Keep your hands off my state!  Mutation may work for evolution but it ain't
gonna fly here...

## First Class Fun

Functions can be arguments!  Let's leave our for-loops behind and explore some
higher order functions (ie. functions that take functions as arguments) that are
built in to JavaScript's Array!

### Filter

Do you need all the evens in a list of integers?  Or would you like to sort
through some records to find the ones that pass a certain test?  Filter is the
method for you.
[//]: # (whosBlue.js)

### Map

What about transformation?  Perhaps we have a list of records but we need to
change their shape to fit our API.  When we want to apply a function to every
item in a list we MAP it, yo!
[//]: # (nameFuse.js)

### Reduce

Are you feeling the power?  We're just getting started!  When we want to take a
list and turn it into some other object (or we just want to be really fancy), we
use the reduce method.
[//]: # (reductoAdAbsurdium.js)

## Glossary

- Referential Transparency:  A function is **referentially transparent** if it
  always returns the same result given the same argument.
- Pure Function:  A function is **pure** if, when run, does not change the state
  of the program in which it is called.
- Higher Order Function:  A function is **higher order** if it takes another function
  as an argument.

## More Resources

Whew!  That was overwhelming!  My favorite way to practice and learn functional
programming is to practice in languages that force you to be functional or to
use JavaScript libraries that make the functional approach easy as 3.14!

- [React](https://facebook.github.io/react/tutorial/tutorial.html)
  - React is one of the many frameworks to adopt the idea that components should
    be modular and reusable.  This encourages developers to approach UI design
    in a nice and functional way!  Plus it's [taking over web development](https://medium.freecodecamp.com/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76)
- [Ramda](http://ramdajs.com/)
  - A library designed specifically for a functional programming style.  I've
    not used it (but I use [Lodash](https://lodash.com/) all the time at work),
    and in researching this talk I saw a sassy comment in an article I read about
    how necessary it is to include Ramda in any discussion about functional
    programming in JavaScript.  So, here it is.
- [Immutable.js](https://facebook.github.io/immutable-js/)
  - From the Readme: 'Much of what makes application development difficult is tracking
    mutation and maintaining state. Developing with immutable data encourages you to
    think differently about how data flows through your application.'
- [Functional Programming in Erlang](https://www.futurelearn.com/courses/functional-programming-erlang/)
  - Loving this course right now.  Erlang is one of my favorite 'weekend'
    languages and this course is a great intro to functional programming!
- [Elm Tutorial](https://www.elm-tutorial.org/en/)
  - Elm is a funky front end language that compiles to JavaScript and appealed
    to me because of the following billing: 'Even if you don't like it, you'll
    be a better React programmer because of it!'
- [Introduction to Haskell](http://www.cis.upenn.edu/~cis194/fall16/)
  - Are you looking to impress people with your knowledge of Monads? No? Well,
    you should look up Haskell anyway!  It is PURE as PURE gets in programming
    and there are great resources out there to get you started.  Writing Haskell
    will change your brain, for realz.
- #learn_functional on Prime Slack
  - It's mostly just me posting links but I'd love to help you through any of
    the material posted here, or help you get rid of those gauche for-loops!
