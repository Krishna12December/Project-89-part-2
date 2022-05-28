function login(){

    var player1 = document.getElementById("player1_name").value;
    var player2 = document.getElementById("player2_name").value;

    localStorage.setItem("PLAYER1_name", player1);
    localStorage.setItem("PLAYER2_name", player2);

    window.location = "login_page.HTML";


}