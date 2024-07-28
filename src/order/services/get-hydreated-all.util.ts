export function getHydrateAll<T extends { id: string }, U>(
  hydrateOne: (rows: T[]) => U,
) {
  return (rows: T[]) => {
    const map = rows.reduce((acc, row) => {
      if (acc.has(row.id)) {
        acc.get(row.id)?.push(row);
      } else {
        acc.set(row.id, [row]);
      }

      return acc;
    }, new Map<string, T[]>());

    return Array.from(map.values()).map(hydrateOne);
  };
}
