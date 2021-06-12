var count = 1;

let attendence_number = 1;

var formDataGlobal = {};

var status;

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
  // console.log(attendenceElm)
  let assesment_review = document.getElementsByClassName("accordion-item");

  if (attendence_block.childElementCount > 1) {
    attendence_number--;
    attendence_block.removeChild(assesment_review[assesment_review.length - 1]);
  } else if (attendence_block.childElementCount == 1) {
    alert("Attendence block should be atleast two!");
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
  if (
    No_of_sessions_completed.value < 1 ||
    No_of_sessions_completed.value > 10
  ) {
    No_of_sessions_completed_error.classList.add("active");
    No_of_sessions_completed_error.innerHTML = `**Please enter the right no. of sessions`;
  } else if (
    missed_sessions.value.length < 1 ||
    missed_sessions.value > No_of_sessions_completed.value
  ) {
    missed_sessions_error.classList.add("active");
    missed_sessions_error.innerHTML = `**Please enter the right number of missed sessions`;
  } else if (
    sessions_rescheduled.value.length < 1 ||
    sessions_rescheduled.value > No_of_sessions_completed.value
  ) {
    sessions_rescheduled_error.classList.add("active");
    sessions_rescheduled_error.innerHTML = `**Please enter the right no. of rescheduled sessions`;
  }
  if (
    No_of_sessions_completed.value >= 1 &&
    No_of_sessions_completed.value <= 10
  ) {
    No_of_sessions_completed_error.classList.remove("active");
    console.log(missed_sessions.value < No_of_sessions_completed.value);
  }
  if (
    missed_sessions.value >= 1 &&
    missed_sessions.value < No_of_sessions_completed.value
  ) {
    missed_sessions_error.classList.remove("active");
  }
  if (
    sessions_rescheduled.value >= 1 &&
    sessions_rescheduled.value < No_of_sessions_completed.value
  ) {
    sessions_rescheduled_error.classList.remove("active");
  }
  if (
    missed_sessions.value + sessions_rescheduled.value >
    No_of_sessions_completed.value
  ) {
    missed_sessions_error.classList.add("active");
    sessions_rescheduled_error.classList.add("active");
  }

  count = attendence_number;
  for (i = 0; i < attendence_number; i++) {
    let status1 = document.getElementById("attendence-" + (i + 1));
    // console.log(status1.value)
    if (formDate[i].value == "" || status1.value == "Status") {
      console.log("count ", count);
      var attendenceDateError = document.getElementById(
        "attendence_" + (i + 1) + "_error"
      );
      attendenceDateError.style.display = "flex";
      attendenceDateError.innerHTML = "Please Enter the required Fields";
    } else if (formDate[i].value !== "" && status1.value !== "Status") {
      count--;
      console.log("count decrease ", count);
      var attendenceDateError = document.getElementById(
        "attendence_" + (i + 1) + "_error"
      );
      attendenceDateError.style.display = "none";
      console.log(formDate[i].value, status1.value);
    }
  }

  if (
    count == 0 &&
    missed_sessions.value >= 1 &&
    missed_sessions.value < No_of_sessions_completed.value &&
    No_of_sessions_completed.value >= 1 &&
    No_of_sessions_completed.value <= 10 &&
    sessions_rescheduled.value >= 1 &&
    sessions_rescheduled.value < No_of_sessions_completed.value
  ) {
    for (i = 0; i < attendence_number; i++) {
      let status1 = document.getElementById("attendence-" + (i + 1));
      console.log(formDate[i].value, status1.value);
    }

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
      window.location.href = data.reportcardUrl;
    }
    console.log(data);
  });
}
