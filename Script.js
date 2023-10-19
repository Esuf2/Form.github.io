document.getElementById("surveyForm").addEventListener("submit", function (e) {
    e.preventDefault();
    showPopup();
});

function showPopup() {
    document.getElementById("popupFirstName").textContent = document.getElementById("firstName").value;
    document.getElementById("popupLastName").textContent = document.getElementById("lastName").value;
    document.getElementById("popupDOB").textContent = document.getElementById("dob").value;
    document.getElementById("popupCountry").textContent = document.getElementById("country").value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    let genderValues = [];
    genderCheckboxes.forEach(function (checkbox) {
        genderValues.push(checkbox.value);
    });
    document.getElementById("popupGender").textContent = genderValues.join(", ");
    document.getElementById("popupProfession").textContent = document.getElementById("profession").value;
    document.getElementById("popupEmail").textContent = document.getElementById("email").value;
    document.getElementById("popupMobile").textContent = document.getElementById("mobile").value;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
}