$("#crossCreate").click(function () {
  $("#popUPCreateModal").modal("hide");
});

var path = window.location.href;

$('[data-toggle="offcanvas"], #navToggle').on('click', function () {
  $('.offcanvas-collaps').toggleClass('open', '2000');
});

// because the 'href' property of the DOM element is the absolute path
$('.main-ul a').each(function () {
  if (this.href === path) {
    $(this).addClass('activee');
  }
});

$('.on-click-active-rewards').click(function () {
  // alert("clicked");
  $('.rewards-active').addClass('active');
  $('.rewards-active-remove').removeClass('active');
});




// $('body').on('click', function (e) {
//   $('[data-toggle=popover]').each(function () {
//     // hide any open popovers when the anywhere else in the body is clicked
//     if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
//       $(this).popover('hide');
//     } else {
//       // activating the menu thus overflow issue solves out!!... 
//       $("#menu-action").addClass("active");
//       $(".sidebar").addClass("active");
//       $(".main").addClass("active");
//     }
//   });
// });

// $(function () {
//   $('[data-toggle="popover"]').popover();
// })

$(document).ready(function () {


  $('#MultiOption').change(function () {

    if (this.checked) {
      $('#multipleOptions').removeClass("d-none");
      $('.input__group__pre').hide();
      $("#customCheck1").prop("checked", false);
    } else {
      $('#multipleOptions').addClass("d-none");
      $('.input__group__pre').show();
      $("#MultiOption").prop("checked", false);
    }

  });



  $('#customCheck1').change(function () {

    if (this.checked) {
      $('#multipleOptions').addClass("d-none");
      $('.input__group__pre').show();
      $("#MultiOption").prop("checked", false);
    } else {
      $('#multipleOptions').removeClass("d-none");
      $('.input__group__pre').hide();
      $("#customCheck1").prop("checked", false);
    }

  });






  $(window).resize(function () {
    if ($(window).width() <= 480) {
      $('.user-info').click(function () {
        // alert("clicked");
        // $('.show-on-click').css('display' , 'block');

      });
    }
  });

});


var restoresidebaractive = false;

$(document).ready(function (c) {
  $('.alert-close').on('click', function (c) {
    $(this).parent().fadeOut('slow', function (c) { });
  });
});

$(document).ready(function () {
  $('.hidden-div').hide();
  $('.reply__div').hide();
  $(".reply__inner__div").hide();
  $(".comnt__inner__div").hide();
  $('.write-message-input').hide();

  // $(".comment-icon-toggle").click(function () {
  //   console.log("Hollas");
  //   // $(this).parent().fadeOut('slow');
  //   var clickedId = $(this).attr('id');
  //   $('.write-message-input.' + clickedId).toggle();
  //   console.log(clickedId)
  //   $(".hidden-div").hide();
  //   $('.reply__div').hide();
  //   $(".reply__inner__div").hide();
  //   $(".comnt__inner__div").hide();
  //   // $('.write-message-input.'+clickedId).hide();
  // });

  $(".reply__toggle").click(function () {
    var clickedId = $(this).attr('id');
    $('.reply__div.' + clickedId).show();
  });

  $(".btn__reply").click(function () {
    var clickedId = $(this).attr('id');
    $('.reply__inner__div.' + clickedId).show();
  });
  $(".btn__comnt__click").click(function () {
    var clickedId = $(this).attr('id');
    $('.comnt__inner__div.' + clickedId).show();
  });




  $('#menu-actio').click(function () {
    $('.sidebar').toggleClass('active');
    $('.main').toggleClass('active');
    $(".restbars").toggleClass("sidebaractivated");
    //   $('.main-ul-nav-title').toggleClass('dnone');
    $('.main-user-profile-nav').toggleClass('px1');
    $('.main-ul .nav-item .nav-link').toggleClass('padding');
    $('.main-ul .nav-item .nav-link').toggleClass('pp');
    //   $(this).toggleClass('active');

  });



  $(".sidebar").mouseover(function () {
    if ($('.sidebar').hasClass('active')) {
      $('.sidebar').removeClass('hover-add-item');
      restoresidebaractive = true;
    } else {
      $(".restbars").addClass("sidebaractivated");
    }

  });
  $(".sidebar").mouseout(function () {
    if ($('.sidebar').hasClass('active')) {
      $('.sidebar').addClass('hover-add-item');
      restoresidebaractive = false;
    } else {
      $(".restbars").removeClass("sidebaractivated");
    }
  });




});


$(document).ready(function () {

  $(".on-hover-image").click(function () {
    $(".show-names-on-hove").toggle();
  });




  $("#switch-id").change(function () {
    // alert('asasassa');
    if ($(this).is(":checked")) {
      $(".hide-on-switch").css('visibility', 'hidden');
      // $(".contentA").hide();
    } else {
      $(".hide-on-switch").css('visibility', 'visible');
      // $(".contentA").show();
    }
  });

});





$('.sidebar-load-more').hide();
$('.six-coins').hide();
$('#menu-action').click(function () {
  $('.sidebar').toggleClass('active');
  $('.main').toggleClass('active');
  $(".restbars").toggleClass("sidebaractivated");

  $(this).toggleClass('active');

  if ($('.sidebar').hasClass('active')) {
    $('.sidebar-load-more').show();
    $('.six-coins').show();
    $(this).find('i').addClass('fa-close');
    $(this).find('i').removeClass('fa-bars');
    $(".KImg").attr("src", "/assets/images/k-close.png");
    $(".restbars").addClass("sidebaractivated");
  } else {
    $('.sidebar-load-more').hide();
    $('.six-coins').hide();
    $(this).find('i').addClass('fa-bars');
    $(this).find('i').removeClass('fa-close');
    $(".KImg").attr("src", "/assets/images/k-open.png");
    $(".restbars").removeClass("sidebaractivated");
  }
});

// Add hover feedback on menu

$('.letter-i-click').click(function () {
  alert("We will not share this information publicly. We just want you to confirm your age.");
});


$('.sidebar').hover(function () {
  $('.sidebar').toggleClass('hovered');
  if (!$('.sidebar').hasClass('active')) {
    $('.main').toggleClass('active');
    $('.sidebar-load-more').show();
    $('.six-coins').show();
  }
});



$(document).ready(function () {
  $('.vide').each(function (el) {
    var _this = $(this);
    _this.on('mouseover', function (ev) {

      _this[0].src += "&autoplay=1";
      ev.preventDefault();

    });
  });
});




function startTinymace(startFor) {

  let exactPieChartChild = $(startFor).parent().children(".pieChart");
  let exactjoiningChild = exactPieChartChild.children(".join");
  let mytextarear = startFor.substring(1);


  tinymce.init({
    selector: startFor,
    plugins: "emoticons autoresize",
    toolbar: "emoticons",
    toolbar_location: "bottom",
    menubar: false,
    statusbar: false,
    content_style: "body { font-size: 16pt; }",
    setup: function (editor) {
      editor.on('KeyUp', function (e) {


        let textareaValue = (editor.getContent());
        // console.log(textareaValue);
        let textareaValueLength = textareaValue.trim().split(/\s+/).length;
        if (textareaValueLength < 150) {
          var currVal = (editor.getContent());
          $(startFor).val(currVal);
          let percentage = ((textareaValueLength / 135) * 100);

          if ((textareaValueLength >= 135)) {
            // $(exactjoiningChild).removeClass("d-none");
            // $(exactPieChartChild).css("background", "#fff");
          } else {
            $(exactjoiningChild).addClass("d-none");
            $(exactPieChartChild).css("background", "conic-gradient(#007a85 " + percentage + "% , #ffffff 0%)");
          }



        } else {
          alert("Maximum 135 Words!...");
          let textVal = $(startFor).val();
          tinyMCE.get(mytextarear).setContent(textVal);
        }

      });
    }
  });

}

// startTinymace('#textareaPlugin');
// startTinymace('#textareaPlugin1');
// startTinymace('#textareaPlugin2');
// startTinymace('#textareaPlugin3');





// $(".content_line").click(function () {
//   let datacontent = $(this).attr("data-content");
//   console.log(datacontent);
// });





$("#crossHomeUtter").click(function () {
  $(".miniutterbar").toggleClass("d-none");
  $(".showHideUtter").toggleClass("d-none");
});










function crossHomeUtter(passedVal) {
  let disable = 'home-utter-' + passedVal;
  $("." + disable).addClass("d-none");
}



// function crossUtter(passedVal) {
//   let disable = 'modal-child-' + passedVal;
//   $("." + disable).addClass("d-none");
// }





function joinHomeUtter(passedvalue) {
  let disable = 'home-utter-' + passedvalue;
  $("." + disable).removeClass("d-none");
}




// function joinUtter(passedvalue) {
//   let disable = 'modal-child-' + passedvalue;
//   $("." + disable).removeClass("d-none");
// }




// $(".SendToUtterOrWorthy").click(function () {
//   let propertyId = $(this).attr("data-id");
//   $("#utterResponse").val(propertyId);
//   $(".popups").removeClass("bBlack");
//   $(this).addClass("bBlack");
//   $("#proceedBtn").addClass("bgActivated");
// });


// $(".creatingModal").click(function () {
//   $("#popUPCreateModal").modal("show");
// });


function fourhandsNextAppear() {
  $("#utterModal").modal("hide");
  $("#fourHands1").modal("show");
}

function exitPoll() {
  $("#fourHands1").modal("hide");
}








function addMore() {

  let format = '<div class="options__class align-items-center options__number__two"' +
    'style="display: flex;" id="optiontwo">' +
    '<div class="d-flex w-100 form-group form__group__quests">' +
    ' <input type="text" class="form-control" placeholder="Option 3">' +
    '</div>' +
    ' <div class="add__more">' +
    '<a onClick="addMore()"><img src="//assets/' +
    'images/promonew/45.png" alt=""></a></div></div>';
  $("#multipleOptions").append(format);

}








function checkCurrent(passedVal) {
  // $(".custom-control-input").prop("checked", false);
  // $(passedVal).prop("checked", true);
}






// $("#showUtterTypeBox").click


function showMore() {
  $(".showmorehrefs").toggleClass("d-none");
}





$("#showUtterBox").click(function () {
  $(".showHideUtter").toggleClass("d-none");
  $(".miniutterbar").toggleClass("d-none");
});










function countCharacters(event) {

  let characterlength = (($(".profileIntrotext").val()).trim()).length;
  if (characterlength >= 1000) {
    event.preventDefault();
  } else {
    $(".totalchars").html(characterlength);
  }


  if (characterlength > 0) {
    $(".showhideEye").removeClass("opacity-0");
  } else {
    $(".showhideEye").addClass("opacity-0");
  }
}



function showPopUP() {
  $("#popup").toggleClass("d-none");
}







function SendToUtterOrWorthy(passedThis) {
  let propertyId = $(passedThis).attr("data-id");
  $("#utterResponse").val(propertyId);
  $(".popups").removeClass("bBlack");
  $(passedThis).addClass("bBlack");
  $("#proceedBtn").addClass("bgActivated");
}


// $("#utterTitleModal").modal("show");
// $("#warningModal").modal("show");


// $(".proceed").click(function () {
//   let sendTo = $("#utterResponse").val();
//   if (sendTo == 'utterance') {
//     $("#popUPCreateModal").modal("hide");
//     $("#utterModal").modal("show");
//   } else {
//     window.location.href = "/site/chooseutterworthy";
//     // newpromotions
//   }
// })




$(".faActiveRotation").click(function () {

  if (($(this).hasClass("rotate90deg"))) {
    let activeBlock = $(this).attr("data-id");
    $(this).removeClass("rotate90deg");
    $("#" + activeBlock).addClass("d-none");
  } else {
    $(".faActiveRotation").removeClass("rotate90deg");
    $(".blocks").addClass("d-none");

    $(this).addClass("rotate90deg");
    let activeBlock = $(this).attr("data-id");
    $("#" + activeBlock).removeClass("d-none");
  }
});



function rotateAdjust(passedThis) {
  if (($(passedThis).children(".adjustActiveRotation").hasClass("rotate90deg"))) {
    let activeBlock = $(passedThis).attr("data-id");
    $(passedThis).children(".adjustActiveRotation").removeClass("rotate90deg");
    $("." + activeBlock).addClass("d-none");
  } else {
    $(".adjustActiveRotation").removeClass("rotate90deg");
    $(".adjust_res_line").addClass("d-none");

    $(passedThis).children(".adjustActiveRotation").addClass("rotate90deg");
    let activeBlock = $(passedThis).attr("data-id");
    $("." + activeBlock).removeClass("d-none");
  }
}






function textVal() {
  let textareaValue = tinyMCE.get('textareaPlugin').getContent();
  let textareaValueLength = textareaValue.trim().split(/\s+/).length;
  if (textareaValueLength >= 150) {
    alert("Maximum 150 Words!...");
  }
}








function showParticularDiv(passedId) {
  $(".fade").removeClass("show");
  $(".fade").removeClass("active");

  $("#" + passedId).addClass("show");
  $("#" + passedId).addClass("active");
}



function backToPrivacy() {
  $(".fade").removeClass("show");
  $(".fade").removeClass("active");

  $("#Privacy").addClass("show");
  $("#Privacy").addClass("active");
}


function deactiveOrDelete() {
  var radioValue = $("input[name='prefferd_action']:checked").val();
  if (radioValue == 'yes') {
    window.location.href = "index.html";
  } else {
    showParticularDiv("deactivateAccount");
  }
}












$(".coinShowHide").change(function () {
  $("#coinShowingPart").toggleClass("d-none");

  var descition = $(this).attr("data-id");
  var months = 6;
  var d = new Date();
  d.setTime(d.getTime() + (months * 30 * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = 'coinShow' + "=" + descition + ";" + expires + ";path=/";

});




$("#crossIt").click(function () {
  $("#utterModal").modal("hide");
});




$("#crossItFourHand").click(function () {
  $("#fourHands1").modal("hide");
});











function submitForm() {
  let messageVal = ($("#messageBox").val()).trim();
  let textlength = messageVal.length;
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();

  if ((messageVal == "")) {
    alert("type Something");
    return false;
  } else {

    var newMessage = '';

    if (textlength > 50) {
      newMessage = '<div class="message-sent-userimage justify-content-end align-items-center d-flex">' +
        '<div class="d-flex flex-column tickself">' +
        '<div class="lead message-sent">' +
        messageVal + '<div class="profile-user-review-day text-right txtlighttime">' +
        '<small> ' + time + '</small>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    } else {

      newMessage = '<div class="message-sent-userimage justify-content-end align-items-center d-flex">' +
        '<div class="d-flex flex-column tickself">' +
        '<div class="lead message-sent short">' +
        messageVal + '<div class="profile-user-review-day text-right txtlighttime">' +
        '<small> ' + time + '</small>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    }


    $(".mainmessages").append(newMessage);

    $(".emptybar").addClass("d-none");
    $(".mainmessages").removeClass("d-none");
    $(".scrollbar-message").removeClass('fullheight');

    $('.scrollbar-message').scrollTop($('.scrollbar-message')[0].scrollHeight);
    $("#messageBox").val("");

    return false;
    // this.form.submit();
  }
}








$(".main-user-profile .user-info").click(function () {
  let imgSrc = $(this).children(".rounded-circle").attr("src");
  let userName = $(this).children(".justify-content-start").children(".username-comment").html();
  console.log(imgSrc);
  console.log(userName);
  $("#chosenUserImg").attr("src", imgSrc);
  $("#chosenUserName").html(userName);
});








// password show hide system | passcontrol
// function passSystem(passedThis) {
//   let type = $(".passcontrol").attr("type");
//   $(passedThis).toggleClass("fa-eye fa-eye-slash");
//   if (type == 'password') {
//     $(".passcontrol").attr("type", "text");
//   } else {
//     $(".passcontrol").attr("type", "password");
//   }
// }




// checking login page is all field not empty then remove disabled from button.
// function enableQuery() {
//   let email = ($(".emailControler").val()).trim();
//   let password = ($(".passcontrol").val()).trim();
//   if ((email.length > 0) && (password.length > 0)) {
//     $(".signIn").attr('disabled', false);
//   } else {
//     $(".signIn").attr('disabled', true);
//   }
// }




function enableResetQuery() {
  let emailfield = ($(".passwordControler").val()).trim();

  if ((emailfield.length > 0)) {
    $(".resetPassBtn").attr('disabled', false);
  } else {
    $(".resetPassBtn").attr('disabled', true);
  }
}





// function signupQuery() {
//   let username = ($(".usersName").val()).trim();
//   let displayname = ($(".DisplayName").val()).trim();
//   if ((username.length > 0) && (displayname.length > 0)) {
//     $(".signMeUp").attr('disabled', false);
//   } else {
//     $(".signMeUp").attr('disabled', true);
//   }
// }








function nextQuery() {
  let input1 = (($(".input1").val()).trim()).length;
  let input2 = (($(".input2").val()).trim()).length;
  let input3 = (($(".input3").val()).trim()).length;
  let input4 = (($(".input4").val()).trim()).length;
  let input5 = (($(".input5").val()).trim()).length;


  if ((input1 > 0) && (input2 > 0) && (input3 > 0) && (input4 > 0) && (input5 > 0)) {
    $(".nextShow").attr('disabled', false);
  } else {
    $(".nextShow").attr('disabled', true);
  }
}









$(".signNext").click(function () {

  let input1 = (($(".input1").val()).trim()).length;
  let input2 = (($(".input2").val()).trim()).length;
  let input3 = (($(".input3").val()).trim()).length;
  let input4 = (($(".input4").val()).trim()).length;
  let input5 = (($(".input5").val()).trim()).length;

  if (input1 > 0 && input2 > 0 && input3 > 0 && input4 > 0 && input5 > 0) {
    $(".step1").addClass("d-none");
    $(".step2").removeClass("d-none");
  }
});





let curYear = new Date().getFullYear();
$(".yearSpan").html(curYear);


function changeColor(passedThis) {
  $(passedThis).addClass("changed");
}





var selected = 0;

function markall(passedThis) {
  let all = $(passedThis).data("all");
  let none = $(passedThis).data("none");
  $(".alreadychat").removeClass("cstmbg");

  if (selected == 0) {
    $(passedThis).attr('src', all);
    $(".checkboxTicked").removeClass('d-none');
    $(".alreadychat").attr("data-id", '1');
    let src = $(".checkboxTicked img").data("no");
    $(".checkboxTicked img").attr("src", src);

    $(".alreadychat").attr("onClick", 'tickUntick(this)');
    selected = 1;
  } else {
    $(passedThis).attr('src', none);
    $(".checkboxTicked").addClass('d-none');
    $(".alreadychat").attr("data-id", '0');

    $(".alreadychat").removeAttr("onClick");
    $(".alreadychat").attr("onClick", 'openChat(this)');
    selected = 0;
  }
}



function openChat(passedChat) {
  // ajax and get the messages | then below
  $(".alreadychat").removeClass("chatbg");
  $(passedChat).addClass("chatbg");

  $(".startnewchat").addClass("d-none");
  $(".userprofileinfo").removeClass("d-none");

  $(".chatimgmid").removeClass("focused");
  $(".mainmessages").removeClass("d-none");
  $(".emptybar").addClass("d-none");

  $(".userprofileinfo").removeClass("d-none");

  $(".messageNameHolder").removeClass('opacity0');
  $(".sendmsg").removeClass('opacity0');
  $(".scrollbar-message").removeClass('fullheight');
}





function marktoggle(passedThis) {
  $(passedThis).attr("data-id", '0');

  if ($(passedThis).children('.checkboxTicked').hasClass('d-none')) {
    $(passedThis).children('.checkboxTicked').removeClass('d-none');


    let src = $(passedThis).children(".checkboxTicked").children('img').data("id");
    $(passedThis).children(".checkboxTicked").children('img').attr("src", src);
    $(passedThis).addClass("cstmbg");


  } else {
    $(passedThis).children('.checkboxTicked').addClass('d-none');
    $('.selectingimg').attr('src', $('.selectingimg').data("none"));

    $(".startnewchat").removeClass("d-none");
    $(".userprofileinfo").addClass("d-none");

    $(".chatimgmid").addClass("focused");
    $(".mainmessages").addClass("d-none");
    $(".emptybar").removeClass("d-none");

    $(".userprofileinfo").addClass("d-none");

    $(".messageNameHolder").addClass('opacity0');
    $(".sendmsg").addClass('opacity0');
    $(".scrollbar-message").addClass('fullheight');


    $(passedThis).removeClass("cstmbg");
    $(passedThis).removeAttr("onClick");
    $(".alreadychat").removeClass("chatbg");
    $(".alreadychat").attr("onClick", 'openChat(this)');

    selected = 0;
  }
}








function tickUntick(thisparam) {
  $(thisparam).addClass("cstmbg");
  let src = $(thisparam).children(".checkboxTicked").children('img').data("id");
  $(thisparam).children(".checkboxTicked").children('img').attr("src", src);
  $(thisparam).children('.checkboxTicked').removeClass('d-none');
}







function checkInput(passedThis) {
  let inputval = ($(passedThis).val()).trim();
  if (inputval == '') {
    $(".sendit").removeClass('sendable');
  } else {
    $(".sendit").addClass('sendable');
  }
}




function startChat(passed) {
  // $(passed).addClass("focused");
  $(".messageNameHolder").removeClass('opacity0');
  $(".startnewchat").removeClass("d-none");
  $(".userprofileinfo").addClass("d-none");

  $(".sendmsg").addClass('opacity0');
  $(".scrollbar-message").addClass('fullheight');

  $(".mainmessages").addClass("d-none");
  $(".emptybar").removeClass("d-none");
}




function closeSearch() {
  $(".messageNameHolder").addClass('opacity0');
  $(".startnewchat").addClass("d-none");
  $(".userprofileinfo").removeClass("d-none");

  $(".sendmsg").addClass('opacity0');
  $(".scrollbar-message").addClass('fullheight');

  $(".searchaccount").val('');
  $(".results").html('');
  $(".results").addClass('d-none');
}




function searchAccountRes(passed) {
  let searchval = ($(passed).val()).trim();
  if (searchval.length > 0) {
    // also fetch data in future by ajax... 
    for (let i = 0; i < 10; i++) {
      $(".results").append("<div class='resbar' onClick='resbar(this)'>" + searchval + i + "</div>");
    }

    $(".results").removeClass('d-none');
  } else {
    $(".results").html('');
    $(".results").addClass('d-none');
  }
}






function resbar(passed) {
  let inpVal = ($(passed).html()).trim();
  $(".searchaccount").val(inpVal);
  $(".results").html('');
  $(".results").addClass('d-none');
}









function startChating() {
  let searchValue = ($(".searchaccount").val()).trim();
  if (searchValue.length > 0) {
    $(".startnewchat").addClass('d-none');
    $(".userprofileinfo").removeClass("d-none");
    $(".sendmsg").removeClass("opacity0");

    $(".searchaccount").val('');
    $(".results").html('');
    $(".results").addClass('d-none');
  } else {
    alert("First Select One...");
  }
}












function activeIt(passedThis) {
  $(".inertButton").removeClass("activatedbtn");
  $(passedThis).addClass("activatedbtn");
}




let oldwidth = $(".tabsholder").width();
let tabswidth = 100;


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



$(".tabline").click(function () {
  let thisdataid = $(this).attr("data-id");
  $(".common_input_sections").addClass("d-none");
  $("." + thisdataid).removeClass("d-none");
  $(".tabline").removeClass("activetabline");
  $(this).addClass("activetabline");
});




$(".visitors_visited").click(function () {
  let thisdataid = $(this).attr("data-id");
  $(".common_visits").addClass("d-none");
  $("." + thisdataid).removeClass("d-none");

  $(".visitors_visited").removeClass("activevisited");
  $(this).addClass("activevisited");
});


function showDotted(passedThis) {
  $(".popup_delete").addClass("d-none");
  $(passedThis).parent().children(".popup_delete").removeClass("d-none");
}


$(".delete_text").click(function () {
  $(this).parent().parent().parent().remove();
});




function activateTab(passedThis) {
  let dataid = $(passedThis).attr("data-id");
  $(".result_lines").addClass("d-none");
  $("." + dataid).removeClass("d-none");

  $(".mediatab").removeClass("activateMedia");
  $(passedThis).addClass("activateMedia");

  $(".searchbtnmedia").attr("placeholder", "Search " + dataid);
}












function showSuggestionDetails(passedThis) {
  $(passedThis).children(".popup_suggestions_part").toggleClass("d-none");
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




function hideSuggestedPopUp(params) {
  $(".full_screen_black").addClass("d-none");
  $(".suggestion_popup").addClass('d-none');
}




function active_notify_tab(passedThis) {
  $(".notification_tab").removeClass("activated_notify_tab");
  $(passedThis).addClass("activated_notify_tab");
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



function showMoreContent(passedThis) {
  if ($(".page_more_box .more_content").hasClass("d-none")) {
    $(passedThis).attr("src", "/assets/images/downactivearrow.png");
    $(".page_more_box .more_content").removeClass("d-none");
  } else {
    $(passedThis).attr("src", "/assets/images/downarrow.png");
    $(".page_more_box .more_content").addClass("d-none");
  }
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


function removeScreen(passedThis) {
  $(".full_screen").addClass("d-none");
  $(".manage_popup_line").addClass("d-none");
  $(".about_popup").addClass("d-none");
  $(".terms_popup").addClass("d-none");
}








function popupfollowing(passedThis) {
  $(".popup_follow").addClass("d-none");
  $("#" + passedThis).removeClass("d-none");
}



function crossFollowPopup() {
  $(".popup_follow").addClass("d-none");
}



function showDotPopup(passedThis) {
  // $(passedThis).parent().children(".show_3dot_popup").toggleClass("d-none");
}




function sendToScroll(passedThis) {
  document.getElementById("khrimisay_login").scrollIntoView();
  window.scrollBy(0, 200);
  document.querySelector(".emailControler").focus();
}













function show_reportUtterPopup(passedThis) {
  $("#reportUtterPopup").modal("show");
}


function crossUtterReport(passedThis) {
  $("#reportUtterPopup").modal("hide");
}



function toggle_disturbance(passedThis) {
  $(".select_level_options").toggleClass("d-none");
}



function activateLevel(passedThis) {
  $(".level_option_line").removeClass("active_level_option");
  $(passedThis).addClass("active_level_option");
  $(".select_level_options").addClass("d-none");
}


function activeSelectLevel(passedThis) {
  $(".level_option_line").removeClass("selected_report");
  $(passedThis).addClass("selected_report");
  $(".left_title").html($(passedThis).html());
  $(".select_level_options").toggleClass("d-none");
}


function activeSelectLevelAndClosePopup(passedThis) {
  $(".level_option_line").removeClass("selected_report");
  $(passedThis).addClass("selected_report");
  $(".left_title").html($(passedThis).html());
  $(".select_level_options").toggleClass("d-none");
  $("#reportUtterPopup").modal("hide");
}





function openComments(passedThis) {
  $(passedThis).parent().parent().children(".all_related_comments").toggleClass("d-none");
}




function activate_notification(passedThis) {
  $('.unread').removeClass("notification-btn");
  $(passedThis).addClass("notification-btn");
  let htmlText = $(passedThis).html();

  if (htmlText == 'Unread') {
    $(".bar-notification").addClass("d-none");
    $(".unread_notifications").removeClass("d-none");
  } else {
    $(".bar-notification").removeClass("d-none");
  }
}




function eidt_profile_func(passedThis) {
  $("#editProfileModal").modal("show");
  $("#editProfileDiscardModal").modal("hide");
}


function completeEdit(passedThis) {
  $("#editProfileModal").modal("hide");
}


function crossProfileEdit(passedThis) {
  $("#editProfileModal").modal("hide");
  $("#editProfileDiscardModal").modal("show");
}


function crossProfileDiscard(passedThis) {
  $("#editProfileDiscardModal").modal("hide");
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




function switchInfo(passedThis) {
  let dataInfo = $(passedThis).attr("data-info");
  $(".personal_sec_btns").removeClass("activated_sec_btn");
  $(passedThis).addClass("activated_sec_btn");
  $(".personal_private_box").addClass('d-none');
  $("." + dataInfo).removeClass('d-none');
}



function activate_spec_notification(passedThis) {
  $('.unread').removeClass("notification-btn");
  $(passedThis).addClass("notification-btn");
  let dataId = $(passedThis).attr("data-id");
  $(".bar-notification").addClass("d-none");
  $("." + dataId).removeClass("d-none");
}




function activate_msg_content(passedThis) {
  $(".message_holder").removeClass("b_top_none");
  let data_content = $(passedThis).attr("data-content");
  $(".f_utter_post_box").addClass("d-none");
  $(".warning_holder").addClass("d-none");
  $(".title_holder").addClass("d-none");
  $("." + data_content).removeClass("d-none");
}





// function show_more_content(passedThis) {
//   if ($(passedThis).parent().parent().parent().parent().parent().parent().parent().parent().parent().children(".more_content").hasClass("opacity_none")) {
//     $(passedThis).attr("src", "/assets/images/downactivearrow.png");
//     $(passedThis).parent().parent().parent().parent().parent().parent().parent().parent().parent().children(".more_content").removeClass("opacity_none");
//   } else {
//     $(passedThis).attr("src", "/assets/images/downarrow.png");
//     $(passedThis).parent().parent().parent().parent().parent().parent().parent().parent().parent().children(".more_content").addClass("opacity_none");
//   }
// }








function showThreeDotPopup(passedThis) {
  $(passedThis).parent().parent().children(".three_dot_popup").toggleClass("d-none");
  $(".three_dot_cover_bg").removeClass("d-none");
}




function removeThreeLinePopup(passedThis) {
  $(".three_dot_popup").addClass("d-none");
  $(".three_dot_cover_bg").addClass("d-none");
}








function fillStar(passedvalue) {
  $(".rating").removeClass("fa-star");
  console.log(passedvalue);
  for (let i = 1; i <= passedvalue; i++) {
    $(".rating:nth-child(" + i + ")").addClass("fa-star");
  }
}

















