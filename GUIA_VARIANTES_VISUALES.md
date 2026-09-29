# Guía de variantes visuales — cuatro ejes

## Objetivo

Describir la dirección visual de una Web Esencial con solo cuatro decisiones:

**FONDO + SUPERFICIE + CARÁCTER + IMAGEN**

No son plantillas cerradas. Son controles independientes que se combinan para cubrir la mayoría de los géneros y tonos literarios sin multiplicar diseños.

La implementación de laboratorio vive en:

- `src/content/site.ts` → selección de los cuatro ejes;
- `src/layouts/BaseLayout.astro` → traduce la selección a atributos `data-*`;
- `src/styles/global.css` → aplica las capas;
- `src/identity/theme.css` → sigue siendo la fuente de paleta, tipografías y tokens propios del cliente.

## Configuración

En `site.ts`:

```ts
visual: {
  background: 'clean',
  surface: 'open',
  character: 'editorial',
  image: 'document',
  backgroundImage: '',
},
```

### Eje 1 — Fondo

Valores:

- `clean`: fondo plano/neutro. Ensayo, academia, poesía sobria, sitios donde manda el texto.
- `chromatic`: gradientes y luz derivados de la paleta. Infantil, juvenil, contemporáneo, autores con portada colorida.
- `textured`: patrón/materialidad sutil. Poesía, memoria, histórica, artesanal.
- `scenic`: fotografía o ilustración de fondo. Misterio, fantasía, ciencia ficción, histórica, romance atmosférico.

Para `scenic`, colocar una imagen local en `public/images/` y definir, por ejemplo:

```ts
backgroundImage: '/images/fondo.jpg'
```

La imagen debe ser local y estar autorizada. No hotlink.

## Eje 2 — Superficie

- `open`: contenido directamente sobre el fondo.
- `block`: grandes bloques opacos o casi opacos.
- `cards`: módulos flotantes separados.
- `glass`: módulos translúcidos con blur del fondo.

El glass funciona porque `backdrop-filter` procesa lo que está detrás del elemento; por eso la superficie necesita transparencia parcial. Debe conservarse fallback para navegadores sin soporte.

## Eje 3 — Carácter

- `editorial`: sobrio, aire, sombra discreta, jerarquía tipográfica.
- `organic`: curvas suaves, radios mayores, sensación cálida/artesanal.
- `cinematic`: mayor profundidad, contraste y sombra.
- `graphic`: geometría más dura, radios pequeños, acento visual marcado.

Este eje no reemplaza la identidad del autor. Modifica intensidad, geometría y ritmo; la paleta y las tipografías siguen definiéndose por obra/autor.

## Eje 4 — Tratamiento de imagen

- `document`: foto/portada casi sin intervención; adecuada para documentación, ensayo o material gráfico que debe verse fiel.
- `framed`: borde, radio y sombra; imagen tratada como objeto.
- `integrated`: imagen incorporada al sistema gráfico mediante apoyo cromático y menor sensación de marco.
- `hero`: imagen protagonista de gran escala.

## Combinaciones de partida

No son presets obligatorios. Solo atajos para elegir.

| Perfil / género | Fondo | Superficie | Carácter | Imagen |
| --- | --- | --- | --- | --- |
| Ensayo / académico | clean | open o block | editorial | document |
| Poesía íntima | textured | cards | organic | framed |
| Misterio / thriller | scenic | glass | cinematic | hero |
| Infantil | chromatic | cards | graphic u organic | hero |
| Memoria / autobiografía | textured o scenic | cards | organic | document o framed |
| Ciencia ficción | scenic | glass | graphic o cinematic | integrated |
| Histórica | textured o scenic | block/cards | editorial o cinematic | framed |
| Romance | chromatic o scenic | glass/cards | organic | hero |
| Fantasía | scenic | glass/cards | cinematic | integrated/hero |
| Narrativa contemporánea | chromatic/clean | cards | editorial/graphic | framed |

## Cómo están construidas las capas

### Fondo

Se usa un pseudo-elemento fijo `body::before` por debajo de todo el contenido. Esto mantiene el fondo independiente de las secciones y evita duplicarlo en cada bloque.

El fondo puede contener:

- color;
- múltiples gradientes;
- patrón CSS;
- imagen local;
- combinación de imagen + overlay.

### Superficie

La superficie se aplica a `.section > .container`. Así la estructura semántica no cambia: solo cambia cómo se pinta el contenedor.

`cards` agrega borde, radio, sombra y espacio entre módulos.

`glass` agrega además un fondo semitransparente y:

```css
-webkit-backdrop-filter: blur(...);
backdrop-filter: blur(...);
```

### Fallback

El sistema usa `@supports not (...)` para sustituir glass por una superficie casi opaca cuando el navegador no admite blur de fondo. La información y navegación no deben depender del efecto.

### Móvil

Las tarjetas conservan separación pero reducen padding y ancho lateral. El fondo escénico se reencuadra arriba. Las reglas de altura de `GUIA_ESCALA_VISUAL.md` siguen teniendo prioridad.

## Reglas de calidad

1. Ningún estilo puede reducir legibilidad o contraste.
2. Glass no se usa con transparencia tan alta que el texto compita con el fondo.
3. Una imagen escénica nunca sustituye foto/portada esenciales.
4. Foto y portada reales siguen siendo archivos independientes y locales.
5. No usar `opacity` sobre el contenedor padre de glass para lograr transparencia: puede alterar el backdrop root y afectar el blur.
6. No mezclar estilos porque “hay opciones”; elegir cuatro valores que respondan a una intención.
7. Validar siempre a 100 % y móvil; 33–35 % queda como prueba de estrés secundaria.
8. La variante visual no cambia el estado editorial ni permite inventar contenidos.

## Estado

**LABORATORIO.** No fusionar a `main` hasta probar al menos:

- clean + open + editorial + document;
- textured + cards + organic + framed;
- scenic + glass + cinematic + hero;
- chromatic + cards + graphic + hero;

en desktop y móvil, verificando además fallback de glass.
