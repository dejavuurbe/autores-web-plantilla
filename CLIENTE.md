# Ficha de cliente

Este archivo se completa al iniciar cada sitio derivado de la plantilla.

## 0. Pedido al autor — lista cerrada para Web Clase 1

Para una Web Clase 1 se solicita únicamente este material. No agregar pedidos que impliquen nuevas funciones o secciones fuera de la arquitectura aprobada.

1. Nombre público con el que quiere aparecer.
2. Ciudad o ubicación pública, si desea mostrarla.
3. Foto de autor en la mejor calidad disponible.
4. Biografía breve o información suficiente para redactarla.
5. Título y subtítulo de la obra principal.
6. Portada en la mejor calidad disponible.
7. Sinopsis de la obra.
8. Datos editoriales disponibles: género, año de publicación, cantidad de páginas, ISBN y editorial/tipo de edición.
9. Enlace o enlaces reales de compra de la obra.
10. Información sobre actividad literaria, presentaciones, prensa, reconocimientos o antecedentes que el diagnóstico indique que conviene confirmar. La selección final de Clase 1 admite hasta tres hitos y la realiza el proyecto por valor estratégico, con aprobación del autor.
11. Correo oficial del autor y redes sociales que quiera mostrar.
12. Un capítulo de la obra que el autor sienta que representa especialmente bien el libro.

### Uso del capítulo representativo

El capítulo no se pide para crear una sección nueva ni para publicarlo automáticamente. Se utiliza como material de trabajo interno para comprender mejor:
- la voz y el tono del autor;
- los temas centrales de la obra;
- el tipo de lector al que puede interesarle;
- la atmósfera y lenguaje del libro;
- qué rasgos conviene destacar al redactar la presentación y la sinopsis comercial de la web;
- cómo traducir la identidad real de la obra al diseño, en vez de inferirla solo desde la portada.

El capítulo no se publica en la web salvo autorización expresa del autor.

La solicitud base se complementa con preguntas dirigidas por el diagnóstico. No se agregan funciones por acumulación. Si aparecen otras obras, premios, entrevistas, videos u otros activos reales, se registran y evalúan: Clase 1 muestra solo lo que corresponda a su arquitectura, y el resto queda disponible para futuras ampliaciones.

## 1. Diagnóstico de identidad digital

- Nombre público del autor:
- Nombre completo:
- Obra principal:
- Consulta de búsqueda inicial:
- Homónimos o colisiones detectadas:
- Redes y perfiles existentes:
- Entrevistas, prensa y actividad cultural localizada:
- Problemas de buscabilidad:
- Oportunidades de posicionamiento:

## 2. Material recibido

### Control de fidelidad de materiales

Para cada imagen esencial registrar, cuando sea posible:
- archivo fuente;
- formato;
- tamaño en bytes;
- dimensiones en píxeles;
- si se usó el original o un derivado;
- motivo de cualquier transformación.

Regla: **no usar miniaturas, previews, capturas, versiones small/tiny ni archivos recomprimidos como sustituto del original entregado**. Si el original no puede transferirse con fidelidad, el estado es **BLOQUEADO POR TRANSFERENCIA**, no “resuelto”.


- Biografía:
- Sinopsis:
- Género:
- Año de publicación:
- Cantidad de páginas:
- ISBN:
- Editorial / tipo de edición:
- Portadas:
- Fotografías:
- Obras / bibliografía:
- Extractos autorizados:
- Reseñas:
- Notas y entrevistas:
- Enlaces de compra:
- Redes:
- Correo oficial del autor:
- ¿Ese correo se usa para Goodreads, Amazon, editoriales u otras cuentas autorales?:
- Datos de contacto:
- Preferencias estéticas:

## 3. Identidad

- Idea central del autor:
- Tono:
- Paleta:
- Tipografías:
- Motivo o textura:
- Elemento gráfico distintivo:
- Recursos visuales:
- Elementos que deben evitarse:

## 4. Arquitectura — Web Nivel 1

### Página 1 / Inicio
- presentación del autor;
- obra principal;
- CTA de compra dentro de la sección Libro/Obra;
- biografía.

### Página 2 / Actividad
- actividad, presentaciones, prensa o recorrido público;
- fuentes externas;
- contacto y redes.

### Medidas de sección

Referencia aprobada en escritorio a 100 % de zoom:
- Header: 76 px.
- Sección completa: alto útil = 100svh - header.
- Media sección: 50 % del alto útil.
- Padding compacto completo: clamp(1.8rem, 3.2vh, 2.8rem).
- Padding compacto medio: clamp(1rem, 2vh, 1.8rem).
- En móvil/tablet estrecha: altura natural, sin forzar viewport.

Criterio de aceptación: cada sección debe poder percibirse completa dentro del campo visible cuando la cantidad de contenido lo permita. Si se colocan dos bloques equivalentes dentro de un mismo campo visual, diseñarlos como medias secciones.

### Datos editoriales del libro
Si el autor dispone de ellos, mostrar en la sección Libro/Obra: género, año, páginas, ISBN y editorial/tipo de edición. Son datos breves que refuerzan la presencia editorial del libro sin crear una sección adicional. Durante el prototipo, cada dato ausente queda visible como `Pendiente`. Antes de entrega debe completarse o descartarse expresamente; nunca se inventa.

### Regla de venta
Las acciones de compra pertenecen siempre a la sección Libro/Obra, junto a portada, título, sinopsis y datos del libro. No colocar CTA de venta en la presentación del autor.

### Correo oficial / verificación autoral
El correo debe considerarse un activo de identidad digital, no solo un medio de contacto.

Comprobar:
- que sea un correo real y controlado por el autor;
- que esté claramente asociado al nombre del autor;
- que, si existe dominio propio, pueda usarse una dirección de ese dominio;
- que sea coherente con las cuentas autorales relevantes;
- que pueda servir como evidencia pública en reclamaciones o verificaciones de perfiles.

### Navegación
- nombre del autor → Inicio;
- Actividad → segunda página;
- Contacto → ancla de contacto dentro de la segunda página.

## 5. SEO / AEO

- Dominio:
- Título principal:
- Descripción:
- Palabras clave principales:
- Consultas long-tail:
- Entidades que deben desambiguarse:
- Schema necesarios: Person / Book / Review / FAQPage

## 6. Publicación

- Repositorio:
- Rama de revisión:
- Hosting:
- Dominio:
- Analytics / Search Console:
- Fecha de publicación:


## 7. Prueba funcional — “Ahí está todo”

Antes de publicar, comprobar:
- **Dominio directo:** con solo el dominio, un visitante puede identificar al autor, comprender la obra, encontrar cómo conseguirla y localizar contacto/redes.
- **Búsqueda natural:** nombre + obra permite reconocer y llegar a la referencia oficial una vez indexada.
- **Recuerdo imperfecto:** se prueban variantes razonables detectadas en el diagnóstico, sin mostrar errores ortográficos en la capa humana.

La web no promete ventas ni posiciones determinadas en buscadores. Su función es recibir el interés generado por el autor y conducirlo hacia la obra, la compra o lectura y la continuidad del vínculo.


## 8. Estados operativos

- **CREADA/PUBLICADA**: el repositorio existe, usa `main`, compila y GitHub Pages publica la URL. Lo acredita el estado técnico de GitHub.
- **TERMINADA**: contenido e imágenes reales aprobados, enlaces probados, revisión visual móvil y escritorio completa y checklist final aprobado. GitHub Actions no asigna este estado.

Estado actual del proyecto: **EN CONSTRUCCIÓN**. No cambiarlo a TERMINADA por un build verde o un HTTP 200.

## 9. Checklist obligatorio de entrega

Marcar cada punto `APROBADO`, `PENDIENTE` o `DESCARTADO EXPRESAMENTE`. Para imágenes y enlaces esenciales, debe quedar aprobado antes de entregar.

- [ ] Foto real del autor visible desde un archivo local en `public/images/`, usando el original o un derivado controlado y verificado contra el original.
- [ ] Calidad de la foto comprobada en la URL pública: no pixelada, no borrosa por compresión y sin sustitución por preview/miniatura.
- [ ] Portada real de la obra visible desde un archivo local en `public/images/`, usando el original o un derivado controlado y verificado contra el original.
- [ ] Portada comprobada en la URL pública: archivo correcto, sin corrupción, completa salvo recorte expresamente decidido y con legibilidad suficiente.
- [ ] Inicio: identidad pública, obra principal y CTA correctos.
- [ ] Obra: título, sinopsis y datos editoriales verificados; ningún ISBN, cantidad de páginas o fecha inventados.
- [ ] Biografía aprobada por el autor.
- [ ] Actividad: hitos, fechas, fuentes y enlaces revisados.
- [ ] Compra: antes de marcar Pendiente se buscaron ficha, Base Maestra, Drive/Gmail relacionado y web pública por autor + obra.
- [ ] Compra: si existe un enlace verificable, está incorporado y abre la obra correcta.
- [ ] Crédito “Diseño y desarrollo web por” abre el destino correcto.
- [ ] Correo/contacto real abre el canal correcto.
- [ ] Cada red confirmada usa URL de “Compartir perfil” y se probó también desde celular; redes pendientes están identificadas y no enlazan.
- [ ] Los faltantes del prototipo están resueltos o descartados expresamente.
- [ ] Navegación interna, ancla Contacto y enlaces probados en móvil y escritorio.
- [ ] No quedan placeholders obligatorios ni badges de pendiente.
- [ ] Revisada la URL pública después del último deploy; las dos imágenes responden y se ven.
- [ ] Aprobación visual final de Brian/autor registrada.

**Estado de entrega:** EN CONSTRUCCIÓN / TERMINADA: ____  
**Fecha y responsable de aprobación:** ____
