const templates={
    home:`
    <div id="home" class="active">
        <h1 class="titulo">{{titulo}}</h1>
        <section class="conten"> 
        <article class="article1">
            <img class="conten-img" src="./img/mate y yerba.jpg" alt="Yerba">
            <p class="Primera-letra">La yerba mate, cuyo nombre científico es Ilex Paraguariensis es un árbol nativo de la Selva
            Paranaense, que en estado silvestre puede alcanzar una altura de entre 12 y 16 metros. Para facilitar su 
            cosecha, las plantas son podadas hasta dos veces al año a una altura promedio de 2 metros.
            En la Argentina, llamamos mate a la infusión que se prepara con sus hojas, como también al recipiente 
            donde se la toma, siendo el más utilizado el de calabaza.</p>
        </article>
        </section>
        <!--El contenido de esta seccion tiene estilo ccs grid-->
        <section class="conten2">    
        <article class="article2">
            <p><span style="text-decoration: underline; padding: 5px; text-align: center; margin-bottom:2px;" >Nuestra infusion nacional</span><br>
            La Ley 26.871 sancionada en 3 de julio de 2013 declaró al mate como infusión nacional, disponiendo la promoción y difusión de sus tradiciones en eventos y actividades culturales, sociales o deportivas de carácter oficial.
            Asimismo, el 30 de noviembre de cada año se celebra el Día Nacional del Mate, en conmemoración del nacimiento de Andrés Guacurarí y Artigas, según lo establecido por la Ley 27.117, impulsada con el fin de promover el reconocimiento permanente de nuestras costumbres.
            </p>
            <img class="conten2-article2-img" src="./img/noticias2.jpg" alt="Planta de Yerba Mate" >
        </article>      
        <article class="article3">
                <!--Se creo animacion para esta imagen-->
                <img class="conten2-article3-img" :src="imagen" alt="Planta de Yerba Mate">
            <p><span style="text-decoration: underline; padding: 5px; text-align: center; margin-bottom:2px;"> Produccion</span><br>
            La Yerba Mate Argentina se produce y cultiva en Misiones y nordeste de Corrientes.
            Argentina es el principal productor y exportador mundial de Yerba Mate.
            Los suelos rojos, con alto contenido de hierros, y el clima subtropical sin estación seca, son ideales para el cultivo de la Yerba Mate.
            </p>  
        </article>
        </section>
     </div>`,
    //Se creo una seccion para mostrar los datos de origenes
    origenes: `
    <div id="origen" class="container active">
            <section class="origen1">
            <p>El origen del mate se remonta a los nativos guaraníes, ellos utilizaban las hojas del árbol como bebida, objeto de culto
            y moneda de cambio con otros pueblos.
            Durante las largas travesías por las selvas, los conquistadores notaron que los guaraníes tenían mayor resistencia 
            luego de tomar esta bebida sagrada.</p>
            <img style="border-radius: 180px; padding:20px;" src="./img/hombre.jpg" alt="Aborigen Guarani">
            </section>
        <section class="origen2">
            <h3 class="origen-h3-titulo">Un regalo de los Dioses</h3>
                <p>Caá en lengua guaraní significa yerba, pero también significa planta y selva. Para el guaraní, el árbol de la yerba 
                mate es el árbol por excelencia, un regalo de los Dioses.
                Los conquistadores aprendieron de los guaraníes el uso y las virtudes de la Yerba Mate, e hicieron que su consumo se
                difundiera, desde su zona de origen a todo el Virreinato del Río de la Plata.
                Los nativos guaraníes fueron quizás los primeros en tomar mate. Los españoles notaron que llevaban con sus armas, una
                pequeña bolsa de cuero con hojas trituradas y tostadas.</p>
        </section>
        <section class="origen1">
            <h3 class="origen-h3-titulo">Los jesuitas y las reducciones</h3>
            <img style="border-radius: 180px; padding:20px;" src="./img/monge.jpg" alt="Jesuita">
            <p>Más tarde los jesuitas introdujeron el cultivo en las reducciones, contribuyeron con su difusión, la bebida fue conocida 
                entonces como el “té de los jesuitas”.
                Fueron los primeros en lograr hacer germinar las semillas de la yerba con un método secreto, que permitió cultivar 
                Yerba Mate para abastecer las reducciones e inclusive comercializarla en otro lugares.
                </p>
        </section>
        <section class="origen2">
            <h3 class="origen-h3-titulo">El esparcimiento en las reducciones</h3>
            <p>Los días domingos y los demás festivos, luego de asistir a la obligatoria misa y al rezo del Santo Rosario, los guaraníes podían disponer de algún tiempo para su esparcimiento: hacían malabares con sus caballos en la plaza, otros salían al campo a cazar, se realizaban campeonatos de destreza en el tiro con el arco y las flechas.
                No faltaban el mate compartido, la música, el canto y la danza, especialmente entre los niños y jóvenes.
                La costumbre del mate ha permanecido inalterada desde tiempos remotos y por cinco siglos de historia, arraigándose y extendiéndose a lugares lejanos.
            </p> 
        </section>
    </div> `,
    //Se creo una seccion para mostrar los datos de curiosidades
    curiosidades: `
    <div id="curiosidades" class="container active">
    <section class="curiosidades">
        <h2>Curiosidades</h2>
            <article class="curiosidades-article1">
                <h3>Consumo</h3>
                <p>Según datos del Instituto Nacional de la Yerba Mate (INYM), en la Argentina se consume un promedio 6,4 kg por habitante por año y la yerba mate está presente en más del 90% de los hogares.
                Su consumo es altamente beneficioso para la salud, ya que contiene vitaminas del grupo B, posee un gran poder antioxidante, produce un efecto energizante y ayuda a reducir el colesterol malo (LDL) y los triglicéridos.
                <br> Un texto de la Cancillería Argentina da cuenta de la 
                profunda simbología que conlleva compartir la infusión:<!--Esta lista tiene animacion-->
                    <ul>
                        <li class="article1-li">Es el compañerismo hecho momento.</li>
                        <li class="article1-li">Es la modestia de quien ceba el mejor mate.</li> 
                        <li class="article1-li">Es la generosidad de dar hasta el final.</li>
                        <li class="article1-li">Es la hospitalidad de la invitación.</li>
                        <li class="article1-li">Es la justicia de uno por uno.</li>
                        <li class="article1-li">Es la obligación de decir “gracias”, al menos una vez al día.</li>
                        <li class="article1-li">Es la actitud ética, franca y leal de encontrarse, sin mayores pretensiones que compartir.</li>
                    </ul>
                </p>
            </article>
            <article class="curiosidades-article2">
            <h3>Produccion de Yerba envasada y hoja verde</h3>
                <p>En el año 2020, la producción de yerba mate molida y envasada para el mercado interno fue de casi 268,8 millones de kilos, lo que implica cosechar alrededor de 812,9 millones de kilos de hoja verde.
                Para producir 1 kg de yerba mate, se necesitan 3 kg de hojas verdes, porque durante el secado, el producto pierde agua y peso.
                </p>
            <h3>¿Cuántos kilos de yerba mate se consumen por habitante?</h3>
                <p>En base a los datos del último censo, somos 41 millones de argentinos, entonces consumimos en promedio 6,4 kg por habitante por año.
                Según una investigación de mercados realizada en toda Argentina (1), la yerba mate está presente en más del 90% de los hogares argentinos.
                </p>
        </article>
        </section>
    </div>`,
    //Se creo una seccion para mostrar los datos de beneficios
    beneficios: `  
    <div id="beneficio" class="container-active">
        <h4>El mate es un potente antioxidante, fuente de vitaminas, minerales
        y también ayuda a reducir el colesterol malo.</h4>
    <section class="b-contenido">
    <h4>Principales Beneficios del mate:</h4>
    </section>
    <article class="b-conten">
    <p><span style="font-weight: bold; color: #110247; text-decoration: underline;">Potente antioxidante.</span>
        El mate cebado caliente (forma de consumo más popular) contiene un 60% de antioxidante más que el té verde.
        Las infusiones de Yerba Mate, principalmente el mate tradicional cebado, poseen un gran poder antioxidante debido a su alta concentración de polifenoles.
        Los polifenoles mejoran las defensas naturales del organismo y lo protegen del daño celular.
    </p>
    <p><span style="font-weight: bold; color: #110247; text-decoration: underline;">Fuente de Vitaminas.</span>
        La Yerba Mate contiene vitaminas del grupo B.
        El cuerpo necesita 13 vitaminas, 8 de ellas pertenecen al grupo B, que son esenciales para las funciones corporales como la producción de energía y de células rojas de la sangre.
    </p>
    <p><span style="font-weight: bold; color: #110247; text-decoration: underline;">Fuente de minerales.</span>
        La Yerba Mate contiene potasio, un mineral esencial y necesario para el correcto funcionamiento del corazón; y magnesio, que ayuda al cuerpo a
        incorporar proteínas.</p>
    <p><span style="font-weight: bold; color: #110247; text-decoration: underline;">Efecto Energizante.</span>
        Contiene xantinas (cafeína, teobromina, teofilina), son compuestos bioactivos que estimulan el sistema nervioso central y promueven la actividad mental. Además aumentan los niveles de energía y la concentración.
    Durante el desayuno, en las meriendas, en casa, en la oficina o en el trabajo; el mate aporta energía natural.
    </p>
    <p><span style="font-weight: bold; color: #110247; text-decoration: underline;">Contenido Nutricional.</span>
        "Las infusiones preparadas con Yerba Mate son hipocalóricas, de bajo contenido en sodio, y su principal aporte es en término de micronutrientes”, enumera la doctora Ana Eugenia Thea, de la Facultad de Ciencias Exactas, Químicas y Naturales de la Universidad Nacional de Misiones.
        El mate “aporta cantidades variables de vitaminas, siendo los aportes de vitaminas B1 (tiamina) y B6 (piridoxi-na) los más importantes, cubriendo el 72,3% y 37,2% de la ingesta diaria recomendada para estos nutrientes en hombres y mujeres adultos entre 18 y 50 años de edad, respectivamente”.
    </p>
    <p><span style="font-weight: bold; color: #110247; text-decoration: underline;">Ayuda a disminuir el coleterol malo.</span>
        Los resultados de un estudio científico realizado por un equipo de investigadores de la Universidad Juan Agustín Maza, de Mendoza, confirman que el consumo de la Yerba Mate ayuda a reducir 
        el colesterol malo (LDL) y los triglicéridos.</p>
    </article>
    </div>`,
   // Se creo una seccion para mostrar los datos de contacto
    contacto: ` 
    <div id="contacto" class="container active">
        <form action="" class="contenedorDeDatos" id="form">
        <!--Ingreso de nombre, input que se valida-->
        <div class="form-control">
        <label for="nombre">Nombre</label>
        <input type="text" placeholder="Nombre" id="nombre" />
        
        </div>
            
    <!-- Ingreso de apellido, input que se valida-->
        <div class="form-control">
            <label for="apellido">Apellido</label>
            <input type="text" placeholder="Apellido" id="apellido" />
            
        </div>    
        
        <!-- Ingreso de email, input que se valida -->
        <div class="form-control">
        <label for="email">Email</label>
        <input type="email" placeholder="email@email.com" id="email" />
        
        </div>
        <!--Formulario de gustos-->
        <div class="form-control" id="tipo">
        <p>Que tipo de yerba prefiere?</p>
        <select name=" sabores" id="sabores">
            <option value="1"> Yerba con palo</option>
            <option value="2"> Yerba sin palo</option>
            <option value="3"> Yerba saborizada</option>
            <option value="4"> Yerba con compuesta con hierbas aromaticas</option>
        </select>
        </div>
        <!--Formulario de comentarios-->
        <div class="form-control" id="grupo__texto">
        <label for="escribir">Puede escribir</label> <br>
        <textarea name="escribir" cols="40" rows="10" id="texto"></textarea><br>
        </div>
    <!--Formulario de recibir info-->
        <div class="info" id="info">
        <p>Te gustaria recibir noticias por mail?</p>
        <input type="radio" name="opcion"value="Si">Si
        <input type="radio" name="opcion"value="No">No
        </div>
    <!--Boton de enviar-->
        <div >
        <button type="submit" class="formBoton" id="formBoton" >Enviar</button>
        </div> 
        <div id="error"></div>
        </form> 
</div>`,     
}

const app = new Vue({   // Vue instance         
    el: '#app',
    data: {
        view: 'home',
    },
    components:{
        home: {
            data: function(){
                return {
                   titulo: 'Yerba Mate',
                   view: 'home',
                   imagen: "https://yerbamateargentina.org.ar/imagenes/archivos/imagenes/7261_imagen.jpg"
                }
            },
            template: templates.home,
        },
        origen: {
            data: function(){
                return {
                    view: 'origen',
                }
            },
            template: templates.origenes,
        },      
        beneficio: {
            data: function(){
                return {
                    view: 'beneficio',
                }
            },
            template: templates.beneficios,
        },
        curiosidades:{
            data: function(){
                return{
                    view:'curiosidades',
                }
            },
            template: templates.curiosidades,
        },
        contacto: {
            data: function(){
                return {
                    view: 'contacto',
                }
            },
            template: templates.contacto,
        },
    },
    methods: {
        changeView(view){
            this.view = view
        }
    }
})