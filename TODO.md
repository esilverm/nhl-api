# TODO

## What is going on here?

This project isn't a very viable option for an api wrapper in its current state. There are a lot of problems with it. What? You don't believe me? Allow me to list some problems found on the master branch.

* the lib folder contains two json files with all of the players ever and their ids. This is disgusting and I would rather not think about it at this point in time. In reality the main applications of this api would be analyzing game data or having a backend for a site. Utilizing the primary keys for each player or team is important since it prevents overlapping players or teams. I didn't realize this when I desigined my project because I was too naive to notice it. I went all in on the hardcoding.
* The project isn't very maintainable or usable. The games part of the api is broken since there is rate-limiting. The NHL actually uses diff-patches in order to relay data. I may need to set up some kind of listener that can emit a signal to notify clients of game happenings. I gotta learn how to do this.
* I wrote it in high school. It is bad and probably looks pretty bad on my resume. I'd like to make it more viable for nhl fans and developers.


To all who are using my stuff. I'm sorry it is bad. I will make it better.


Apparently there are new parts of the api that have been discovered. They are documented here:
https://gitlab.com/dword4/nhlapi/blob/master/records-api.md
https://gitlab.com/dword4/nhlapi/blob/master/stats-api.md

The first 4 digits identify the season of the game (ie. 2017 for the 2017-2018 season). The next 2 digits give the type of game, where 01 = preseason, 02 = regular season, 03 = playoffs, 04 = all-star. The final 4 digits identify the specific game number. For regular season and preseason games, this ranges from 0001 to the number of games played. (1271 for seasons with 31 teams (2017 and onwards) and 1230 for seasons with 30 teams). For playoff games, the 2nd digit of the specific number gives the round of the playoffs, the 3rd digit specifies the matchup, and the 4th digit specifies the game (out of 7).

learn how to use diffpatch. also write helper for verifying time

https://statsapi.web.nhl.com/api/v1/game/ID/feed/live/diffPatch?startTimecode=yyyymmdd_hhmmss
