// Date and time
import { DateTime } from './luxon.js';

const clockElement = document.getElementById('clock');
const now = DateTime.now();

const clock = () => {
  clockElement.textContent = now.toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
};

const runInterval = () => {
  setInterval(clock, 1000);
};

export default runInterval;
