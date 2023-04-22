let $NumberA = document.querySelector('.NumberA');
let $NumberB = document.querySelector('.NumberB');
let $btn = document.querySelector('.btn');
let $sum = document.querySelector('.sum');

function total(A, B) {
    let C = [];
    for (let i = A; i <= B; i++) {
      C.push(i);
    }
    console.log(C);
  
    let newC = [];
    C.forEach(function (n) {
      D = 1;
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          D = 0;
        }
      }
      if (D == 1) {
        newC.push(n);
      }
    });
  
    console.log(newC);
    let total = 0;
    newC.forEach(function (n) {
      total += n;
    });
  
    console.log(total);
    return total;
}
  
$btn.addEventListener("click", function() {
    let NumberA = Number($NumberA.value);
    let NumberB = Number($NumberB.value);

    if (NumberB < NumberA) {
        let text = 'Số B phải lớn hơn số A';
        $sum.innerHTML = text;
    } else {
        console.log(NumberA, NumberB);
        let sumAB = total(NumberA, NumberB);
        console.log(sumAB);
        $sum.innerHTML = sumAB;
        document.getElementById("total").innerHTML = "Kết quả ="+sumAB; 
    }
});