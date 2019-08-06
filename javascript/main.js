// function, toggle menu from right side to 100% width

let rightSideMenu = document.querySelector('.rightSideContent');

document.querySelector('.toggleButton').addEventListener('click', () => {
    rightSideMenu.classList.toggle("showMenu")
});

// function, blocking scrolling while menu is open

function toggleNav(parent, children) {
    const hiddenElements = $(parent).find('.rightSideContent');
    let hiddenElementsState = {};

    $(children).on('click', function (e) {

        const targetId = $(this).data('id');
        if (hiddenElementsState[targetId] == false) {
            document.body.style.position = "unset";
            $(parent).removeClass('fixedResponsiveNav');
            hiddenElementsState[targetId] = true;
        } else {
            $(this).delay(400).queue(function () {
                document.body.style.position = "fixed";
                $(parent).addClass('fixedResponsiveNav');
                $(this).dequeue();
            });
            hiddenElementsState[targetId] = false;
        }
        console.log(hiddenElements);
    });
};

toggleNav('.mainNavbar', '.toggleButton');

// show second section items

var turnOnSectionButton = document.getElementById("turnSectionItemsButton");

function toggleSectionElements() {
    if (window.innerWidth >= 768) {
        return
    } else {
        $('.showElement').toggleClass('turnElement');
    }
};

turnOnSectionButton.addEventListener('click', toggleSectionElements);

// slick for section Five

$(document).ready(function () {
    $('.fifthSectionContainer').slick({
        mobileFirst: true,
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
});

