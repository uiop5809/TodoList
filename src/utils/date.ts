export const pad = (time: number) => {
  return `0${time}`.slice(-2);
};

// 2022-12-05 형태로 반환
export const getSimpleDateFormat = (d: Date, separator: string = "-") => {
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join(
    separator
  );
};

export const isSameDay = (a: Date, b: Date): boolean => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};
