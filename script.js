const APIURL="https://api.github.com/users/"

async function gitHubProfile(name){
    const response=await fetch(APIURL+name)
    const data = await response.json()
    console.log(data)
}


var topicsCoveredList= ['JavaScript','Array','Loops','Objects','conditions'] 

var topicsCoveredCheckbox=document.getElementById('topicsCoveredCheckbox')
var topicCoveredCheckList = 0
for (i=0;i<topicsCoveredList.length;i++) {
topicCoveredCheckList++
  // console.log(topicsCoveredList[i])
  var checkBoxDiv= document.createElement('div')
  checkBoxDiv.classList.add('form-check')
  checkBoxDiv.classList.add('form-check-inline')
  checkBoxDiv.innerHTML=`
  <input class="form-check-input" type="checkbox" id="inlineCheckbox${i+1}"
      value="${topicsCoveredList[i]}">
  <label class="form-check-label" for="inlineCheckbox${i+1}">${topicsCoveredList[i]}</label>
`
topicsCoveredCheckbox.appendChild(checkBoxDiv)
}

console.log(topicCoveredCheckList)
var count = 1;

let attendence_number = 1;

var formDataGlobal = {};

var status;
var id;

id = window.location.href;
var fullId = id.substring(id.indexOf("=",52)+1, id.indexOf("ok",53));
formDataGlobal["id"] = fullId;
const attendence_block = document.getElementById(
  "accordionPanelsStayOpenExample"
);
let add_attendence = document.getElementById("add_attendence");
add_attendence.addEventListener("click", function () {
  attendence_number++;
  count++;
  console.log("add", count);
  let attendence = document.createElement("div");
  attendence.classList.add("accordion-item");
  attendence.setAttribute("id", attendence_number);
  attendence.innerHTML = `
  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <label for="">Attendence</label>
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div class="accordion-body">
    <form id='innerFormAttendece_${attendence_number}'>
        <input type="date" placeholder="date" name='attendence[${attendence_number}]' id='attendence_date_${attendence_number}' name="Date" class="form-control datesInput">
        <select name="attendence[${attendence_number}][status]" id="attendence-${attendence_number}" class="form-control status">
            <option value="Status">--Status--</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
        </select>
        </form>
        <div class="error" id="attendence_${attendence_number}_error"></div>
    </div>
  </div>`;
  attendence_block.appendChild(attendence);
  return attendence_number;
});

const next = document.getElementById("next");
const remove_attendence = document.getElementById("remove_attendence");

let remove_btn = document.getElementsByClassName("btn-danger");
// console.log(remove_btn)

remove_attendence.addEventListener("click", function () {
  if (count > 1) {
    count--;
  }

  console.log("remove", count);
  const attendenceElm = document.getElementsByClassName("accordion-item");
  let assesment_review = document.getElementsByClassName("accordion-item");

  if (attendence_block.childElementCount > 1) {
    attendence_number--;
    attendence_block.removeChild(assesment_review[assesment_review.length - 1]);
  } else if (attendence_block.childElementCount == 1) {
    alert("Attendence block should be atleast one!");
  }
});

// Validation

const No_of_sessions_completed_error = document.getElementById(
  "No_of_sessions_completed_error"
);
const No_of_sessions_completed = document.getElementById(
  "No._of_sessions_completed"
);
const missed_sessions_error = document.getElementById("missed_sessions_error");
const missed_sessions = document.getElementById("missed_sessions");
const sessions_rescheduled_error = document.getElementById(
  "sessions_rescheduled_error"
);
const sessions_rescheduled = document.getElementById("sessions_rescheduled");

// let form_content_box = document.getElementsByClassName("form-content-box");
// console.log(form_content_box);

//$('#form').validate({
//  rules: {
//      numberOfSessionCompleted: {
//          required: true,
//          digits: true,
//          range: [1, 10]
//      },
//      numberOfMissedSession: {
//          required: true,
//          digits: true,
//          range: [1, 10]
//      },
//      numberOfSessionRescheduled: {
//          required: true,
//          digits: true,
//          range: [1, 10]
//      },
//
//  },
//  messages: {
//      numberOfSessionCompleted: {
//          required: "**Please provide Total sessions completed",
//          range: "**Plese enter the right number of sessions"
//      },
//      numberOfMissedSession: {
//          required: "Please provide Total number missed sessions ",
//          range: "Plese enter the right number of missed sessions"
//      },
//      numberOfSessionRescheduled: {
//          required: "Please provide Total number rescheduled sessions ",
//          range: "Plese enter the right number of rescheduled sessions"
//      },
//  }
//
//})

// gender.options[gender.selectedIndex].text == "--Select Gender--"
// e.options[e.selectedIndex].text;
var formDate = document.getElementsByClassName("datesInput");
// console.log(formDate[0])
var status = document.getElementsByClassName("status");
var status1 = document.getElementById("attendence-1");
for (j = 0; j < attendence_number; j++) {}
// console.log(status1)
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  var missed_sessions_value = parseInt(missed_sessions.value, 10);
  var sessions_rescheduled_value = parseInt(sessions_rescheduled.value, 10);
  var sessions_completed_value = parseInt(No_of_sessions_completed.value, 10);

  console.log(typeof sessions_rescheduled_value);

  if (
    sessions_completed_value < 0 ||
    sessions_completed_value > 10 ||
    sessions_completed_value === NaN || No_of_sessions_completed.value.length<1
  ) {
    No_of_sessions_completed_error.classList.add("active");
    No_of_sessions_completed_error.innerHTML = `**Please enter the right no. of sessions (greater then 0 but less then 10)`;
  } else if (
    missed_sessions_value < 0 ||
    missed_sessions_value > sessions_completed_value || missed_sessions.value.length<1
  ) {
    missed_sessions_error.classList.add("active");
    missed_sessions_error.innerHTML = `**Please enter the right number of missed sessions (greater then 0 but less then 10)`;
  } else if (
    sessions_rescheduled_value < 0 ||
    sessions_rescheduled_value > sessions_completed_value || sessions_rescheduled.value.length<1
  ) {
    sessions_rescheduled_error.classList.add("active");
    sessions_rescheduled_error.innerHTML = `**Please enter the right no. of rescheduled sessions (greater then 0 but less then 10)`;
  }
  if (sessions_completed_value >= 0 && sessions_completed_value <= 10) {
    No_of_sessions_completed_error.classList.remove("active");
    // console.log(missed_sessions.value < No_of_sessions_completed.value);
  }
  if (
    missed_sessions_value >= 0 &&
    missed_sessions_value < No_of_sessions_completed.value
  ) {
    missed_sessions_error.classList.remove("active");
  }
  if (
    sessions_rescheduled_value >= 0 &&
    sessions_rescheduled_value < sessions_completed_value
  ) {
    sessions_rescheduled_error.classList.remove("active");
  }

  // console.log(typeof missed_sessions_value)
  if (
    missed_sessions_value + sessions_rescheduled_value >
    sessions_completed_value
  ) {
    // console.log(missed_sessions.value+sessions_rescheduled.value)
    let x = missed_sessions_value + sessions_rescheduled_value;
    console.log(typeof x);
    missed_sessions_error.classList.add("active");
    sessions_rescheduled_error.classList.add("active");
    missed_sessions_error.innerHTML =
      "**Sum of missed and rescheduled session should be less then total sessions";
    sessions_rescheduled_error.innerHTML =
      "**Sum of missed and rescheduled session should be less then total sessions";
  }

  for (i=0;i <topicsCoveredList.length;i++) {
    let allTopicsCoveredCheckbox = document.getElementById(`inlineCheckbox${i+1}`)
    if (allTopicsCoveredCheckbox.checked==false) {
      topicCoveredCheckList--
    } 
  }

  const topicsCoveredCheckboxError=document.getElementById('topicsCoveredCheckboxError')
  if (topicCoveredCheckList==0){
    topicsCoveredCheckboxError.classList.add('active')
  }else {
    topicsCoveredCheckboxError.classList.remove('active')
  }

  
  // const topicsCoveredCheckboxError= document.getElementById('topicsCoveredCheckboxError')

  count = attendence_number;
  for (i = 0; i < attendence_number; i++) {
    let status1 = document.getElementById("attendence-" + (i + 1));
    // console.log(status1.value)
    var date = Date.parse(formDate[i].value);
    if (
      formDate[i].value == "" ||
      status1.value == "Status" ||
      date > new Date()
    ) {
      console.log("count ", count);
      var date = Date.parse(formDate[i].value);
      console.log(date);
      var attendenceDateError = document.getElementById(
        "attendence_" + (i + 1) + "_error"
      );
      attendenceDateError.style.display = "flex";
      attendenceDateError.style.justifyContent = "center";
      attendenceDateError.innerHTML =
        "**Please Enter the required Fields with right input";
    } else if (
      formDate[i].value !== "" &&
      status1.value !== "Status" &&
      date <= new Date()
    ) {
      count--;
      console.log("count decrease ", count);
      var attendenceDateError = document.getElementById(
        "attendence_" + (i + 1) + "_error"
      );
      attendenceDateError.style.display = "none";
      // console.log(formDate[i].value, status1.value);
    }
  }

  if (
    count == 0 &&
    missed_sessions_value + sessions_rescheduled_value <=
      sessions_completed_value && topicCoveredCheckList!==0
  ) {
    // console.log('all done',missed_sessions_value + sessions_rescheduled_value)
    for (i = 0; i < attendence_number; i++) {
      let status1 = document.getElementById("attendence-" + (i + 1));
      console.log(formDate[i].value, status1.value);
    }

    let attendenceValue = [];
    for (i = 1; i <= attendence_block.childElementCount; i++) {
      let attendence_date = document.getElementById(
        "attendence_date_" + i
      ).value;
      // console.log('att. date',attendence_date)
      let attendence_status = document.getElementById("attendence-" + i);
      let attendence_status_value =
        attendence_status.options[attendence_status.selectedIndex].text;
        



      var attendenceObj = {
        id: i,
        date: attendence_date,
        status: attendence_status_value,
      };

      attendenceValue.push(attendenceObj);
    }

    let topicsCoveredValue = [];
    for (i=0;i <topicsCoveredList.length;i++ ){
      let allTopicsCoveredCheckbox = document.getElementById(`inlineCheckbox${i+1}`)
      if (allTopicsCoveredCheckbox.checked) {
        topicsCoveredValue.push(allTopicsCoveredCheckbox.value)
      } else {
        console.log('no')
      }
    }

    formDataGlobal["numberOfSessionCompleted"] = No_of_sessions_completed.value;
    formDataGlobal["numberOfMissedSession"] = missed_sessions.value;
    formDataGlobal["numberOfSessionRescheduled"] = sessions_rescheduled.value;
    formDataGlobal["topicsCovered"] = topicsCoveredValue
    formDataGlobal["attendence"] = attendenceValue;
    console.log(formDataGlobal);
    register(formDataGlobal)
      .then((data) => {
        console.log("promise completed", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

async function register(formDataGlobal) {
  console.log("what we need", formDataGlobal);
  var response = await fetch(
    "https://besingularauto.herokuapp.com/createStudentRecord",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataGlobal),
    }
  );
  response.text().then((text) => {
    var data = JSON.parse(text);
    if (data.status == 200) {
      console.log("created successfully");
      // window.location.href = data.reportcardUrl;
    }
    console.log(data);
  });
}
