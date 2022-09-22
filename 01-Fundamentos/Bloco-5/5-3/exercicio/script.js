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

function days() {
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
const divButtons = document.querySelector(".buttons-container")

function holidays(Feriados) {
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


function fridayButton(sextaFeira) {
  const friday = document.createElement('button')
  friday.id = "btn-friday"
  friday.innerText = 'Sexta-feira'
  divButtons.appendChild(friday)
}

fridayButton()

// ---------------------------------------------------------
const fridayBtn = document.querySelector('#btn-friday')

function changeFridayText() {
  let fridays = document.querySelectorAll(".friday")
  for(let index = 0; index < fridays.length; index += 1){
    if(fridays[index].innerText == 'sextou') {
      const daysFridays = [4, 11, 18, 25]
      fridays[index].innerText = daysFridays[index] 
    } else {
      fridays[index].innerText = 'sextou'
    }
  }
}

fridayBtn.addEventListener('click', changeFridayText)

// ------------------------------------------------------------
const ulDays = document.querySelector('#days') 
function zoom() {
  function zoomIn(day){
    day.target.style.fontSize = '30px'
    day.target.style.fontWeight = 800
  }
  ulDays.addEventListener('mouseover', zoomIn)

  function zoomOut(day){
    day.target.style.fontSize = '20px'
    day.target.style.fontWeight = 400
  }
  ulDays.addEventListener('mouseout', zoomOut)
}

zoom()

// --------------------------------------------------------------
const divTask = document.querySelector(".my-tasks")
function taskActivity(task) {
  let tasks = document.createElement('span')
  tasks.innerText = task + ':'

  divTask.appendChild(tasks)
}

taskActivity('Projeto')

// --------------------------------------------------------------
function ccColor(){
  const cc = document.createElement('div')
  cc.style.backgroundColor = 'green'
  cc.className = 'task'
  divTask.appendChild(cc)
}

ccColor()

// --------------------------------------------------
let elementos = divTask.getElementsByTagName('div')
function taskSelected(event) {
  if (event.target.className === 'task'){
    event.target.className = 'task selected'
  } else {
    event.target.className = 'task'
  }
}

divTask.addEventListener('click', taskSelected)

// -------------------------------------------------------
const colorTask = document.querySelector('.task')
function dateTaskColor(date){
  if (colorTask.className === 'task selected'){
    if (date.target.style.color === colorTask.style.backgroundColor){
      date.target.style.color = '#666666'
    } else {
      date.target.style.color = colorTask.style.backgroundColor
    }
  }
}
ulDays.addEventListener('click', dateTaskColor)

// -----------------------------------------------------
const taskList = document.querySelector('.task-list')
const addBtn = document.querySelector('#btn-add')
const inputBox= document.querySelector('input')

function addTask(){
  let text = document.createElement('li');
  if (inputBox.value === ''){
    window.alert('ERROR')
  } else {
    text.innerText = inputBox.value
    taskList.appendChild(text)
    inputBox.value = ''
  }
}
addBtn.addEventListener('click', addTask)
inputBox.addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    let text = document.createElement('li');
    if (inputBox.value === ''){
      window.alert('ERROR')
    } else {
      text.innerText = inputBox.value
      taskList.appendChild(text)
      inputBox.value = ''
    }
}
})
