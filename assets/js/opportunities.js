//==================================================================//
// for filter with select and categories icons :
document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');
    const cards = document.querySelectorAll('.opportunity-card');
    const tablinks = document.querySelectorAll('.tablinks');

    // Function to filter cards based on both dropdowns and active tab
    function filterOpportunities() {
    const selectedCategory = categoryFilter.value;
    const selectedLocation = locationFilter.value;
    const activeTab = document.querySelector('.tablinks.active');
    const activeTabCategory = activeTab ? activeTab.getAttribute('onclick').match(/'([^']*)'/)[1] : 'all';

    let visibleCount = 0; // track how many cards are shown

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardLocation = card.dataset.location;

        const matchesCategory = (selectedCategory === "all" || cardCategory === selectedCategory);
        const matchesLocation = (selectedLocation === "all" || cardLocation === selectedLocation);
        const matchesTab = (activeTabCategory === 'all' || cardCategory === activeTabCategory);

        if (matchesCategory && matchesLocation && matchesTab) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    const noResults = document.getElementById("noResults");
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

    // This function handles the tab click logic and then calls the main filter function
    window.openOpportunity = function (evt, categoryName) {
        // Remove 'active' class from all tab links
        tablinks.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked tab link
        evt.currentTarget.className += " active";

        // If the clicked tab is 'all', reset the dropdown filters
        if (categoryName === 'all') {
            categoryFilter.value = 'all';
            locationFilter.value = 'all';
        }

        // Call the main filter function to apply all filters
        filterOpportunities();
    };

    // Event listeners for dropdown filters
    categoryFilter.addEventListener('change', filterOpportunities);
    locationFilter.addEventListener('change', filterOpportunities);

    // Initial filter when the page loads
    document.getElementById("defaultOpen").click();
});

//==================================================================//
// Go to top button:
let mybutton = document.getElementById("go-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//==================================================================//
// date : flatpickr library:
const Khmer = {
    weekdays: {
        shorthand: ["អា", "ច", "អ", "ពុ", "ព្រ", "សុ", "ស"],
        longhand: [
            "អាទិត្យ",
            "ច័ន្ទ",
            "អង្គារ",
            "ពុធ",
            "ព្រហស្បតិ៍",
            "សុក្រ",
            "សៅរ៍"
        ]
    },
    months: {
        shorthand: [
            "មករា",
            "កុម្ភៈ",
            "មិនា",
            "មេសា",
            "ឧសភា",
            "មិថុនា",
            "កក្កដា",
            "សីហា",
            "កញ្ញា",
            "តុលា",
            "វិច្ឆិកា",
            "ធ្នូ"
        ],
        longhand: [
            "មករា",
            "កុម្ភៈ",
            "មិនា",
            "មេសា",
            "ឧសភា",
            "មិថុនា",
            "កក្កដា",
            "សីហា",
            "កញ្ញា",
            "តុលា",
            "វិច្ឆិកា",
            "ធ្នូ"
        ]
    },
    firstDayOfWeek: 1,
    ordinal: () => ""
};
flatpickr("#myDatePicker", {
    altInput: true,
    altFormat: "d F Y",
    dateFormat: "Y-m-d",
    locale: Khmer
});

//==================================================================//
// copy link page to clipboard
const copyBtn = document.getElementById('copyLinkBtn');
const tooltip = new bootstrap.Tooltip(copyBtn, { trigger: 'manual' });

copyBtn.addEventListener('click', async () => {
    const pageUrl = window.location.href; // current page link
    try {
        await navigator.clipboard.writeText(pageUrl);
        tooltip.show();
        setTimeout(() => tooltip.hide(), 1000);
    } catch (err) {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = pageUrl;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        tooltip.show();
        setTimeout(() => tooltip.hide(), 1000);
    }
});