The task is to create a Timer App using HTML, CSS, and JavaScript. 
The app should allow users to start, pause, reset, and stop a timer.
Additionally, users should have the option to switch between different timer modes, such as Short Break (5 min) and Long Break (15 min).  

In the code I used the setInterval in javascript where for every 1000 milli seconds, the value gets decremented by 1.
In the timer, I used minutes and seconds format for the count down.
To calculate the minutes, we perform minutes = Math.floor(time / 60);
To calculate the seconds, we perform seconds = time % 60;
