export function reveal() {
  let reveals = document.querySelectorAll(".revealFromTop");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

export function revealLeft() {
  let reveals = document.querySelectorAll(".revealFromLeft");
  reveals += document.querySelectorAll(".revealFromRight");

  //   console.log(reveals);

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// export function revealLeft() {
//     const reveals = document.querySelectorAll(".revealFromLeft");

//     //   console.log(reveals);

//     for (let i = 0; i < reveals.length; i++) {
//       let windowHeight = window.innerHeight;
//       let elementTop = reveals[i].getBoundingClientRect().top;
//       let elementVisible = 150;

//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
