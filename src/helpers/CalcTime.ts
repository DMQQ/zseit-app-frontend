export function CalcTime(input: string = "") {
  let thisWeek = false;

  const date = new Date();

  const [day, month, year] = input.split(".");

  const isThisYear = date.getFullYear() === Number(year);
  const isThisMonth = date.getMonth() + 1 === Number(month);

  const currDay = date.getDate();

  if (isThisMonth && isThisYear) {
    thisWeek = currDay === Number(day);
  }

  return thisWeek;
}
