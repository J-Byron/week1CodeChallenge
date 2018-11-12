console.log('JS Loaded');


$(document).ready(function(){
    let clicks = 0;
    $(`#createButton`).on(`click`,function(){
        clicks++;
        $(`#colorCells`).append(`
        <div class = cell>
            <p>${clicks}</p>
            <button class =swapColor> Swap </button>
            <button class=delete> Delete </button>
        </div>
        `); // end append
    } // end function
    ); // end createButton on click

    $(`#colorCells`).on(`click`,'.swapColor',function(){

        $(this).parent().toggleClass("yellow");
    });// end swapColor on click
    $(`#colorCells`).on(`click`,'.delete',function(){
        $(this).parent().remove();
    }); // end delete on click

}); // end document ready