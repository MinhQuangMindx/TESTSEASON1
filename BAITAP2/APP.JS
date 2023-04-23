function numberOneTriangle(n) {
  let test = '';  
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += '*';
    test += `<div>${result}</div>`;
  }
  $total.innerHTML = test;
}

let $total = document.querySelector('.total');
let $number = document.querySelector('.number');
let $btn = document.querySelector('.btn');

$btn.addEventListener('click', function () {
  let n = Number($number.value);
  console.log(Number.isInteger(n));
  if (n > 1 && n <= 10 && Number.isInteger(n)) {
    numberOneTriangle(n);
  } else {
    result = 'hãy nhập lại số từ 1-10';
    alert("hãy nhập lại số từ 1-10");
    $total.innerHTML = result;
  }
});