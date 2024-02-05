const startDate = document.querySelector("#startDate");
const endDate = document.querySelector("#endDate");
const days = document.querySelector("#days");

const updateDaysDiff = (dateElement) => {
    dateElement.addEventListener("change", (event) => {
        if (startDate.value && endDate.value) {
            let startTime = new Date(startDate.value).getTime();
            let endTime = new Date(endDate.value).getTime();
            let daysDiff = (endTime - startTime) / (60 * 1000 * 60 * 24);
            days.innerHTML = daysDiff;
        }
    });
}

updateDaysDiff(startDate);
updateDaysDiff(endDate);