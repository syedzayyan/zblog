export default function timeformatter(time) {
    var date = new Date(time);
    var nowDate = Date.now();
    var diff = nowDate - date;
    var Days = Math.floor(diff / 86400000);
    var Hours = Math.floor((diff % 86400000) / 3600000)
    var Mins = Math.round(((diff % 86400000) % 3600000) / 60000)
    var Secs = Math.round((((diff % 86400000) % 3600000) % 60000) / 1000)
    if (Days > 0) {
        if (Days === 1) {
            return `a day ago`
        }
        return `${Days} days ago`
    } else if (Hours > 0) {
        if (Hours === 1) {
            return `an hour ago`
        }
        return `${Hours} hours ago`
    } else if (Mins > 0) {
        if (Mins === 1) {
            return `a minute ago`
        }
        return `${Mins} minutes ago`
    } else if (Secs > 0) {
        if (Secs === 1) {
            return "a second ago"
        }
        return `${Secs} second ago`
    } else {
        return "now"
    }
}