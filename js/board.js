var FREE = 0;
var STARTBOARD = {
  'blackpieces' : {
    'paws' : ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"]
  },
  'whitepieces' : {
    'paws' : ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"]
  }
};
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
          var id = String.fromCharCode(64 + j) + (9 - i);
       	  if ((i + j) % 2 === 0){
       	  	var square_class = 'white';
       	  } else {
       	  	var square_class = 'black';
       	  }
          _html += "<span id='" + id +"' class='square " + square_class + "'></span>";
       }
    }
    _html += "</div>";
    document.getElementById(this._containerID).innerHTML = _html;
};

Board.prototype.addPiecesBox = function AddPiecesBox(){
   
}

Board.prototype.setToStartPosition = function setToStartPosition(){
  for (var i = 0; i < 8; i++){
      $("#" + STARTBOARD.whitepieces.paws[i]).append("<span class='classical_piece pawn_white'></span>");
      $("#" + STARTBOARD.blackpieces.paws[i]).append("<span class='classical_piece pawn_black'></span>");
  } 
}


