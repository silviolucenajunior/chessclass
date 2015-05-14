function ChessBoardControlls(board, socket){
   this.board = board;
   this.socket = socket;
   this.listenEvents();
}

ChessBoardControlls.prototype.listenEvents = function(){
   var self = this;
   $("#clear-board").on("click", function(ev){
      self.board.clear();
      self.socket.emit("board-event", 'clear');
   });

   $("#flip-board").on("click", function(ev){
      self.board.flip();
      self.socket.emit("board-event", 'flip');
   });

   $("#start-position").on("click", function(ev){
      self.board.start()
      self.socket.emit("board-event", 'start-position');
   });
};

