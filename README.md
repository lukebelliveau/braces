# Braces

Determines if a given string contains a balanced set of braces - 
that is, a string that contains an equal number of open and closed
braces.

- If the input string contains a balanced set of braces, this program
will print -1 to the console.
- If the input string contains an unbalanced set of braces, this program
  will print the 0-indexed position of the first brace that breaks the
  balance. This covers the following cases:
  - **There are extra opening braces**: The program will print
    the index of the first (leftmost) brace to appear that remains unmatched by the
    end of the string (the rightmost opening brace is matched first).
  - **There are extra closing braces**: The program will print the index of
    the first (leftmost) closing brace that has no matching opening brace.

## Running the program

Clone and install dependencies: 

`git clone https://github.com/lukebelliveau/braces.git && cd braces && yarn install`

Run the program by including your input string inside of double quotes:

`yarn start "{{}}"`

Run unit tests with Jest:

`yarn test`

*Note*: Jest is this program's only direct dependency. If you do not wish to install dependencies,
`node index.js "input string"` should suffice.
