export const getGreeting = (): string => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Helper function to convert time to seconds since midnight
  const timeInSeconds = (h: number, m: number, s: number): number => h * 3600 + m * 60 + s;

  const currentTimeInSeconds = timeInSeconds(hours, minutes, seconds);

  // Helper function to convert seconds to a readable time format
  const formatTime = (totalSeconds: number): string => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const morningStart = timeInSeconds(0, 0, 0); // 00:00:00
  const morningEnd = timeInSeconds(11, 59, 59); // 11:59:59

  const afternoonStart = timeInSeconds(12, 0, 0); // 12:00:00
  const afternoonEnd = timeInSeconds(17, 59, 59); // 17:59:59

  const eveningStart = timeInSeconds(18, 0, 0); // 18:00:00
  const eveningEnd = timeInSeconds(23, 59, 59); // 23:59:59

  // console.log(`Current time in seconds: ${currentTimeInSeconds} (${formatTime(currentTimeInSeconds)})`);

  if (currentTimeInSeconds >= morningStart && currentTimeInSeconds <= morningEnd) {
    return "Good Morning!";
  } else if (currentTimeInSeconds >= afternoonStart && currentTimeInSeconds <= afternoonEnd) {
    return "Good Afternoon!";
  } else if (currentTimeInSeconds >= eveningStart && currentTimeInSeconds <= eveningEnd) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
};

// console.log(getGreeting());
