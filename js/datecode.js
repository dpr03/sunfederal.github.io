var datetime=new Date,d=datetime.getDate(),day=datetime.getDay(),month=datetime.getMonth(),year=datetime.getYear(),cHour=datetime.getHours(),cMin=datetime.getMinutes();year<1e3&&(year+=1900);var days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),months=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),ReportDate=months[month]+" "+d+", "+year;$(".date").html("<span>"+ReportDate+"</span>");var ReportDateMMDDYY=month+1+"/"+d+"/"+(year-2e3);if(0==month){if(d<20)var DIMessage=" ";if(d>14&&d<20)DIMessage="Online Account Access Maintenance:<br  />Sunday, January 19; 12:00 - 4:00 a.m. EST<br  /> ";if(d>23&&d<26)DIMessage="Online Account Access Maintenance:<br  />January 25 &amp; 26; 3:00 - 6:00 a.m. EST<br  /> ";if(26==d)DIMessage="Online Account Access Maintenance:<br  />Sunday, January 26; 3:00 - 6:00 a.m. EST<br  /> ";if(d>26)DIMessage=" "}if(1==month){if(d<27)DIMessage=" ";if(d>25&&d<28)DIMessage="Online Account Access Maintenance:<br  />Sunday, March 2; 12:00 - 6:00 a.m. EST<br  />";if(28==d)DIMessage="Online Account Access Maintenance:<br  />Sunday, March 2; 12:00 - 6:00 a.m. EST<br  />"}if(2==month){if(1==d)DIMessage="Online Account Access Maintenance:<br />Sunday, March 2; 12:00 â€“ 6:00 a.m. EST<br />";if(2==d){if(cHour<6)DIMessage="Online Account Access Maintenance:<br />Sunday, March 2; 12:00 â€“ 6:00 a.m. EST<br />";if(cHour>=6)DIMessage=""}if(d>2&&d<13)DIMessage=" ";if(d<15||15==d&&cHour<9)DIMessage="Online Account Access Maintenance:<br  />Saturday, March 15, 3:00 - 9:00 a.m.<br  />";if(15==d&&cHour>=9||16==d&&cHour<18)DIMessage="eStatement Maintenance:<br  />March 15, 6:00 p.m. - March 16, 6:00 p.m. EST<br  />";if(16==d&&cHour>=18)DIMessage=" ";if(d>18&&d<23)DIMessage="Online Account Access Maintenance:<br  />Saturday, March 23, 12:30 a.m. - 4:30 a.m.<br  />";if(23==d&&cHour<5)DIMessage="Online Account Access Maintenance:<br  />Saturday, March 23, 12:30 a.m. - 4:30 a.m.<br  />";if(23==d&&cHour>=5)DIMessage=" ";if(d>23)DIMessage=" "}if(3==month){if(d<16)DIMessage=" ";if(d>15&&d<19)DIMessage="Online Account Access Maintenance:<br  />Saturday, April 19, 12:30 a.m. - 4:30 a.m.<br  />";if(19==d&&cHour<4||19==d&&4==cHour&&cMin<30)DIMessage="Online Account Access Maintenance:<br  />Saturday, April 19, 12:30 a.m. - 4:30 a.m.<br  />";if(19==d&&4==cHour&&cMin>=30||19==d&&cHour>=5)DIMessage="";if(d>19)DIMessage=" "}if(4==month){if(d<4)DIMessage=" ";if(d>3&&d<10)DIMessage="Purchase Rewards Tool Unavailable:<br  />May 6: 9:00 PM  - May 9: 9:00 PM; ";if(d>9&&d<10)DIMessage="Purchase Rewards Tool Unavailable:<br  />May 6: 9:00 PM  - May 9: 9:00 PM; ";if(d>11&&d<14)DIMessage="  ";if(d>13&&d<16)DIMessage="  ";if(d>15&&d<21)DIMessage="Coming May 20:<br />View Cleared Bill Pay Checks!";if(27==d)DIMessage="Bill Pay Unavailable:<br  />Tuesday, May 27, 11:00 PM - May 28, 1:00 AM ";if(d>27)DIMessage="  "}if(5==month){if(d<30)DIMessage=" ";if(30==d)DIMessage=" "}if(6==month){if(d<7)DIMessage=" ";if(d>6&&d<10)DIMessage=" ";if(d>9&&d<12)DIMessage=" ";if(d>11&&d<15)DIMessage=" ";if(d>14&&d<25)DIMessage=" ";if(d>24&&d<28)DIMessage="Online Account Access Maintenance:<br  />Sunday, July 27; 12:30 - 4:30 a.m. EST<br  />";if(d>27)DIMessage=" "}if(7==month){if(d<6)DIMessage=" ";if(d>5&&d<11)DIMessage="Online Account Access Maintenance:<br  />Sunday, August 10; 12:30 - 4:30 a.m. EST<br  /> ";if(d>10&&d<21)DIMessage=" ";if(d>20&&d<25)DIMessage="Online Account Access Maintenance:<br  />Sunday, August 24; 12:30 - 4:30 a.m. EST<br  />";if(d>24)DIMessage=" "}if(8==month){if(d<4)DIMessage=" ";if(d>3&&d<8)DIMessage="Online Account Access Maintenance:<br  />Sunday, September 7; 12:30 - 4:30 a.m. EST<br  />";if(d>7&&d<16)DIMessage=" ";if(d>15&&d<20)DIMessage="Online Account Access Maintenance:<br  />Friday, September 19; 3:00 - 6:00 a.m. EST<br  /> ";if(d>19&&d<24)DIMessage=" ";if(d>23&&d<29)DIMessage="Online Account Services Maintenance:<br  />9/27 @ 10 PM through 9/28 @ 4:30 a.m. EST<br  />";if(d>28)DIMessage=" "}if(9==month){if(d<9)DIMessage=" ";if(d>8&&d<13)DIMessage="Online Account Access Maintenance:<br  />Sunday, October 12; 12:30 - 4:30 a.m. EST<br  /> ";if(d>12&&d<24)DIMessage=" ";if(d>23&&d<27)DIMessage="  ";if(d>26)DIMessage=" "}if(10==month){if(d<7)DIMessage=" ";if(d>6&&d<10)DIMessage="Online Account Access Maintenance:<br  />Sunday, November 9; 12:30 - 4:30 a.m. EST<br  /> ";if(d>9&&d<14)DIMessage=" ";if(d>13&&d<19)DIMessage="Online Account Access Maintenance:<br  />November 18; 11:00 p.m. - 1:00 a.m. EST<br  />  ";if(d>18&&d<25)DIMessage="Online Account Access Maintenance:<br  />November 23-24<br  />  ";if(d>24)DIMessage=" "}if(11==month){if(d<12)DIMessage=" ";if(d>11&&d<15)DIMessage="Online Account Access Maintenance:<br  />Sunday, November 23; 12:30 - 4:30 a.m. EST<br  /> ";if(d>14)DIMessage=" "}