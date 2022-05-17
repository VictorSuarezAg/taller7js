const subjectObject = {
    "Front-end": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
        "JavaScript": ["letiables", "Operators", "Functions", "Conditions"]
    },
    "Back-end": {
        "PHP": ["letiables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}
window.onload = function () {
    let subjectSelect = document.querySelector("#subject");
    let topicSelect = document.querySelector("#topic");
    let chapterSelect = document.querySelector("#chapter");
    for (let s in subjectObject) {
        subjectSelect.options[subjectSelect.options.length] = new Option(s, s);
    }

    subjectSelect.onchange = function () {
        //empty Chapters- and Topics- dropdowns
        chapterSelect.length = 1;
        topicSelect.length = 1;
        //display correct values
        for (let t in subjectObject[this.value]) {
            topicSelect.options[topicSelect.options.length] = new Option(t, t);
        }
    }

    topicSelect.onchange = function () {
        //empty Chapters dropdown
        chapterSelect.length = 1;
        //display correct values
        let z = subjectObject[subjectSelect.value][this.value];
        for (let i = 0; i < z.length; i++) {
            chapterSelect.options[chapterSelect.options.length] = new Option(z[i], z[i]);
        }
    }
}