function ChessBoardTools(){
}

ChessBoardTools.prototype.enableMarkSquare = function(){
   window.dragStop = true;
   $("div.square-55d63").on("click", function(event){
      var _html = $("<span>");
      _html.addClass("square-mark");
      $(this).append(_html);
      console.log("Marked a Square");
      console.log(this);

   });
};

