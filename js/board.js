var FREE = 0;
function Board(containerID){
   this._board = null;
   this._containerID = containerID;
};

Board.prototype._generateEmptyBoard = function GenerateEmptyBoard(){
   if (this._board === null){
   	  this._board = [];
      for (var i = 0; i < 8; i++) {
      	 this._board[i] = [];
         for (var j = 0; j < 8; j++) {
            this._board[i][j] = FREE; 
         }
      }
   }
};

Board.prototype.renderHTMLBoard = function RenderHTMLBoard(){
	var _html = "<div class='chessboard'>";
	if (this._board === null) {
		this._generateEmptyBoard();
	}
	for (var i = 1; i <= 8; i++) {
  	   this._board[i] = [];
       for (var j = 1; j <= 8; j++) {
       	  if ((i + j) % 2 === 0){
       	  	var square_class = 'white';
       	  } else {
       	  	var square_class = 'black';
       	  }
          _html += "<span class='square " + square_class + "'></span>";
       }
    }
    _html += "</div>";
    document.getElementById(this._containerID).innerHTML = _html;
};