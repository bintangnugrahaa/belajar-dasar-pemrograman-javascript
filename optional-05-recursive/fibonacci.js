function fibonacci(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  const sequence = [];
  function fibRecursively(num) {
    if (num === 0) {
      sequence.push(0);
    } else if (num === 1) {
      sequence.push(0, 1);
    } else {
      fibRecursively(num - 1);
      const len = sequence.length;
      sequence.push(sequence[len - 1] + sequence[len - 2]);
    }
  }
  fibRecursively(n);
  return sequence;
}

export default fibonacci;
