const slides = document.querySelector(".slides");
    const indicatorsContainer = document.querySelector(".indicators");
    const totalSlides = document.querySelectorAll(".slide").length;
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    
    //indicators
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement("span");
      indicator.classList.add("indicator");
      if (i === 0) indicator.classList.add("active");
      indicator.addEventListener("click", () => moveToSlide(i));
      indicatorsContainer.appendChild(indicator);
    }
    
    // Navigation buttons
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
      moveToSlide(currentIndex);
    });
    
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
      moveToSlide(currentIndex);
    });
    
    // Auto-slide functionality
    let autoSlide = setInterval(() => {
      currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
      moveToSlide(currentIndex);
    }, 5000);
    
    // Pause on hover
    document.querySelector(".slider-container").addEventListener("mouseenter", () => {
      clearInterval(autoSlide);
    });
    
    document.querySelector(".slider-container").addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        moveToSlide(currentIndex);
      }, 5000);
    });
    
    function moveToSlide(index) {
      currentIndex = index;
      slides.style.transform = `translateX(-${index * 100}%)`;
      document.querySelectorAll(".indicator").forEach((ind, i) => {
        ind.classList.toggle("active", i === index);
      });
    }
    
    // resize for responsiveness
    window.addEventListener("resize", () => {
      moveToSlide(currentIndex);
    });