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