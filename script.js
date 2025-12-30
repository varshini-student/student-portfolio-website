// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    // Close mobile menu if open
    const navMenu = document.getElementById("navMenu")
    navMenu.classList.remove("active")
  })
})

// Highlight active navigation link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! This is a demo form. In production, this would send your message.")
    contactForm.reset()
  })
}

// Animate progress bars on scroll
const observerOptions = {
  threshold: 0.5,
}

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-fill")
      progressBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0%"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })
    }
  })
}, observerOptions)

const skillsSection = document.getElementById("skills")
if (skillsSection) {
  progressObserver.observe(skillsSection)
}
