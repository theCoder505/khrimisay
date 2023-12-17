var selectAllItems = ".selectAll";
var radioItem = ":radio";

$(selectAllItems).click(function () {

    if (this.checked) {
        $(radioItem).each(function () {
            this.checked = true;
        });
    } else {
        $(radioItem).each(function () {
            this.checked = false;
        });
    }
});

$(document).ready(function () {
    $("input[name$='customRadioInlineedit']").click(function () {
        var test = $(this).val();

        $("div.desc").hide();
        $(".customRadioInlineedit" + test).show();
    });
});










function counter__textarea_custom(passedThis) {
    var text = $('#counter__textarea').val();
    var textTrim = text.trim();
    if (textTrim.length === 0) {
        $('.details').html('<p>Characters with spaces: 0 <br>Characters without spaces: 0 <br>Lines: 0')
    } else {
        var words = textTrim.replace(/\s+/gi, ' ').split(' ');
        var charWith = textTrim.length;
        var charWithout = textTrim.replace(/\s+/gi, '').length;
        var lines = textTrim.split(/\r*\n/).length;
        // $('.details').html(words.length);
        $('.details').html(textTrim.length);
    }
}





function counter__textarea_intro(passedThis) {
    let text2 = $(passedThis).val();
    let text2Trim = text2.trim();
    if (text2Trim.length === 0) {
        $(passedThis).parent().parent().children('.text-right').children('.details_intro').html('<p>Characters with spaces: 0 <br>Characters without spaces: 0 <br>Lines: 0')
    } else {
        let words2 = text2Trim.replace(/\s+/gi, ' ').split(' ');
        let charWith2 = text2Trim.length;
        let charWith2out = text2Trim.replace(/\s+/gi, '').length;
        let lines2 = text2Trim.split(/\r*\n/).length;
        // $(passedThis).parent().parent().children('.text-right').children('.details_intro').html(words2.length);
        $(passedThis).parent().parent().children('.text-right').children('.details_intro').html(text2Trim.length);
    }
}







$(".nav-link").click(function () {
    // $(".nav-link").removeClass("active");
    // $(this).addClass("active");

    let dataId = $(this).attr("data-id");
    $('html,body').animate({
        scrollTop: $(dataId).offset().top - 150
    });
});



const links = document.querySelectorAll(".nav-link");
const scrollingSection = document.querySelectorAll(".scrollsec");

function activeMenu() {
    let len = scrollingSection.length;
    // console.log(window.scrollY);
    if (!(window.scrollY <= 100)) {
        // console.log("Passed");
        while (--len && window.scrollY - 100 < scrollingSection[len].offsetTop) {
            links.forEach(ltx => ltx.classList.remove("active"));
            links[len].classList.add("active");
        }
    } else {
        $(".nav-link").removeClass("active");
        links[0].classList.add("active");
        // console.log("not pass");
    }
}


activeMenu();
window.addEventListener("scroll", activeMenu);














function activatePictureTab(passedThis) {
    $(passedThis).parent().children(".comp_logo_input").click();
    $(passedThis).parent().children(".uploaded_img").removeClass('d-none');
    $(passedThis).parent().children(".drag_down").addClass('d-none');
}
