import { useEffect, useState } from "react";
import Logo from "./assets/logo-ec_.png";

function App() {
  // Definimos la estructura inicial de nuestros premios.
  // Cada premio ahora incluye una propiedad 'winnerId' inicializada a null.

  const initialPrizes = [
    {
      id: 1,
      name: "Motocicleta Italika GTX125 ",
      image:
        "https://elektragt.vtexassets.com/arquivos/ids/181480/V14.jpg?v=637848696840430000",
      category: "",
      price: "Premio # 1",
      stock: "",
      buttonBg: "bg-red-600",
      buttonHover: "hover:bg-red-700",
      winnerId: null, // Nuevo: ID del ganador, inicialmente nulo
    },
    {
      id: 2,
      name: "Refrigeradora Oster de 7.27 pies",
      image:
        "https://www.elgallomasgallo.com.gt/media/catalog/product/r/e/refrigeradora-automatica-oster-12cp-osnf21302vd-silver-190041_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      category: "",
      price: "Premio # 2",
      stock: "",
      buttonBg: "bg-green-600",
      buttonHover: "hover:bg-green-700",
      winnerId: null,
    },
    {
      id: 3,
      name: "Estufa de Gas Profesional",
      image:
        "https://agenciasway.com.gt/wp-content/uploads/2024/08/FKGA20C3MJG_0002_15703-FKGA20C3MJG-01_overview-1-1.jpg",
      category: "",
      price: "Premio # 3",
      stock: "",
      buttonBg: "bg-yellow-600",
      buttonHover: "hover:bg-yellow-700",
      winnerId: null,
    },
    {
      id: 4,
      name: "Scooter Eléctrico Xiaomi Pro 2",
      image:
        "https://europacoche.com/wp-content/uploads/2024/11/PATINENTE-ELECTRICO-1-1.png",
      category: "",
      price: "Premio # 4",
      stock: "",
      buttonBg: "bg-gray-600",
      buttonHover: "hover:bg-gray-700",
      winnerId: null,
    },
    {
      id: 5,
      name: 'Televisor Smart LED 65"',
      image:
        "https://westinghouse.com/cdn/shop/collections/WD32HX1201-Westinghouse-24-inch-front.jpg?v=1664326111",
      category: "",
      price: "Premio # 5",
      stock: "",
      buttonBg: "bg-teal-600",
      buttonHover: "hover:bg-teal-700",
      winnerId: null,
    },
  ];
  // Estado para controlar el índice del premio actualmente visible.
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(4);
  // Estado para almacenar los datos de los premios, permitiendo su modificación.
  const [prizesData, setPrizesData] = useState(initialPrizes);
  // Estado para controlar si una operación de API está en curso.
  const [isLoading, setIsLoading] = useState(false);
console.log("Prizes Data:", prizesData);
  // Lista de números que no deben ser tomados en cuenta para el ganador.
  // IMPORTANTE: Debes remplazar este arreglo con los numeros baneados nuevos.
  // Asegúrate de que los números en esta lista también estén en formato de cadena de 5 dígitos ('00123').
  
 const bannedNumbers = [
    "00876",
    "00877",
    "00878",
    "00879",
    "00880",
    "00881",
    "00882",
    "00883",
    "00884",
    "00885",
    "00886",
    "00887",
    "00888",
    "00889",
    "00890",
    "00891",
    "00892",
    "00893",
    "00894",
    "00895",
    "00896",
    "00897",
    "00898",
    "00899",
    "00900",
    "02176",
    "02177",
    "02178",
    "02179",
    "02180",
    "02181",
    "02182",
    "02183",
    "02184",
    "02185",
    "02186",
    "02187",
    "02188",
    "02189",
    "02190",
    "02191",
    "02192",
    "02193",
    "02194",
    "02195",
    "02196",
    "02197",
    "02198",
    "02199",
    "02200",
    "02426",
    "02427",
    "02428",
    "02429",
    "02430",
    "02431",
    "02432",
    "02433",
    "02434",
    "02435",
    "02436",
    "02437",
    "02438",
    "02439",
    "02440",
    "02441",
    "02442",
    "02443",
    "02444",
    "02445",
    "02446",
    "02447",
    "02448",
    "02449",
    "02450",
    "03151",
    "03152",
    "03153",
    "03154",
    "03155",
    "03156",
    "03157",
    "03158",
    "03159",
    "03160",
    "03161",
    "03162",
    "03163",
    "03164",
    "03165",
    "03166",
    "03167",
    "03168",
    "03169",
    "03170",
    "03171",
    "03172",
    "03173",
    "03174",
    "03175",
    "03201",
    "03202",
    "03203",
    "03204",
    "03205",
    "03206",
    "03207",
    "03208",
    "03209",
    "03210",
    "03211",
    "03212",
    "03213",
    "03214",
    "03215",
    "03216",
    "03217",
    "03218",
    "03219",
    "03220",
    "03221",
    "03222",
    "03223",
    "03224",
    "03225",
    "03251",
    "03252",
    "03253",
    "03254",
    "03255",
    "03256",
    "03257",
    "03258",
    "03259",
    "03260",
    "03261",
    "03262",
    "03263",
    "03264",
    "03265",
    "03266",
    "03267",
    "03268",
    "03269",
    "03270",
    "03271",
    "03272",
    "03273",
    "03274",
    "03275",
    "03351",
    "03352",
    "03353",
    "03354",
    "03355",
    "03356",
    "03357",
    "03358",
    "03359",
    "03360",
    "03361",
    "03362",
    "03363",
    "03364",
    "03365",
    "03366",
    "03367",
    "03368",
    "03369",
    "03370",
    "03371",
    "03372",
    "03373",
    "03374",
    "03375",
    "03776",
    "03777",
    "03778",
    "03779",
    "03780",
    "03781",
    "03782",
    "03783",
    "03784",
    "03785",
    "03786",
    "03787",
    "03788",
    "03789",
    "03790",
    "03791",
    "03792",
    "03793",
    "03794",
    "03795",
    "03796",
    "03797",
    "03798",
    "03799",
    "03800",
    "03976",
    "03977",
    "03978",
    "03979",
    "03980",
    "03981",
    "03982",
    "03983",
    "03984",
    "03985",
    "03986",
    "03987",
    "03988",
    "03989",
    "03990",
    "03991",
    "03992",
    "03993",
    "03994",
    "03995",
    "03996",
    "03997",
    "03998",
    "03999",
    "04000",
    "04676",
    "04677",
    "04678",
    "04679",
    "04680",
    "04681",
    "04682",
    "04683",
    "04684",
    "04685",
    "04686",
    "04687",
    "04688",
    "04689",
    "04690",
    "04691",
    "04692",
    "04693",
    "04694",
    "04695",
    "04696",
    "04697",
    "04698",
    "04699",
    "04700",
    "05026",
    "05027",
    "05028",
    "05029",
    "05030",
    "05031",
    "05032",
    "05033",
    "05034",
    "05035",
    "05036",
    "05037",
    "05038",
    "05039",
    "05040",
    "05041",
    "05042",
    "05043",
    "05044",
    "05045",
    "05046",
    "05047",
    "05048",
    "05049",
    "05050",
    "06226",
    "06227",
    "06228",
    "06229",
    "06230",
    "06231",
    "06232",
    "06233",
    "06234",
    "06235",
    "06236",
    "06237",
    "06238",
    "06239",
    "06240",
    "06241",
    "06242",
    "06243",
    "06244",
    "06245",
    "06246",
    "06247",
    "06248",
    "06249",
    "06250",
    "06701",
    "06702",
    "06703",
    "06704",
    "06705",
    "06706",
    "06707",
    "06708",
    "06709",
    "06710",
    "06711",
    "06712",
    "06713",
    "06714",
    "06715",
    "06716",
    "06717",
    "06718",
    "06719",
    "06720",
    "06721",
    "06722",
    "06723",
    "06724",
    "06725",
    "06776",
    "06777",
    "06778",
    "06779",
    "06780",
    "06781",
    "06782",
    "06783",
    "06784",
    "06785",
    "06786",
    "06787",
    "06788",
    "06789",
    "06790",
    "06791",
    "06792",
    "06793",
    "06794",
    "06795",
    "06796",
    "06797",
    "06798",
    "06799",
    "06800",
    "07401",
    "07402",
    "07403",
    "07404",
    "07405",
    "07406",
    "07407",
    "07408",
    "07409",
    "07410",
    "07411",
    "07412",
    "07413",
    "07414",
    "07415",
    "07416",
    "07417",
    "07418",
    "07419",
    "07420",
    "07421",
    "07422",
    "07423",
    "07424",
    "07425",
    "07676",
    "07677",
    "07678",
    "07679",
    "07680",
    "07681",
    "07682",
    "07683",
    "07684",
    "07685",
    "07686",
    "07687",
    "07688",
    "07689",
    "07690",
    "07691",
    "07692",
    "07693",
    "07694",
    "07695",
    "07696",
    "07697",
    "07698",
    "07699",
    "07700",
    "07751",
    "07752",
    "07753",
    "07754",
    "07755",
    "07756",
    "07757",
    "07758",
    "07759",
    "07760",
    "07761",
    "07762",
    "07763",
    "07764",
    "07765",
    "07766",
    "07767",
    "07768",
    "07769",
    "07770",
    "07771",
    "07772",
    "07773",
    "07774",
    "07775",
    "07776",
    "07777",
    "07778",
    "07779",
    "07780",
    "07781",
    "07782",
    "07783",
    "07784",
    "07785",
    "07786",
    "07787",
    "07788",
    "07789",
    "07790",
    "07791",
    "07792",
    "07793",
    "07794",
    "07795",
    "07796",
    "07797",
    "07798",
    "07799",
    "07800",
    "08176",
    "08177",
    "08178",
    "08179",
    "08180",
    "08181",
    "08182",
    "08183",
    "08184",
    "08185",
    "08186",
    "08187",
    "08188",
    "08189",
    "08190",
    "08191",
    "08192",
    "08193",
    "08194",
    "08195",
    "08196",
    "08197",
    "08198",
    "08199",
    "08200",
    "09151",
    "09152",
    "09153",
    "09154",
    "09155",
    "09156",
    "09157",
    "09158",
    "09159",
    "09160",
    "09161",
    "09162",
    "09163",
    "09164",
    "09165",
    "09166",
    "09167",
    "09168",
    "09169",
    "09170",
    "09171",
    "09172",
    "09173",
    "09174",
    "09175",
    "10301",
    "10302",
    "10303",
    "10304",
    "10305",
    "10306",
    "10307",
    "10308",
    "10309",
    "10310",
    "10311",
    "10312",
    "10313",
    "10314",
    "10315",
    "10316",
    "10317",
    "10318",
    "10319",
    "10320",
    "10321",
    "10322",
    "10323",
    "10324",
    "10325",
    "13026",
    "13027",
    "13028",
    "13029",
    "13030",
    "13031",
    "13032",
    "13033",
    "13034",
    "13035",
    "13036",
    "13037",
    "13038",
    "13039",
    "13040",
    "13041",
    "13042",
    "13043",
    "13044",
    "13045",
    "13046",
    "13047",
    "13048",
    "13049",
    "13050",
    "13201",
    "13202",
    "13203",
    "13204",
    "13205",
    "13206",
    "13207",
    "13208",
    "13209",
    "13210",
    "13211",
    "13212",
    "13213",
    "13214",
    "13215",
    "13216",
    "13217",
    "13218",
    "13219",
    "13220",
    "13221",
    "13222",
    "13223",
    "13224",
    "13225",
    "13526",
    "13527",
    "13528",
    "13529",
    "13530",
    "13531",
    "13532",
    "13533",
    "13534",
    "13535",
    "13536",
    "13537",
    "13538",
    "13539",
    "13540",
    "13541",
    "13542",
    "13543",
    "13544",
    "13545",
    "13546",
    "13547",
    "13548",
    "13549",
    "13550",
    "13801",
    "13802",
    "13803",
    "13804",
    "13805",
    "13806",
    "13807",
    "13808",
    "13809",
    "13810",
    "13811",
    "13812",
    "13813",
    "13814",
    "13815",
    "13816",
    "13817",
    "13818",
    "13819",
    "13820",
    "13821",
    "13822",
    "13823",
    "13824",
    "13825",
    "13926",
    "13927",
    "13928",
    "13929",
    "13930",
    "13931",
    "13932",
    "13933",
    "13934",
    "13935",
    "13936",
    "13937",
    "13938",
    "13939",
    "13940",
    "13941",
    "13942",
    "13943",
    "13944",
    "13945",
    "13946",
    "13947",
    "13948",
    "13949",
    "13950",
    "14126",
    "14127",
    "14128",
    "14129",
    "14130",
    "14131",
    "14132",
    "14133",
    "14134",
    "14135",
    "14136",
    "14137",
    "14138",
    "14139",
    "14140",
    "14141",
    "14142",
    "14143",
    "14144",
    "14145",
    "14146",
    "14147",
    "14148",
    "14149",
    "14150"
];

  // Obtiene el premio actual basándose en el índice.
  const currentPrize = prizesData[currentPrizeIndex];

  // Función para avanzar al siguiente premio.
  const handleNext = () => {
    setCurrentPrizeIndex((prevIndex) => (prevIndex + 1) % prizesData.length);
  };

  // Función para retroceder al premio anterior.
  const handlePrevious = () => {
    setCurrentPrizeIndex(
      (prevIndex) => (prevIndex - 1 + prizesData.length) % prizesData.length
    );
  };

  // Función para simular el efecto de fuegos artificiales.
  // Utiliza setTimeout para disparar confeti en ráfagas.
  const fireFireworks = () => {
    // Asegurarse de que la función confetti esté disponible.
    if (typeof confetti !== "function") {
      console.warn(
        "La función 'confetti' no está disponible. Asegúrate de cargar la librería canvas-confetti."
      );
      return;
    }

    const duration = 5 * 1000; // 5 segundos
    const end = Date.now() + duration;

    // Dispara confeti de forma intermitente durante la duración.
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: ["#a83e6d", "#f1c40f", "#3498db", "#e74c3c"], // Colores personalizados
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: ["#a83e6d", "#f1c40f", "#3498db", "#e74c3c"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // Función para Generar asignar un ID de ganador.
  const assignWinner = async () => {
    setIsLoading(true); // Inicia el estado de carga

    try {
      // Simula la llamada a la API con un retardo de 1.5 segundos
      await new Promise((resolve) => setTimeout(resolve, 1500));

      let newWinnerId;
      let isUniqueAndAllowed = false;
      // Obtener todos los IDs de ganadores ya asignados
      const assignedWinnerIds = prizesData
        .map((prize) => prize.winnerId)
        .filter((id) => id !== null);

      // Bucle para generar un ID único y que no esté en la lista de números prohibidos
      while (!isUniqueAndAllowed) {
        // Genera un número aleatorio entre 1 y 15,000.
        const rawWinnerId = Math.floor(Math.random() * 15000) + 1;
        // Formatea el número a una cadena de 5 dígitos, rellenando con ceros a la izquierda.
        newWinnerId = String(rawWinnerId).padStart(5, "0");

        // Comprueba si el ID no ha sido asignado y no está en la lista de números prohibidos
        if (
          !assignedWinnerIds.includes(newWinnerId) &&
          !bannedNumbers.includes(newWinnerId)
        ) {
          isUniqueAndAllowed = true; // El ID es único y permitido, salimos del bucle
        } else {
          console.log(
            `ID ${newWinnerId} ya existe (o está en la lista de excluidos), generando otro...`
          );
          // Si el ID ya existe o está en la lista de prohibidos, el bucle continuará.
          // CONSIDERACIÓN: Si el número de IDs disponibles (1-15000) menos los ya asignados
          // y los prohibidos es muy bajo, este bucle podría ejecutarse muchas veces
          // o incluso volverse infinito si no quedan IDs válidos.
          // Para una aplicación real, se podría añadir un límite de intentos.
        }
      }

      // Actualiza el estado de los premios de forma inmutable con el ID único y permitido
      setPrizesData((prevPrizes) =>
        prevPrizes.map(
          (prize) =>
            prize.id === currentPrize.id
              ? { ...prize, winnerId: newWinnerId } // Actualiza solo el premio actual con el nuevo formato
              : prize // Mantiene los demás premios sin cambios
        )
      );
      console.log(`Ganador asignado para ${currentPrize.name}: ${newWinnerId}`);

      // Llama a la función de fuegos artificiales aquí!
      fireFireworks();
      confetti();
    } catch (error) {
      console.error("Error al asignar ganador:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    } finally {
      setIsLoading(false); // Finaliza el estado de carga
    }
  };

  const resetAllWinners = () => {
    const resetedPrizes = prizesData.map((prize) => ({
      ...prize, // Mantenemos todas las demás propiedades del premio
      winnerId: null, // Pero establecemos winnerId a null
    }));
    setPrizesData(resetedPrizes); // Actualizamos el estado con los premios reseteados
    setCurrentPrizeIndex(4);
  };

  //inicio
  // Estado para la cadena que se va mostrando carácter por carácter
  const [animatedWinnerId, setAnimatedWinnerId] = useState("");
  // Estado para saber si la animación está en progreso
  const [isAnimating, setIsAnimating] = useState(false);

  // useEffect para controlar la animación cada vez que currentPrize.winnerId cambia
  useEffect(() => {
    if (currentPrize && currentPrize.winnerId !== null) {
      const targetWinnerId = String(currentPrize.winnerId); // Asegúrate de que sea una cadena
      const totalLength = 6;
      let currentIndex = totalLength - 1; // Empezar desde la derecha (último carácter)

      setAnimatedWinnerId(""); // Resetear la cadena animada al inicio de una nueva animación
      setIsAnimating(true);

      const interval = setInterval(() => {
        if (currentIndex >= 0) {
          // Construye la cadena de derecha a izquierda
          setAnimatedWinnerId(
            (prev) => targetWinnerId.charAt(currentIndex) + prev
          );
          currentIndex--;
          confetti();
          fireFireworks();
        } else {
          // Cuando todos los caracteres se han mostrado
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 2000); // 1 segundo de delay entre cada carácter

      // Función de limpieza para detener el intervalo si el componente se desmonta
      // o si winnerId cambia antes de que la animación termine.
      return () => clearInterval(interval);
    } else {
      // Si no hay winnerId, resetea la visualización
      setAnimatedWinnerId("");

      setIsAnimating(false);
    }
  }, [currentPrize]); // Dependencia: re-ejecuta cuando currentPrize cambia

  //final

    // --- Nuevo estado para controlar la visibilidad del bloque ---
  const [showWinnersFloatingList, setShowWinnersFloatingList] = useState(false);

  // --- Función para alternar la visibilidad ---
  const toggleWinnersList = () => {
    setShowWinnersFloatingList(prev => !prev); // Esto cambia de true a false y viceversa
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-cyan-500 to-blue-500">
        <div className="fixed left-0 top-0">
          <img
            src={Logo}
            className="h-40"
            alt="Logo de Ministerios el calvario"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-10 p-6 bg-white rounded-lg shadow-lg w-5xl h-200 ">
          <h2 className=" fixed top-5 text-5xl mt-6 font-extrabold text-red-600 uppercase  animate-pulse">
            GRAN RIFA
          </h2>
          <p className="mb-5 animate-bounce text-2xl [animation-duration:2s] text-blue-600">
            🎉 Desarrollando la obra misionera🎉
          </p>

          {/* Contenedor de la tarjeta de venta */}
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            {/* Sección de la imagen del producto */}
            <div>
              <img
                className="h-60 w-500 object-contain rounded-t-xl"
                src={currentPrize.image} // Muestra la imagen del premio actual
                alt={`Imagen de ${currentPrize.name}`}
              />
            </div>

            {/* Contenido principal de la tarjeta */}
            <div className="p-5">
              {/* Categoría o tipo de producto */}
              <div
                className={`uppercase tracking-wide text-xs ${
                  currentPrize.category === "Vehículos"
                    ? "text-red-600"
                    : currentPrize.category === "Electrodomésticos"
                    ? "text-green-600"
                    : currentPrize.category === "Movilidad"
                    ? "text-gray-600"
                    : "text-indigo-600" // Color por defecto si no hay coincidencia
                } font-semibold mb-1`}
              >
                {currentPrize.category}{" "}
                {/* Muestra la categoría del premio actual */}
              </div>

              {/* Numero ganador aleatorio en GRANDE */}
              <div className="flex items-center justify-center bg-sky-300 rounded-lg p-2 mb-4">
                <h3 className=" text-center text-5xl font-bold text-red-600 mb-2">
                  {animatedWinnerId}
                </h3>
              </div>

              {/* NUMERO DE PREMIO #1 */}
              <div className="flex items-baseline mb-3 justify-center">
                <span className="text-2xl font-extrabold text-gray-900">
                  {currentPrize.price}
                </span>{" "}
              </div>
            </div>

            {/* Pie de página de la tarjeta con botón de acción */}
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex justify-center rounded-b-xl">
              <button
                onClick={assignWinner} // Llama a la función para asignar ganador
                // Deshabilita el botón si está cargando o si ya hay un ganador asignado
                disabled={isLoading || currentPrize.winnerId !== null}
                className={`w-full text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200
              ${
                currentPrize.winnerId !== null
                  ? "bg-gray-400 cursor-not-allowed" // Estilo si ya hay un ganador
                  : isLoading
                  ? "bg-gray-500 cursor-wait" // Estilo durante la carga
                  : `${currentPrize.buttonBg} ${currentPrize.buttonHover}` // Estilo normal
              }`}
              >
                {isLoading
                  ? "Asignando..." // Texto mientras carga
                  : currentPrize.winnerId !== null
                  ? `Ganador: ${animatedWinnerId}` // Muestra el ID del ganador
                  : "Asignar Ganador"}{" "}
                {/* Texto por defecto */}
              </button>
            </div>
          </div>

          {/* Contenedor de botones de navegación */}
          <div className="flex space-x-4">
            <button
              onClick={handleNext}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
              disabled={isLoading} // Deshabilita los botones de navegación durante la carga
            >
              Anterior
            </button>
            <button
              onClick={handlePrevious}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
              disabled={isLoading} // Deshabilita los botones de navegación durante la carga
            >
              Siguiente
            </button>

            <button
              onClick={resetAllWinners}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
              disabled={isLoading} // Deshabilita el botón de reinicio durante la carga
            >
              Reiniciar Ganadores
            </button>
          </div>
        </div>
      </div>






      <div className="bg-black text-white text-center p-4 fixed bottom-0 w-full">
        <p className="font-bold text-red-600">Ministerios el Calvario</p>
        <p>
          Más información al PBX:{" "}
          <a
            href="tel:+50222468080"
            className="text-blue-400 hover:underline text-"
          >
            (502) 2246-8080
          </a>
        </p>
      </div>

           {/* --- EL BOTÓN PARA MOSTRAR/OCULTAR --- */}
      <button
        onClick={toggleWinnersList}
        className="fixed bottom-4 right-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
      >
        {showWinnersFloatingList ? 'Ocultar Ganadores' : 'Mostrar Ganadores'}
      </button>    

      {showWinnersFloatingList && (<div className="fixed bg-amber-400">
        {/* --- LA LISTA DE GANADORES FLOTANTE --- */}
      <div className="fixed bottom-20 right-0 p-4 w-full flex items-center justify-center overflow-x-auto">
        {prizesData.map((prize) => (
          <div
            key={prize.id}
            className="bg-white p-2 m-1 rounded shadow-md flex items-center"
          >
            <img
              src={prize.image}
              alt={prize.id}
              className="h-12 w-12 object-cover rounded mr-2"
            />
            <span className="text-sm font-semibold">{prize.price}</span>
            {prize.winnerId && (
              <span className="ml-2 text-red-600 font-bold">
                Ganador: {prize.winnerId}
              </span>
            )}
          </div>
        ))}
      </div>
      </div>)}
      
    </>
  );
}

export default App;
