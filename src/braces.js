const brace = {
  CLOSED: '}',
  OPEN: '{'
};

const braces = (input) => {
  let queue = new Array(input.length);
  queue.fill(null);
  let queueIndex = 0;

  for(let i = 0; i < input.length; i++) {
    const char = input[i];

    if(char === brace.CLOSED) {
      if(queueIndex === 0) return i;
      queue[queueIndex - 1] = null;
      queueIndex--;
    } else if (char === brace.OPEN) {
      queue[queueIndex] = i;
      queueIndex++;
    }
  }

  if(queueIndex === 0) return -1
  return queue[0];
}

module.exports = braces;