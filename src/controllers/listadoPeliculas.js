//los arreglos tienen elementos 
let peliculas=[
    {   //los objetos tienen atributos
        nombre:"Avatar el camino del agua",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/avatar2Pre.png?alt=media&token=3126a80b-64f6-4cbd-9106-39545726e32f"
    }, 
    {
        nombre:"El llamado del anticristo",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/elLlamadoDelAnticristoPre.png?alt=media&token=df45862a-6f7f-4b58-82fc-efc00e2ae8f4"
    },
    {
        nombre:"El menu",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/elMenuPre.png?alt=media&token=b78170fc-e0bb-4ae4-b50b-aebee376bd34"
    },
    {
        nombre:"El gato con botas",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/gatoConBotasPre.png?alt=media&token=262c41a9-cb8b-441c-b863-c17c264daed0"
    },
    {
        nombre:"La gran tormenta",
        duracion:109,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/laGranTormentaPre.jpg?alt=media&token=b5bd60ef-0d4e-4411-94e5-be6c22fb8a56"
    },
    {
        nombre:"La llorona",
        duracion:75,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/laLloronaPre.png?alt=media&token=5612fdb1-6a2f-4f2d-b4e0-b2d3997a1f20"
    },
    {
        nombre:"Lilo, Lilo, Cocodrilo",
        duracion:124,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/lyleCocodriloPre.jpg?alt=media&token=099972e6-29fc-46e9-94b5-ebfa6c519fa8"
    },
    {
        nombre:"Mar de sangre",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    },
    {
        nombre:"Mar de sangre",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    },
    {
        nombre:"Mar de sangre",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    },
    {
        nombre:"Mar de sangre",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    },
    {
        nombre:"Mar de sangre",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    },
    {
        nombre:"Mar de sangre",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajavier-f9274.appspot.com/o/marDeSangrePre.png?alt=media&token=03631042-8442-4efd-90d5-6e158a45300e"
    }
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid", "w-100")


    fila.appendChild(foto)
})