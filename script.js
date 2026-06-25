const QUESTIONS = [
  { q: "Who holds the NBA all-time career scoring record?", options: ["Kareem Abdul-Jabbar", "LeBron James", "Kobe Bryant", "Karl Malone"], answer: 1, fact: "LeBron James passed Kareem Abdul-Jabbar's record of 38,387 points in February 2023 and continues to extend it." },
  { q: "Which player has the most career triple-doubles in NBA history?", options: ["Magic Johnson", "Oscar Robertson", "Russell Westbrook", "Jason Kidd"], answer: 2, fact: "Russell Westbrook passed Oscar Robertson's long-standing record of 181 triple-doubles in 2021." },
  { q: "Wilt Chamberlain's legendary 100-point game in 1962 was against which team?", options: ["New York Knicks", "Boston Celtics", "Los Angeles Lakers", "Philadelphia Warriors' rival"], answer: 0, fact: "Wilt Chamberlain scored 100 points for the Philadelphia Warriors against the New York Knicks on March 2, 1962 — a record that still stands." },
  { q: "Who is the only player to record a quadruple-double in the modern (post-merger) NBA era?", options: ["Hakeem Olajuwon", "David Robinson", "Nate Thurmond", "Alvin Robertson"], answer: 2, fact: "Nate Thurmond recorded the first official quadruple-double for the Golden State Warriors in 1974; Alvin Robertson and Hakeem Olajuwon also later achieved it." },
  { q: "Which team drafted Michael Jordan in the 1984 NBA Draft?", options: ["Chicago Bulls", "Portland Trail Blazers", "Houston Rockets", "Philadelphia 76ers"], answer: 0, fact: "Jordan was picked 3rd overall by the Chicago Bulls in 1984, after Hakeem Olajuwon (Rockets) and Sam Bowie (Trail Blazers)." },
  { q: "What is the largest single-game scoring margin of victory in NBA history?", options: ["58 points", "68 points", "73 points", "82 points"], answer: 1, fact: "On December 17, 1991, the Cleveland Cavaliers beat the Miami Heat 148–80, a 68-point margin — the largest blowout in NBA history." },
  { q: "Stephen Curry holds the single-season record for three-pointers made. How many did he hit in 2015-16?", options: ["286", "402", "323", "357"], answer: 1, fact: "Curry made 402 three-pointers in the 2015-16 season, the only player ever to top 400 in a single season." },
  { q: "Which player won NBA Finals MVP despite his team losing the series?", options: ["Jerry West", "LeBron James", "Allen Iverson", "Rick Barry"], answer: 0, fact: "Jerry West won Finals MVP in 1969 even though the Lakers lost to the Celtics in 7 games — the only time this has happened." },
  { q: "Who holds the NBA record for most assists in a single game?", options: ["Magic Johnson", "John Stockton", "Scott Skiles", "Isiah Thomas"], answer: 2, fact: "Scott Skiles dished out 30 assists for the Orlando Magic on December 30, 1990, an NBA record that still stands." },
  { q: "Manute Bol and Gheorghe Muresan share the record for tallest players in NBA history at what height?", options: ["7'4\"", "7'6\"", "7'7\"", "7'5\""], answer: 1, fact: "Both Manute Bol and Gheorghe Muresan stood 7 feet 6 inches tall, tied for the tallest in NBA history." },
  { q: "Who holds the record for most points scored in a single NBA playoff game?", options: ["Michael Jordan", "Donovan Mitchell", "Elgin Baylor", "Wilt Chamberlain"], answer: 1, fact: "Donovan Mitchell scored 71 points for the Cleveland Cavaliers in 2025, surpassing Jordan's long-standing playoff record of 63." },
  { q: "Which team has won the most NBA championships in history?", options: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"], answer: 2, fact: "The Boston Celtics have won 18 NBA championships, the most of any franchise, narrowly ahead of the Lakers' 17." },
  { q: "Who was the first overall pick in the 2003 NBA Draft, widely considered one of the greatest draft classes ever?", options: ["Carmelo Anthony", "Chris Bosh", "Dwyane Wade", "LeBron James"], answer: 3, fact: "LeBron James went 1st overall to the Cleveland Cavaliers in 2003, a class that also included Wade, Anthony, and Bosh." },
  { q: "Which player has the most career rebounds in NBA history?", options: ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Dennis Rodman"], answer: 1, fact: "Wilt Chamberlain grabbed 23,924 career rebounds, far more than any other player, including a 55-rebound single game record." },
  { q: "What nickname is Shaquille O'Neal NOT known by?", options: ["The Diesel", "Shaq Fu", "The Big Aristotle", "The Mailman"], answer: 3, fact: "\"The Mailman\" was Karl Malone's nickname. Shaq went by many names including The Diesel, Shaq Fu, and The Big Aristotle." },
  { q: "Who is the only player to win an NBA championship, MVP, and Finals MVP all in the same season more than once?", options: ["Michael Jordan", "LeBron James", "Tim Duncan", "Hakeem Olajuwon"], answer: 0, fact: "Michael Jordan achieved the MVP/Finals MVP/championship sweep in a single season multiple times, most notably in 1991, 1992, and 1996." },
  { q: "Which player holds the record for most career blocked shots in NBA history?", options: ["Dikembe Mutombo", "Hakeem Olajuwon", "Kareem Abdul-Jabbar", "Mark Eaton"], answer: 1, fact: "Hakeem Olajuwon recorded 3,830 career blocks, the most in NBA history since blocks became an official stat in 1973-74." },
  { q: "In what year did the NBA introduce the three-point line?", options: ["1976", "1979", "1984", "1969"], answer: 1, fact: "The NBA adopted the three-point line for the 1979-80 season, after the rival ABA had used it since its founding." },
  { q: "Who scored the most points in a single quarter in NBA history?", options: ["Klay Thompson", "George Gervin", "Wilt Chamberlain", "Carmelo Anthony"], answer: 0, fact: "Klay Thompson scored 37 points in a single quarter for the Warriors in January 2015, an NBA record." },
  { q: "Which two franchises have met the most times in the NBA Finals?", options: ["Lakers and Pistons", "Celtics and Lakers", "Bulls and Jazz", "Warriors and Cavaliers"], answer: 1, fact: "The Boston Celtics and Los Angeles Lakers have faced off in the NBA Finals 12 times, the most storied rivalry in league history." },
  { q: "Who is the shortest player in NBA history?", options: ["Spud Webb", "Earl Boykins", "Muggsy Bogues", "Isaiah Thomas"], answer: 2, fact: "Muggsy Bogues, at 5'3\", is the shortest player to ever play in the NBA, enjoying a 14-year career." },
  { q: "Which player became famous for an all-around historic stat line in the 2021 NBA Finals while leading the Bucks to a title?", options: ["Hakeem Olajuwon", "David Robinson", "Anthony Davis", "Giannis Antetokounmpo"], answer: 3, fact: "Giannis Antetokounmpo's dominant two-way performance in the 2021 Finals, including a 50-point Game 6, sealed Milwaukee's championship." },
  { q: "Who is the NBA's all-time leader in career steals?", options: ["Michael Jordan", "John Stockton", "Gary Payton", "Jason Kidd"], answer: 1, fact: "John Stockton recorded 3,265 career steals, the most in NBA history, alongside his career assists record." },
  { q: "Who holds the NBA record for most career assists?", options: ["Magic Johnson", "Steve Nash", "John Stockton", "Chris Paul"], answer: 2, fact: "John Stockton dished out 15,806 career assists, nearly 4,000 more than anyone else in NBA history." },
  { q: "Which player is known as 'The Black Mamba'?", options: ["Kobe Bryant", "Tracy McGrady", "Vince Carter", "Allen Iverson"], answer: 0, fact: "Kobe Bryant adopted the nickname 'Black Mamba' for himself starting in the mid-2000s." },
  { q: "What is the NBA record for most points scored by a player in their NBA debut?", options: ["Wilt Chamberlain", "LeBron James", "Earl Monroe", "Damian Lillard"], answer: 0, fact: "Wilt Chamberlain scored 43 points in his NBA debut in 1959, an NBA rookie debut record." },
  { q: "Which franchise was originally known as the Buffalo Braves before relocating?", options: ["LA Clippers", "Sacramento Kings", "Memphis Grizzlies", "New Orleans Pelicans"], answer: 0, fact: "The Buffalo Braves became the San Diego Clippers in 1978, then moved to Los Angeles in 1984." },
  { q: "Who is the only undrafted player to win an NBA MVP award?", options: ["Ben Wallace", "Udonis Haslem", "Brad Miller", "No undrafted player has won MVP"], answer: 3, fact: "Every NBA MVP winner has been drafted; Ben Wallace, an undrafted star, never won MVP despite making All-Star teams." },
  { q: "What was the original name of the team now known as the Oklahoma City Thunder?", options: ["Seattle SuperSonics", "Vancouver Grizzlies", "Charlotte Hornets", "Kansas City Kings"], answer: 0, fact: "The franchise relocated from Seattle, where it was the SuperSonics, to Oklahoma City in 2008 and became the Thunder." },
  { q: "Who holds the record for the most consecutive games played in NBA history (the NBA's 'Iron Man')?", options: ["A.C. Green", "Randy Foye", "John Havlicek", "Kevin Love"], answer: 0, fact: "A.C. Green played in 1,192 consecutive games over an 11-year span, the longest such streak in NBA history." },
  { q: "Which player is nicknamed 'The Glove' for his defensive prowess?", options: ["Scottie Pippen", "Gary Payton", "Dennis Rodman", "Bruce Bowen"], answer: 1, fact: "Gary Payton earned the nickname 'The Glove' for his tenacious, lockdown perimeter defense." },
  { q: "Which player set the record for most points by a rookie in NBA history?", options: ["Wilt Chamberlain", "LeBron James", "Allen Iverson", "Damian Lillard"], answer: 0, fact: "Wilt Chamberlain averaged 37.6 points per game as a rookie in 1959-60, the highest rookie scoring average in NBA history." },
  { q: "Who is the only player to be named MVP of an All-Star Game, the regular season, and the Finals in the same year?", options: ["Michael Jordan", "Shaquille O'Neal", "Both Jordan and O'Neal", "Kobe Bryant"], answer: 2, fact: "Michael Jordan (1996, 1998) and Shaquille O'Neal (2000) both achieved the All-Star MVP, regular season MVP, and Finals MVP sweep." },
  { q: "What is the longest winning streak in NBA history?", options: ["27 games", "33 games", "24 games", "16 games"], answer: 1, fact: "The 1971-72 Los Angeles Lakers won 33 consecutive games, the longest winning streak in major North American pro sports history." },
  { q: "Which franchise has the most retired jersey numbers?", options: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Philadelphia 76ers"], answer: 0, fact: "The Boston Celtics have retired more than 20 jersey numbers, the most of any NBA franchise." },
  { q: "Who was the first player to be selected first overall in the NBA Draft directly out of high school?", options: ["Kevin Garnett", "Kwame Brown", "LeBron James", "Dwight Howard"], answer: 1, fact: "Kwame Brown became the first high school player ever taken with the No. 1 overall pick, by the Washington Wizards in 2001." },
  { q: "Which player holds the record for most free throws made in a single game?", options: ["Wilt Chamberlain", "Adrian Dantley", "Rick Barry", "Donovan Mitchell"], answer: 0, fact: "Wilt Chamberlain made 28 free throws in a single game in 1962, an NBA record he set during his 100-point performance." },
  { q: "What was unusual about Wilt Chamberlain's free-throw shooting style for part of his career?", options: ["He shot left-handed only", "He shot underhand 'granny style'", "He never practiced free throws", "He shot with his eyes closed"], answer: 1, fact: "Wilt Chamberlain famously experimented with the underhand 'granny style' free throw to try to improve his poor accuracy from the line." },
  { q: "Who holds the record for most career playoff points in NBA history?", options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Kareem Abdul-Jabbar"], answer: 2, fact: "LeBron James holds the all-time NBA playoff scoring record, having long surpassed Michael Jordan's mark." },
  { q: "Which player is known for the nickname 'The Answer'?", options: ["Allen Iverson", "Tracy McGrady", "Vince Carter", "Baron Davis"], answer: 0, fact: "Allen Iverson was nicknamed 'The Answer' early in his career with the Philadelphia 76ers." },
  { q: "In which decade did the NBA first implement the shot clock?", options: ["1940s", "1950s", "1960s", "1970s"], answer: 1, fact: "The NBA introduced the 24-second shot clock in 1954 to speed up the pace of the game and reduce stalling." },
  { q: "Who is the only center to lead the NBA in assists for a season?", options: ["Wilt Chamberlain", "Bill Russell", "Nikola Jokic", "Wes Unseld"], answer: 0, fact: "Wilt Chamberlain led the NBA in assists in the 1967-68 season, the only center ever to do so." },
  { q: "Which player set the record for most three-pointers made in a single playoff game?", options: ["Stephen Curry", "Klay Thompson", "Damian Lillard", "Ray Allen"], answer: 0, fact: "Stephen Curry made 11 three-pointers in a single playoff game in 2016, an NBA postseason record." },
  { q: "Who was the first international player (born and trained outside the U.S.) to be selected No. 1 overall in the NBA Draft?", options: ["Dirk Nowitzki", "Yao Ming", "Hakeem Olajuwon", "Andrea Bargnani"], answer: 1, fact: "Yao Ming, born and trained in China, was the first international player drafted No. 1 overall, by the Houston Rockets in 2002." },
  { q: "Who holds the NBA record for oldest player to ever play in a game?", options: ["Nat Hickey", "Kevin Willis", "Robert Parish", "Vince Carter"], answer: 0, fact: "Nat Hickey, a player-coach, suited up for the Providence Steamrollers in 1948 at age 45, the oldest to ever play in an NBA game." },
  { q: "Vince Carter holds which notable NBA longevity record?", options: ["Most seasons played (22)", "Most total games played", "Most teams played for", "Oldest player to start a game"], answer: 0, fact: "Vince Carter played 22 seasons in the NBA, the most of any player in league history, retiring in 2020." },
  { q: "What is the NBA record for most points scored by a player in a Finals game?", options: ["Michael Jordan, 55", "Elgin Baylor, 61", "Rick Barry, 55", "LeBron James, 51"], answer: 1, fact: "Elgin Baylor scored 61 points for the Lakers in Game 1 of the 1962 NBA Finals, still the Finals single-game scoring record." },
  { q: "What does the term 'sixth man' refer to in the NBA?", options: ["A player who never plays", "The best player off the bench", "A backup referee", "The team's mascot"], answer: 1, fact: "The 'sixth man' is the most important reserve player, traditionally the first substitute off the bench, honored with the Sixth Man of the Year award." },
  { q: "Which player has won the most Sixth Man of the Year awards?", options: ["Lou Williams", "Jamal Crawford", "Manu Ginobili", "Both Williams and Crawford"], answer: 3, fact: "Lou Williams and Jamal Crawford have each won the Sixth Man of the Year award three times, tied for the most." },
  { q: "Which arena is known as 'The Garden' and home to the New York Knicks?", options: ["Barclays Center", "Madison Square Garden", "Chase Center", "TD Garden"], answer: 1, fact: "Madison Square Garden in New York City has been the Knicks' home arena since 1968, nicknamed 'The Mecca of Basketball.'" },
  { q: "Which team plays its home games at TD Garden?", options: ["New York Knicks", "Boston Celtics", "Brooklyn Nets", "Toronto Raptors"], answer: 1, fact: "The Boston Celtics have played at TD Garden (and its predecessor, Boston Garden) since the arena's various namings began." },
  { q: "What is the diameter of a regulation NBA basketball hoop (rim)?", options: ["16 inches", "18 inches", "20 inches", "22 inches"], answer: 1, fact: "An NBA rim has an 18-inch diameter, more than double the 9.5-inch diameter of a basketball." },
  { q: "How high is a regulation NBA basketball hoop from the floor?", options: ["9 feet", "10 feet", "11 feet", "12 feet"], answer: 1, fact: "The rim sits exactly 10 feet above the floor, a standard set in 1891 by James Naismith's original rules." },
  { q: "Who invented the game of basketball?", options: ["James Naismith", "Walter Camp", "Abner Doubleday", "Hank Luisetti"], answer: 0, fact: "Dr. James Naismith invented basketball in 1891 at a YMCA training school in Springfield, Massachusetts." },
  { q: "In what city was basketball invented?", options: ["Boston, Massachusetts", "Springfield, Massachusetts", "New York City", "Chicago, Illinois"], answer: 1, fact: "Basketball was invented in Springfield, Massachusetts, where the Basketball Hall of Fame is located today." },
  { q: "What year was the NBA founded?", options: ["1936", "1946", "1954", "1961"], answer: 1, fact: "The league was founded in 1946 as the Basketball Association of America (BAA), merging with the NBL in 1949 to become the NBA." },
  { q: "Which two leagues merged in 1949 to officially form the NBA?", options: ["BAA and NBL", "ABA and BAA", "NBL and ABA", "CBA and BAA"], answer: 0, fact: "The Basketball Association of America (BAA) merged with the National Basketball League (NBL) in 1949 to create the NBA." },
  { q: "Which league merged with the NBA in 1976, bringing in teams like the Nets, Nuggets, Pacers, and Spurs?", options: ["CBA", "ABA", "WBL", "USBL"], answer: 1, fact: "The American Basketball Association (ABA) merged with the NBA in 1976, adding four franchises and the three-point line's eventual influence." },
  { q: "Who is widely credited as the first player to popularize the 'slam dunk' as a signature move?", options: ["Wilt Chamberlain", "Julius Erving", "Darryl Dawkins", "Connie Hawkins"], answer: 1, fact: "Julius 'Dr. J' Erving became famous in the ABA and NBA for popularizing high-flying slam dunks in the 1970s." },
  { q: "Which player famously shattered a backboard with a dunk, leading to breakaway rims being introduced?", options: ["Shaquille O'Neal", "Darryl Dawkins", "Karl Malone", "Vince Carter"], answer: 1, fact: "Darryl Dawkins shattered backboards with powerful dunks in the late 1970s, prompting the NBA to adopt breakaway rims." },
  { q: "Who won the inaugural NBA Slam Dunk Contest in 1984?", options: ["Michael Jordan", "Larry Nance", "Dominique Wilkins", "Julius Erving"], answer: 1, fact: "Larry Nance Sr. won the first official NBA Slam Dunk Contest in 1984, edging out Julius Erving." },
  { q: "Which player is famous for winning a Slam Dunk Contest by dunking from near the free-throw line?", options: ["Michael Jordan", "Dominique Wilkins", "Spud Webb", "Vince Carter"], answer: 0, fact: "Michael Jordan famously took off from near the free-throw line during the 1988 Slam Dunk Contest in Chicago." },
  { q: "At 5'7\", which player is the shortest to ever win the Slam Dunk Contest?", options: ["Spud Webb", "Nate Robinson", "Isaiah Thomas", "Muggsy Bogues"], answer: 0, fact: "Spud Webb won the 1986 Slam Dunk Contest at just 5'7\", famously outdunking his much taller teammate Dominique Wilkins." },
  { q: "Which player has won the Slam Dunk Contest the most times?", options: ["Michael Jordan", "Dominique Wilkins", "Nate Robinson", "Zach LaVine"], answer: 2, fact: "Nate Robinson won the Slam Dunk Contest three times (2006, 2009, 2010), the most of any player." },
  { q: "Which Olympic men's basketball team is often called the 'Dream Team'?", options: ["The 1996 team", "The 1992 team", "The 2008 'Redeem Team'", "The 2000 team"], answer: 1, fact: "The 1992 U.S. Olympic men's basketball team, featuring Jordan, Magic, Bird, and others, is famously known as the 'Dream Team.'" },
  { q: "Which player won NBA Rookie of the Year and an NBA championship in the same season?", options: ["Magic Johnson", "Tim Duncan", "Both Magic Johnson and Tim Duncan", "Neither"], answer: 2, fact: "Both Magic Johnson (1980) and Tim Duncan (1999) are among the players to win an NBA title in their rookie season." },
  { q: "Which team selected Allen Iverson with the No. 1 overall pick in the 1996 NBA Draft?", options: ["Philadelphia 76ers", "Toronto Raptors", "Vancouver Grizzlies", "Boston Celtics"], answer: 0, fact: "Allen Iverson was drafted No. 1 overall by the Philadelphia 76ers in the stacked 1996 NBA Draft class." },
  { q: "Which players were also picked in the celebrated 1996 NBA Draft class alongside Allen Iverson?", options: ["Kobe Bryant, Ray Allen, Steve Nash", "LeBron James, Wade, Bosh", "Duncan, Robinson, Olajuwon", "Magic, Bird, Erving"], answer: 0, fact: "The 1996 draft class included Kobe Bryant, Ray Allen, Steve Nash, and Stephon Marbury, among other future stars." },
  { q: "Who holds the record for the most career NBA games played?", options: ["Robert Parish", "Vince Carter", "Kareem Abdul-Jabbar", "Dirk Nowitzki"], answer: 1, fact: "Vince Carter played 1,541 career NBA games across 22 seasons, the most of any player in league history." },
  { q: "Which player set the modern NBA record for most points in a game by scoring 81 against the Toronto Raptors in 2006?", options: ["LeBron James", "Kobe Bryant", "Allen Iverson", "Tracy McGrady"], answer: 1, fact: "Kobe Bryant scored 81 points against the Toronto Raptors on January 22, 2006, the second-highest single-game total in NBA history." },
  { q: "Which player is the only one to average over 30 points, 10 rebounds, and 10 assists for an entire NBA season?", options: ["Oscar Robertson", "Russell Westbrook", "Nikola Jokic", "LeBron James"], answer: 1, fact: "Russell Westbrook averaged a 31-point triple-double for the entire 2016-17 season, a feat no one else has matched." },
  { q: "Who is the only player in NBA history to average a triple-double over multiple full seasons?", options: ["Oscar Robertson", "Magic Johnson", "Russell Westbrook", "Nikola Jokic"], answer: 2, fact: "Russell Westbrook averaged a triple-double in four separate seasons, more than any other player in NBA history." },
  { q: "Which team set the NBA record for most wins in a single regular season with 73?", options: ["1995-96 Chicago Bulls", "2015-16 Golden State Warriors", "2016-17 Golden State Warriors", "2000-01 Los Angeles Lakers"], answer: 1, fact: "The 2015-16 Golden State Warriors went 73-9, breaking the 1995-96 Bulls' record of 72 wins." },
  { q: "Which team previously held the NBA record for most wins in a regular season before the 2015-16 Warriors broke it?", options: ["1971-72 Lakers", "1986-87 Celtics", "1995-96 Bulls", "1992-93 Suns"], answer: 2, fact: "The 1995-96 Chicago Bulls went 72-10, a record that stood for two decades until the 2015-16 Warriors surpassed it." },
  { q: "Who is the all-time leader in NBA Defensive Player of the Year awards?", options: ["Dikembe Mutombo", "Ben Wallace", "Dwight Howard", "Rudy Gobert"], answer: 3, fact: "Rudy Gobert has won the Defensive Player of the Year award four times, tying him with Dikembe Mutombo and Ben Wallace before edging ahead." },
  { q: "Which player has won the most NBA MVP awards?", options: ["Michael Jordan", "Kareem Abdul-Jabbar", "Bill Russell", "LeBron James"], answer: 1, fact: "Kareem Abdul-Jabbar won six NBA MVP awards, the most in league history." },
  { q: "Which player has won the most NBA Finals MVP awards?", options: ["Michael Jordan", "LeBron James", "Magic Johnson", "Tim Duncan"], answer: 0, fact: "Michael Jordan won six Finals MVP awards, one for each of his six championships, the most in NBA history." },
  { q: "Which player won three consecutive regular season MVP awards in the mid-1980s?", options: ["Nikola Jokic", "Larry Bird", "Bill Russell", "Wilt Chamberlain"], answer: 1, fact: "Larry Bird won three consecutive MVP awards from 1984 to 1986, one of only a few players to achieve this feat." },
  { q: "Which player became the first to win MVP unanimously, in 2015-16?", options: ["LeBron James", "Stephen Curry", "Kevin Durant", "James Harden"], answer: 1, fact: "Stephen Curry became the first unanimous MVP in NBA history in 2015-16, receiving every possible first-place vote." },
  { q: "Which franchises have gone the longest without ever winning an NBA championship?", options: ["LA Clippers", "Sacramento Kings", "Utah Jazz", "All of the above"], answer: 3, fact: "The Clippers, Kings, and Jazz have each gone without a championship despite decades in the league." },
  { q: "Which team has the longest active championship drought among teams that have never won a title?", options: ["LA Clippers", "Phoenix Suns", "Charlotte Hornets", "Minnesota Timberwolves"], answer: 0, fact: "The LA Clippers franchise, dating back to 1970, has never won an NBA championship — the longest title-less tenure among non-expansion-era teams." },
  { q: "What is the term for a basketball move where a player fakes a shot to make a defender jump?", options: ["Pump fake", "Crossover", "Euro step", "Hesitation"], answer: 0, fact: "A 'pump fake' is a shooting fake used to draw a defender into the air, often leading to a foul or open shot." },
  { q: "Which player is widely credited with popularizing the 'Euro step' move in the NBA?", options: ["Manu Ginobili", "Dirk Nowitzki", "Sarunas Marciulionis", "James Harden"], answer: 2, fact: "Lithuanian guard Sarunas Marciulionis is often credited with bringing the Euro step to the NBA in the late 1980s, though it's been popularized by many since." },
  { q: "Who is the first European-trained player to be inducted into the Naismith Memorial Basketball Hall of Fame as a player?", options: ["Dirk Nowitzki", "Drazen Petrovic", "Arvydas Sabonis", "Toni Kukoc"], answer: 2, fact: "Arvydas Sabonis, the Lithuanian center, was inducted into the Hall of Fame in 2011, recognized for his international and brief NBA career." },
  { q: "Which player is the first German-born player to win an NBA championship as a starter and Finals MVP?", options: ["Detlef Schrempf", "Dirk Nowitzki", "Dennis Schroder", "Franz Wagner"], answer: 1, fact: "Dirk Nowitzki led the Dallas Mavericks to the 2011 championship and won Finals MVP, becoming an iconic international NBA star." },
  { q: "Which country has produced the most international (non-U.S.-born) players in NBA history?", options: ["Canada", "France", "Spain", "Australia"], answer: 0, fact: "Canada has produced more NBA players than any other non-U.S. country, including stars like Steve Nash, Andrew Wiggins, and Shai Gilgeous-Alexander." },
  { q: "Which Canadian-raised point guard won back-to-back MVP awards in 2005 and 2006?", options: ["Steve Nash", "Tristan Thompson", "Jamal Murray", "Kelly Olynyk"], answer: 0, fact: "Steve Nash, born in South Africa and raised in Canada, won consecutive MVP awards with the Phoenix Suns in 2005 and 2006." },
  { q: "Which player became the first Greek-born player to win an NBA MVP award?", options: ["Giannis Antetokounmpo", "Nikos Galis", "Vassilis Spanoulis", "Kostas Antetokounmpo"], answer: 0, fact: "Giannis Antetokounmpo won back-to-back MVP awards in 2019 and 2020, becoming the first Greek-born MVP in NBA history." },
  { q: "Which Antetokounmpo brothers have all played in the NBA?", options: ["Giannis and Thanasis only", "Giannis, Thanasis, and Kostas", "All four brothers", "Giannis only"], answer: 1, fact: "Giannis, Thanasis, and Kostas Antetokounmpo have all played in the NBA, while their other brother Alex has played professionally overseas." },
  { q: "Which Serbian center won the regular season MVP award in 2021, 2022, and 2024?", options: ["Nikola Jokic", "Bogdan Bogdanovic", "Nikola Vucevic", "Boban Marjanovic"], answer: 0, fact: "Nikola Jokic won MVP in 2021, 2022, and 2024, joining an elite group of multi-time award winners." },
  { q: "Which Slovenian player set numerous youngest-ever scoring and triple-double records after entering the NBA in 2018?", options: ["Goran Dragic", "Luka Doncic", "Vlatko Cancar", "Klemen Prepelic"], answer: 1, fact: "Luka Doncic set multiple youngest-ever playoff and regular-season triple-double records shortly after entering the NBA in 2018." },
  { q: "Which player holds the record for most points scored by a teenager in NBA history?", options: ["LeBron James", "Kevin Durant", "Luka Doncic", "Brandon Ingram"], answer: 0, fact: "LeBron James set numerous teenage scoring records as a rookie and second-year player with the Cleveland Cavaliers." },
  { q: "Which team did Kevin Durant join in a widely discussed 2016 free agency move?", options: ["Golden State Warriors", "Miami Heat", "Brooklyn Nets", "Los Angeles Lakers"], answer: 0, fact: "Kevin Durant left the Oklahoma City Thunder to sign with the Golden State Warriors in the 2016 offseason, sparking major NBA discourse." },
  { q: "Which three players formed Miami's 'Big Three' starting in 2010?", options: ["LeBron, Wade, Bosh", "LeBron, Wade, Allen", "Wade, Shaq, Bosh", "LeBron, Bosh, Haslem"], answer: 0, fact: "LeBron James, Dwyane Wade, and Chris Bosh formed Miami's 'Big Three,' joined later by veterans like Ray Allen for the 2012-13 title run." },
  { q: "What term describes the modern trend of versatile players who aren't limited to a single traditional position?", options: ["Stretch four", "Positionless basketball", "Combo guard", "Tweener"], answer: 1, fact: "'Positionless basketball' describes the modern trend of versatile players who aren't limited to a single traditional position." },
  { q: "What is a 'stretch four' in basketball terminology?", options: ["A power forward who shoots threes", "A center who never shoots", "A guard who plays forward", "A defensive specialist"], answer: 0, fact: "A 'stretch four' is a power forward with the range to shoot three-pointers, spacing the floor for teammates." },
  { q: "Which player is often credited as one of the first true 'stretch fours' in NBA history?", options: ["Dirk Nowitzki", "Karl Malone", "Tim Duncan", "Charles Barkley"], answer: 0, fact: "Dirk Nowitzki's combination of size and outside shooting helped popularize the modern stretch-four archetype." },
  { q: "What does 'and-one' mean in basketball slang?", options: ["A made basket plus a foul shot opportunity", "A two-for-one possession", "An overtime period", "A technical foul"], answer: 0, fact: "An 'and-one' occurs when a player is fouled while making a basket, earning one additional free throw." },
  { q: "What is the term for a defensive violation when a defender stays in the lane too long without guarding anyone?", options: ["Illegal defense", "Defensive three-second violation", "Zone violation", "Lane infraction"], answer: 1, fact: "The defensive three-second violation penalizes a defender for camping in the paint without actively guarding an opponent." },
  { q: "What is the maximum number of personal fouls a player can commit before being ejected (fouling out) in the NBA?", options: ["4", "5", "6", "7"], answer: 2, fact: "NBA players foul out after committing 6 personal fouls in a game (college rules use 5)." },
  { q: "How many points is a successful shot from beyond the three-point arc worth?", options: ["2", "3", "4", "Varies by distance"], answer: 1, fact: "Any successful field goal attempted from beyond the three-point line is worth three points, regardless of additional distance." },
  { q: "What is the standard length of an NBA basketball court?", options: ["84 feet", "90 feet", "94 feet", "100 feet"], answer: 2, fact: "An NBA court measures 94 feet long by 50 feet wide." },
  { q: "How long is the NBA's regular shot clock?", options: ["20 seconds", "24 seconds", "30 seconds", "35 seconds"], answer: 1, fact: "NBA teams have 24 seconds to attempt a shot once they gain possession, the original shot clock length introduced in 1954." },
  { q: "How many minutes are in a standard NBA regulation game?", options: ["40 minutes", "44 minutes", "48 minutes", "52 minutes"], answer: 2, fact: "An NBA game consists of four 12-minute quarters, totaling 48 minutes of regulation play." }
];

const ROUND_SIZE = 10;
const TIME_PER_QUESTION = 15;
const HIGH_SCORE_KEY = "nbaTriviaHighScore";
const DARK_MODE_KEY = "nbaTriviaDarkMode";

let pool = [];
let idx = 0;
let score = 0;
let answered = false;
let timeLeft = TIME_PER_QUESTION;
let timerId = null;
let paused = false;

const appEl = document.getElementById("app");
const highscoreValueEl = document.getElementById("highscore-value");
const darkToggleBtn = document.getElementById("dark-toggle");

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getHighScore() {
  return Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
}

function setHighScore(value) {
  localStorage.setItem(HIGH_SCORE_KEY, String(value));
  highscoreValueEl.textContent = `${value} / ${ROUND_SIZE}`;
}

function refreshHighScoreDisplay() {
  highscoreValueEl.textContent = `${getHighScore()} / ${ROUND_SIZE}`;
}

function initDarkMode() {
  const stored = localStorage.getItem(DARK_MODE_KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = stored !== null ? stored === "true" : prefersDark;
  document.body.classList.toggle("dark", isDark);
  darkToggleBtn.textContent = isDark ? "☀️" : "🌙";
}

darkToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  darkToggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem(DARK_MODE_KEY, String(isDark));
});

function newRound() {
  pool = shuffle(QUESTIONS).slice(0, Math.min(ROUND_SIZE, QUESTIONS.length));
  idx = 0;
  score = 0;
  render();
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  stopTimer();
  timerId = setInterval(() => {
    if (paused) return;
    timeLeft -= 1;
    updateTimerUI();
    if (timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function updateTimerUI() {
  const fill = document.getElementById("timer-fill");
  const num = document.getElementById("timer-num");
  if (!fill || !num) return;
  const pct = Math.max(0, (timeLeft / TIME_PER_QUESTION) * 100);
  fill.style.width = `${pct}%`;
  fill.classList.toggle("low", timeLeft <= 5);
  num.textContent = `${Math.max(0, timeLeft)}s`;
}

function handleTimeout() {
  if (answered) return;
  selectOption(-1);
}

function render() {
  stopTimer();
  paused = false;

  if (idx >= pool.length) {
    const best = getHighScore();
    const isNewBest = score > best;
    if (isNewBest) setHighScore(score);

    appEl.innerHTML = `
      <div class="results">
        <p class="score-label">Final score</p>
        <p class="score-value">${score} / ${pool.length}</p>
        ${isNewBest ? `<div class="new-best">New high score!</div><br>` : ""}
        <button class="restart-btn" id="restart-btn">Play again</button>
      </div>
    `;
    document.getElementById("restart-btn").addEventListener("click", newRound);
    return;
  }

  answered = false;
  timeLeft = TIME_PER_QUESTION;
  const item = pool[idx];

  appEl.innerHTML = `
    <div class="meta-row">
      <span>Question ${idx + 1} of ${pool.length}</span>
      <span>Score: ${score}</span>
    </div>
    <div class="timer-row">
      <div class="timer-track"><div class="timer-fill" id="timer-fill"></div></div>
      <span class="timer-num" id="timer-num">${TIME_PER_QUESTION}s</span>
      <button class="pause-btn" id="pause-btn">Pause</button>
    </div>
    <p class="question-text">${item.q}</p>
    <div class="options" id="options"></div>
    <div class="feedback" id="feedback"></div>
    <div class="action-row">
      <button class="next-btn" id="next-btn" style="display:none;">
        ${idx === pool.length - 1 ? "See results" : "Next question"}
      </button>
    </div>
  `;

  const optionsEl = document.getElementById("options");
  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(i));
    optionsEl.appendChild(btn);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    idx += 1;
    render();
  });

  document.getElementById("pause-btn").addEventListener("click", togglePause);

  updateTimerUI();
  startTimer();
}

function togglePause() {
  if (answered) return;
  paused = !paused;
  const btn = document.getElementById("pause-btn");
  if (btn) btn.textContent = paused ? "Resume" : "Pause";
}

function selectOption(i) {
  if (answered) return;
  answered = true;
  stopTimer();

  const item = pool[idx];
  const correct = i === item.answer;
  if (correct) score += 1;

  const buttons = document.querySelectorAll("#options .option-btn");
  buttons.forEach((b, bi) => {
    if (bi === item.answer) {
      b.classList.add("correct");
    } else if (bi === i) {
      b.classList.add("wrong");
    }
    b.disabled = true;
  });

  const feedback = document.getElementById("feedback");
  const verdictText = i === -1 ? "Time's up!" : correct ? "Correct!" : "Not quite.";
  const verdictClass = correct ? "correct" : "wrong";
  feedback.innerHTML = `<span class="verdict ${verdictClass}">${verdictText}</span><br>${item.fact}`;

  const pauseBtn = document.getElementById("pause-btn");
  if (pauseBtn) pauseBtn.disabled = true;

  document.getElementById("next-btn").style.display = "inline-block";
}

initDarkMode();
refreshHighScoreDisplay();
newRound();
