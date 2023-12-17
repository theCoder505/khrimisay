
const sayHello = (target) => {
    alert(`Hello from Next JS!`);
};

const anotherFunction = () => {
    alert("Another Func");
};


function uttermostToggle() {
    var uttermostBar = document.getElementById('uttermostBar');

    uttermostBar.classList.remove("d-none");
    var featuresContainers = uttermostBar.getElementsByClassName('featuresContainer');
    for (var i = 0; i < featuresContainers.length; i++) {
        if (i >= 7) {
            featuresContainers[i].classList.add('d-none');
        } else {
            featuresContainers[i].classList.remove('d-none');
        }
    }
}

function seeMore() {
    var uttermostBar = document.getElementById('uttermostBar');

    uttermostBar.classList.remove("d-none");
    var featuresContainers = uttermostBar.getElementsByClassName('featuresContainer');
    for (var i = 0; i < featuresContainers.length; i++) {
        if (featuresContainers[i].classList.contains('d-none')) {
            for (var j = i; j < i + 7 && j < featuresContainers.length; j++) {
                featuresContainers[j].classList.remove('d-none');
                if (j == 0) {
                    uttermostToggle();
                }
            }
            for (var k = 0; k < i; k++) {
                featuresContainers[k].classList.add('d-none');
            }
            break;
        }
    }
}


function hideSuggestedPopUp(params) {
    $(".full_screen_black").addClass("d-none");
    $(".suggestion_popup").addClass('d-none');
}

function showSideBarPopup(passedThis) {
    let imgSrc = $(passedThis).parent().children('.d-flex').children('.sidebarProfileImg').attr('src');
    let name = $(passedThis).attr("data-username");
    let atRat = $(passedThis).attr("data-useratrat");
    $(".main__sgstd_name").html(name);
    $(".user_at_rat").html(atRat);
    $(".post_sidebar_popup_img").attr('src', imgSrc);
    $(".suggestion_popup").removeClass('d-none');
    $(".full_screen_black").removeClass('d-none');
}
function removeScreen(passedThis) {
    $(".full_screen").addClass("d-none");
    $(".manage_popup_line").addClass("d-none");
    $(".about_popup").addClass("d-none");
    $(".terms_popup").addClass("d-none");
}

function showmanagePopup(passedParam) {
    if (passedParam == 'manage_popup_line') {
        $(".about_popup").addClass("d-none");
        $(".terms_popup").addClass("d-none");
    }
    if (passedParam == 'about_popup') {
        $(".manage_popup_line").addClass("d-none");
        $(".terms_popup").addClass("d-none");
    }
    if (passedParam == 'terms_popup') {
        $(".manage_popup_line").addClass("d-none");
        $(".about_popup").addClass("d-none");
    }

    $("." + passedParam).toggleClass("d-none");
    $(".full_screen").removeClass("d-none");
}

function removeThreeLinePopup() {
    $(".three_dot_popup").addClass("d-none");
    $(".three_dot_cover_bg").addClass("d-none");
}



function joinHomeUtter(passedvalue) {
    let disable = 'home-utter-' + passedvalue;
    $("." + disable).removeClass("d-none");
}

function crossHomeUtter(passedVal) {
    let disable = 'home-utter-' + passedVal;
    $("." + disable).addClass("d-none");
}


function textVal() {
    // let textareaValue = tinyMCE.get('textareaPlugin').getContent();
    // let textareaValueLength = textareaValue.trim().split(/\s+/).length;
    // if (textareaValueLength >= 150) {
    //     alert("Maximum 150 Words!...");
    // }
}
function showMoreUtterFirstBoxContent(passedThis) {
    if ($(".f_utter_post_box").hasClass("d-none")) {
        $(passedThis).attr("src", "/assets/images/downactivearrow.png");
        $(".f_utter_post_box").removeClass("d-none");
    } else {
        $(passedThis).attr("src", "/assets/images/downarrow.png");
        $(".f_utter_post_box").addClass("d-none");
    }
}

function activate_msg_content(passedThis) {
    $(".message_holder").removeClass("b_top_none");
    let data_content = $(passedThis).attr("data-content");
    $(".f_utter_post_box").addClass("d-none");
    $(".warning_holder").addClass("d-none");
    $(".title_holder").addClass("d-none");
    $("." + data_content).removeClass("d-none");
}


function showThreeDotPopup(e) {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    $(parentDiv).parent().parent().children(".three_dot_popup").toggleClass("d-none");
    $(".three_dot_cover_bg").removeClass("d-none");
}

function show_reportUtterPopup(passedThis) {
    $("#reportUtterPopup").modal("show");
}


const openComments = (e) => {
    e.stopPropagation();
    const parentDiv = e.currentTarget;
    $(parentDiv).parent().parent().children(".all_related_comments").toggleClass("d-none");
}

function showDotPopup(passedThis) {
    // $(passedThis).parent().children(".show_3dot_popup").toggleClass("d-none");
}



// Add more functions as needed




// joinHomeUtter(), crossHomeUtter(), textVal, showMoreUtterFirstBoxContent(), activate_msg_content(), showThreeDotPopup(), show_reportUtterPopup(), openComments(), showDotPopup(), 



function firstnormals() {
    normalinc = 8;
    normalmax = 14;
    $("#normalBar .imgList").addClass("d-none");
    for (let i = 1; i <= 7; i++) {
        $('#normalBar :nth-child(' + i + ')').removeClass("d-none");
    }
}



function firstthemes() {
    themeinc = 6;
    thememax = 10;
    $("#themesBar .imgList").addClass("d-none");
    for (let i = 1; i <= 5; i++) {
        $('#themesBar :nth-child(' + i + ')').removeClass("d-none");
    }
}


function firstuttermosts() {
    uttermostinc = 8;
    uttermostmax = 14;
    $("#uttermostBar .imgList").addClass("d-none");
    for (let i = 1; i <= 7; i++) {
        $('#uttermostBar :nth-child(' + i + ')').removeClass("d-none");
    }
}


function firstfeatures() {
    featureinc = 8;
    featuremax = 14;
    $("#featuresBar .imgList").addClass("d-none");
    for (let i = 1; i <= 7; i++) {
        $('#featuresBar :nth-child(' + i + ')').removeClass("d-none");
    }
}



function themesToggle() {
    themeinc = 6;
    document.getElementById("themesBar").classList.toggle("d-none");
    if (document.getElementById("themesBar").classList.contains("d-none")) {
        document.getElementById("normalBar").classList.remove("d-none");
    } else {
        document.getElementById("normalBar").classList.add("d-none");
        firstnormals();
    }

    document.getElementById("uttermostBar").classList.add("d-none");
    document.getElementById("featuresBar").classList.add("d-none");
    firstthemes();
}



function uttermostToggle2() {
    uttermostinc = 8;
    document.getElementById("uttermostBar").classList.toggle("d-none");
    if (document.getElementById("uttermostBar").classList.contains("d-none")) {
        document.getElementById("normalBar").classList.remove("d-none");
    } else {
        document.getElementById("normalBar").classList.add("d-none");
        firstnormals();
    }

    document.getElementById("themesBar").classList.add("d-none");
    document.getElementById("featuresBar").classList.add("d-none");
    firstuttermosts();
}




function featuresToggle() {
    featureinc = 8;
    document.getElementById("featuresBar").classList.toggle("d-none");
    if (document.getElementById("featuresBar").classList.contains("d-none")) {
        document.getElementById("normalBar").classList.remove("d-none");
    } else {
        document.getElementById("normalBar").classList.add("d-none");
        firstnormals();
    }

    document.getElementById("themesBar").classList.add("d-none");
    document.getElementById("uttermostBar").classList.add("d-none");
    firstfeatures();
}













function seeMore2() {
    if (!(document.getElementById("themesBar").classList.contains('d-none'))) {

        if (totalLength >= (themeinc + 4)) {
            thememax = (themeinc + 4);
            $("#themesBar .imgList").addClass("d-none");
            for (themeinc; themeinc <= thememax; themeinc++) {
                $('#themesBar :nth-child(' + themeinc + ')').removeClass("d-none");
            }
        } else {
            firstthemes();
        }

    }



    // normalBar
    // uttermostBar

    if (!(document.getElementById("uttermostBar").classList.contains('d-none'))) {

        if (totaluttermostLength >= (uttermostinc + 6)) {
            uttermostmax = (uttermostinc + 6);
            $("#uttermostBar .imgList").addClass("d-none");
            for (uttermostinc; uttermostinc <= uttermostmax; uttermostinc++) {
                $('#uttermostBar :nth-child(' + uttermostinc + ')').removeClass("d-none");
            }
        } else {
            firstuttermosts();
        }

    }



    if (!(document.getElementById("featuresBar").classList.contains('d-none'))) {

        if (totalfeaturesLength >= (featureinc + 6)) {
            featuremax = (featureinc + 6);
            $("#featuresBar .imgList").addClass("d-none");
            for (featureinc; featureinc <= featuremax; featureinc++) {
                $('#featuresBar :nth-child(' + featureinc + ')').removeClass("d-none");
            }
        } else {
            firstfeatures();
        }

    }




    if (!(document.getElementById("normalBar").classList.contains('d-none'))) {

        if (totalnormalLength >= (normalinc + 6)) {
            normalmax = (normalinc + 6);
            $("#normalBar .imgList").addClass("d-none");
            for (normalinc; normalinc <= normalmax; normalinc++) {
                $('#normalBar :nth-child(' + normalinc + ')').removeClass("d-none");
            }
        } else {
            firstnormals();
        }

    }
}




function eidt_profile_func(passedThis) {
    $("#editProfileModal").modal("show");
    $("#editProfileDiscardModal").modal("hide");
}



function popupfollowing(passedThis) {
    $(".popup_follow").addClass("d-none");
    $("#" + passedThis).removeClass("d-none");
}




function switchInfo(passedThis) {
    let dataInfo = $(passedThis).attr("data-info");
    $(".personal_sec_btns").removeClass("activated_sec_btn");
    $(passedThis).addClass("activated_sec_btn");
    $(".personal_private_box").addClass('d-none');
    $("." + dataInfo).removeClass('d-none');
}



function showDotted(passedThis) {
    $(".popup_delete").addClass("d-none");
    $(passedThis).parent().children(".popup_delete").removeClass("d-none");
}


function crossFollowPopup() {
    $(".popup_follow").addClass("d-none");
}


function prevScroll() {
    $(".prev").addClass("d-none");
    $(".tab2").addClass("d-none");
    $(".next").removeClass("d-none");
    $(".tab1").removeClass("d-none");
}



function nextScroll() {
    $(".prev").removeClass("d-none");
    $(".tab2").removeClass("d-none");
    $(".next").addClass("d-none");
    $(".tab1").addClass("d-none");
}


function crossProfileEdit(passedThis) {
    $("#editProfileModal").modal("hide");
    $("#editProfileDiscardModal").modal("show");
}


function addHomeUrl(passedThis) {
    $(passedThis).parent().parent().remove();
    $(".home_url_part").removeClass("d-none");
}


function addAffiliateLinks(passedThis) {
    $(passedThis).parent().parent().children(".popup_label").remove();
    let htmlAppending = '<div class="affiliate_input_holder"><div class="number_text_grid"><div class="popup_label">Affiliation Links</div><div class="tot_number">50</div></div><input type="text" class="popup_input"></div>';
    $(".all_affiliate_links").append(htmlAppending);
}

function completeEdit(passedThis) {
    $("#editProfileModal").modal("hide");
}


function crossProfileDiscard(passedThis) {
    $("#editProfileDiscardModal").modal("hide");
}


function activateTab(passedThis) {
    let dataid = $(passedThis).attr("data-id");
    $(".result_lines").addClass("d-none");
    $("." + dataid).removeClass("d-none");

    $(".mediatab").removeClass("activateMedia");
    $(passedThis).addClass("activateMedia");

    $(".searchbtnmedia").attr("placeholder", "Search " + dataid);
}











const show_more_content = (event) => {
    $(".more_content").addClass("opacity_none");
    if ($(event).parent().parent().parent().parent().parent().parent().parent().parent().parent().children(".more_content").hasClass("opacity_none")) {
        $(event).attr("src", "/assets/images/downactivearrow.png");
        $(event).parent().parent().parent().parent().parent().parent().parent().parent().parent().children(".more_content").removeClass("opacity_none");
    } else {
        $(event).attr("src", "/assets/images/downarrow.png");
        $(event).parent().parent().parent().parent().parent().parent().parent().parent().parent().children(".more_content").addClass("opacity_none");
    }
}




const activate_content = (event) => {
    event.stopPropagation();
    const parentElem = event.currentTarget;
    $("#utterModal").modal("hide");
    $("#utterModal").removeClass("show");
    $("#utterTitleModal").modal("hide");
    $("#utterTitleModal").removeClass("show");
    $("#warningModal").modal("hide");
    $("#warningModal").removeClass("show");
    let dataContent = $(parentElem).attr("data-content");
    if (dataContent != '') {
        $("#" + dataContent).modal("show");
    }
    $(parentElem).parent().children(".content_line").removeClass("active_content");
    $(parentElem).addClass("active_content");
    $(".more_content").addClass("opacity_none");
}



const joinUtter = (event) => {
    event.stopPropagation();
    let parentElem = event.currentTarget;
    let disable = 'modal-child-' + parentElem;
    $("." + disable).removeClass("d-none");
}

const crossUtter = (event) => {
    event.stopPropagation();
    let parentElem = event.currentTarget;
    let disable = 'modal-child-' + parentElem;
    $("." + disable).addClass("d-none");
    $(".more_content").addClass("opacity_none");
}


const crosModal = (event) => {
    event.stopPropagation();
    let parentElem = event.currentTarget;
    $(parentElem).parent().parent().parent().parent().modal("hide");
}

// const textVal = () => {

// }







const allFunctions = {
    sayHello,
    anotherFunction,
    uttermostToggle,
    seeMore,
    seeMore2,
    hideSuggestedPopUp,
    showSideBarPopup,
    removeScreen,
    showmanagePopup,
    removeThreeLinePopup,
    joinHomeUtter,
    crossHomeUtter,
    textVal,
    showMoreUtterFirstBoxContent,
    activate_msg_content,
    showThreeDotPopup,
    show_reportUtterPopup,
    openComments,
    showDotPopup,

    eidt_profile_func,
    popupfollowing,
    switchInfo,
    showDotted,
    crossFollowPopup,
    prevScroll,
    nextScroll,
    crossProfileEdit,
    addHomeUrl,
    addAffiliateLinks,
    completeEdit,
    crossProfileDiscard,
    activateTab,


    show_more_content,
    activate_content,
    joinUtter,
    crossUtter,
    crosModal,
    // Add more functions here
};

export default allFunctions;
