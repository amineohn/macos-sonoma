export function getCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const dates = [];
  let week = new Array(7).fill(null);

  for (let i = 0; i < firstDayOfMonth; i++) {
    week[i] = null;
  }

  for (let date = 1; date <= lastDateOfMonth; date++) {
    week[firstDayOfMonth + date - 1] = date;
    if ((firstDayOfMonth + date) % 7 === 0 || date === lastDateOfMonth) {
      dates.push(week);
      week = new Array(7).fill(null);
    }
  }

  return { dates, today };
}
