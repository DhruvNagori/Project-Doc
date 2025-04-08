// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('themeToggle');
//     const body = document.body;
//     const darkModeClass = 'dark-mode';
//     const themeStorageKey = 'themePreference';

//     // Function to set the theme
//     function setTheme(theme) {
//         if (theme === 'dark') {
//             body.classList.add(darkModeClass);
//         } else {
//             body.classList.remove(darkModeClass);
//         }
//         localStorage.setItem(themeStorageKey, theme);
//     }

//     // Check for saved theme preference on page load
//     const savedTheme = localStorage.getItem(themeStorageKey);
//     if (savedTheme) {
//         setTheme(savedTheme);
//     } else {
//         // Set default theme (you can choose 'light' or 'dark')
//         setTheme('light');
//     }

//     // Toggle theme when the button is clicked
//     if (themeToggle) {
//         themeToggle.addEventListener('click', function() {
//             const currentTheme = body.classList.contains(darkModeClass) ? 'light' : 'dark';
//             setTheme(currentTheme);
//         });
//     }
// });

// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     menuToggle.classList.toggle('active');
//     navLinks.classList.toggle('active');
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const modal = document.getElementById('bookingModal');
//     const openModalBtn = document.getElementById('openBookingModalBtn');
//     const closeModalBtn = document.querySelector('.close-button');
//     const appointmentForm = document.getElementById('appointmentForm');
//     const modalMessage = document.getElementById('modalMessage');
//     let timeInput = document.getElementById('time'); // Get the time input element

//     if (openModalBtn) {
//         openModalBtn.addEventListener('click', function() {
//             modal.style.display = 'block';
//             // Optionally, you could reset the time input when the modal opens
//             // if you don't want the previous value to persist:
//             if (timeInput) {
//                 timeInput.value = ''; // Clear the time input on open
//             }
//         });
//     }

//     if (closeModalBtn) {
//         closeModalBtn.addEventListener('click', function() {
//             modal.style.display = 'none';
//             if (modalMessage) {
//                 modalMessage.style.display = 'none'; // Hide any previous messages
//             }
//             if (appointmentForm) {
//                 appointmentForm.reset(); // Clear the form
//             }
//         });
//     }

//     window.addEventListener('click', function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//             if (modalMessage) {
//                 modalMessage.style.display = 'none';
//             }
//             if (appointmentForm) {
//                 appointmentForm.reset();
//             }
//         }
//     });

//     if (appointmentForm) {
//         appointmentForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             // In a real scenario, you would send this data to a backend
//             console.log('Appointment Request Submitted (Frontend Only)');
//             console.log('Name:', document.getElementById('name').value);
//             console.log('Email:', document.getElementById('email').value);
//             console.log('Phone:', document.getElementById('phone').value);
//             console.log('Date:', document.getElementById('date').value);
//             console.log('Time:', document.getElementById('time').value);
//             console.log('Notes:', document.getElementById('message').value);

//             if (modalMessage) {
//                 modalMessage.textContent = 'Your appointment request has been submitted. We will contact you shortly.';
//                 modalMessage.className = 'modal-message success';
//                 modalMessage.style.display = 'block';
//             }

//             // Optionally clear the form after a short delay
//             setTimeout(function() {
//                 appointmentForm.reset();
//                 if (modalMessage) {
//                     modalMessage.style.display = 'none';
//                 }
//                 modal.style.display = 'none';
//             }, 3000);
//         });
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const scrollTopBtn = document.getElementById('scrollTopBtn');

//     // Show or hide the button based on scroll position
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 200) {
//             scrollTopBtn.style.display = 'block';
//         } else {
//             scrollTopBtn.style.display = 'none';
//         }
//     });

//     // Scroll to the top when the button is clicked
//     if (scrollTopBtn) {
//         scrollTopBtn.addEventListener('click', function() {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth' // Use smooth scrolling animation
//             });
//         });
//     }
// });



document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const darkModeClass = 'dark-mode';
    const themeStorageKey = 'themePreference';

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add(darkModeClass);
        } else {
            body.classList.remove(darkModeClass);
        }
        localStorage.setItem(themeStorageKey, theme);
    }

    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.classList.contains(darkModeClass) ? 'light' : 'dark';
            setTheme(currentTheme);
        });
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookingModal');
    const openModalBtn = document.getElementById('openBookingModalBtn');
    const closeModalBtn = document.querySelector('.close-button');
    const appointmentForm = document.getElementById('appointmentForm');
    const modalMessage = document.getElementById('modalMessage');
    let timeInput = document.getElementById('time');
    let dateInput = document.getElementById('date');

    // if (openModalBtn) {
    //     openModalBtn.addEventListener('click', function() {
    //         modal.style.display = 'block';
    //         // Forcefully clear the time and date input values
    //         if (timeInput) {
    //             timeInput.value = '';
    //         }
    //         if (dateInput) {
    //             dateInput.value = '';
    //         }
    //     });
    // }

    if (openModalBtn) {
        openModalBtn.addEventListener('click', function() {
            modal.style.display = 'block';
            // Forcefully clear the time and date input values using direct property manipulation
            if (timeInput) {
                timeInput.value = '';
                timeInput.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
            }
            if (dateInput) {
                dateInput.value = '';
                dateInput.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            if (modalMessage) {
                modalMessage.style.display = 'none';
            }
            if (timeInput) {
                timeInput.value = '';
            }
            if (dateInput) {
                dateInput.value = '';
            }
            if (appointmentForm) {
                appointmentForm.reset();
            }
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            if (modalMessage) {
                modalMessage.style.display = 'none';
            }
            if (timeInput) {
                timeInput.value = '';
            }
            if (dateInput) {
                dateInput.value = '';
            }
            if (appointmentForm) {
                appointmentForm.reset();
            }
        }
    });

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Appointment Request Submitted (Frontend Only)');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Phone:', document.getElementById('phone').value);
            console.log('Date:', document.getElementById('date').value);
            console.log('Time:', document.getElementById('time').value);
            console.log('Notes:', document.getElementById('message').value);

            if (modalMessage) {
                modalMessage.textContent = 'Your appointment request has been submitted. We will contact you shortly.';
                modalMessage.className = 'modal-message success';
                modalMessage.style.display = 'block';
            }

            setTimeout(function() {
                appointmentForm.reset();
                if (modalMessage) {
                    modalMessage.style.display = 'none';
                }
                modal.style.display = 'none';
            }, 3000);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});