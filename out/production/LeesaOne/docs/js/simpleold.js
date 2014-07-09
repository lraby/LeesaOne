

function init(){

}

function add(a,b){
    return a + b
}


function onAddButton(){

        //get the value of box 1
        var num1 = +$('#num1').val();
        //get the value of box 2
        var num2 = +$('#num2').val();
        //add box 1 and 2
        var ans=num1+num2
        //put the answer in the answer box
        $('#answerbox').val(ans);

        var isEven = (ans%2==0)
        if (isEven){
            $('#answerbox').css('color','red')
        }
               else{
               $('#answerbox').css('color','green')
               }

        }





function onMultiplyButton(){

        //get the value of box 1
        var num1 = +$('#num1').val();
        //get the value of box 2
        var num2 = +$('#num2').val();
        //add box 1 and 2
        var ans=num1*num2
        //put the answer in the answer box
        $('#answerbox').val(ans);
        var isEven = (ans%2==0)
                if (isEven){
                    $('#answerbox').css('color','red')
                }
                       else{
                       $('#answerbox').css('color','green')
                       }
                                                                                                  
        }

$(function(){

        $('#addButton').on('click', onAddButton)

        $('#multiplyButton').on('click',onMultiplyButton)

        })