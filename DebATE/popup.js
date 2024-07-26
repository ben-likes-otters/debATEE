async function updatedarchiveph(url) {
    console.log("bonjour")

    try {
        var responsetext = await fetch("https://archive.ph/"+url).then((response) => {
            return response.text();
        });
        
        if (responsetext.includes(">No results<")) {
            newresponsetext = await fetch("https://corsproxy.io/?https://archive.ph/?url="+url).then((response) => {
                return response.text();
            });
            
            //console.log(newresponsetext);
            var submitid = newresponsetext;
            submitid = submitid.slice(submitid.indexOf("type=\"hidden\""));
            //console.log(submitid);
            submitid = submitid.slice(submitid.indexOf("value="));
            submitid = submitid.slice(submitid.indexOf("\"")+1);
            submitid = submitid.slice(0, submitid.indexOf("\""));
            //console.log(submitid);
            submitid = encodeURIComponent(submitid);
            return "https://archive.ph/submit/?submitid="+submitid+"&url="+url;
        } else {
            //console.log(xmlHttp.responseText)
            var righturl = responsetext;
            //console.log(responsetext)
            righturl = righturl.slice(righturl.indexOf("TEXT-BLOCK"))
            righturl = righturl.slice(righturl.indexOf("archive.ph"))
            righturl = righturl.slice(0,righturl.indexOf("\""))
            //console.log("line 31"+righturl)
            return "https://"+righturl
        }
    } catch (error) {
        console.error("caught\n"+error)
        return "https://archive.ph/"+url
    }
}

async function updatedarchiveis(url) {
    console.log("bonjour")

    try {
        var responsetext = await fetch("https://archive.is/"+url).then((response) => {
            return response.text();
        });
        
        if (responsetext.includes(">No results<")) {
            newresponsetext = await fetch("https://corsproxy.io/?https://archive.is/?url="+url).then((response) => {
                return response.text();
            });
            
            //console.log(newresponsetext);
            var submitid = newresponsetext;
            submitid = submitid.slice(submitid.indexOf("type=\"hidden\""));
            //console.log(submitid);
            submitid = submitid.slice(submitid.indexOf("value="));
            submitid = submitid.slice(submitid.indexOf("\"")+1);
            submitid = submitid.slice(0, submitid.indexOf("\""));
            //console.log(submitid);
            submitid = encodeURIComponent(submitid);
            return "https://archive.is/submit/?submitid="+submitid+"&url="+url;
        } else {
            //console.log(xmlHttp.responseText)
            var righturl = responsetext;
            //console.log(responsetext)
            righturl = righturl.slice(righturl.indexOf("TEXT-BLOCK"))
            righturl = righturl.slice(righturl.indexOf("archive.is"))
            righturl = righturl.slice(0,righturl.indexOf("\""))
            //console.log("line 31"+righturl)
            return "https://"+righturl
        }
    } catch (error) {
        console.error("caught\n"+error)
        return "https://archive.is/"+url
    }
}


function getfinalarchiveph(url) {
    /*fetch('https://corsproxy.io/?https://archive.ph/'+url,).then(r => r.text()).then(result => {
        // Result now contains the response text, do what you want...
        console.log(result);
    })*/
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://archive.ph/"+url, false); // false for synchronous request
        xmlHttp.timeout = 2000;
        xmlHttp.send(null);
        
        if (xmlHttp.responseText.includes(">No results<")) {
            xmlHttp.open("GET", "https://corsproxy.io/?https://archive.ph/?url="+url, false);
            xmlHttp.timeout = 2000;
            xmlHttp.send(null);
            //console.log(xmlHttp.responseText);
            var submitid = xmlHttp.responseText;
            submitid = submitid.slice(submitid.indexOf("type=\"hidden\""))
            console.log(submitid)
            submitid = submitid.slice(submitid.indexOf("value="))
            submitid = submitid.slice(submitid.indexOf("\"")+1)
            submitid = submitid.slice(0, submitid.indexOf("\""))
            console.log(submitid)
            submitid = encodeURIComponent(submitid);
            return "https://archive.ph/submit/?submitid="+submitid+"&url="+url
        } else {
            //console.log(xmlHttp.responseText)
            var righturl = xmlHttp.responseText;
            //console.log(responsetext)
            righturl = righturl.slice(righturl.indexOf("TEXT-BLOCK"))
            righturl = righturl.slice(righturl.indexOf("archive.ph"))
            righturl = righturl.slice(0,righturl.indexOf("\""))
            console.log(righturl)
            return "https://"+righturl
        }
    } catch (error) {
        console.log("caught\n"+error)
        return "https://archive.ph/"+url
    }
}

function getfinalarchiveis(url) {
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://archive.is/"+url, false); // false for synchronous request
        xmlHttp.timeout = 2000;

        xmlHttp.send(null);
        
        if (xmlHttp.responseText.includes(">No results<")) {
            xmlHttp.open("GET", "https://corsproxy.io/?https://archive.is/?url="+url, false);
            xmlHttp.timeout = 2000;
            xmlHttp.send(null);
            //console.log(xmlHttp.responseText);
            var submitid = xmlHttp.responseText;
            submitid = submitid.slice(submitid.indexOf("type=\"hidden\""))
            console.log(submitid)
            submitid = submitid.slice(submitid.indexOf("value="))
            submitid = submitid.slice(submitid.indexOf("\"")+1)
            submitid = submitid.slice(0, submitid.indexOf("\""))
            console.log(submitid)
            submitid = encodeURIComponent(submitid);
            return "https://archive.is/submit/?submitid="+submitid+"&url="+url
        } else {
            //console.log(xmlHttp.responseText)
            var righturl = xmlHttp.responseText;
            //console.log(responsetext)
            righturl = righturl.slice(righturl.indexOf("TEXT-BLOCK"))
            righturl = righturl.slice(righturl.indexOf("archive.is"))
            righturl = righturl.slice(0,righturl.indexOf("\""))
            console.log(righturl)
            return "https://"+righturl
        }
    } catch {
        return "https://archive.is/"+url
    }
}

function getfinal12ftio(url) {
    return "https://12ft.io/"+url
}
function nth_occurrence(string, char, nth) {
    var first_index = string.indexOf(char);
    var length_up_to_first_index = first_index + 1;

    if (nth == 1) {
        return first_index;
    } else {
        var string_after_first_occurrence = string.slice(length_up_to_first_index);
        var next_occurrence = nth_occurrence(string_after_first_occurrence, char, nth - 1);

        if (next_occurrence === -1) {
            return -1;
        } else {
            return length_up_to_first_index + next_occurrence;
        }
    }
}
Date.CultureInfo = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },
    abbreviatedTimeZoneStandard: {
        GMT: "-000",
        EST: "-0400",
        CST: "-0500",
        MST: "-0600",
        PST: "-0700"
    },
    abbreviatedTimeZoneDST: {
        GMT: "-000",
        EDT: "-0500",
        CDT: "-0600",
        MDT: "-0700",
        PDT: "-0800"
    }
};
Date.getMonthNumberFromName = function(name) {
    var n = Date.CultureInfo.monthNames,
        m = Date.CultureInfo.abbreviatedMonthNames,
        s = name.toLowerCase();
    for (var i = 0; i < n.length; i++) {
        if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
            return i;
        }
    }
    return -1;
};
Date.getDayNumberFromName = function(name) {
    var n = Date.CultureInfo.dayNames,
        m = Date.CultureInfo.abbreviatedDayNames,
        o = Date.CultureInfo.shortestDayNames,
        s = name.toLowerCase();
    for (var i = 0; i < n.length; i++) {
        if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) {
            return i;
        }
    }
    return -1;
};
Date.isLeapYear = function(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};
Date.getDaysInMonth = function(year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.getTimezoneOffset = function(s, dst) {
    return (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];
};
Date.getTimezoneAbbreviation = function(offset, dst) {
    var n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard,
        p;
    for (p in n) {
        if (n[p] === offset) {
            return p;
        }
    }
    return null;
};
Date.prototype.clone = function() {
    return new Date(this.getTime());
};
Date.prototype.compareTo = function(date) {
    if (isNaN(this)) {
        throw new Error(this);
    }
    if (date instanceof Date && !isNaN(date)) {
        return (this > date) ? 1 : (this < date) ? -1 : 0;
    } else {
        throw new TypeError(date);
    }
};
Date.prototype.equals = function(date) {
    return (this.compareTo(date) === 0);
};
Date.prototype.between = function(start, end) {
    var t = this.getTime();
    return t >= start.getTime() && t <= end.getTime();
};
Date.prototype.addMilliseconds = function(value) {
    this.setMilliseconds(this.getMilliseconds() + value);
    return this;
};
Date.prototype.addSeconds = function(value) {
    return this.addMilliseconds(value * 1000);
};
Date.prototype.addMinutes = function(value) {
    return this.addMilliseconds(value * 60000);
};
Date.prototype.addHours = function(value) {
    return this.addMilliseconds(value * 3600000);
};
Date.prototype.addDays = function(value) {
    return this.addMilliseconds(value * 86400000);
};
Date.prototype.addWeeks = function(value) {
    return this.addMilliseconds(value * 604800000);
};
Date.prototype.addMonths = function(value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};
Date.prototype.addYears = function(value) {
    return this.addMonths(value * 12);
};
Date.prototype.add = function(config) {
    if (typeof config == "number") {
        this._orient = config;
        return this;
    }
    var x = config;
    if (x.millisecond || x.milliseconds) {
        this.addMilliseconds(x.millisecond || x.milliseconds);
    }
    if (x.second || x.seconds) {
        this.addSeconds(x.second || x.seconds);
    }
    if (x.minute || x.minutes) {
        this.addMinutes(x.minute || x.minutes);
    }
    if (x.hour || x.hours) {
        this.addHours(x.hour || x.hours);
    }
    if (x.month || x.months) {
        this.addMonths(x.month || x.months);
    }
    if (x.year || x.years) {
        this.addYears(x.year || x.years);
    }
    if (x.day || x.days) {
        this.addDays(x.day || x.days);
    }
    return this;
};
Date._validate = function(value, min, max, name) {
    if (typeof value != "number") {
        throw new TypeError(value + " is not a Number.");
    } else if (value < min || value > max) {
        throw new RangeError(value + " is not a valid value for " + name + ".");
    }
    return true;
};
Date.validateMillisecond = function(n) {
    return Date._validate(n, 0, 999, "milliseconds");
};
Date.validateSecond = function(n) {
    return Date._validate(n, 0, 59, "seconds");
};
Date.validateMinute = function(n) {
    return Date._validate(n, 0, 59, "minutes");
};
Date.validateHour = function(n) {
    return Date._validate(n, 0, 23, "hours");
};
Date.validateDay = function(n, year, month) {
    return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days");
};
Date.validateMonth = function(n) {
    return Date._validate(n, 0, 11, "months");
};
Date.validateYear = function(n) {
    return Date._validate(n, 1, 9999, "seconds");
};
Date.prototype.set = function(config) {
    var x = config;
    if (!x.millisecond && x.millisecond !== 0) {
        x.millisecond = -1;
    }
    if (!x.second && x.second !== 0) {
        x.second = -1;
    }
    if (!x.minute && x.minute !== 0) {
        x.minute = -1;
    }
    if (!x.hour && x.hour !== 0) {
        x.hour = -1;
    }
    if (!x.day && x.day !== 0) {
        x.day = -1;
    }
    if (!x.month && x.month !== 0) {
        x.month = -1;
    }
    if (!x.year && x.year !== 0) {
        x.year = -1;
    }
    if (x.millisecond != -1 && Date.validateMillisecond(x.millisecond)) {
        this.addMilliseconds(x.millisecond - this.getMilliseconds());
    }
    if (x.second != -1 && Date.validateSecond(x.second)) {
        this.addSeconds(x.second - this.getSeconds());
    }
    if (x.minute != -1 && Date.validateMinute(x.minute)) {
        this.addMinutes(x.minute - this.getMinutes());
    }
    if (x.hour != -1 && Date.validateHour(x.hour)) {
        this.addHours(x.hour - this.getHours());
    }
    if (x.month !== -1 && Date.validateMonth(x.month)) {
        this.addMonths(x.month - this.getMonth());
    }
    if (x.year != -1 && Date.validateYear(x.year)) {
        this.addYears(x.year - this.getFullYear());
    }
    if (x.day != -1 && Date.validateDay(x.day, this.getFullYear(), this.getMonth())) {
        this.addDays(x.day - this.getDate());
    }
    if (x.timezone) {
        this.setTimezone(x.timezone);
    }
    if (x.timezoneOffset) {
        this.setTimezoneOffset(x.timezoneOffset);
    }
    return this;
};
Date.prototype.clearTime = function() {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};
Date.prototype.isLeapYear = function() {
    var y = this.getFullYear();
    return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0));
};
Date.prototype.isWeekday = function() {
    return !(this.is()
        .sat() || this.is()
        .sun());
};
Date.prototype.getDaysInMonth = function() {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.moveToFirstDayOfMonth = function() {
    return this.set({
        day: 1
    });
};
Date.prototype.moveToLastDayOfMonth = function() {
    return this.set({
        day: this.getDaysInMonth()
    });
};
Date.prototype.moveToDayOfWeek = function(day, orient) {
    var diff = (day - this.getDay() + 7 * (orient || +1)) % 7;
    return this.addDays((diff === 0) ? diff += 7 * (orient || +1) : diff);
};
Date.prototype.moveToMonth = function(month, orient) {
    var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12;
    return this.addMonths((diff === 0) ? diff += 12 * (orient || +1) : diff);
};
Date.prototype.getDayOfYear = function() {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000);
};
Date.prototype.getWeekOfYear = function(firstDayOfWeek) {
    var y = this.getFullYear(),
        m = this.getMonth(),
        d = this.getDate();
    var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek;
    var offset = 7 + 1 - new Date(y, 0, 1)
        .getDay();
    if (offset == 8) {
        offset = 1;
    }
    var daynum = ((Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000) + 1;
    var w = Math.floor((daynum - offset + 7) / 7);
    if (w === dow) {
        y--;
        var prevOffset = 7 + 1 - new Date(y, 0, 1)
            .getDay();
        if (prevOffset == 2 || prevOffset == 8) {
            w = 53;
        } else {
            w = 52;
        }
    }
    return w;
};
Date.prototype.isDST = function() {
    return this.toString()
        .match(/(E|C|M|P)(S|D)T/)[2] == "D";
};
Date.prototype.getTimezone = function() {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST());
};
Date.prototype.setTimezoneOffset = function(s) {
    var here = this.getTimezoneOffset(),
        there = Number(s) * -6 / 10;
    this.addMinutes(there - here);
    return this;
};
Date.prototype.setTimezone = function(s) {
    return this.setTimezoneOffset(Date.getTimezoneOffset(s));
};
Date.prototype.getUTCOffset = function() {
    var n = this.getTimezoneOffset() * -10 / 6,
        r;
    if (n < 0) {
        r = (n - 10000)
            .toString();
        return r[0] + r.substr(2);
    } else {
        r = (n + 10000)
            .toString();
        return "+" + r.substr(1);
    }
};
Date.prototype.getDayName = function(abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()];
};
Date.prototype.getMonthName = function(abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()];
};
Date.prototype._toString = Date.prototype.toString;
Date.prototype.toString = function(format) {
    var self = this;
    var p = function p(s) {
        return (s.toString()
            .length == 1) ? "0" + s : s;
    };
    return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function(format) {
        switch (format) {
            case "hh":
                return p(self.getHours() < 13 ? self.getHours() : (self.getHours() - 12));
            case "h":
                return self.getHours() < 13 ? self.getHours() : (self.getHours() - 12);
            case "HH":
                return p(self.getHours());
            case "H":
                return self.getHours();
            case "mm":
                return p(self.getMinutes());
            case "m":
                return self.getMinutes();
            case "ss":
                return p(self.getSeconds());
            case "s":
                return self.getSeconds();
            case "yyyy":
                return self.getFullYear();
            case "yy":
                return self.getFullYear()
                    .toString()
                    .substring(2, 4);
            case "dddd":
                return self.getDayName();
            case "ddd":
                return self.getDayName(true);
            case "dd":
                return p(self.getDate());
            case "d":
                return self.getDate()
                    .toString();
            case "MMMM":
                return self.getMonthName();
            case "MMM":
                return self.getMonthName(true);
            case "MM":
                return p((self.getMonth() + 1));
            case "M":
                return self.getMonth() + 1;
            case "t":
                return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
            case "tt":
                return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
            case "zzz":
            case "zz":
            case "z":
                return "";
        }
    }) : this._toString();
};
Date.now = function() {
    return new Date();
};
Date.today = function() {
    return Date.now()
        .clearTime();
};
Date.prototype._orient = +1;
Date.prototype.next = function() {
    this._orient = +1;
    return this;
};
Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function() {
    this._orient = -1;
    return this;
};
Date.prototype._is = false;
Date.prototype.is = function() {
    this._is = true;
    return this;
};
Number.prototype._dateElement = "day";
Number.prototype.fromNow = function() {
    var c = {};
    c[this._dateElement] = this;
    return Date.now()
        .add(c);
};
Number.prototype.ago = function() {
    var c = {};
    c[this._dateElement] = this * -1;
    return Date.now()
        .add(c);
};
(function() {
    var $D = Date.prototype,
        $N = Number.prototype;
    var dx = ("sunday monday tuesday wednesday thursday friday saturday")
        .split(/\s/),
        mx = ("january february march april may june july august september october november december")
        .split(/\s/),
        px = ("Millisecond Second Minute Hour Day Week Month Year")
        .split(/\s/),
        de;
    var df = function(n) {
        return function() {
            if (this._is) {
                this._is = false;
                return this.getDay() == n;
            }
            return this.moveToDayOfWeek(n, this._orient);
        };
    };
    for (var i = 0; i < dx.length; i++) {
        $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i);
    }
    var mf = function(n) {
        return function() {
            if (this._is) {
                this._is = false;
                return this.getMonth() === n;
            }
            return this.moveToMonth(n, this._orient);
        };
    };
    for (var j = 0; j < mx.length; j++) {
        $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j);
    }
    var ef = function(j) {
        return function() {
            if (j.substring(j.length - 1) != "s") {
                j += "s";
            }
            return this["add" + j](this._orient);
        };
    };
    var nf = function(n) {
        return function() {
            this._dateElement = n;
            return this;
        };
    };
    for (var k = 0; k < px.length; k++) {
        de = px[k].toLowerCase();
        $D[de] = $D[de + "s"] = ef(px[k]);
        $N[de] = $N[de + "s"] = nf(de);
    }
}());
Date.prototype.toJSONString = function() {
    return this.toString("yyyy-MM-ddThh:mm:ssZ");
};
Date.prototype.toShortDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);
};
Date.prototype.toLongDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);
};
Date.prototype.toShortTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);
};
Date.prototype.toLongTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);
};
Date.prototype.getOrdinal = function() {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
};
(function() {
    Date.Parsing = {
        Exception: function(s) {
            this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
        }
    };
    var $P = Date.Parsing;
    var _ = $P.Operators = {
        rtoken: function(r) {
            return function(s) {
                var mx = s.match(r);
                if (mx) {
                    return ([mx[0], s.substring(mx[0].length)]);
                } else {
                    throw new $P.Exception(s);
                }
            };
        },
        token: function(s) {
            return function(s) {
                return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s);
            };
        },
        stoken: function(s) {
            return _.rtoken(new RegExp("^" + s));
        },
        until: function(p) {
            return function(s) {
                var qx = [],
                    rx = null;
                while (s.length) {
                    try {
                        rx = p.call(this, s);
                    } catch (e) {
                        qx.push(rx[0]);
                        s = rx[1];
                        continue;
                    }
                    break;
                }
                return [qx, s];
            };
        },
        many: function(p) {
            return function(s) {
                var rx = [],
                    r = null;
                while (s.length) {
                    try {
                        r = p.call(this, s);
                    } catch (e) {
                        return [rx, s];
                    }
                    rx.push(r[0]);
                    s = r[1];
                }
                return [rx, s];
            };
        },
        optional: function(p) {
            return function(s) {
                var r = null;
                try {
                    r = p.call(this, s);
                } catch (e) {
                    return [null, s];
                }
                return [r[0], r[1]];
            };
        },
        not: function(p) {
            return function(s) {
                try {
                    p.call(this, s);
                } catch (e) {
                    return [null, s];
                }
                throw new $P.Exception(s);
            };
        },
        ignore: function(p) {
            return p ? function(s) {
                var r = null;
                r = p.call(this, s);
                return [null, r[1]];
            } : null;
        },
        product: function() {
            var px = arguments[0],
                qx = Array.prototype.slice.call(arguments, 1),
                rx = [];
            for (var i = 0; i < px.length; i++) {
                rx.push(_.each(px[i], qx));
            }
            return rx;
        },
        cache: function(rule) {
            var cache = {},
                r = null;
            return function(s) {
                try {
                    r = cache[s] = (cache[s] || rule.call(this, s));
                } catch (e) {
                    r = cache[s] = e;
                }
                if (r instanceof $P.Exception) {
                    throw r;
                } else {
                    return r;
                }
            };
        },
        any: function() {
            var px = arguments;
            return function(s) {
                var r = null;
                for (var i = 0; i < px.length; i++) {
                    if (px[i] == null) {
                        continue;
                    }
                    try {
                        r = (px[i].call(this, s));
                    } catch (e) {
                        r = null;
                    }
                    if (r) {
                        return r;
                    }
                }
                throw new $P.Exception(s);
            };
        },
        each: function() {
            var px = arguments;
            return function(s) {
                var rx = [],
                    r = null;
                for (var i = 0; i < px.length; i++) {
                    if (px[i] == null) {
                        continue;
                    }
                    try {
                        r = (px[i].call(this, s));
                    } catch (e) {
                        throw new $P.Exception(s);
                    }
                    rx.push(r[0]);
                    s = r[1];
                }
                return [rx, s];
            };
        },
        all: function() {
            var px = arguments,
                _ = _;
            return _.each(_.optional(px));
        },
        sequence: function(px, d, c) {
            d = d || _.rtoken(/^\s*/);
            c = c || null;
            if (px.length == 1) {
                return px[0];
            }
            return function(s) {
                var r = null,
                    q = null;
                var rx = [];
                for (var i = 0; i < px.length; i++) {
                    try {
                        r = px[i].call(this, s);
                    } catch (e) {
                        break;
                    }
                    rx.push(r[0]);
                    try {
                        q = d.call(this, r[1]);
                    } catch (ex) {
                        q = null;
                        break;
                    }
                    s = q[1];
                }
                if (!r) {
                    throw new $P.Exception(s);
                }
                if (q) {
                    throw new $P.Exception(q[1]);
                }
                if (c) {
                    try {
                        r = c.call(this, r[1]);
                    } catch (ey) {
                        throw new $P.Exception(r[1]);
                    }
                }
                return [rx, (r ? r[1] : s)];
            };
        },
        between: function(d1, p, d2) {
            d2 = d2 || d1;
            var _fn = _.each(_.ignore(d1), p, _.ignore(d2));
            return function(s) {
                var rx = _fn.call(this, s);
                return [
                    [rx[0][0], r[0][2]], rx[1]
                ];
            };
        },
        list: function(p, d, c) {
            d = d || _.rtoken(/^\s*/);
            c = c || null;
            return (p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c)));
        },
        set: function(px, d, c) {
            d = d || _.rtoken(/^\s*/);
            c = c || null;
            return function(s) {
                var r = null,
                    p = null,
                    q = null,
                    rx = null,
                    best = [
                        [], s
                    ],
                    last = false;
                for (var i = 0; i < px.length; i++) {
                    q = null;
                    p = null;
                    r = null;
                    last = (px.length == 1);
                    try {
                        r = px[i].call(this, s);
                    } catch (e) {
                        continue;
                    }
                    rx = [
                        [r[0]], r[1]
                    ];
                    if (r[1].length > 0 && !last) {
                        try {
                            q = d.call(this, r[1]);
                        } catch (ex) {
                            last = true;
                        }
                    } else {
                        last = true;
                    }
                    if (!last && q[1].length === 0) {
                        last = true;
                    }
                    if (!last) {
                        var qx = [];
                        for (var j = 0; j < px.length; j++) {
                            if (i != j) {
                                qx.push(px[j]);
                            }
                        }
                        p = _.set(qx, d)
                            .call(this, q[1]);
                        if (p[0].length > 0) {
                            rx[0] = rx[0].concat(p[0]);
                            rx[1] = p[1];
                        }
                    }
                    if (rx[1].length < best[1].length) {
                        best = rx;
                    }
                    if (best[1].length === 0) {
                        break;
                    }
                }
                if (best[0].length === 0) {
                    return best;
                }
                if (c) {
                    try {
                        q = c.call(this, best[1]);
                    } catch (ey) {
                        throw new $P.Exception(best[1]);
                    }
                    best[1] = q[1];
                }
                return best;
            };
        },
        forward: function(gr, fname) {
            return function(s) {
                return gr[fname].call(this, s);
            };
        },
        replace: function(rule, repl) {
            return function(s) {
                var r = rule.call(this, s);
                return [repl, r[1]];
            };
        },
        process: function(rule, fn) {
            return function(s) {
                var r = rule.call(this, s);
                return [fn.call(this, r[0]), r[1]];
            };
        },
        min: function(min, rule) {
            return function(s) {
                var rx = rule.call(this, s);
                if (rx[0].length < min) {
                    throw new $P.Exception(s);
                }
                return rx;
            };
        }
    };
    var _generator = function(op) {
        return function() {
            var args = null,
                rx = [];
            if (arguments.length > 1) {
                args = Array.prototype.slice.call(arguments);
            } else if (arguments[0] instanceof Array) {
                args = arguments[0];
            }
            if (args) {
                for (var i = 0, px = args.shift(); i < px.length; i++) {
                    args.unshift(px[i]);
                    rx.push(op.apply(null, args));
                    args.shift();
                    return rx;
                }
            } else {
                return op.apply(null, arguments);
            }
        };
    };
    var gx = "optional not ignore cache".split(/\s/);
    for (var i = 0; i < gx.length; i++) {
        _[gx[i]] = _generator(_[gx[i]]);
    }
    var _vector = function(op) {
        return function() {
            if (arguments[0] instanceof Array) {
                return op.apply(null, arguments[0]);
            } else {
                return op.apply(null, arguments);
            }
        };
    };
    var vx = "each any all".split(/\s/);
    for (var j = 0; j < vx.length; j++) {
        _[vx[j]] = _vector(_[vx[j]]);
    }
}());
(function() {
    var flattenAndCompact = function(ax) {
        var rx = [];
        for (var i = 0; i < ax.length; i++) {
            if (ax[i] instanceof Array) {
                rx = rx.concat(flattenAndCompact(ax[i]));
            } else {
                if (ax[i]) {
                    rx.push(ax[i]);
                }
            }
        }
        return rx;
    };
    Date.Grammar = {};
    Date.Translator = {
        hour: function(s) {
            return function() {
                this.hour = Number(s);
            };
        },
        minute: function(s) {
            return function() {
                this.minute = Number(s);
            };
        },
        second: function(s) {
            return function() {
                this.second = Number(s);
            };
        },
        meridian: function(s) {
            return function() {
                this.meridian = s.slice(0, 1)
                    .toLowerCase();
            };
        },
        timezone: function(s) {
            return function() {
                var n = s.replace(/[^\d\+\-]/g, "");
                if (n.length) {
                    this.timezoneOffset = Number(n);
                } else {
                    this.timezone = s.toLowerCase();
                }
            };
        },
        day: function(x) {
            var s = x[0];
            return function() {
                this.day = Number(s.match(/\d+/)[0]);
            };
        },
        month: function(s) {
            return function() {
                this.month = ((s.length == 3) ? Date.getMonthNumberFromName(s) : (Number(s) - 1));
            };
        },
        year: function(s) {
            return function() {
                var n = Number(s);
                this.year = ((s.length > 2) ? n : (n + (((n + 2000) < Date.CultureInfo.twoDigitYearMax) ? 2000 : 1900)));
            };
        },
        rday: function(s) {
            return function() {
                switch (s) {
                    case "yesterday":
                        this.days = -1;
                        break;
                    case "tomorrow":
                        this.days = 1;
                        break;
                    case "today":
                        this.days = 0;
                        break;
                    case "now":
                        this.days = 0;
                        this.now = true;
                        break;
                }
            };
        },
        finishExact: function(x) {
            x = (x instanceof Array) ? x : [x];
            var now = new Date();
            this.year = now.getFullYear();
            this.month = now.getMonth();
            this.day = 1;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            for (var i = 0; i < x.length; i++) {
                if (x[i]) {
                    x[i].call(this);
                }
            }
            this.hour = (this.meridian == "p" && this.hour < 13) ? this.hour + 12 : this.hour;
            if (this.day > Date.getDaysInMonth(this.year, this.month)) {
                throw new RangeError(this.day + " is not a valid value for days.");
            }
            var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            if (this.timezone) {
                r.set({
                    timezone: this.timezone
                });
            } else if (this.timezoneOffset) {
                r.set({
                    timezoneOffset: this.timezoneOffset
                });
            }
            return r;
        },
        finish: function(x) {
            x = (x instanceof Array) ? flattenAndCompact(x) : [x];
            if (x.length === 0) {
                return null;
            }
            for (var i = 0; i < x.length; i++) {
                if (typeof x[i] == "function") {
                    x[i].call(this);
                }
            }
            if (this.now) {
                return new Date();
            }
            var today = Date.today();
            var method = null;
            var expression = !!(this.days != null || this.orient || this.operator);
            if (expression) {
                var gap, mod, orient;
                orient = ((this.orient == "past" || this.operator == "subtract") ? -1 : 1);
                if (this.weekday) {
                    this.unit = "day";
                    gap = (Date.getDayNumberFromName(this.weekday) - today.getDay());
                    mod = 7;
                    this.days = gap ? ((gap + (orient * mod)) % mod) : (orient * mod);
                }
                if (this.month) {
                    this.unit = "month";
                    gap = (this.month - today.getMonth());
                    mod = 12;
                    this.months = gap ? ((gap + (orient * mod)) % mod) : (orient * mod);
                    this.month = null;
                }
                if (!this.unit) {
                    this.unit = "day";
                }
                if (this[this.unit + "s"] == null || this.operator != null) {
                    if (!this.value) {
                        this.value = 1;
                    }
                    if (this.unit == "week") {
                        this.unit = "day";
                        this.value = this.value * 7;
                    }
                    this[this.unit + "s"] = this.value * orient;
                }
                return today.add(this);
            } else {
                if (this.meridian && this.hour) {
                    this.hour = (this.hour < 13 && this.meridian == "p") ? this.hour + 12 : this.hour;
                }
                if (this.weekday && !this.day) {
                    this.day = (today.addDays((Date.getDayNumberFromName(this.weekday) - today.getDay())))
                        .getDate();
                }
                if (this.month && !this.day) {
                    this.day = 1;
                }
                return today.set(this);
            }
        }
    };
    var _ = Date.Parsing.Operators,
        g = Date.Grammar,
        t = Date.Translator,
        _fn;
    g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);
    g.timePartDelimiter = _.stoken(":");
    g.whiteSpace = _.rtoken(/^\s*/);
    g.generalDelimiter = _.rtoken(/^(([\s\,]|at|on)+)/);
    var _C = {};
    g.ctoken = function(keys) {
        var fn = _C[keys];
        if (!fn) {
            var c = Date.CultureInfo.regexPatterns;
            var kx = keys.split(/\s+/),
                px = [];
            for (var i = 0; i < kx.length; i++) {
                px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
            }
            fn = _C[keys] = _.any.apply(null, px);
        }
        return fn;
    };
    g.ctoken2 = function(key) {
        return _.rtoken(Date.CultureInfo.regexPatterns[key]);
    };
    g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour));
    g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour));
    g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour));
    g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour));
    g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute));
    g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute));
    g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second));
    g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second));
    g.hms = _.cache(_.sequence([g.H, g.mm, g.ss], g.timePartDelimiter));
    g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian));
    g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian));
    g.z = _.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), t.timezone));
    g.zz = _.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/), t.timezone));
    g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone));
    g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([g.tt, g.zzz]));
    g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);
    g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));
    g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day));
    g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function(s) {
        return function() {
            this.weekday = s;
        };
    }));
    g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month));
    g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month));
    g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));
    g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year));
    g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year));
    g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year));
    g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year));
    _fn = function() {
        return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
    };
    g.day = _fn(g.d, g.dd);
    g.month = _fn(g.M, g.MMM);
    g.year = _fn(g.yyyy, g.yy);
    g.orientation = _.process(g.ctoken("past future"), function(s) {
        return function() {
            this.orient = s;
        };
    });
    g.operator = _.process(g.ctoken("add subtract"), function(s) {
        return function() {
            this.operator = s;
        };
    });
    g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);
    g.unit = _.process(g.ctoken("minute hour day week month year"), function(s) {
        return function() {
            this.unit = s;
        };
    });
    g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function(s) {
        return function() {
            this.value = s.replace(/\D/g, "");
        };
    });
    g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM]);
    _fn = function() {
        return _.set(arguments, g.datePartDelimiter);
    };
    g.mdy = _fn(g.ddd, g.month, g.day, g.year);
    g.ymd = _fn(g.ddd, g.year, g.month, g.day);
    g.dmy = _fn(g.ddd, g.day, g.month, g.year);
    g.date = function(s) {
        return ((g[Date.CultureInfo.dateElementOrder] || g.mdy)
            .call(this, s));
    };
    g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(fmt) {
        if (g[fmt]) {
            return g[fmt];
        } else {
            throw Date.Parsing.Exception(fmt);
        }
    }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function(s) {
        return _.ignore(_.stoken(s));
    }))), function(rules) {
        return _.process(_.each.apply(null, rules), t.finishExact);
    });
    var _F = {};
    var _get = function(f) {
        return _F[f] = (_F[f] || g.format(f)[0]);
    };
    g.formats = function(fx) {
        if (fx instanceof Array) {
            var rx = [];
            for (var i = 0; i < fx.length; i++) {
                rx.push(_get(fx[i]));
            }
            return _.any.apply(null, rx);
        } else {
            return _get(fx);
        }
    };
    g._formats = g.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]);
    g._start = _.process(_.set([g.date, g.time, g.expression], g.generalDelimiter, g.whiteSpace), t.finish);
    g.start = function(s) {
        try {
            var r = g._formats.call({}, s);
            if (r[1].length === 0) {
                return r;
            }
        } catch (e) {}
        return g._start.call({}, s);
    };
}());
Date._parse = Date.parse;
Date.parse = function(s) {
    var r = null;
    if (!s) {
        return null;
    }
    try {
        r = Date.Grammar.start.call({}, s);
    } catch (e) {
        return null;
    }
    return ((r[1].length === 0) ? r[0] : null);
};
Date.getParseFunction = function(fx) {
    var fn = Date.Grammar.formats(fx);
    return function(s) {
        var r = null;
        try {
            r = fn.call({}, s);
        } catch (e) {
            return null;
        }
        return ((r[1].length === 0) ? r[0] : null);
    };
};
Date.parseExact = function(s, fx) {
    return Date.getParseFunction(fx)(s);
};


async function computeCite(url) {
    const parser = new DOMParser();
    //var xmlHttp = new XMLHttpRequest();
    var responsexml;
    tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    
    await chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ["getdocumentcode.js"]
    });
    
    responsexml = await chrome.storage.local.get(["document"]);/*.then((result) => {
            responsexml = result["document"];
            console.log("responsexml 1359"+responsexml.substring(0,100));
        });*/
                                                                            
    console.log(responsexml.document);
        
    
    responsexml = parser.parseFromString(responsexml.document,"text/html");
    
    console.log("responsexml 1367");
    console.log(responsexml);

    
    /*fetch("https://corsproxy.io/?"+encodeURIComponent(url)).then((response) => {
        responsetext = response.responseText;
        console.log(responsetext)
    });
    console.log("responsetext"+responsetext)*/
    
    
    //console.log(responsexml);
    //Variable declarations
    var arrDivs;
    var arrSpans;
    var arrMeta;
    var arrAuthors;
    var arrTitles;
    var arrPublications;
    
    var strName;
    var strBodyText;
    var strByLine;
    var n;
    
    var strQuals;
    
    var arrDates;
    var strDate;
    var d;
    var Year;
    var ShortYear;
    var Month;
    var Day;
    
    var strTitle;
    var i;
    
    var strPublication;
    
    var strCite;
    
    var div;
    //Load all Meta tags for use later
    arrMeta = responsexml.getElementsByTagName("meta");
    
    if (typeof strName == 'undefined') {
        arrAuthors = responsexml.getElementsByName("author"); //Try author
        if (arrAuthors.length <= 0) {
            try {
                let parsedJson = JSON.parse(responsexml.querySelectorAll('script[type="application/ld+json"]')[0].innerHTML)
                if (Array.isArray(parsedJson)){
                    parsedJson = parsedJson[0]
                }
                if (parsedJson.author){
                    if (Array.isArray(parsedJson.author)){
                        if (parsedJson.author[0].name){
                            arrAuthors = parsedJson.author[0].name
                        } else {
                            arrAuthors = parsedJson.author[0]
                        }
                        
                    } else {
                        if (parsedJson.author.name){ // if not array but if name object exists
                            arrAuthors = parsedJson.author.name // sets author name
                        } else {
                            arrAuthors = parsedJson.author
                        }
                    }
                }
            }
            catch(err)
            {
                console.log(err)
                console.log("continuing")
            }
            
        }
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("Author")} //Try Author
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("sailthru.author")} //Try sailtru.author
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("byl")} //Try byl
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("byline")} //Try byline
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("DC.creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("dC.creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("dc.creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("Dc.creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("DC.Creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("dC.Creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("dc.Creator")}
        if (arrAuthors.length <= 0) {arrAuthors = responsexml.getElementsByName("Dc.Creator")} //Try DC.creator
        if (arrAuthors.length <= 0) {
            arrAuthors_col = responsexml.getElementsByClassName("authors");
            arrAuthors = Array.prototype.slice.call(arrAuthors_col);
        }
        if (arrAuthors.length <= 0) {
            for (i = 0; i < arrMeta.length; i++) {
                if (arrMeta[i].getAttribute("name") == "ces:authors") {
                    strName = arrMeta[i].content;
                } //Try ces:authors meta tag
            }
        }
        //If anything found, assign the first hit to Name
        if (arrAuthors.length > 0) {
            if (Array.isArray(arrAuthors) || NodeList.prototype.isPrototypeOf(arrAuthors)){
                strName = arrAuthors[0].content;
            } else {
                strName = arrAuthors
            }
        }
    }
    
    //Try to find a div of byline or author class - done separately from regex below for speed, to avoid looping all elements if unnecessary
    if (typeof strName == 'undefined') {
        arrAuthors = responsexml.getElementsByClassName("author");
        if (arrAuthors.length <= 0) {
            arrAuthors = responsexml.getElementsByClassName("byline");
        }
        if (arrAuthors.length > 0) {
            strName = arrAuthors[0].innerText.trim(); //If anything found, assign Name the innerText
            if (strName.indexOf("\n") != -1) {
                strName = strName.slice(0, strName.indexOf("\n") + 1);
            } //Slice end if there's a newline
            if (strName.substring(0, 3) == "By " || strName.substring(0, 3) == "by " || strName.substring(0, 3) == "BY ") {
                strName = strName.slice(3);
            } //Strip "By" from beginning
        }
    }
    
    //Try to find any div with "author" or "byline" in part of the id or classname
    if (typeof strName == 'undefined') {
        //Loop all divs and look for a match
        arrDivs = responsexml.getElementsByTagName("div");
        for (i = 0; i < arrDivs.length; i++) {
            if (arrDivs[i].id.search(/author/i) > -1 || arrDivs[i].className.search(/author/i) > -1 || arrDivs[i].id.search(/byline/i) > -1 || arrDivs[i].className.search(/byline/i) > -1) {
                strName = arrDivs[i].innerText.trim();
                if (strName.indexOf("\n") > 0) {
                    strName = strName.slice(0, strName.indexOf("\n") + 1);
                } //Slice end if there's a newline
                if (strName.substring(0, 3) == "By " || strName.substring(0, 3) == "by " || strName.substring(0, 3) == "BY ") {
                    strName = strName.slice(3);
                } //Strip "By" from beginning
                n = nth_occurrence(strName, ' ', 2); //find 2nd space
                if (n > 0) {
                    strName = strName.slice(0, n)
                    .trim();
                } //slice off everything after 2nd space
                break; //exit after first match
            }
        }
    }
    
    //Try the same thing with spans instead
    if (typeof strName == 'undefined') {
        //Loop all spans and look for a match
        arrSpans = responsexml.getElementsByTagName("span");
        for (i = 0; i < arrSpans.length; i++) {
            if (arrSpans[i].id.search(/author/i) > -1 || arrSpans[i].className.search(/author/i) > -1 || arrSpans[i].id.search(/byline/i) > -1 || arrSpans[i].className.search(/byline/i) > -1) {
                strName = arrSpans[i].innerText.trim();
                if (strName.indexOf("\n") > 0) {
                    strName = strName.slice(0, strName.indexOf("\n") + 1);
                } //Slice end if there's a newline
                if (strName.substring(0, 3) == "By " || strName.substring(0, 3) == "by " || strName.substring(0, 3) == "BY ") {
                    strName = strName.slice(3);
                } //Strip "By" from beginning
                n = nth_occurrence(strName, ' ', 2); //Find 2nd space
                if (n > 0) {
                    strName = strName.slice(0, n)
                    .trim();
                } //Slice off everything after 2nd space
                break; //Exit after first match
            }
        }
    }
    
    //Attempt to manually find byline
    if (typeof strName == 'undefined') {
        strBodyText = responsexml.body.innerText; //Get all text on page
        if (strBodyText.length > 1000) {
            strBodyText = strBodyText.slice(0, 1000);
        } //Slice off after 1000 words to avoid false matches
        n = strBodyText.search(/\bby \b/i); //Find first occurence of "by "
        if (n > -1) { //If match found
            strByLine = strBodyText.slice(n); //Slice off everything before "by"
            if (strByLine.indexOf("\n") != -1) {
                strByLine = strByLine.slice(0, strByLine.indexOf("\n") + 1);
            } //Slice end if there's a newline
            n = nth_occurrence(strByLine, ' ', 3); //Find 3rd space, 1 more than usual to account for By
            strByLine = strByLine.slice(0, n); //slice off everything after 3rd space
            //if (strByLine.indexOf(".") > -1){ //if Byline contains "." for middle initial
            //    n=nth_occurrence(strByLine, ' ', 3); //find 3rd space
            //    strByLine=strByLine.slice(0, n); //slice off end again
            //}
            strName = strByLine.slice(3); //slice off "By "
        }
    }
    
    //Clean up Name if found
    if (typeof strName != 'undefined') {
        //Strip "By" from beginning if it made it through
        if (strName.substring(0, 3) == "By " || strName.substring(0, 3) == "by " || strName.substring(0, 3) == "BY ") {
            strName = strName.slice(3);
        }
        //Strip "The" and "www." from beginning
        if (strName.substring(0, 4) == "The " || strName.substring(0, 4) == "the " || strName.substring(0, 4) == "THE ") {
            strName = strName.slice(4);
        }
        if (strName.substring(0, 4) == "www." || strName.substring(0, 4) == "Www." || strName.substring(0, 4) == "WWW.") {
            strName = strName.slice(4);
        }
        //Strip .Com from end
        if (strName.lastIndexOf(".com") != -1) {
            strName = strName.slice(0, strName.lastIndexOf(".com"));
        }
        if (strName.lastIndexOf(".Com") != -1) {
            strName = strName.slice(0, strName.lastIndexOf(".Com"));
        }
        if (strName.lastIndexOf(".COM") != -1) {
            strName = strName.slice(0, strName.lastIndexOf(".COM"));
        }
        
        //Clean up extra byline info
        if (strName.indexOf("|") != -1) {
            strName = strName.slice(0, strName.indexOf("|") - 1);
        } //Slice off trailing |
        if (strName.indexOf("--") != -1) {
            strName = strName.slice(0, strName.indexOf("--") - 1);
        } //Slice off trailing --
        if (strName.indexOf(" - ") != -1) {
            strName = strName.slice(0, strName.indexOf(" - "));
        } //Slice off trailing -
        if (strName.indexOf("/") != -1) {
            strName = strName.slice(0, strName.indexOf("/"));
        } //Slice off trailing /
        if (strName.indexOf(":") != -1) {
            strName = strName.slice(0, strName.indexOf(":"));
        } //Slice off trailing -
        
        //Make Name title case
        strName = toTitleCase(strName)
        .trim();
        strName = strName.replace(' And ', ' and ');
    }
    
    //Find Date
    
    arrDates = responsexml.getElementsByName("date"); //Try date
    if (arrDates.length <= 0) {
        try {
            let parsedJson = JSON.parse(responsexml.querySelectorAll('script[type="application/ld+json"]')[0].innerHTML)
            
            for (var i = 0; i<parsedJson.length; i++) {
                if (parsedJson[i].datePublished){
                    if (Array.isArray(parsedJson[i].datePublished)){
                        arrDates = parsedJson[i].datePublished[0]
                    } else {
                        arrDates = parsedJson[i].datePublished
                    }
                }

                if (Array.isArray(parsedJson[i])){
                    arrDates = parsedJson[i]
                }
            }
        }
        catch(err)
        {
            console.log(err)
            console.log("continuing")
        }
    }

    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("Date");
    } //Try Date
    
    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("created");
    } //Try created
    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("dat");
    } //Try dat
    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("DC.date");
    } //Try DC.date
    if (arrDates.length <= 0) {
        console.log("finding dc.date")

        arrDates = responsexml.getElementsByName("dc.date");
    } //Try dc.date
    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("DC.date.issued");
        console.log("finding dc.date.issued")

    } //Try DC.date.issued
    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("dc.date.issued");
    } //Try dc.date.issued
    if (arrDates.length <= 0) {
        console.log("finding dcterms.create")

        arrDates = responsexml.getElementsByName("dcterms.created");
    } //Try dcterms.created
    if (arrDates.length <= 0) {
        console.log("finding dcterms.created")

        arrDates = responsexml.getElementsByName("DCterms.created");
    } //Try DCterms.created
    if (arrDates.length <= 0) {
        console.log("finding dcterms.modified")

        arrDates = responsexml.getElementsByName("dcterms.modified");
    } //Try dcterms.modified
    if (arrDates.length <= 0) {
        console.log("finding dcterms.modified")

        arrDates = responsexml.getElementsByName("DCterms.modified");
    } //Try DCterms.modified
    if (arrDates.length <= 0) {
        console.log("finding sailthru.date")

        arrDates = responsexml.getElementsByName("sailthru.date");
    } //Try sailthru.date
    if (arrDates.length <= 0) {
        console.log("finding fm-vol-iss-date")

        arrDates_col = responsexml.getElementsByClassName("fm-vol-iss-date");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    if (arrDates.length <= 0) {
        console.log("finding timestamp")
        arrDates_col = responsexml.getElementsByClassName("timestamp");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    if (arrDates.length <= 0) {
        console.log("finidng revdate")
        arrDates_col = responsexml.getElementsByClassName("revDate");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    if (arrDates.length <= 0) {
        arrDates = responsexml.getElementsByName("citation_date");
    }
    if (arrDates.length <= 0) {
        arrDates_col = responsexml.getElementsByClassName("epub-date");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    if (arrDates.length <= 0) {
        arrDates_col = responsexml.getElementsByClassName("article-header__date-ttr");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    if (arrDates.length <= 0) {
        console.log("finding property datepublished");
        arrDates_col = responsexml.querySelectorAll("span[property=datePublished]");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    if (arrDates.length <= 0) {
        console.log("finding tag time (content)");
        arrDates_tmp = responsexml.getElementsByTagName("time");
        try {
            for (var i = 0; i < arrDates_tmp.length; i++) {
                temp = arrDates_tmp[i].getAttribute("content");
                /*if (temp.includes("T")) {
                 temp = temp.slice(0,temp.indexOf("T"));
                 }*/
                if (temp != null) {
                    arrDates = temp; //slightly weird but i think it works
                    //console.log(arrDates_tmp[i]);
                }
                
            }
        } catch {
            console.log("not found");
        }
    }
    if (arrDates.length <= 0) {
        console.log("finding tag time (datetime)");
        arrDates_tmp = responsexml.getElementsByTagName("time");
        try {
            for (var i = 0; i < arrDates_tmp.length; i++) {
                temp = arrDates_tmp[i].getAttribute("datetime");
                /*if (temp.includes("T")) {
                 temp = temp.slice(0,temp.indexOf("T"));
                 }*/
                if (temp != null) {
                    arrDates = temp; //slightly weird but i think it works
                    //console.log(arrDates_tmp[i]);
                }
                
            }
        } catch {
            console.log("not found");
        }
    }
    
    if (arrDates.length <= 0) {
        console.log("finding node__published");
        arrDates_col = responsexml.getElementsByClassName("node__published");
        arrDates = Array.prototype.slice.call(arrDates_col);
    }
    
    //If anything found, assign it to Date
    if (arrDates.length > 0) {
        console.log("arrdates:");
        console.log(arrDates)
        if (Array.isArray(arrDates) || NodeList.prototype.isPrototypeOf(arrDates)){
            try {
                strDate = arrDates[0].content;
                if (strDate === undefined) {
                    strDate = arrDates[0].innerText
                }
                console.log("strdate: "+strDate)
            } catch {
                console.log("catched")
            }
        } else {
            strDate = arrDates
        }
    } else {
        strBodyText = responsexml.body.innerText; //get all text on page
        if (strBodyText.length > 1500) {
            strBodyText = strBodyText.slice(0, 1500);
        } //slice off after 1500 words to avoid false matches and make search faster
        
        strDate = strBodyText.match(/\b\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})\b/); //Match m/d/yy to mm/dd/yyyy
        if (strDate == null) {
            strDate = strBodyText.match(/\b(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}\b/);
        } //same with -
        if (strDate == null) {
            strDate = strBodyText.match(/\b(1[0-2]|0?[1-9])\.(3[01]|[12][0-9]|0?[1-9])\.(?:[0-9]{2})?[0-9]{2}\b/);
        } //same with .
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match full month name
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)\ (0?[1-9]|([12]\d)|30)(st|nd|rd|th))|(Feb(ruary)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))(st|nd|rd|th)))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match day with st/th/etc
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)(.)?\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)(.)?\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?(.)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match month with period
        if (strDate == null) {
            strDate = strBodyText.match(/\b((31(?!\ (Feb(ruary)?|Apr(il)?|June?|(Sep(?=\b|t)t?|Nov)(ember)?)))|((30|29)(?!\ Feb(ruary)?))|(29(?=\ Feb(ruary)?\ (((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))|(0?[1-9])|1\d|2[0-8])\ (Jan(uary)?|Feb(ruary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sep(?=\b|t)t?|Nov|Dec)(ember)?)\ ((1[6-9]|[2-9]\d)\d{2})\b/);
        } //match dd MMMM yyyy - works to find date but parser sometimes mixes up date/month
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match MMMM dd, yyyy
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((JAN(UARY)?|MA(R(CH)?|Y)|JUL(Y)?|AUG(UST)?|OCT(OBER)?|DEC(EMBER)?)\ 31)|((JAN(UARY)?|MA(R(CH)?|Y)|APR(IL)?|JU((LY?)|(NE?))|AUG(UST)?|OCT(OBER)?|(SEPT|NOV|DEC)(EMBER)?)\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //same with caps
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match MMMM dd yyyy
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((JAN(UARY)?|MA(R(CH)?|Y)|JUL(Y)?|AUG(UST)?|OCT(OBER)?|DEC(EMBER)?)\ 31)|((JAN(UARY)?|MA(R(CH)?|Y)|APR(IL)?|JU((LY?)|(NE?))|AUG(UST)?|OCT(OBER)?|(SEPT|NOV|DEC)(EMBER)?)\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //same with caps
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)\.\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)\.\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\.\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match MMMM. dd yyyy
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((JAN(UARY)?|MA(R(CH)?|Y)|JUL(Y)?|AUG(UST)?|OCT(OBER)?|DEC(EMBER)?)\.\ 31)|((JAN(UARY)?|MA(R(CH)?|Y)|APR(IL)?|JU((LY?)|(NE?))|AUG(UST)?|OCT(OBER)?|(SEPT|NOV|DEC)(EMBER)?)\.\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\.\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //same with caps
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((Jan(uary)?|Ma(r(ch)?|y)|Jul(y)?|Aug(ust)?|Oct(ober)?|Dec(ember)?)\.\ 31)|((Jan(uary)?|Ma(r(ch)?|y)|Apr(il)?|Ju((ly?)|(ne?))|Aug(ust)?|Oct(ober)?|(Sept|Nov|Dec)(ember)?)\.\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\.\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //match MMMM. dd, yyyy
        if (strDate == null) {
            strDate = strBodyText.match(/\b(?:(((JAN(UARY)?|MA(R(CH)?|Y)|JUL(Y)?|AUG(UST)?|OCT(OBER)?|DEC(EMBER)?)\.\ 31)|((JAN(UARY)?|MA(R(CH)?|Y)|APR(IL)?|JU((LY?)|(NE?))|AUG(UST)?|OCT(OBER)?|(SEPT|NOV|DEC)(EMBER)?)\.\ (0?[1-9]|([12]\d)|30))|(Feb(ruary)?\.\ (0?[1-9]|1\d|2[0-8]|(29(?=,\ ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))))\,\ ((1[6-9]|[2-9]\d)\d{2}))\b/);
        } //same with caps
        
        if (strDate != null) {
            strDate = strDate[0];
        } //Select only first match from regex result array
        
        if (arrDates.length <= 0 && strDate == null) { //If no date tags, loop meta tags instead
            for (i = 0; i < arrMeta.length; i++) {
                //console.log(arrMeta[i])
                try {
                    if ((arrMeta[i].getAttribute("property").includes("time") || arrMeta[i].getAttribute("property").includes("date")) && arrMeta[i].getAttribute("property").includes("published")) {
                        strDate = arrMeta[i].content;
                    } //Find time or date in property attributes
                } catch {
                    continue
                }
            }
        }
    }
    console.log("arrdates: ");
    console.log(arrDates);
    //Convert date with parser
    if (strDate != null && typeof strDate != 'undefined') {
        //Clean up date if it has a combined date/time code that breaks parser
        if (strDate.length > 10 && strDate.indexOf(" ") == -1 && strDate.indexOf("T") == 10) {
            strDate = strDate.slice(0, 10);
        }
        strDate = strDate.toLowerCase()
        strDate = strDate.replace("published","");
        strDate = strDate.replace("online", "");
        strDate = strDate.replace(".","");
        strDate = strDate.replace("on","");
        console.log(strDate);
        d = Date.parse(strDate);
        console.log(d)
        if (d != null) {
            Year = d.getFullYear();
            ShortYear = Year.toString()
            .substr(2, 2);
            if (ShortYear.indexOf("0") == 0 && ShortYear != "00") {
                ShortYear = ShortYear.slice(1);
            }
            
            let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
            
            Month = months[d.getMonth()];
            
            
            Day = d.getDate();
            Day = Day + ''; //Convert to string
            if (Day.indexOf("0") == 0) {
                Day = Day.slice(1);
            } //Slice leading 0
        }
    }
    
    
    //Find Title
    
    arrTitles = responsexml.getElementsByName("og:title"); //Try og:title
    if (arrTitles.length <= 0) {
        console.log('dctitle');
        arrTitles = responsexml.getElementsByName("DC.title");
    } //Try DC.title
    if (arrTitles.length <= 0) {
        console.log('headline');
        arrTitles = responsexml.getElementsByName("headline");
    } //Try headline
    if (arrTitles.length <= 0) { //If no name tags, loop meta tags instead
        console.log('metas');
        for (i = 0; i < arrMeta.length; i++) {
            //console.log(i)
            if (arrMeta[i].getAttribute("property") == "og:title") {
                strTitle = arrMeta[i].content;
            } //Find og:title in property attributes
        }
    }
    
    //If anything found, assign it to Title
    if (typeof arrTitle != 'undefined' && strTitle != '') {
        strTitle = arrTitles[0].content;
    }
    
    //Worst case, use html title
    if (typeof strTitle == 'undefined' || strTitle == '') {
        strTitle = responsexml.title;
        //console.log(strTitle);
    }
    //give up
    if (typeof strTitle == 'undefined' || strTitle == '') {
        strTitle = "No title found";
    }
    
    //Slice off | and -
    if (typeof strTitle != 'undefined') {
        if (strTitle.indexOf("|") != -1) {
            strTitle = strTitle.slice(0, strTitle.indexOf("|") - 1);
        } //Slice off trailing |
        if (strTitle.indexOf("--") != -1) {
            strTitle = strTitle.slice(0, strTitle.indexOf("--") - 1);
        } //Slice off trailing --
        if (strTitle.indexOf(" - ") != -1) {
            strTitle = strTitle.slice(0, strTitle.indexOf(" - "));
        } //Slice off trailing -
    }
    
    

    //Error trap for empty variables, just to be safe
    if (typeof strName === 'undefined') {
        strName = "No Author";
    }
    if (typeof strQuals === 'undefined') {
        strQuals = "";
    }
    if (typeof Month === 'undefined') {
        Month = "xx";
    }
    if (typeof Day === 'undefined') {
        Day = "xx";
    }
    if (typeof Year === 'undefined') {
        Year = "xxxx";
    }
    if (typeof ShortYear === 'undefined') {
        ShortYear = "xx";
    }
    if (typeof strTitle === 'undefined') {
        strTitle = document.title;
    }
    
    
    let finaldate = Month + " " + Day + ", " + Year;
    
    return [strName, strTitle, finaldate]
    
}

//result = computeCite()
//console.log("hihi")


function toTitleCase(str) {
    return str.replace(/\w*/g, function(txt) {
        return txt.charAt(0)
            .toUpperCase() + txt.substr(1)
            .toLowerCase();
    });
}





async function main() {
    
    let tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    url = tabs[0].url

    // use `url` here inside the callback because it's asynchronous!
    //document.getElementById("temp").innerHTML = url;
    
    let stuff = await computeCite(url);
    console.log(stuff);
    
    chrome.storage.local.set({"headerdata":stuff});

    let usingns = await chrome.storage.local.get(["usingNS"])
    console.log("usingns: "+ usingns.usingNS)
    if (usingns.usingNS) {
        var formattedstuff = stuff[0] + ". " + stuff[2] + ". " + stuff[1];
        try {
            if(!['!','?','.'].includes(formattedstuff.charAt(formattedstuff.length-1))) {
                formattedstuff += "."
            }
        } catch {
            console.log("errored")
        }
    
    } else {
        if (stuff[0].includes(" ")) {
                    formattedstuff = stuff[0].split(" ")[1] +  " " + stuff[2].substring(stuff[2].length-2) + " " + "(" + stuff[0] + ", " + stuff[2] + ", " + stuff[1] + ")"
                } else {
                    formattedstuff = stuff[0] +  " " + stuff[2].substring(stuff[2].length-2) + " " + "(" + stuff[0] + ", " + stuff[2] + ", " + stuff[1] + ")"
                }
    }
    
    console.log("formattedstuff");
    console.log(formattedstuff);
    
    chrome.storage.local.set({"cardheader":formattedstuff});
    
    document.getElementById("cardhead").innerHTML = formattedstuff;
    chrome.scripting.executeScript( { //update selection while we're at it
        target: {tabId: tabs[0].id},
        files: ["codeforinject.js"]
    });
    
    updatedarchiveph(url).then((archiveph_url) => {
        document.getElementById("archiveph").setAttribute("href", archiveph_url);
        document.getElementById("archiveph").setAttribute("title", archiveph_url);
        console.log("archiveph: "+archiveph_url);
        if (archiveph_url == "https://archive.ph" || archiveph_url == "https://") {        document.getElementById("errorplace").setAttribute("style", "color:red;font-size: 10px;");
        }
    });
    
    updatedarchiveis(url).then((archiveis_url) => {
        document.getElementById("archiveis").setAttribute("href", archiveis_url);
        document.getElementById("archiveis").setAttribute("title", archiveis_url);
    });

    var twelveftio_url = getfinal12ftio(url);
    console.log(document.getElementById("archiveph"))
    
    document.getElementById("12ftio").setAttribute("href", twelveftio_url);
    document.getElementById("12ftio").setAttribute("title", twelveftio_url);
    
    console.log('here');
}

main();
