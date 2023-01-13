const button = document.getElementById("btn");
const closeMenus = document.getElementById("menu-close");
const menuList = document.querySelectorAll(".menu-item");
const menuShow = document.getElementById("menu-show");

const openMenu = () => {
  menuShow.classList.add("show-menu");
};

const closeMenu = () => {
  menuShow.classList.remove("show-menu");
};

button.addEventListener("click", openMenu);
closeMenus.addEventListener("click", closeMenu);

menuList.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

const featureArr = [
  {
    speakerName: "Melissa Petros",
    speakerstatus: "Director, Philanthropy (Singapore)",
    speakerdetail:
      "Melissa Petros is the Director of Philanthropy and Milken Institute, She was the former Executive Director of Hagar International (Hong Kong).",
    speakerimage: "./image/spk1.jpg",
    alt: "tonic project image",
  },
  {
    speakerName: "Rhea Mazumdar Singhal",
    speakerstatus: "Founder, ECOWARE (India)",
    speakerdetail:
      "Rhea Mazumdar Singhal is the founder and CEO of Ecoware, India’s first and largest sustainable packaging company.",
    speakerimage: "./image/spk2.jpg",
    alt: "Rhea Mazumdar Singhal",
  },
  {
    speakerName: "Sonakshi Sinha",
    speakerstatus: "Actor (Indian Cinema)",
    speakerdetail:
      "Sonakshi Sinha is an Indian actress who works in Hindi films.sterilization of dogs and cats. She also promotes breaking the stereotypes of typical body size.",
    speakerimage: "./image/spk3.jpg",
    alt: "Sonakshi Sinha",
  },
  {
    speakerName: "Arnav Kapoor",
    speakerstatus: "Global Lead / Philanthropic Partnership / Bill ",
    speakerdetail:
      "Arnav Kapoor is a Global Lead at the Bill &amp; and Opportunity team and also as a Consultant with Deloitte.",
    speakerimage: "./image/spk4.jpg",
    alt: " Arnav Kapoor",
  },
  {
    speakerName: "Aanchal Kunwar",
    speakerstatus: "Managing Director, DARAZ (Nepal)",
    speakerdetail:
      "Aanchal Kunwar, first female Managing Director of Nepal’s leading online marketplace,Carlson Wagonlit Travel (CWT)",
    speakerimage: "./image/spk6.jpg",
    alt: "Aanchal Kunwar",
  },
  {
    speakerName: "Ruth Shapiro",
    speakerstatus:
      "Co-Founder and Chief Executive, Society(United States of America)",
    speakerdetail:
      "Dr. Ruth A. Shapiro is an American author and Co-Founder and Chief Executive of the Centre for Asian Philanthropy and Society. ",
    speakerimage: "./image/spk7.jpg",
    alt: "Ruth Shapiro",
  },
];

const featureContainer = document.querySelector(".feature-speaker");
const creatfeaturespeaker = () => {
  featureContainer.insertAdjacentHTML(
    "afterbegin",
    `<div class="single-feature-speker">
    <div class="image">
      <img src="./image/chessboard-bg-img.jpg"
      alt="white board bg"
      class="bg-img"/>
      <img 
      src=""
      alt="avatear"
      class="avatar"
      />
    </div>
    <div class="speaker-description">
      <h3 class="speaker-name"></h3>
      <p class="speaker-details"></p>
      <div class="border-line">
      </div>
      <p class="speaker-background"></p>
    </div>
  </div>
  `
  );
};
for (let i = 0; i < featureArr.length; i += 1) {
  creatfeaturespeaker();
  const speakerName = document.querySelector(".speaker-name");
  const speakerstatus = document.querySelector(".speaker-details");
  const speakerdetail = document.querySelector(".speaker-background");
  const speakerimage = document.querySelector(".avatar");

  speakerName.textContent = featureArr[i].speakerName;
  speakerstatus.textContent = featureArr[i].speakerstatus;
  speakerdetail.textContent = featureArr[i].speakerdetail;
  speakerimage.setAttribute("src", featureArr[i].speakerimage);
}
const moreText = 'MORE <i class="bi-solid bi bi-chevron-down"></i>';
const lessText = 'LESS <i class="bi-solid bi bi-chevron-up"></i>';

const featureSpeakerBtn = document.querySelector(".speaker-btn");

// for (let i = 0; i < featureArr.length; i += 1) {
//   creatfeaturespeaker(featureArr[i]);
//   const speakerElems = document.querySelectorAll(".feature-speaker");

//   if (i > 1) {
//     speakerElems[i].classList.add("hidde");
//     featureSpeakerBtn.addEventListener("click", () => {
//       speakerElems[i].classList.toggle("hidde");
//     });
//   }
// }

featureSpeakerBtn.addEventListener("click", () => {
  if (featureSpeakerBtn.innerHTML === moreText) {
    featureSpeakerBtn.innerHTML = lessText;
  } else if (featureSpeakerBtn.innerHTML === lessText) {
    featureSpeakerBtn.innerHTML = "";
    featureSpeakerBtn.innerHTML = moreText;
  }
});
