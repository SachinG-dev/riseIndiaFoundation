$(document).ready(function () {


    $(".check-rd").on("click", function () {
        $(".irayes").show();
        $('.irano').hide();
    });
    
    $(".check-rd2").on("click", function () {
        $(".irayes").hide();
        $('.irano').show();
    });

    $(".check-rdna").on("click", function () {
        $('.irano').hide();
        $(".irayes").hide();
    });

    $(".check-rdayc").on("click", function () {
        $(".aycyes").show();
        $('.aycno').hide();
    });
    
    $(".check-rdayc2").on("click", function () {
        $(".aycyes").hide();
        $('.aycno').show();
    });


    $(".check-ayd").on("click", function () {
        $(".aydyes").show();
    });
    
    $(".check-aydn").on("click", function () {
        $(".aydyes").hide();
    });

    $(".check-ayd3").on("click", function (){
            $(".ayd3").show();
    });
    $(".check-ayd3no, .check-ayd3na ").on("click", function (){
            $(".ayd3").hide();
           });

           $(".check-ayd4").on("click", function (){
            $(".ayd4").show();
    });
    $(".check-ayd4no, .check-ayd4na ").on("click", function (){
            $(".ayd4").hide();
           });

           $(".check-ayd6").on("click", function (){
            $(".ayd6").show();
    });
    $(".check-ayd6no, .check-ayd6na ").on("click", function (){
            $(".ayd6").hide();
           });

           $(".check-ayd7").on("click", function (){
            $(".ayd7").show();
    });
    $(".check-ayd7no, .check-ayd7na ").on("click", function (){
            $(".ayd7").hide();
           });

           $(".check-aymnyes").on("click", function (){
            $(".aymnyes").show();
    });
    $(".check-aymnno").on("click", function (){
            $(".aymnyes").hide();
           });

           $(".check-ayc").on("click", function (){
            $(".aycno").show();
    });
    $(".check-aycno, .check-aycna").on("click", function (){
            $(".aycno").hide();
           });

           $(".check-aym1").on("click", function (){
            $(".aymyes").show();
    });
    $(".check-aym1no, .check-aym1na").on("click", function (){
            $(".aymyes").hide();
           });

           $(".check-aomn1").on("click", function (){
            $(".aomn1").show();
    });
    $(".check-aomn1no, .check-aomn1na").on("click", function (){
            $(".aomn1").hide();
           });

           $(".check-aomn2").on("click", function (){
            $(".aomn2").show();
    });
    $(".check-aomn2no, .check-aomn2na").on("click", function (){
            $(".aomn2").hide();
           });

           $(".check-aomn3").on("click", function (){
            $(".aomn3").show();
    });
    $(".check-aomn3no, .check-aomn3na").on("click", function (){
            $(".aomn3").hide();
           });

           $(".check-sdoh15").on("click", function (){
            $(".sdoh15yes").show();
    });
    $(".check-sdoh15no, .check-sdoh15dec, .check-sdoh15na").on("click", function (){
            $(".sdoh15yes").hide();
           });

           $(".check-sdoh12").on("click", function (){
            $(".sdoh12yes").show();
    });
    $(".check-sdoh12no, .check-sdoh12dec, .check-sdoh12na").on("click", function (){
            $(".sdoh12yes").hide();
           });

           $(".check-sdoh11").on("click", function (){
            $(".sdoh11yes").show();
    });
    $(".check-sdoh11no, .check-sdoh11dec, .check-sdoh11na").on("click", function (){
            $(".sdoh11yes").hide();
           });

           $(".check-ypn18").on("click", function (){
            $(".ypn18").show();
    });
    $(".check-ypn18no, .check-ypn18na").on("click", function (){
            $(".ypn18").hide();
           });

           $(".btn-vital").on("click", function(){
            $(".new-table").show();
           });
           $(".btn-vital-close").on("click", function(){
            $(".new-table").hide();
           });
    // $("input[name='toggle']").on("click", function () {
    //     var checkedRadioId = $("input[name='toggle']:checked").attr("id");
    
    //     if (checkedRadioId === "radioNA") {
    //         $(".irayes").hide();
    //         $('.irano').hide();
    //     } else if (checkedRadioId === "radio1") {
    //         $(".irayes").show();
    //         $('.irano').hide();
    //     } else if (checkedRadioId === "radio2") {
    //         $(".irayes").hide();
    //         $('.irano').show();
    //     }
    // });
    

 //     $(document).ready(function () {
//     $(".check-rd, .check-rd2").on("click", function () {
//         var id = $(this).attr("data-id");
//         if ($(this).is(":checked")) {
//             $("." + id).css("display", "block");
//         } else {
//             $("." + id).css("display", "none");
//         }
//     });
// });



//       $(".check-rd, .check-rd2").on("click", function () {
//     var id = $(this).attr("data-id");
  
//     // Hide all elements associated with the class
//     $("." + id).hide();
  
//     // Check which checkbox is clicked and show its associated elements
//     if ($(this).hasClass("check-rd")) {
//         // If the checkbox belongs to class check-rd
//         if ($(this).is(":checked")) {
//             $("." + id).show();
//         }
//     } else if ($(this).hasClass("check-rd2")) {
//         // If the checkbox belongs to class check-rd2
//         if ($(this).is(":checked")) {
//             $("." + id).show();
//         }
//     }
// });
    // $('input[type=radio][name=inlineRadioOptions]').change(function () {
    //   var selectedValue = $(this).val();
    //   $('.sdoh11yesx, .sdoh12yesx, .sdoh15yesx, .irayes, .irano, .aycno, .aycyes, .aymnyes, .ypn18, .aymyes, .aomn1, .aomn2, .aomn3, .aydyes, .ayd3, .ayd4, .ayd6, .ayd7').hide();

    //   switch (selectedValue) {
    //     case 'sdoh11yes':
    //       if (1){
    //         $('.sdoh11yesx').show();
    //       }
    //       break;
    //     case 'sdoh12yes':
    //       $('.sdoh12yesx').show();
    //       break;
    //     case 'sdoh15yes':
    //       $('.sdoh15yesx').show();
    //       break;
    //     case 'irayes':
    //       $('.irayes').show();
    //       break;
    //     case 'irano':
    //       $('.irano').show();
    //       break;
    //     case 'aycno':
    //       $('.aycno').show();
    //       break;
    //     case 'aycyes':
    //       $('.aycyes').show();
    //       break;
    //       case 'aymnyes':
    //       $('.aymnyes').show();
          
    //       break;
    //       case 'ypn18':
    //       $('.ypn18').show();
    //       break;
    //       case 'aymyes':
    //       $('.aymyes').show();
    //       break;
    //       case 'aomn1':
    //       $('.aomn1').show();
    //       break;
    //       case 'aomn2':
    //       $('.aomn2').show();
    //       break;
    //       case 'aomn3':
    //       $('.aomn3').show();
    //       break;
    //       case 'aydyes':
    //       $('.aydyes').show();
    //       break;
    //       case 'ayd3':
    //       $('.ayd3').show();
    //       break;
    //       case 'ayd4':
    //       $('.ayd4').show();
    //       break;
    //       case 'ayd6':
    //       $('.ayd6').show();
    //       break;
    //       case 'ayd7':
    //       $('.ayd7').show();
    //       break;



    //     default:
    //       break;
    //   }
    // // });
  });