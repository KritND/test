document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".message");
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// หน้าต้อนรับ // 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enter-button").addEventListener("click", function() {
        window.location.href = "main.html"; 
    });
});


// หัวใจ //
document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        heart.style.fontSize = Math.random() * 20 + 10 + "px"; 

        document.getElementById("hearts-container").appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});