export function convertTimeFormat(inputTime: string): string {
  const date = new Date(inputTime);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const dayOfMonth = date.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];

  const year = date.getFullYear();

  return `${hours}:${minutes}, ${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
}
