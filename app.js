
async function getPrayerTimes() {
    const location = document.getElementById('location').value;
    const duration = parseInt(document.getElementById('duration').value);
    const language = document.getElementById('language').value;

    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${location}&country=Germany&method=2`);
    const data = await response.json();

    const times = data.data.timings;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (const [prayer, time] of Object.entries(times)) {
        const entry = document.createElement('div');
        entry.textContent = `${prayer}: ${time}`;
        resultsDiv.appendChild(entry);

        // Hier kann die Outlook-Kalenderintegration erfolgen
        // z.B. Office.context.mailbox.item.calendarItem.add()
    }
}
