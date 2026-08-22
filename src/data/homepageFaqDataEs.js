import {
  GEOGRAPHY,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_SMALL_NPO_TOTAL,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
  PRICE_VALID_UNTIL,
  SMALL_NPO_DISCOUNT_PERCENT,
} from '../constants/positioningEs';

const homepageFaqDataEs = [
  {
    question: '¿En qué se diferencia de una base de datos de convocatorias?',
    answer:
      'Las bases de datos solo muestran los financiadores que incluyen. Una base de datos solo puede mostrar lo que cubre — completa dentro de esa cobertura, invisible fuera de ella. Engrant ejecuta agentes de búsqueda en paralelo en la web en vivo, encontrando programas de subvenciones de embajadas, fundaciones regionales y responsabilidad social corporativa sin portal público. Cada coincidencia llega pre-evaluada por idoneidad, elegibilidad, competencia y señales de alerta — para que el descubrimiento sea utilizable, no solo una lista más que investigar por tu cuenta.',
  },
  {
    question: '¿Cómo entiende la IA mi organización?',
    answer:
      'Cuando ingresas el nombre o sitio web de una organización, Engrant la investiga automáticamente — misión, geografía, señales de presupuesto y prioridades declaradas. Cuando guardas o descartas una convocatoria, puedes decir por qué ("enfoque geográfico equivocado", "monto demasiado grande", "requiere socio en consorcio"). Esa retroalimentación se guarda por perfil de organización, así las recomendaciones mejoran sin mezclar restricciones entre clientes.',
  },
  {
    question: '¿Puedo usar Engrant para varias organizaciones?',
    answer:
      'Sí — perfiles de organización ilimitados están incluidos en ambos planes. Cada perfil mantiene su propio historial de restricciones: la retroalimentación de un cliente nunca afecta las recomendaciones de otro. Consultores con cinco clientes y equipos de desarrollo que gestionan varios programas usan perfiles separados sin tarifas adicionales por usuario.',
  },
  {
    question: '¿Qué pasa con la privacidad de mis datos?',
    answer:
      'Los datos de la organización se usan solo para ejecutar tus búsquedas y mejorar las recomendaciones de ese perfil. Engrant no comparte la información de tus clientes con otros usuarios ni la usa para entrenar modelos para competidores. El procesamiento corre en la infraestructura propia de Engrant; consulta la Política de Privacidad para detalles de GDPR, incluyendo retención y solicitudes de eliminación.',
  },
  {
    question: '¿Y si solo necesito una convocatoria?',
    answer:
      'Muchos usuarios se suscriben para encontrar una sola oportunidad sólida — un programa de embajada o una fundación regional que nunca habrían encontrado manualmente. No hay cargo por búsqueda: ejecuta tantas búsquedas como necesites durante tu prueba o suscripción hasta encontrar la indicada.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      `Engrant cuesta $${PRICE_MONTHLY}/mes, o $${PRICE_ANNUAL_PER_MONTH}/mes facturado anualmente ($${PRICE_ANNUAL_TOTAL}/año — ahorra $120). Organizaciones pequeñas califican para un ${SMALL_NPO_DISCOUNT_PERCENT}% de descuento en el plan anual ($${PRICE_ANNUAL_SMALL_NPO_TOTAL}/año). Ambos planes incluyen búsquedas ilimitadas, perfiles de organización ilimitados y todas las funciones. Prueba gratis de 14 días sin tarjeta de crédito. Cancela cuando quieras. Precio garantizado hasta ${PRICE_VALID_UNTIL}.`,
  },
  {
    question: '¿Tienen convocatorias para mi sector o región?',
    answer:
      `${GEOGRAPHY} Cuando describes una organización y su ubicación, Engrant filtra a financiadores para los que realmente es elegible — incluyendo programas de embajadas, fundaciones regionales y responsabilidad social corporativa fuera de las áreas de cobertura de las bases de datos principales.`,
  },
  {
    question: '¿Funciona Engrant en América Latina?',
    answer:
      `${GEOGRAPHY} La interfaz está disponible en español en /buscar-convocatorias/ y en inglés en engrant.eu. Clientes de pago están en África, América Latina, Europa y Norteamérica. La cobertura de embajadas y financiadores internacionales es un caso de uso central — los financiadores fuera de la cobertura de bases de datos orientadas a EE.UU. suelen ser la prueba más clara de que la búsqueda en la web en vivo encuentra lo que las bases de datos fijas no incluyen.`,
  },
  {
    question: '¿Cuál es la diferencia entre Engrant e Instrumentl / Candid / GrantStation / FundsforNGOs?',
    answer:
      'Esas plataformas buscan en sus propias bases de datos — completas dentro de ellas, invisibles fuera. Instrumentl parte desde $299/mes (verificado agosto 2026). GrantStation cuesta ~$894/año por acceso completo. Candid Foundation Directory parte desde ~$200/mes para individuos. FundsforNGOs usa bases de datos por región con filtros manuales. Engrant busca en la web en vivo y devuelve cada financiador pre-evaluado para tu organización a $47/mes o $444/año.',
  },
  {
    question: '¿Engrant puede ayudar a redactar la propuesta?',
    answer:
      'Engrant ofrece ayuda para redactar propuestas — un primer borrador basado en los requisitos reales declarados por el financiador, para trabajar a partir de él. No escribe ni envía una propuesta terminada en tu nombre, y el resultado no está listo para envío sin tu revisión y edición.',
  },
  {
    question: '¿Engrant rastrea fechas límite?',
    answer:
      'Engrant escribe eventos del pipeline — apertura esperada de convocatoria, fecha límite, fecha de decisión — en la app de calendario que ya usas. Configuras los recordatorios que quieras desde ese calendario; Engrant no ejecuta su propio sistema de recordatorios ni envía correos de fechas límite independientemente de la configuración de tu calendario.',
  },
  {
    question: '¿Hay prueba gratis?',
    answer:
      'Sí — 14 días, sin tarjeta de crédito, todas las funciones incluidas. La única función que naturalmente queda fuera de una prueba de 14 días es el correo mensual con nuevos financiadores coincidentes, ya que el primero llega después de 30 días.',
  },
  {
    question: '¿Quién dirige Engrant?',
    answer:
      'Engrant fue creado por Artem Smirnov, desarrollador de software con más de 25 años de experiencia, quien forma parte de la junta de Teplo, una organización sin fines de lucro francesa que apoya a Ucrania. Vive en Lituania con su familia. Engrant se fundó el 23 de diciembre de 2025 y opera desde Vilnius, Lituania. Consulta /about/ para la historia completa.',
  },
];

export default homepageFaqDataEs;
