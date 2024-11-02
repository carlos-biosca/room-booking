import { DateTime } from "luxon";

const dateToUTC = (string) => {
  return DateTime.fromISO(string, { zone: 'utc' }).toUTC();
}

export default dateToUTC