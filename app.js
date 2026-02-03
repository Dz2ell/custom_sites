const modal = document.getElementById("auth-modal");
const openButtons = [
  document.getElementById("open-auth"),
  document.getElementById("open-auth-hero"),
];
const closeButton = document.getElementById("close-auth");
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

const showModal = () => {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
};

const hideModal = () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
};

openButtons.forEach((button) => {
  if (button) {
    button.addEventListener("click", showModal);
  }
});

closeButton.addEventListener("click", hideModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

const setActiveTab = (tabName) => {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabName);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
  });
});

const quickForm = document.getElementById("quick-form");
const applyForm = document.getElementById("apply-form");

[quickForm, applyForm].forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    alert("Спасибо! Мы получили вашу заявку и скоро свяжемся.");
  });
});

const authForms = document.querySelectorAll(".auth-form");

authForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    alert("Готово! Это демо-форма без реальной авторизации.");
  });
});
