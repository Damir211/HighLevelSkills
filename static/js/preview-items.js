const inputUploadPhoto = document.querySelector(".selectfile input");
const firstnameInput = document.querySelector('#firstname');
const secondnameInput = document.querySelector('#secondname');
const courseNameInput = document.querySelector('#cours-name');
const courseTextInput = document.querySelector('#cours-text');
const courseThemeInput = document.querySelector('#cours-theme');
const garantyInput = document.querySelector('#garanty');
const fileNameElement = document.querySelector('.selectfile__name');
const fileItemElement = document.querySelector('.selectfile__item');
const deletePhoto = document.querySelector('.selectfile__delete');
const priceCourse = document.querySelector('#price-course');
const priceSale = document.querySelector('#price-sale');

const authorPhoto = document.querySelectorAll(".course__author-img img");
const authorName = document.querySelectorAll(".course__author-name");
const courseName = document.querySelectorAll(".course__title");
const coursetheme = document.querySelectorAll(".course__theme");
const courseText = document.querySelectorAll(".course__text");
const courseContainer = document.querySelectorAll(".course__container");
const themes = document.querySelectorAll(".themetag");
const priceElement = document.querySelectorAll('.course__price-curent');
const priceOldElemet = document.querySelectorAll('.course__price-old');


themes.forEach(item => {
  item.addEventListener('click', () => {
    courseThemeInput.value = item.textContent.trim();
    courseThemeInput.dispatchEvent(new Event("input"));
  });
});

const garanty = `<div class="course__tag course__tag--garanty">Гарантия возврата</div>`;

const insertName = () => {
  const fullName = firstnameInput.value + " " + secondnameInput.value;
  authorName.forEach(item => item.textContent = fullName);
};

const previewFile = (imgElement, inputElement) => {
  const preview = imgElement;
  const file = inputElement.files[0];
  const reader = new FileReader();

  reader.addEventListener("load",
    () => {
      preview.forEach(item => item.src = reader.result)
      fileNameElement.textContent = file.name;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
    fileItemElement.classList.remove("hide");
  }else{
    preview.forEach(item => item.src = "");
    fileItemElement.classList.add("hide");
  }
}

deletePhoto.addEventListener('click', () => {
  inputUploadPhoto.value = '';
  authorPhoto.forEach(item => item.src = "");
  fileItemElement.classList.add("hide");
})

inputUploadPhoto.addEventListener("input", () => {
  previewFile(authorPhoto, inputUploadPhoto);
})
firstnameInput.addEventListener("input", insertName);
secondnameInput.addEventListener("input", insertName);
garantyInput.addEventListener("change", () => {
  if (garantyInput.checked) {
    courseContainer.forEach(item => {
      item.insertAdjacentHTML("beforeend", garanty);
    });
  } else {
    document.querySelectorAll(".course__tag--garanty").forEach(item => item.remove());
  }
});
courseNameInput.addEventListener("input", () => courseName.forEach(item => item.textContent = courseNameInput.value));
courseTextInput.addEventListener("input", () => courseText.forEach(item => item.textContent = courseTextInput.value));
courseThemeInput.addEventListener("input", () => coursetheme.forEach(item => item.textContent = courseThemeInput.value));
priceSale.addEventListener("input", () => {
  priceOldElemet.forEach(item => {
    item.textContent = priceSale.value
  })
});
priceCourse.addEventListener("input", () => {
  priceElement.forEach(item => {
    item.textContent = priceCourse.value
  })
});

