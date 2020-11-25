$(document).ready(function() {

    var values = ['Interested', 'Distressed', 'Excited', 'Upset', 'Strong', 'Guilty', 'Scared', 'Hostile', 'Enthusiastic', 'Proud']

    $("#panasError").hide()

    function removeErrors(value) {
        $("input[name=" + value + "]").change(
            function() {
                if ($(this).is(':checked')) {
                    $('.' + value).css("background-color", "transparent");
                }
            });
    }
    values.forEach(removeErrors);
    

    //$("#bgStorySetupModal").modal()
    $("#panas_result").click(function() {

        var val_1 = $("input[name='Interested']:checked").val()
        var val_2 = $("input[name='Distressed']:checked").val()
        var val_3 = $("input[name='Excited']:checked").val()
        var val_4 = $("input[name='Upset']:checked").val()
        var val_5 = $("input[name='Strong']:checked").val()
        var val_6 = $("input[name='Guilty']:checked").val()
        var val_7 = $("input[name='Scared']:checked").val()
        var val_8 = $("input[name='Hostile']:checked").val()
        var val_9 = $("input[name='Enthusiastic']:checked").val()
        var val_10 = $("input[name='Proud']:checked").val()
        var isAllChecked = true;

        function highlightErrors(value) {
            if ($("input[name=" + value + "]:checked").val() == undefined) {
                $('.' + value).css("background-color", "rgba(250, 237, 239, 1)");
                isAllChecked = false;
            }
        }

        values.forEach(highlightErrors);

        if (isAllChecked == false) {
            $("#panasError").show()
        }
        if (isAllChecked == true) {
            $("#panasError").hide()
                // If val is undefined, load 0, else load parsed value
            val_1 = val_1 == undefined ? 0 : parseInt(val_1)
            val_2 = val_2 == undefined ? 0 : parseInt(val_2)
            val_3 = val_3 == undefined ? 0 : parseInt(val_3)
            val_4 = val_4 == undefined ? 0 : parseInt(val_4)
            val_5 = val_5 == undefined ? 0 : parseInt(val_5)
            val_6 = val_6 == undefined ? 0 : parseInt(val_6)
            val_7 = val_7 == undefined ? 0 : parseInt(val_7)
            val_8 = val_8 == undefined ? 0 : parseInt(val_8)
            val_9 = val_9 == undefined ? 0 : parseInt(val_9)
            val_10 = val_10 == undefined ? 0 : parseInt(val_10)

            //var positive = val_1 + val_3 + val_5 + val_9 + val_10 + val_12 + val_14 + val_16 + val_17 + val_19
            //var negative = val_2 + val_4 + val_6 + val_7 + val_8 + val_11 + val_13 + val_15 + val_18 + val_20
            
            //document.getElementById("popper-text").innerHTML="positive: " + positive + "\n" + "negative: " + negative + "\n";
            //modal.style.display = "block";

            //alert("positive: " + positive + "\n" + "negative: " + negative + "\n")

            //if (positive >= negative) {
            //    window.panas = 1;
            //} else if (positive < negative) {
            //    window.panas = 0;
            //}

            //var panasscore = window.panas;

            $.ajax({
                type: 'POST',
                url: '/postgses-score',
                data: { val_1: val_1, val_2: val_2,val_3: val_3,val_4: val_4,val_5: val_5,val_6: val_6,val_7: val_7,val_8: val_8,val_9: val_9,val_10: val_10  },
                dataType: 'json',
            });
            


            //setTimeout(function () {
             //  window.open(window.location.href.replace("panas", 'chatbot'), '_blank');
            //}, 5000);
                
            //window.open(window.location.href.replace("panas", 'chatbot'), '_blank');
                
            window.location.replace(window.location.href.replace("postgses", 'post-pss'))
        }
    });

});
