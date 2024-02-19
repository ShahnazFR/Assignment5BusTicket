let count=0;
const allBtn = document.getElementsByClassName("btn-press");

for (const btn of allBtn) {
  btn.addEventListener("click", function operationSelect(event) {
    const childContainer = document.getElementById("child-container");
    count+=1;

    if(count===1){
    const p1 = document.createElement('p');
    let x =event.target.innerText;
    p1.innerText = x ;

    const p2 = document.createElement('p');
    p2.innerText = 'Economy';

    const p3 = document.createElement('p');
    p3.innerText = '550';

    childContainer.appendChild(p2);
    childContainer.appendChild(p3);
    childContainer.appendChild(p1);
    }

    
  });

}
