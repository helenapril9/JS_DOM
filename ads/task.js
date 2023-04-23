const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');
  console.log(cases.length);
  let index =
  
  setInterval(() => {
    cases[index].classList.remove('rotator__case_active');
    console.log(cases[index]);
    index = (index + 1)% cases.length;   
    console.log(index);
    cases[index].classList.add('rotator__case_active');
  }, 1000);
});


