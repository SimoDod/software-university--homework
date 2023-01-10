let sections = document.querySelectorAll('section');

for (const section of sections) {
    
    if(section.id !== 'years') {
        section.style.display = 'none';
    }
}

let monthNum = {
    Jan: '1',
    Feb: '2',
    Mar: '3',
    Apr: '4',
    May: '5',
    Jun: '6',
    Jul: '7',
    Aug: '8',
    Sept: '9',
    Oct: '10',
    Nov: '11',
    Dec: '12'
}

let years = document.getElementById('years');

years.addEventListener('click', getMonthts);

function getMonthts(e) {
    let year = e.target.textContent.trim();
   
    if(Number(year) === 0 || year === '2020 - 2023') return;
    if(year.length > 4) return
    
    sessionStorage.setItem('year', year);
    
    document.getElementById(`year-${year}`).style.display = 'block';
    document.getElementById(`year-${year}`).addEventListener('click', getDays)
    document.getElementById('years').style.display = 'none';
    
}

function getDays(e) {
    let month = e.target.textContent.trim();
    let year = sessionStorage.getItem('year')
    if(year.length > 4 || month.length > 4) return;

    if(month === year) {
        document.getElementById('years').style.display = 'block';
        let months = document.getElementsByClassName('monthCalendar')
        for (const month of months) {
            month.style.display = 'none'
        }
        return;
    }

    if(month === '') return;
    sessionStorage.setItem('month', month);
    
    document.getElementById(`year-${year}`).style.display = 'none';
    document.getElementById(`month-${year}-${monthNum[month]}`).style.display = 'block';
    document.getElementById(`month-${year}-${monthNum[month]}`).addEventListener('click', goBack)
}

function goBack(e) {
    
    let year = sessionStorage.getItem('year');
    let month = sessionStorage.getItem('month');
    
    if(e.target.nodeName == 'CAPTION') {
        document.getElementById(`year-${year}`).style.display = 'block';
        document.getElementById(`month-${year}-${monthNum[month]}`).style.display = 'none'; 
    }
      
}