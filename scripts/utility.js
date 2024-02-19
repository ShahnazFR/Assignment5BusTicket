let count = 0;

let newAvailableSeats = parseInt(
  document.getElementById("available-seats").innerText
);

const allBtn = document.getElementsByClassName("btn-press");

for (const btn of allBtn) {
  btn.addEventListener("click", function handleSelect(event) {
    count += 1;
    newAvailableSeats -= 1;

    // let a=event.target.innerText;

    // setInnerText("seat-location",a)

    if (count < 5 && newAvailableSeats >= 4) {
      setInnerText("seat-increase", count);
      setInnerText("available-seats", newAvailableSeats);
      event.target.style.backgroundColor = "#1dd100";

      event.target.disabled = true;
    } else {
      alert("You can not select more than 4 seats");
    }

    

    //    console.log(document.getElementById(btn));
    // if (count === 1) {
    //   // setInnerText("seat-location",event.target.innerText)

    // }
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
