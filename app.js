





var Moviestype= prompt ('What is your favorite type of movies?');

while(Moviestype !=='romantic' && Moviestype !== 'action' && Moviestype !== 'horror' )
{
  Moviestype= prompt('Please enter one of the type movies romantic or action neither horror ');
}

var usertype;
if(Moviestype ==='romantic'){
  usertype='<img src= "https://asformeandmyhomestead.com/wp-content/uploads/2020/02/25-Most-Romantic-Movies-1.jpg"> ';
  
}else if(Moviestype ==='action'){
  usertype=  '<img src="https://movienasha.com/wp-content/uploads/2016/11/action-movie-1.jpg">';
 
}else if(Moviestype === 'horror'){
  usertype='<img src="https://cdn57.androidauthority.net/wp-content/uploads/2019/10/Scary-horror-movies-Netflix-featured.jpg">';
  
}


var images= prompt('How many movies you will watch?');

for(var i=0;i<images;i++){
  document.write(usertype);
}

