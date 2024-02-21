let count = 0;

let newAvailableSeats = parseInt(
  document.getElementById("available-seats").innerText
);


const nextBtn=document.getElementById("next-button");
nextBtn.disabled=true;


const allBtn = document.getElementsByClassName("btn-press");

for (const btn of allBtn) {
  btn.addEventListener("click", function handleSelect(event) {
    count += 1;
    newAvailableSeats -= 1;

    if(count>0){
      nextBtn.disabled=false;
    }

    const seatPosition=(event.target.innerText);

    const newChildContainer=document.getElementById("new-child-container");

    const div=document.createElement("div");
    div.classList.add("design-div");
    const p1=document.createElement("p");
    p1.innerText=seatPosition;
    const p2=document.createElement("p");
    p2.innerText='Economy'
    const p3=document.createElement("p");
    p3.innerText='550';

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    newChildContainer.appendChild(div);




    if (count < 5 && newAvailableSeats >= 4) {
      setInnerText("seat-increase", count);
      setInnerText("available-seats", newAvailableSeats);
      event.target.style.backgroundColor = "#1dd100";

      event.target.disabled = true;
      setInnerText("total-cost",(count*550));
      setInnerText("grand-total",(count*550));
    } 
    else {
      alert("You can not select more than 4 seats");
    }

  });
}



function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function applyCoupon() {
    const totalCost=parseFloat(document.getElementById("total-cost").innerText);
    const couponInput = document.getElementById("coupon-input").value;
    const divApply=document.getElementById("div-apply");

    const firstCoupon=document.getElementById("first-coupon").innerText;
    const secondCoupon=document.getElementById("second-coupon").innerText;

    if (couponInput === firstCoupon) {
        const grandTotal = totalCost * 0.85;
        setInnerText("grand-total",grandTotal);
        divApply.classList.add('hidden');
        // event.target.disabled=true;
    } else if (couponInput === secondCoupon) {
        const grandTotal = totalCost * 0.8;
        setInnerText("grand-total",grandTotal);
        divApply.classList.add('hidden');
    } else {
        alert('Invalid coupon code. Please enter a valid coupon.');
    }
}

function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}


// function disableButton(event){
//     event.target.disabled=true;
// }

