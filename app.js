const programmeCards =
  document.querySelectorAll(".programme-card");

const programmeOptions =
  document.getElementById("programmeOptions");

const programmeTitle =
  document.getElementById("programmeTitle");

const dynamicContent =
  document.getElementById("dynamicContent");

const examinationSection =
  document.getElementById("examinationSection");

const examinationFields =
  document.getElementById("examinationFields");

const generateWordButton =
  document.getElementById("generateButton");

const resetButton =
  document.getElementById("resetButton");

const statisticsSection =
  document.getElementById("statisticsSection");

const numberOfQuestions =
  document.getElementById("numberOfQuestions");

const numberOfPrintedPages =
  document.getElementById("numberOfPrintedPages");

const statisticsPreview =
  document.getElementById("statisticsPreview");


let selectedProgramme = null;
let selectedTemplate = null;

const TEMPLATE_MAP = {

  "odl-essay":
    "templates/PJJ_Malay_Booklet.docx",

  "odl-mcq":
    "templates/PJJ_Malay_OMR.docx",

  "conventional-english-booklet":
    "templates/Conventional_English_Booklet.docx",

  "conventional-english-omr":
    "templates/Conventional_English_OMR.docx",

  "conventional-bilingual-booklet":
    "templates/Conventional_Bilingual_Booklet.docx",

  "conventional-bilingual-omr":
  "templates/Conventional_Bilingual_OMR.docx",

  "executive-bilingual-str-mcq":
  "templates/EDBM_Bilingual_STR_MCQ.docx",

  "executive-bilingual-str-mcq-tf":
  "templates/EDBM_Bilingual_STR_MCQ_TF.docx",

  "executive-bilingual-booklet":
  "templates/EDBM_Bilingual_Booklet.docx",

  "executive-english-str-mcq-tf":
  "templates/EDBM_English_STR_MCQ_TF.docx",

};



programmeCards.forEach(card => {

  card.addEventListener("click", function () {

    programmeCards.forEach(item => {
      item.classList.remove("selected");
    });

    this.classList.add("selected");

    selectedProgramme =
      this.dataset.programme;

    selectedTemplate = null;

    showProgrammeOptions(selectedProgramme);

  });

});


function showProgrammeOptions(programme) {

  programmeOptions.classList.remove("hidden");


  if (programme === "conventional") {

    programmeTitle.textContent =
      "Cover Page Format";

    dynamicContent.innerHTML = `
      <div class="template-grid">

        <button
          type="button"
          class="template-card"
          data-template="conventional-english-booklet"
        >
          <strong>English Booklet</strong>
          <span>English examination paper using answer booklet</span>
        </button>

        <button
          type="button"
          class="template-card"
          data-template="conventional-english-omr"
        >
          <strong>English OMR</strong>
          <span>English examination paper using OMR answer sheet</span>
        </button>

        <button
          type="button"
          class="template-card"
          data-template="conventional-bilingual-booklet"
        >
          <strong>Bilingual Booklet</strong>
          <span>Bilingual examination paper using answer booklet</span>
        </button>

        <button
          type="button"
          class="template-card"
          data-template="conventional-bilingual-omr"
        >
          <strong>Bilingual OMR</strong>
          <span>Bilingual examination paper using OMR answer sheet</span>
        </button>

      </div>
    `;

  }


  if (programme === "odl") {

    programmeTitle.textContent =
      "Cover Page Format";

    dynamicContent.innerHTML = `
      <div class="template-grid">

        <button
          type="button"
          class="template-card"
          data-template="odl-essay"
        >
          <strong>Essay / Structured</strong>
          <span>ODL examination paper with essay or structured questions</span>
        </button>

        <button
          type="button"
          class="template-card"
          data-template="odl-mcq"
        >
          <strong>Multiple Choice Questions</strong>
          <span>ODL examination paper using objective questions</span>
        </button>

      </div>
    `;

  }


  if (programme === "executive") {

  programmeTitle.textContent =
    "Cover Page Format";

  dynamicContent.innerHTML = `
    <div class="template-grid">

      <button
        type="button"
        class="template-card"
        data-template="executive-bilingual-booklet"
      >
        <strong>Bilingual Booklet</strong>
        <span>Bilingual examination paper using answer booklet</span>
      </button>

      <button
        type="button"
        class="template-card"
        data-template="executive-bilingual-str-mcq-tf"
      >
        <strong>Bilingual MCQ + True/False + Structured</strong>
        <span>Three-part bilingual examination paper</span>
      </button>

      <button
        type="button"
        class="template-card"
        data-template="executive-bilingual-str-mcq"
      >
        <strong>Bilingual MCQ + Structured</strong>
        <span>Two-part bilingual examination paper</span>
      </button>

      <button
        type="button"
        class="template-card"
        data-template="executive-english-str-mcq-tf"
      >
        <strong>English MCQ + True/False + Structured</strong>
        <span>Three-part English examination paper</span>
      </button>

    </div>
  `;

}


  bindTemplateCards();

}


function bindTemplateCards() {

  const templateCards =
    document.querySelectorAll(".template-card");

  templateCards.forEach(card => {

    card.addEventListener("click", function () {

      templateCards.forEach(item => {
        item.classList.remove("selected");
      });

      this.classList.add("selected");

      selectedTemplate =
        this.dataset.template;

      showExaminationFields(
  selectedProgramme,
  selectedTemplate
);

showStatisticsFields(
  selectedProgramme,
  selectedTemplate
);

statisticsSection.classList.remove("hidden");

      console.log(
        "Programme:",
        selectedProgramme
      );

      console.log(
        "Template:",
        selectedTemplate
      );

    });

  });

}

function showExaminationFields(
  programme,
  template
) {

  examinationSection.classList.remove("hidden");

  let semesterField = "";

  if (programme === "conventional") {

    semesterField = `
      <div class="form-group">

        <label for="semester">
          Semester
        </label>

        <select id="semester">

          <option value="">
            Select Semester
          </option>

          <option value="FIRST SEMESTER">
            First Semester
          </option>

          <option value="SECOND SEMESTER">
            Second Semester
          </option>

        </select>

      </div>
    `;

  }


  if (programme === "odl") {

    semesterField = `
      <div class="form-group">

        <label for="semester">
          Examination Period
        </label>

        <select id="semester">

          <option value="">
            Select Examination Period
          </option>

          <option value="JANUARI">
            Januari
          </option>

          <option value="APRIL">
            April
          </option>

          <option value="JULAI">
            Julai
          </option>

          <option value="OKTOBER">
            Oktober
          </option>

        </select>

      </div>
    `;

  }


  if (programme === "executive") {

  semesterField = `
    <div class="form-group">

      <label for="semester">
        Examination Period
      </label>

      <select id="semester">

        <option value="">
          Select Examination Period
        </option>

        <option value="JANUARY">
          January
        </option>

        <option value="MAY">
          May
        </option>

        <option value="SEPTEMBER">
          September
        </option>

      </select>

    </div>
  `;

}


  examinationFields.innerHTML = `

    <div class="form-grid">

      ${semesterField}


      <div class="form-group">

  <label for="academicSession">
    Academic Session
  </label>

  <input
    type="text"
    id="academicSession"
    placeholder="e.g. 2026/2027"
    maxlength="9"
    inputmode="numeric"
  >

</div>


      <div class="form-group">

        <label for="courseCode">
          Course Code
        </label>

        <input
          type="text"
          id="courseCode"
          placeholder="e.g. BPMNK2033"
        >

      </div>


      <div class="form-group">

        <label for="courseNameEnglish">
          Course Name
        </label>

        <input
          type="text"
          id="courseNameEnglish"
          placeholder="Enter course name"
        >

      </div>


      <div
  id="malayCourseNameGroup"
  class="form-group"
  style="display: none;"
>

        <label for="courseNameMalay">
          Course Name (Bahasa Melayu)
        </label>

        <input
          type="text"
          id="courseNameMalay"
          placeholder="Masukkan nama kursus"
        >

      </div>


      <div class="form-group">

        <label for="examDate">
          Examination Date
        </label>

        <input
          type="date"
          id="examDate"
        >

      </div>


      <div class="form-group">

        <label for="examDay">
          Day
        </label>

        <input
          type="text"
          id="examDay"
          readonly
          placeholder="Automatically calculated"
        >

      </div>


      <div class="form-group">

        <label for="startTime">
          Start Time
        </label>

        <input
          type="time"
          id="startTime"
        >

      </div>


      <div class="form-group">

        <label for="endTime">
          End Time
        </label>

        <input
          type="time"
          id="endTime"
        >

      </div>


      <div class="form-group">

        <label for="duration">
          Duration
        </label>

        <input
          type="text"
          id="duration"
          readonly
          placeholder="Automatically calculated"
        >

      </div>

      <div class="form-group full-width">

        <label for="venue">
          Venue
        </label>

        <input
          type="text"
          id="venue"
          placeholder="Enter examination venue"
        >

      </div>

    </div>

  `;


  updateConditionalFields(template);
  bindAutomaticCalculations();

}

function updateConditionalFields(template) {

  const malayCourseNameGroup =
    document.getElementById("malayCourseNameGroup");

  if (!malayCourseNameGroup) {
    return;
  }

  if (template.includes("bilingual")) {

    malayCourseNameGroup.style.display = "flex";

  } else {

    malayCourseNameGroup.style.display = "none";

  }

}

function bindAutomaticCalculations() {

  const examDate =
    document.getElementById("examDate");

  const examDay =
    document.getElementById("examDay");

  const startTime =
    document.getElementById("startTime");

  const endTime =
    document.getElementById("endTime");

  const duration =
    document.getElementById("duration");

  const academicSession =
  document.getElementById(
    "academicSession"
  );


  academicSession.addEventListener(
  "input",
  function () {

    let digits =
      this.value
        .replace(/\D/g, "")
        .slice(0, 8);

    if (digits.length > 4) {

      digits =
        digits.slice(0, 4) +
        "/" +
        digits.slice(4);

    }

    this.value = digits;
  }
);


  // AUTOMATIC DAY

  examDate.addEventListener("change", function () {

    if (!this.value) {
      examDay.value = "";
      return;
    }

    const date =
      new Date(this.value + "T00:00:00");

    const locale =
  selectedProgramme === "odl"
    ? "ms-MY"
    : "en-MY";

const dayName =
  new Intl.DateTimeFormat(locale, {
    weekday: "long"
  }).format(date);

examDay.value =
  dayName.toUpperCase();

  });


  // AUTOMATIC DURATION

  function calculateDuration() {

    if (!startTime.value || !endTime.value) {
      duration.value = "";
      return;
    }

    const [startHour, startMinute] =
      startTime.value.split(":").map(Number);

    const [endHour, endMinute] =
      endTime.value.split(":").map(Number);


    const startTotal =
      (startHour * 60) + startMinute;

    const endTotal =
      (endHour * 60) + endMinute;


    if (endTotal <= startTotal) {

      duration.value =
        "End time must be after start time";

      return;
    }


    const totalMinutes =
      endTotal - startTotal;

    const hours =
      Math.floor(totalMinutes / 60);

    const minutes =
      totalMinutes % 60;


   let result = "";

if (selectedProgramme === "odl") {

  if (hours > 0) {
    result += hours + " JAM";
  }

  if (minutes > 0) {

    if (result) {
      result += " ";
    }

    result += minutes + " MINIT";
  }

} else {

  if (hours > 0) {

    result +=
      hours +
      (hours === 1 ? " HOUR" : " HOURS");
  }

  if (minutes > 0) {

    if (result) {
      result += " ";
    }

    result +=
      minutes +
      (minutes === 1 ? " MINUTE" : " MINUTES");
  }

}

duration.value = result;

  }


  startTime.addEventListener(
    "change",
    calculateDuration
  );

  endTime.addEventListener(
    "change",
    calculateDuration
  );

}

generateWordButton.addEventListener(
  "click",
  generateWord
);

function loadFile(url, callback) {

  PizZipUtils.getBinaryContent(
    url,
    callback
  );

}


function generateWord() {

  // For Phase 3C we only activate
  // ODL/PJJ Essay / Structured.

  const templatePath =
  TEMPLATE_MAP[selectedTemplate];

if (!templatePath) {

  alert(
    "The selected cover template is not yet connected."
  );

  return;
}


  const semester =
    document.getElementById("semester").value;

  const academicSession =
    document.getElementById("academicSession").value;

  const courseCode =
    document.getElementById("courseCode").value.trim();

  const courseName =
    document.getElementById("courseNameEnglish").value.trim();
  
  const isBilingual =
  selectedTemplate.includes("bilingual");

const courseNameMalayField =
  document.getElementById("courseNameMalay");

const courseNameMalay =
  courseNameMalayField
    ? courseNameMalayField.value.trim()
    : "";

  const examDate =
    document.getElementById("examDate").value;

  const examDay =
    document.getElementById("examDay").value;

  const startTime =
    document.getElementById("startTime").value;

  const endTime =
    document.getElementById("endTime").value;

  const duration =
    document.getElementById("duration").value;

  const venue =
    document.getElementById("venue").value.trim();

  const isExecutiveStrMcq =
    selectedTemplate ===
    "executive-bilingual-str-mcq";

  const isExecutiveStrMcqTf =
    selectedTemplate ===
    "executive-bilingual-str-mcq-tf";

  const isExecutiveEnglishStrMcqTf =
    selectedTemplate ===
    "executive-english-str-mcq-tf";

  const isExecutiveQuestionBreakdown =
    isExecutiveStrMcq ||
    isExecutiveStrMcqTf ||
    isExecutiveEnglishStrMcqTf;

  const isExecutiveBooklet =
    selectedTemplate ===
    "executive-bilingual-booklet";

  const numberOfQuestionsField =
    document.getElementById(
    "numberOfQuestions"
  );

const numberOfQuestions =
  numberOfQuestionsField
    ? numberOfQuestionsField.value
    : "";


const numberOfMCQField =
  document.getElementById(
    "numberOfMCQ"
  );

const numberOfMCQ =
  numberOfMCQField
    ? numberOfMCQField.value
    : "";

const numberOfTrueFalseField =
  document.getElementById(
    "numberOfTrueFalse"
  );

const numberOfTrueFalse =
  numberOfTrueFalseField
    ? numberOfTrueFalseField.value
    : "";

const numberOfStructuredField =
  document.getElementById(
    "numberOfStructured"
  );

const numberOfStructured =
  numberOfStructuredField
    ? numberOfStructuredField.value
    : "";


const numberOfPrintedPages =
  document.getElementById(
    "numberOfPrintedPages"
  ).value;


if (
  !semester ||
  !academicSession ||
  !courseCode ||
  (isBilingual && !courseNameMalay) ||
  !courseName ||
  !examDate ||
  !startTime ||
  !endTime ||
  !venue ||
  !numberOfPrintedPages ||

(
  !isExecutiveQuestionBreakdown &&
  !numberOfQuestions
) ||

(
  (
    isExecutiveStrMcqTf ||
    isExecutiveEnglishStrMcqTf
  ) &&
  (
    numberOfMCQ === "" ||
    numberOfTrueFalse === "" ||
    numberOfStructured === ""
  )
)
) {

  alert(
    "Please complete all examination information before generating the Word document."
  );

  return;
}


  loadFile(
  templatePath,

    function(error, content) {

      if (error) {

        console.error(error);

        alert(
          "Unable to load the Word template."
        );

        return;
      }


      try {

        const zip =
          new PizZip(content);

        const doc =
          new docxtemplater(
            zip,
            {
              paragraphLoop: true,
              linebreaks: true
            }
          );


        let dateDayText = "";
let timeDurationText = "";
let questionText = "";
let printedPageText = "";
let questionTextBM = "";
let printedPageTextBM = "";
let mcqTextBM = "";
let trueFalseTextBM = "";
let structuredTextBM = "";

let mcqTextEN = "";
let trueFalseTextEN = "";
let structuredTextEN = "";

if (isExecutiveBooklet) {

  const malayDay =
    new Intl.DateTimeFormat(
      "ms-MY",
      {
        weekday: "long"
      }
    )
    .format(
      new Date(
        examDate + "T00:00:00"
      )
    )
    .toUpperCase();


  dateDayText =
    formatDateForEnglishDocument(
      examDate
    ) +
    " (" +
    malayDay +
    " / " +
    examDay +
    ")";


  const malayDuration =
    createMalayDuration(
      startTime,
      endTime
    );


  timeDurationText =
    formatTimeForBilingualDocument(
      startTime
    ) +
    " - " +
    formatTimeForBilingualDocument(
      endTime
    ) +
    " (" +
    malayDuration +
    " / " +
    duration +
    ")";


  questionTextBM =
    formatMalayNumberOnly(
      numberOfQuestions
    );

  printedPageTextBM =
    formatMalayNumberOnly(
      numberOfPrintedPages
    );


  questionText =
    formatEnglishNumberOnly(
      numberOfQuestions
    );

  printedPageText =
    formatEnglishNumberOnly(
      numberOfPrintedPages
    );


} else if (isExecutiveQuestionBreakdown) {

  const malayDay =
  new Intl.DateTimeFormat(
    "ms-MY",
    {
      weekday: "long"
    }
  )
  .format(
    new Date(
      examDate + "T00:00:00"
    )
  )
  .toUpperCase();


dateDayText =
  formatDateForEnglishDocument(
    examDate
  ) +
  " (" +
  malayDay +
  " / " +
  examDay +
  ")";


const malayDuration =
  createMalayDuration(
    startTime,
    endTime
  );


timeDurationText =
  formatTimeForBilingualDocument(
    startTime
  ) +
  " - " +
  formatTimeForBilingualDocument(
    endTime
  ) +
  " (" +
  malayDuration +
  " / " +
  duration +
  ")";

if (isExecutiveEnglishStrMcqTf) {

  dateDayText =
    formatDateForEnglishDocument(
      examDate
    ) +
    " / " +
    examDay;


  timeDurationText =
    formatTimeForEnglishDocument(
      startTime
    ) +
    " – " +
    formatTimeForEnglishDocument(
      endTime
    ) +
    " (" +
    duration +
    ")";

}

  mcqTextBM =
  formatMalayNumberOnly(
    numberOfMCQ
  );

if (isExecutiveStrMcqTf) {

  trueFalseTextBM =
    formatMalayNumberOnly(
      numberOfTrueFalse
    );

}

structuredTextBM =
  formatMalayNumberOnly(
    numberOfStructured
  );

  printedPageTextBM =
    formatMalayNumberOnly(
      numberOfPrintedPages
    );


  mcqTextEN =
  formatEnglishNumberOnly(
    numberOfMCQ
  );

if (
  isExecutiveStrMcqTf ||
  isExecutiveEnglishStrMcqTf
) {

  trueFalseTextEN =
    formatEnglishNumberOnly(
      numberOfTrueFalse
    );

}

structuredTextEN =
  formatEnglishNumberOnly(
    numberOfStructured
  );

  printedPageText =
    formatEnglishNumberOnly(
      numberOfPrintedPages
    );


} else if (selectedProgramme === "odl") {

  dateDayText =
    formatDateForMalayDocument(examDate) +
    " / " +
    examDay;

  timeDurationText =
    formatTimeForMalayDocument(startTime) +
    " – " +
    formatTimeForMalayDocument(endTime) +
    " (" +
    duration +
    ")";

  questionText =
    formatMalayNumberOnly(
      numberOfQuestions
    );

  printedPageText =
    formatMalayNumberOnly(
      numberOfPrintedPages
    );

} else {

  dateDayText =
    formatDateForEnglishDocument(examDate) +
    " / " +
    examDay;

  timeDurationText =
    formatTimeForEnglishDocument(startTime) +
    " – " +
    formatTimeForEnglishDocument(endTime) +
    " (" +
    duration +
    ")";

  questionText =
  formatEnglishNumberOnly(
    numberOfQuestions
  ) +
  (Number(numberOfQuestions) === 1
    ? " QUESTION"
    : " QUESTIONS");


printedPageText =
  formatEnglishNumberOnly(
    numberOfPrintedPages
  ) +
  (Number(numberOfPrintedPages) === 1
    ? " printed page"
    : " printed pages");

if (isBilingual) {

  const malayDay =
    new Intl.DateTimeFormat(
      "ms-MY",
      { weekday: "long" }
    )
    .format(
      new Date(examDate + "T00:00:00")
    )
    .toUpperCase();


  dateDayText =
    formatDateForEnglishDocument(examDate) +
    " (" +
    malayDay +
    " / " +
    examDay +
    ")";


  const malayDuration =
    createMalayDuration(
      startTime,
      endTime
    );


  timeDurationText =
    formatTimeForBilingualDocument(
      startTime
    ) +
    " - " +
    formatTimeForBilingualDocument(
      endTime,
      true
    ) +
    " (" +
    malayDuration +
    " / " +
    duration +
    ")";


  questionTextBM =
    formatMalayNumberOnly(
      numberOfQuestions
    ) +
    " SOALAN";


  printedPageTextBM =
    formatMalayNumberOnly(
      numberOfPrintedPages
    );

}
}

doc.render({

  COURSE_CODE:
    courseCode.toUpperCase(),

  COURSE_NAME:
    courseName.toUpperCase(),

  SEMESTER:
    semester,

  ACADEMIC_SESSION:
    academicSession,

  DATE_DAY:
    dateDayText,

  TIME_DURATION:
    timeDurationText,

  VENUE:
    venue.toUpperCase(),

  QUESTION_TEXT:
    questionText,

  PRINTED_PAGE_TEXT:
    printedPageText,

    // For bilingual templates, we also provide Malay placeholders.

  SEMESTER_BM:
  selectedProgramme === "executive"
    ? (
        semester === "JANUARY"
          ? "JANUARI"
          : semester === "MAY"
            ? "MEI"
            : semester === "SEPTEMBER"
              ? "SEPTEMBER"
              : semester
      )
    : getMalaySemester(semester),

  SEMESTER_EN:
    semester  ,

  COURSE_NAME_BM:
  courseNameMalay
    ? courseNameMalay.toUpperCase()
    : "",

  COURSE_NAME_EN:
  courseName
    ? courseName.toUpperCase()
    : "",

  QUESTION_TEXT_BM:
    questionTextBM,

  QUESTION_TEXT_EN:
    questionText,

  PRINTED_PAGE_TEXT_BM:
    printedPageTextBM,

  PRINTED_PAGE_TEXT_EN:
    printedPageText,

  MCQ_TEXT_BM:
  mcqTextBM,

TRUE_FALSE_TEXT_BM:
  trueFalseTextBM,

STRUCTURED_TEXT_BM:
  structuredTextBM,

MCQ_TEXT_EN:
  mcqTextEN,

TRUE_FALSE_TEXT_EN:
  trueFalseTextEN,

STRUCTURED_TEXT_EN:
  structuredTextEN,

});

        const output =
          doc.toBlob();


        let programmeLabel = "";

if (selectedProgramme === "odl") {
  programmeLabel = "PJJ";
}

if (selectedProgramme === "conventional") {
  programmeLabel = "CONVENTIONAL";
}

if (selectedProgramme === "executive") {
  programmeLabel = "EXECUTIVE";
}


const filename =
  courseCode.toUpperCase() +
  "_" +
  programmeLabel +
  "_" +
  semester.replace(/ /g, "_") +
  "_" +
  academicSession.replace("/", "-") +
  ".docx";


saveAs(
  output,
  filename
);


} catch (error) {

  console.error(error);

  alert(
    "The Word template loaded, but document generation failed. Check the browser console for details."
  );

}

    }

  );

}




function formatDateForMalayDocument(
  dateValue
) {

  if (!dateValue) {
    return "";
  }

  const date =
    new Date(
      dateValue + "T00:00:00"
    );


  const months = [
    "JANUARI",
    "FEBRUARI",
    "MAC",
    "APRIL",
    "MEI",
    "JUN",
    "JULAI",
    "OGOS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DISEMBER"
  ];


  return (
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear()
  );

}

function formatTimeForMalayDocument(
  timeValue
) {

  if (!timeValue) {
    return "";
  }

  const [hourString, minute] =
    timeValue.split(":");

  let hour =
    Number(hourString);

  let period;

  if (hour < 12) {
    period = "PAGI";
  } else if (hour < 19) {
    period = "PETANG";
  } else {
    period = "MALAM";
  }

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
  }

  return (
    hour +
    ":" +
    minute +
    " " +
    period
  );

}


function createMalayDuration(
  startTime,
  endTime
) {

  if (!startTime || !endTime) {
    return "";
  }

  const [startHour, startMinute] =
    startTime.split(":").map(Number);

  const [endHour, endMinute] =
    endTime.split(":").map(Number);

  const startTotal =
    (startHour * 60) + startMinute;

  const endTotal =
    (endHour * 60) + endMinute;

  if (endTotal <= startTotal) {
    return "";
  }

  const totalMinutes =
    endTotal - startTotal;

  const hours =
    Math.floor(totalMinutes / 60);

  const minutes =
    totalMinutes % 60;

  let result = "";

  if (hours > 0) {
    result += hours + " JAM";
  }

  if (minutes > 0) {

    if (result) {
      result += " ";
    }

    result += minutes + " MINIT";
  }

  return result;
}


function formatTimeForBilingualDocument(
  timeValue,
  useDot = false
) {

  if (!timeValue) {
    return "";
  }

  const [hourString, minute] =
    timeValue.split(":");

  let hour =
    Number(hourString);

  const period =
    hour >= 12 ? "PM" : "AM";

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
  }

  const separator =
    useDot ? "." : ":";

  return (
    hour +
    separator +
    minute +
    period
  );

}

function numberToMalayWords(number) {

  const words = [
    "",
    "SATU",
    "DUA",
    "TIGA",
    "EMPAT",
    "LIMA",
    "ENAM",
    "TUJUH",
    "LAPAN",
    "SEMBILAN",
    "SEPULUH",
    "SEBELAS",
    "DUA BELAS",
    "TIGA BELAS",
    "EMPAT BELAS",
    "LIMA BELAS",
    "ENAM BELAS",
    "TUJUH BELAS",
    "LAPAN BELAS",
    "SEMBILAN BELAS",
    "DUA PULUH"
  ];

  if (number <= 20) {
    return words[number];
  }
  
  if (number === 100) {
  return "SERATUS";
}

  const tens =
    Math.floor(number / 10);

  const remainder =
    number % 10;

  const tensWords = [
    "",
    "",
    "DUA PULUH",
    "TIGA PULUH",
    "EMPAT PULUH",
    "LIMA PULUH",
    "ENAM PULUH",
    "TUJUH PULUH",
    "LAPAN PULUH",
    "SEMBILAN PULUH"
  ];

  if (remainder === 0) {
    return tensWords[tens];
  }

  return (
    tensWords[tens] +
    " " +
    words[remainder]
  );
}


function formatMalayNumberOnly(value) {

  const number =
    Number(value);

  return (
    numberToMalayWords(number) +
    " (" +
    number +
    ")"
  );

}

resetButton.addEventListener(
  "click",
  resetForm
);


function formatDateForEnglishDocument(dateValue) {

  if (!dateValue) {
    return "";
  }

  const date =
    new Date(dateValue + "T00:00:00");

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
  ];

  return (
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear()
  );

}

function formatTimeForEnglishDocument(
  timeValue
) {

  if (!timeValue) {
    return "";
  }

  const [hourString, minute] =
    timeValue.split(":");

  let hour =
    Number(hourString);

  const period =
    hour >= 12 ? "PM" : "AM";

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
  }

  return (
    hour +
    ":" +
    minute +
    " " +
    period
  );

}

function numberToEnglishWords(number) {

  const ones = [
    "",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "ELEVEN",
    "TWELVE",
    "THIRTEEN",
    "FOURTEEN",
    "FIFTEEN",
    "SIXTEEN",
    "SEVENTEEN",
    "EIGHTEEN",
    "NINETEEN"
  ];

  const tens = [
    "",
    "",
    "TWENTY",
    "THIRTY",
    "FORTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY"
  ];

  number = Number(number);

  if (number < 20) {
    return ones[number];
  }

  if (number === 100) {
    return "ONE HUNDRED";
  }

  const tensDigit =
    Math.floor(number / 10);

  const remainder =
    number % 10;

  if (remainder === 0) {
    return tens[tensDigit];
  }

  return (
    tens[tensDigit] +
    " " +
    ones[remainder]
  );

}

function formatEnglishNumberOnly(value) {

  const number =
    Number(value);

  return (
    numberToEnglishWords(number) +
    " (" +
    number +
    ")"
  );

}

function getMalaySemester(semester) {

  if (semester === "FIRST SEMESTER") {
    return "SEMESTER PERTAMA";
  }

  if (semester === "SECOND SEMESTER") {
    return "SEMESTER KEDUA";
  }

  return semester;
}

function resetForm() {

  const inputs =
    examinationSection.querySelectorAll(
      "input, select"
    );

  inputs.forEach(field => {

    if (field.tagName === "SELECT") {
      field.selectedIndex = 0;
    } else {
      field.value = "";
    }

  });

}

function populateStatisticsOptions() {

  const numberOfQuestions =
    document.getElementById("numberOfQuestions");

  const numberOfPrintedPages =
    document.getElementById("numberOfPrintedPages");

  if (!numberOfQuestions || !numberOfPrintedPages) {
    return;
  }

  for (let i = 1; i <= 100; i++) {

    const questionOption =
      document.createElement("option");

    questionOption.value = i;
    questionOption.textContent = i;

    numberOfQuestions.appendChild(
      questionOption
    );


    const pageOption =
      document.createElement("option");

    pageOption.value = i;
    pageOption.textContent = i;

    numberOfPrintedPages.appendChild(
      pageOption
    );

  }

}



function updateStatisticsPreview() {

    if (
    selectedTemplate ===
    "executive-bilingual-str-mcq"
  ) {

    const mcqField =
      document.getElementById(
        "numberOfMCQ"
      );

    const structuredField =
      document.getElementById(
        "numberOfStructured"
      );

    const pagesField =
      document.getElementById(
        "numberOfPrintedPages"
      );

    if (
      !mcqField ||
      !structuredField ||
      !pagesField
    ) {
      return;
    }


    const mcq =
      Number(mcqField.value);

    const structured =
      Number(structuredField.value);

    const pages =
      Number(pagesField.value);


    if (
      mcqField.value === "" ||
      structuredField.value === "" ||
      pagesField.value === ""
    ) {

      statisticsPreview.textContent =
        "Select the number of MCQ questions, structured questions and printed pages to view the generated instruction summary.";

      return;
    }


    statisticsPreview.textContent =
      "Part A: " +
      mcq +
      " MCQ questions • Part B: " +
      structured +
      " structured questions • " +
      pages +
      " printed " +
      (pages === 1 ? "page" : "pages");

    return;
  }

  if (
  selectedTemplate ===
  "executive-bilingual-str-mcq-tf" ||
  selectedTemplate ===
  "executive-english-str-mcq-tf"
) {

  const mcqField =
    document.getElementById(
      "numberOfMCQ"
    );

  const trueFalseField =
    document.getElementById(
      "numberOfTrueFalse"
    );

  const structuredField =
    document.getElementById(
      "numberOfStructured"
    );

  const pagesField =
    document.getElementById(
      "numberOfPrintedPages"
    );

  if (
    !mcqField ||
    !trueFalseField ||
    !structuredField ||
    !pagesField
  ) {
    return;
  }


  const mcq =
    Number(mcqField.value);

  const trueFalse =
    Number(trueFalseField.value);

  const structured =
    Number(structuredField.value);

  const pages =
    Number(pagesField.value);


  if (
    mcqField.value === "" ||
    trueFalseField.value === "" ||
    structuredField.value === "" ||
    pagesField.value === ""
  ) {

    statisticsPreview.textContent =
      "Select the number of MCQ questions, True / False questions, structured questions and printed pages to view the generated instruction summary.";

    return;
  }


  statisticsPreview.textContent =
    "Part A: " +
    mcq +
    " MCQ questions • Part B: " +
    trueFalse +
    " True / False questions • Part C: " +
    structured +
    " structured questions • " +
    pages +
    " printed " +
    (pages === 1 ? "page" : "pages");

  return;
}

  const questions =
    Number(numberOfQuestions.value);

  const pages =
    Number(numberOfPrintedPages.value);


  if (!questions || !pages) {

    statisticsPreview.textContent =
      "Select the number of questions and printed pages to view the generated instruction summary.";

    return;
  }


  if (selectedProgramme === "odl") {

    statisticsPreview.textContent =
      "Kertas soalan ini mengandungi " +
      numberToMalayWords(questions) +
      " (" +
      questions +
      ") soalan dalam " +
      numberToMalayWords(pages) +
      " (" +
      pages +
      ") halaman bercetak tidak termasuk kulit hadapan.";

    return;
  }


  statisticsPreview.textContent =
    "This examination paper contains " +
    numberToEnglishWords(questions) +
    " (" +
    questions +
    ") " +
    (questions === 1 ? "QUESTION" : "QUESTIONS") +
    " in " +
    numberToEnglishWords(pages) +
    " (" +
    pages +
    ") printed " +
    (pages === 1 ? "page" : "pages") +
    " excluding the cover page.";

}

numberOfQuestions.addEventListener(
  "change",
  updateStatisticsPreview
);

numberOfPrintedPages.addEventListener(
  "change",
  updateStatisticsPreview
);

function showStatisticsFields(
  programme,
  template
) {

  const questionField =
    document
      .getElementById("numberOfQuestions")
      .closest(".form-group");

  const printedPagesField =
    document
      .getElementById("numberOfPrintedPages")
      .closest(".form-group");

  const fieldGrid =
    questionField.parentElement;

  // Remove any Executive-specific fields
  // created during a previous selection.
  const existingExecutiveFields =
    fieldGrid.querySelectorAll(
      ".executive-statistics-field"
    );

  existingExecutiveFields.forEach(field => {
    field.remove();
  });


  // --------------------------------------------------
  // Normal statistics layout
  // Conventional, ODL and Executive Bilingual Booklet
  // --------------------------------------------------

  questionField.style.display = "";

  if (
    programme !== "executive" ||
    template === "executive-bilingual-booklet"
  ) {

    statisticsPreview.textContent =
      "Select the number of questions and printed pages to view the generated instruction summary.";

    return;
  }


  // --------------------------------------------------
  // Executive: Bilingual MCQ + Structured
  // --------------------------------------------------

  if (
    template ===
    "executive-bilingual-str-mcq"
  ) {

    questionField.style.display = "none";


    const mcqField =
      document.createElement("div");

    mcqField.className =
      "form-group executive-statistics-field";

    mcqField.innerHTML = `
      <label for="numberOfMCQ">
        Part A — Multiple Choice Questions (MCQ)
        <span class="required">*</span>
      </label>

      <select
        id="numberOfMCQ"
        name="numberOfMCQ"
        required
      >
        <option value="">
          Select number
        </option>
      </select>
    `;


    const structuredField =
      document.createElement("div");

    structuredField.className =
      "form-group executive-statistics-field";

    structuredField.innerHTML = `
      <label for="numberOfStructured">
        Part B — Structured Questions
        <span class="required">*</span>
      </label>

      <select
        id="numberOfStructured"
        name="numberOfStructured"
        required
      >
        <option value="">
          Select number
        </option>
      </select>
    `;


    fieldGrid.insertBefore(
      mcqField,
      printedPagesField
    );

    fieldGrid.insertBefore(
      structuredField,
      printedPagesField
    );


    const mcqSelect =
      document.getElementById(
        "numberOfMCQ"
      );

    const structuredSelect =
      document.getElementById(
        "numberOfStructured"
      );


    // MCQ: 0–100
    for (let i = 0; i <= 100; i++) {

      const option =
        document.createElement("option");

      option.value = i;
      option.textContent = i;

      mcqSelect.appendChild(option);
    }


    // Structured Questions: 0–20
    for (let i = 0; i <= 20; i++) {

      const option =
        document.createElement("option");

      option.value = i;
      option.textContent = i;

      structuredSelect.appendChild(option);
    }


    mcqSelect.addEventListener(
      "change",
      updateStatisticsPreview
    );

    structuredSelect.addEventListener(
      "change",
      updateStatisticsPreview
    );


        statisticsPreview.textContent =
      "Select the number of MCQ questions, structured questions and printed pages to view the generated instruction summary.";
  }


  // --------------------------------------------------
  // Executive: Bilingual MCQ + True/False + Structured
  // --------------------------------------------------

 if (
  template ===
  "executive-bilingual-str-mcq-tf" ||
  template ===
  "executive-english-str-mcq-tf"
) {

    questionField.style.display = "none";


    const mcqField =
      document.createElement("div");

    mcqField.className =
      "form-group executive-statistics-field";

    mcqField.innerHTML = `
      <label for="numberOfMCQ">
        Part A — Multiple Choice Questions (MCQ)
        <span class="required">*</span>
      </label>

      <select
        id="numberOfMCQ"
        name="numberOfMCQ"
        required
      >
        <option value="">
          Select number
        </option>
      </select>
    `;


    const trueFalseField =
      document.createElement("div");

    trueFalseField.className =
      "form-group executive-statistics-field";

    trueFalseField.innerHTML = `
      <label for="numberOfTrueFalse">
        Part B — True / False Questions
        <span class="required">*</span>
      </label>

      <select
        id="numberOfTrueFalse"
        name="numberOfTrueFalse"
        required
      >
        <option value="">
          Select number
        </option>
      </select>
    `;


    const structuredField =
      document.createElement("div");

    structuredField.className =
      "form-group executive-statistics-field";

    structuredField.innerHTML = `
      <label for="numberOfStructured">
        Part C — Structured Questions
        <span class="required">*</span>
      </label>

      <select
        id="numberOfStructured"
        name="numberOfStructured"
        required
      >
        <option value="">
          Select number
        </option>
      </select>
    `;


    fieldGrid.insertBefore(
      mcqField,
      printedPagesField
    );

    fieldGrid.insertBefore(
      trueFalseField,
      printedPagesField
    );

    fieldGrid.insertBefore(
      structuredField,
      printedPagesField
    );


    const mcqSelect =
      document.getElementById(
        "numberOfMCQ"
      );

    const trueFalseSelect =
      document.getElementById(
        "numberOfTrueFalse"
      );

    const structuredSelect =
      document.getElementById(
        "numberOfStructured"
      );


    // MCQ: 0–100
    for (let i = 0; i <= 100; i++) {

      const option =
        document.createElement("option");

      option.value = i;
      option.textContent = i;

      mcqSelect.appendChild(option);
    }


    // True / False: 0–100
    for (let i = 0; i <= 100; i++) {

      const option =
        document.createElement("option");

      option.value = i;
      option.textContent = i;

      trueFalseSelect.appendChild(option);
    }


    // Structured Questions: 0–20
    for (let i = 0; i <= 20; i++) {

      const option =
        document.createElement("option");

      option.value = i;
      option.textContent = i;

      structuredSelect.appendChild(option);
    }


    mcqSelect.addEventListener(
      "change",
      updateStatisticsPreview
    );

    trueFalseSelect.addEventListener(
      "change",
      updateStatisticsPreview
    );

    structuredSelect.addEventListener(
      "change",
      updateStatisticsPreview
    );


    statisticsPreview.textContent =
      "Select the number of MCQ questions, True / False questions, structured questions and printed pages to view the generated instruction summary.";
  }

}

populateStatisticsOptions();

