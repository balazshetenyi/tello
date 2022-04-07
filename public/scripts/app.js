



var flyBtn = document.getElementById("fly-btn");

flyBtn.addEventListener("click", function(){
    axios({
        method: 'get',
        url: '/fly',
        data: {
          user: 'brunos',
          lastName: 'ilovenodejs'
        }
      });
});