import { useMemo } from "react";

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialComponent({ number }) {
  const answer = useMemo(() => factorial(number), [number]);
  return (
    <div className="result">
      The factorial of {number} is {answer}
    </div>
  );
}
