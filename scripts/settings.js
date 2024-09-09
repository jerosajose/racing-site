// PWA service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/resources/sworker.js")
        .then(res => console.log("pwa: service worker registered"))
        .catch(err => console.log("pwa failure: service worker not registered", err))
    })
}


// Settings code - Helped by ChatGPT

document.addEventListener("DOMContentLoaded", function() {
    // Elements
    var iframe = document.getElementById("fx");
    var toggleCheckbox = document.getElementById('toggle');
    var filterToggleCheckbox = document.getElementById('filterToggle');
    var image = document.querySelector('.tabcontent header .cards .track img');

    // Handle iframe visibility
    if (iframe) {
        console.log("Iframe detected.");

        // Restore iframe state
        var storedIframeState = localStorage.getItem('iframeState');
        console.log("Stored iframe state:", storedIframeState);
        if (storedIframeState === 'hidden') {
            iframe.style.display = 'none';
        } else {
            iframe.style.display = 'block';
        }

        // Toggle iframe visibility if the checkbox exists
        if (toggleCheckbox) {
            if (storedIframeState === 'hidden') {
                toggleCheckbox.checked = false;
                toggleCheckbox.setAttribute('aria-checked', 'false');
            } else {
                toggleCheckbox.checked = true;
                toggleCheckbox.setAttribute('aria-checked', 'true');
            }

            toggleCheckbox.addEventListener('change', function() {
                if (toggleCheckbox.checked) {
                    iframe.style.display = 'block';
                    localStorage.setItem('iframeState', 'visible');
                    toggleCheckbox.setAttribute('aria-checked', 'true');
                    console.log("Iframe set to visible.");
                } else {
                    iframe.style.display = 'none';
                    localStorage.setItem('iframeState', 'hidden');
                    toggleCheckbox.setAttribute('aria-checked', 'false');
                    console.log("Iframe set to hidden.");
                }
            });
        }
    } else {
        console.error('Iframe element not found.');
    }

    // Handle filter toggle checkbox and image
    if (filterToggleCheckbox) {
        console.log("Filter toggle checkbox detected.");

        // Restore filter state
        var storedFilterState = localStorage.getItem('filterState');
        console.log("Stored filter state:", storedFilterState);
        if (storedFilterState === 'applied') {
            filterToggleCheckbox.checked = true;
            filterToggleCheckbox.setAttribute('aria-checked', 'true');
        } else {
            filterToggleCheckbox.checked = false;
            filterToggleCheckbox.setAttribute('aria-checked', 'false');
        }

        filterToggleCheckbox.addEventListener('change', function() {
            if (filterToggleCheckbox.checked) {
                localStorage.setItem('filterState', 'applied');
                filterToggleCheckbox.setAttribute('aria-checked', 'true');
                console.log("Filter applied.");
            } else {
                localStorage.setItem('filterState', 'removed');
                filterToggleCheckbox.setAttribute('aria-checked', 'false');
                console.log("Filter removed.");
            }
        });
    }

    // Apply filter to image
    if (image) {
        console.log("Image detected.");

        // Restore filter state
        var storedFilterState = localStorage.getItem('filterState');
        console.log("Stored filter state:", storedFilterState);
        if (storedFilterState === 'applied') {
            image.classList.add('filtered');
            console.log("Filter applied to image.");
        } else {
            image.classList.remove('filtered');
            console.log("Filter removed from image.");
        }
    }
});