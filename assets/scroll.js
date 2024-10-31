document.querySelectorAll(".scroll-tabs-container").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelector("#traineeSpeakers")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
