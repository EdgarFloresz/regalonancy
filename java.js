window.onload = () =>{

      
        let text = document.getElementsByClassName("wish")[0];
        
        aakuWriter(text, "Feliz cumpleaños Nancy!!!🎂🎊 Te deseo lo mejor no solo para este día, que siempre te vaya bien y cumplas todo lo que te propongas y mas con tu carrera.🎉 Pasala bien con Lionne y todos los que te queremos🎈🍰. Te mandamos un abrazo mi mamá y yo.🎁🎈");
        
    };
    
    function aakuWriter(target, msg) {
        let i=0,
            id = setInterval(() => {
            
            target.append(msg[i++]);
            if (i >= msg.length) {
                clearInterval(id);         
            }
        }, 85);
    }
    
    
    window.addEventListener('click', () => {
        
        document.getElementById("song").play();
        
    });
    