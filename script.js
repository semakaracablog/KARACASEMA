const slides = document.querySelector(".slides");
        const indicatorsContainer = document.querySelector(".indicators");
        const totalSlides = document.querySelectorAll(".slide").length;
        let currentIndex = 0;

        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            if (i === 0) indicator.classList.add("active");
            indicator.addEventListener("click", () => moveToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }

        function moveToSlide(index) {
            currentIndex = index;
            slides.style.transform = `translateX(-${index * 100}%)`;
            document.querySelectorAll(".indicator").forEach((ind, i) => {
                ind.classList.toggle("active", i === index);
            });
        }