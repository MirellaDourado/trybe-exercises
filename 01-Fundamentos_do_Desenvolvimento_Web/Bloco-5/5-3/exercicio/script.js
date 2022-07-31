function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function days(){
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listDays = document.querySelector("#days")

  for(let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayListDecember = document.createElement('li');
    dayListDecember.innerHTML = day;

    if(decemberDaysList[index] === 24 || decemberDaysList[index]=== 31) {
      dayListDecember.className = 'day holiday'
    } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
      dayListDecember.className = 'day friday'
    } else if(decemberDaysList[index] === 25) {
      dayListDecember.className = 'day holiday friday'
    } else {
      dayListDecember.className = 'day'
    }
   listDays.appendChild(dayListDecember);
  }
}

days();

//-----------------------------------------------------------------------------

function holidays(Feriados){
  const divButtons = document.querySelector(".buttons-container")
  const holidayButton = document.createElement('button')

  holidayButton.id = "btn-holiday"
  holidayButton.innerText = "Feriados"
  divButtons.appendChild(holidayButton)
}
holidays()
// -----------------------------------------------------------

let button = document.querySelector('#btn-holiday')
let holiday = document.querySelectorAll(".holiday");
  
function changeHolidayColor(){
  for(index = 0; index < holiday.length; index += 1) {
    if(holiday[index].style.backgroundColor == 'red'){
      holiday[index].style.backgroundColor = '#EEEEEE'
    } else {
      holiday[index].style.backgroundColor = 'red'
    }
  }  
}
button.addEventListener('click', changeHolidayColor)

//------------------------------------------------------------
