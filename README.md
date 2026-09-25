# Plantilla web para autores

Repositorio maestro para crear sitios web independientes de autores y proyectos literarios.

## Objetivo

Construir una base reutilizable, ligera y fácil de adaptar para cada autor, manteniendo separados los repositorios de cada cliente.

## Arquitectura base — Web Nivel 1

La Web Nivel 1 utiliza dos páginas reales:

1. **Inicio** — presentación del autor, obra principal, compra y biografía.
2. **Actividad** — recorrido público, fuentes, redes y contacto.

La navegación superior se mantiene deliberadamente simple: nombre del autor, Actividad y Contacto.

### Escala vertical estándar

El caso piloto validó la composición a **100 % de zoom** en escritorio. Se fija esta referencia:

- encabezado: `76px`;
- sección completa: `calc(100svh - 76px)`;
- media sección: 50 % de la altura útil de una sección completa;
- padding vertical compacto de sección completa: `clamp(1.8rem, 3.2vh, 2.8rem)`;
- padding vertical compacto de media sección: `clamp(1rem, 2vh, 1.8rem)`;
- desde 919 px hacia abajo, no se fuerza altura: el contenido vuelve a flujo natural.

Una “sección completa” es un **presupuesto visual**: el contenido debe diseñarse para entrar completo en el campo visible cuando sea razonable. No se debe recortar contenido ni reducir legibilidad para forzarlo. Si una pantalla contiene dos bloques equivalentes, cada uno puede tomar una **media sección**.

Clases disponibles:
- `.section-screen` — referencia de sección completa;
- `.section-half` — referencia de media sección;
- añadir `.compact` cuando se necesite el padding vertical compacto validado.

### Datos editoriales del libro

La Web Nivel 1 admite dentro de la propia sección Libro/Obra los siguientes datos, solo cuando existan y estén verificados: género, año, páginas, ISBN y editorial/tipo de edición. Se muestran como ficha compacta para dar mayor presencia editorial al libro sin sumar páginas ni secciones.

### Regla comercial estructural

La **venta pertenece al libro, no al autor**. Los CTA de compra deben ubicarse dentro de la sección de la obra, junto a portada, título, sinopsis y datos editoriales. La presentación del autor se utiliza para identidad y orientación, no para acciones comerciales de compra.

### Correo oficial e identidad verificable

La sección Contacto no sirve solamente para recibir mensajes. El correo oficial visible es también una pieza de **identidad digital verificable** del autor.

Funciones:
- contacto con lectores, prensa, bibliotecas, instituciones y organizadores;
- referencia pública de identidad;
- apoyo para reclamar o validar perfiles de autor en plataformas externas;
- coherencia entre web oficial, tiendas, redes y servicios editoriales;
- ayuda para distinguir al autor frente a homónimos.

Cuando exista dominio propio, se prioriza un correo del tipo `nombre@dominio.com`. Si el autor usa Gmail u otro proveedor, puede mostrarse igualmente si es el correo real vinculado a su identidad autoral.

En prototipos puede usarse un correo ficticio para probar el diseño, pero debe sustituirse por un correo real antes de la publicación definitiva.

## Principios

- Identidad del autor por encima de una estética genérica.
- Identidad editorial extraída de la obra, no solo de la portada.
- Diseño adaptable a celular y escritorio.
- SEO básico desde el inicio.
- Accesibilidad y buen rendimiento.
- Cada cliente se crea en un repositorio independiente a partir de esta plantilla.
- Los datos no confirmados se ocultan; no se inventan.

## Flujo de trabajo

1. Diagnóstico de identidad digital del autor.
2. Recolección y validación de contenidos.
3. Extracción de identidad de la obra.
4. Adaptación visual y editorial.
5. Revisión en una rama de desarrollo.
6. Validación automática del build.
7. Publicación de la versión aprobada en `main`.

## Principio rector — “Ahí está todo”

La plantilla se construye como centro digital del autor. El autor debe poder dar su dominio —o indicar que busquen su nombre + obra— y desde allí el visitante debe poder resolver identidad, obra, acceso/compra, trayectoria relevante, redes y contacto.

Recorrido funcional: **INTERÉS → IDENTIFICACIÓN → COMPRENSIÓN / CONFIANZA → ACCESO A LA OBRA → COMPRA O LECTURA → CONTINUIDAD DEL VÍNCULO**.

La arquitectura se organiza por funciones reutilizables, no por la estética de un caso piloto: **IDENTIFICAR, INTERESAR, CONVENCER, ACCEDER, VINCULAR y RECUPERAR**. Los datos del cliente, la identidad visual, los componentes y la capa semántica deben permanecer separados.

El modelo de datos admite múltiples obras y múltiples antecedentes desde el origen. Clase 1 expone una selección deliberadamente limitada; las clases superiores pueden ampliar esa representación sin reconstruir la identidad desde cero.

## Recuperabilidad de identidad — recuerdo imperfecto o incompleto

La función **RECUPERAR** no se limita a errores ortográficos. Una persona puede recordar correctamente solo una parte de la identidad: el nombre de pila y la obra, el apellido y la obra, parte del título o algún dato distintivo.

Durante el diagnóstico de cada autor debe construirse un **mapa de recuperabilidad** y probar combinaciones razonables como:

- nombre + obra;
- apellido + obra;
- nombre completo + obra;
- variantes ortográficas previsibles del nombre, apellido o título;
- título parcial o variante razonable;
- cuando aporte valor real, obra + dato distintivo verificado (género, temática, localidad, editorial u otro).

Las variantes no deben trasladarse mecánicamente a la presentación humana ni utilizarse como relleno de palabras clave. Primero se prueban para detectar fallos reales de recuperación. Después se decide qué señales legítimas conviene reforzar mediante contenido, metadatos, relaciones semánticas y capa máquina.

La identidad visible conserva siempre la forma canónica correcta. La capa técnica puede registrar variantes razonables y relaciones útiles para desambiguación y recuperación, sin inventar datos ni prometer posiciones concretas en buscadores.

La prueba de entrega correspondiente se denomina **“recuerdo imperfecto o incompleto”**: se verifica si la identidad puede reconstruirse con información plausible pero parcial o ligeramente incorrecta.


## Escala visual y presupuesto de contenido

La referencia de altura visible, tipografías, interlineado y cantidad de texto por sección está documentada en [GUIA_ESCALA_VISUAL.md](./GUIA_ESCALA_VISUAL.md). Debe consultarse antes de adaptar un nuevo autor para evitar recalibraciones manuales innecesarias.


### Footer estándar — identidad del cliente + firma de desarrollo

Todas las webs generadas desde la plantilla incluyen un footer común con **dos zonas diferenciadas**:

1. **Zona del cliente** — nombre, descripción breve, ubicación, enlaces propios y copyright.
2. **Zona de firma de desarrollo** — atribución discreta con el texto “Diseño y desarrollo web por” y la marca gráfica del proyecto, enlazada a la página oficial de presentación del servicio.

La firma no debe competir visualmente con la identidad del autor. Usa el color secundario del sitio y toma el color de acento al interactuar. La marca está implementada como máscara monocromática para adaptarse automáticamente a la paleta de cada web.

La configuración vive en `site.ts`:

```ts
footerLine: 'Escritor/a · Ciudad, País',
credit: {
  enabled: true,
  label: 'Diseño y desarrollo web por',
  url: 'https://dejavuurbe.github.io/pierre-menard-web/proyecto/',
},
```

Reglas:

- la zona del cliente tiene prioridad visual;
- la firma aparece en todas las páginas porque forma parte de `BaseLayout`;
- no utiliza fondo propio;
- en móvil se apila debajo del copyright;
- puede desactivarse excepcionalmente con `enabled: false`;
- el enlace de la firma debe apuntar siempre a la página oficial vigente del servicio.
