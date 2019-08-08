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

// slick carousel for section four

$(document).ready(function () {
    $('.fourthSectionContainer').slick({
        mobileFirst: true,
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3500,
                infinite: true,
                arrows: true,
                dots: false
            }
        }, ]
    });
});

// slick carousel for section five

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

// google map in section seven

google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 14,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(51.504941, -0.098659), // New York
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f5f5f5"
                    },
                    {

                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#fefefe"
                    },
                    {

                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.504941, -0.098659),
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        title: 'BMB location'
    });
}