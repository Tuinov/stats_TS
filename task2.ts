/*
    Использя generic-параметры, типизируйте функцию groupBy,
    чтобы не было ошибок компиляции. Возможно, потребуется
    дописать типы в теле функции
*/
function groupBy<T, L, E>(source: T[], keySelector: (x: T, i: number) => L, valueSelector: (x: T, i: number) => E): Map<L, E[]> {
  const result = new Map();
  for (let i = 0; i < source.length; i++) {
    const item = source[i];
    const key = keySelector(item, i);
    const value = valueSelector(item, i);
    if (!result.has(key)) {
      result.set(key, []);
    }
    result.get(key).push(value);
  }

  return result;
}

const q1: Map<number, number[]> = groupBy([1, 2, 3, 4], x => x % 2, x => x + 1);
const q2: Map<boolean, { x: string, i: number }[]> = groupBy(["aaa", "bbb", "cc", "q", "lalaka"], (_, i) => i % 2 === 0, (x, i) => ({ i, x }))
console.log(q1, q2);