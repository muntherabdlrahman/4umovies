


var moviestype;


var favMovie = function () {
moviestype= prompt ('What is your favorite type of movies?');

while(moviestype !=='romantic' && moviestype !== 'action' && moviestype !== 'horror' ){
  moviestype = prompt('Please enter one of the type movies romantic or action neither horror ');
}
}

favMovie();


var userType;

function showsMovies(){
if(moviestype ==='romantic'){
  userType='<img src="https://i.pinimg.com/originals/cf/f0/d5/cff0d5e382c6bbca8f2c70f00a5cb23b.jpg" >';
  
}else if(moviestype ==='action'){
  userType='<img src="https://movienasha.com/wp-content/uploads/2016/11/action-movie-1.jpg">';
 
}else if(moviestype === 'horror'){
  userType='<img src="https://cdn57.androidauthority.net/wp-content/uploads/2019/10/Scary-horror-movies-Netflix-featured.jpg">';}

var usertype;
if(moviestype ==='romantic'){
  usertype='<img src= "https://asformeandmyhomestead.com/wp-content/uploads/2020/02/25-Most-Romantic-Movies-1.jpg">';
}else if(moviestype ==='action'){
  usertype=  '<img src="https://movienasha.com/wp-content/uploads/2016/11/action-movie-1.jpg">';
}else if(moviestype === 'horror'){
  usertype='<img src="https://cdn57.androidauthority.net/wp-content/uploads/2019/10/Scary-horror-movies-Netflix-featured.jpg">';
  }

  var imgsNum= prompt('How many movies you will watch?');

  for(var i=0;i<imgsNum;i++){
  document.write(userType);
  console.log(imgsNum);
  
  }
  
  
  }
showsMovies();