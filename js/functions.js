const MINUTES_IN_HOUR = 60;

const isWorkWasLegal = (
  workStarted,
  workFinished,
  meetingStarted,
  meetingLength
) => {
  const [workStartedHour, workStartedMinute] = workStarted.split(':');
  const [workFinishedHour, workFinishedMinute] = workFinished.split(':');
  const [meetingStartedHour, meetingStartedMinute] = meetingStarted.split(':');

  const workStartedMinuteOfTheDay = Number(workStartedHour) * MINUTES_IN_HOUR + Number(workStartedMinute);
  const workFinishedMinuteOfTheDay = Number(workFinishedHour) * MINUTES_IN_HOUR + Number(workFinishedMinute);
  const meetingStartedMinuteOfTheDay = Number(meetingStartedHour) * MINUTES_IN_HOUR + Number(meetingStartedMinute);
  const meetingFinishedMinuteOfTheDay = meetingStartedMinuteOfTheDay + meetingLength;

  return workStartedMinuteOfTheDay <= meetingStartedMinuteOfTheDay && workFinishedMinuteOfTheDay >= meetingFinishedMinuteOfTheDay;
};

isWorkWasLegal('08:00', '17:30', '14:00', 90);
isWorkWasLegal('8:0', '10:0', '8:0', 120);
isWorkWasLegal('08:00', '14:30', '14:00', 90);
isWorkWasLegal('14:00', '17:30', '08:0', 90);
isWorkWasLegal('8:00', '17:30', '08:00', 900);
