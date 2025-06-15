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
    "00001",
    "00005",
    "00123",
    "00456",
    "01000",
    "05000",
    "14999", // Ejemplos para probar
    // ... aquí irían tus otros 668 números formateados como '0XXXX'
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
