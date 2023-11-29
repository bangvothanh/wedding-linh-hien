$(document).ready(function () {
  let clock;
  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2023-12-29 11:00", "Asia/Saigon");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;
  if (diff <= 0) {
    // If remaining countdown is 0
    let diff2 = currentDate.getTime() / 1000 - targetDate / 1000;
    clock = $(".clock").FlipClock(diff2, {
      clockFace: "DailyCounter",
      countdown: false,
      autostart: false
    });
    $(".btn-default").replaceWith('<a  class="btn btn-default btn-sm">We got married</a>');
    console.log("Date has already passed!")

  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {
          console.log("Timer has ended!");
          setTimeout(function () {
            location.reload();
          }, 1000);

        }
      }
    });

    // Check when timer reaches 0, then stop at 0
    setTimeout(function () {
      checktime();
    }, 1000);

    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);

      }
      setTimeout(function () {
        checktime();
      }, 1000);
    }
  }
});
