	var win = 0;
	var loss = 0;
	var playerScore = 0;
	var computerNumber;
	var jewel1;
	var jewel2;
	var jewel3;
	var jewel4;


function start() {



	//generate a computer random number between 1 and 120:
	 computerNumber = Math.floor(Math.random()*(120-19)) +19;
	 console.log(computerNumber)
	 $("#computer-number").text(computerNumber);
  	

  	//generate a random number between 1 and 12:

  	jewel1 = Math.floor(Math.random() * 12) + 1;
  	jewel2 = Math.floor(Math.random() * 12) + 1;
  	jewel3 = Math.floor(Math.random() * 12) + 1;
  	jewel4 = Math.floor(Math.random() * 12) + 1;
  	console.log(jewel1, jewel2, jewel3, jewel4);

  	if (jewel2 === jewel1) {
  		jewel2 = Math.floor(Math.random() * 12) + 1;
  	}

  	else if(jewel3 === jewel2 || jewel3 === jewel1) {
  		jewel3 = Math.floor(Math.random() * 12) + 1;
  	}

  	else if(jewel4 === jewel3 || jewel4 === jewel2 || jewel4 === jewel1) {
  		jewel4 = Math.floor(Math.random() * 12) + 1;
  	}

  	console.log(jewel1, jewel2, jewel3, jewel4);
}

  	function compare() {
  		if (playerScore > computerNumber) {
  			loss++;
  			playerScore = 0;
  			$("#losses").text(loss);
  			$("#player-score").text(playerScore);
  			console.log(loss);
  			start();
  		} else if(playerScore === computerNumber) {
  			win++;
  			playerScore = 0;
  			$("#wins").text(win);
  			$("#player-score").text(playerScore);
  		}
  	};

  	$("#jewel-1").on("click", function() {
  		playerScore += jewel1;
  		$("#player-score").text(playerScore);
  		console.log(playerScore);
  		compare();
  	});

  	$("#jewel-2").on("click", function() {
  		playerScore += jewel2;
  		$("#player-score").text(playerScore);
  		console.log(playerScore);
  		compare();
  	});

  	$("#jewel-3").on("click", function() {
  		playerScore += jewel3;
  		$("#player-score").text(playerScore);
  		console.log(playerScore);
  		compare();
  	});

  	$("#jewel-4").on("click", function() {
  		playerScore += jewel4;
  		$("#player-score").text(playerScore);
  		console.log(playerScore);
  		compare();
  	});

  	start();






	


