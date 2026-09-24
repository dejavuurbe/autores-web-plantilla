# Guía de escala visual — plantilla base para autores

Esta guía fija la referencia aprobada para construir sitios Nivel 1 sin repetir ajustes manuales de altura, tipografía e interlineado en cada cliente.

La calibración se obtuvo durante el trabajo de la web de Alejandro Roth y debe tomarse como **punto de partida de la plantilla**, no como una obligación de conservar el mismo contenido o identidad gráfica.

## 1. Qué significa “una sección visible”

En escritorio, una sección principal debe poder verse completa dentro de una pantalla útil, descontando el encabezado fijo.

```css
--header-height: 76px;
--section-full: calc(100svh - var(--header-height));
--section-half: calc(var(--section-full) / 2);
```

Por lo tanto:

- viewport de 768 px de alto → sección completa aproximada: **692 px**;
- viewport de 900 px de alto → sección completa aproximada: **824 px**;
- viewport de 1080 px de alto → sección completa aproximada: **1004 px**.

La medida correcta es siempre `100svh - 76px`, no una altura fija en píxeles.

En móvil (`< 900px`) no se fuerza una pantalla completa: la sección vuelve a altura automática para evitar recortes.

## 2. Regla general de composición

Cada sección debe tener **una función principal** y el contenido esencial debe entrar en la primera visualización de escritorio.

Orden de decisión cuando algo no entra:

1. reducir espacios verticales;
2. ajustar interlineado;
3. compactar tipografía secundaria;
4. editar o resumir texto;
5. recién después considerar reducir elementos visuales principales.

No reducir primero la portada o la foto de autor si el problema real es exceso de texto.

## 3. Tres secciones base de Inicio

### A. Autor / Hero

Objetivo: identificar al autor inmediatamente.

Contenido recomendado dentro de una pantalla:

- eyebrow: profesión + ubicación, **1 línea**;
- nombre: **1 línea**, excepcionalmente 2;
- frase de identidad / obra principal: **1–2 líneas**;
- 1 llamada a la acción;
- retrato principal.

Referencia actual:

```css
.hero {
  min-height: var(--section-full);
  display: grid;
  align-items: center;
}

.hero-lead {
  max-width: 38ch;
  line-height: 1.45;
}
```

No convertir el hero en biografía. La explicación extensa pertenece a la sección Autor.

### B. Obra principal

Objetivo: presentar portada, propuesta, datos y acción de compra **en una sola visualización**.

La calibración aprobada para escritorio permite mostrar simultáneamente:

- etiqueta “Obra”;
- título del libro: 1 línea;
- subtítulo: 1 línea;
- sinopsis breve: **aprox. 40–55 palabras**, idealmente no más de **7 líneas**;
- hasta **5 datos bibliográficos** distribuidos en 2 columnas;
- botón de compra;
- una línea de estado de compra si hace falta;
- dos líneas de créditos:
  - “Edición de autor”;
  - “Prólogo: … · Ilustraciones: …”.

Referencia aprobada:

```css
.book-section {
  min-height: var(--section-full);
  display: grid;
  align-items: center;
  padding-block: clamp(.8rem, 1.6vh, 1.35rem);
}

.enigma-title {
  font-size: clamp(2.5rem, 3.8vw, 3.9rem);
  line-height: .86;
  margin-bottom: .18rem;
}

.subtitle {
  margin: 0 0 .5rem;
}

.subtitle-main {
  font-size: clamp(.95rem, 1.35vw, 1.18rem);
}

.subtitle-accent {
  font-size: clamp(1.18rem, 1.7vw, 1.55rem);
  line-height: 1;
}

.book-copy .lead {
  font-size: clamp(.88rem, 1vw, .98rem);
  line-height: 1.34;
  margin-bottom: .45rem;
  max-width: 40ch;
}

.book-meta {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .25rem .8rem;
  margin: .45rem 0 0;
}

.book-meta div {
  padding-top: .35rem;
}

.book-meta dt {
  font-size: .66rem;
}

.book-meta dd {
  margin: .08rem 0 0;
  line-height: 1.25;
}

.purchase {
  margin-top: .5rem;
}

.purchase-status {
  margin: .2rem 0 0;
  font-size: .74rem;
}

.book-credits {
  gap: .02rem;
  margin: .3rem 0 0;
  font-size: .7rem;
  line-height: 1.25;
}
```

Portada de referencia:

```css
.cover {
  width: min(100%, 390px);
  max-height: min(540px, calc(100svh - var(--header-height) - 7rem));
}
```

**Regla práctica:** si la sinopsis supera aproximadamente 55 palabras o rompe claramente las 7 líneas en el ancho aprobado, primero debe editarse el texto antes de seguir achicando la tipografía.

### C. Autor / Biografía

Objetivo: dar contexto biográfico sin convertir la página en una entrevista o currículum.

Composición recomendada:

- eyebrow “Biografía”;
- título corto;
- biografía principal de **45–80 palabras**;
- una nota adicional de **1–2 líneas**.

Referencia:

```css
.author-grid {
  max-width: 1040px;
}

.author-note {
  max-width: 58ch;
}
```

Si la biografía supera ese volumen, debe resumirse o trasladarse a una página adicional en un nivel superior de sitio.

## 4. Ancho y grilla

Referencia global:

```css
--max-width: 1180px;

.container {
  width: min(calc(100% - 2.5rem), var(--max-width));
  margin-inline: auto;
}

.grid-two {
  display: grid;
  align-items: center;
}

@media (min-width: 800px) {
  .grid-two {
    grid-template-columns: 1fr 1fr;
  }
}
```

Para la obra principal se admite una separación visual amplia, pero sin desplazar el bloque textual fuera de la altura útil.

## 5. Presupuesto de texto antes de maquetar

Antes de cargar contenido definitivo, usar estos límites de referencia:

| Bloque | Presupuesto recomendado |
| --- | --- |
| Eyebrow | 2–7 palabras |
| Título de autor | 1 línea |
| Tagline de hero | 8–16 palabras |
| Título de obra | 1 línea |
| Subtítulo de obra | 3–8 palabras |
| Sinopsis visible | 40–55 palabras |
| Datos bibliográficos | hasta 5 campos |
| Biografía corta | 45–80 palabras |
| Nota biográfica | 8–20 palabras |
| Créditos de libro | 1–2 líneas |

No son límites editoriales rígidos: son un **presupuesto de diseño** que permite saber de antemano si el contenido cabe en una sección visible.

## 6. Criterio de aceptación

En escritorio, la sección Obra se considera correctamente calibrada cuando, sin hacer scroll dentro de esa sección, se ven a la vez:

1. “Obra”;
2. título y subtítulo;
3. sinopsis;
4. ficha bibliográfica;
5. botón;
6. estado del enlace, si existe;
7. créditos finales.

Si alguno queda cortado, revisar primero el presupuesto textual y los espacios verticales.

La prueba debe hacerse con zoom del navegador al **100 %**.

## 7. Qué no copiar mecánicamente

La plantilla conserva la estructura y escala, pero cada autor puede cambiar:

- paleta;
- tipografías de identidad;
- forma del retrato;
- fondos y recursos decorativos;
- tono de los textos;
- composición específica de la obra.

Lo que sí debe mantenerse como referencia es la relación entre **altura visible, cantidad de información y jerarquía tipográfica**.

## 8. Lección incorporada

La experiencia de ajuste mostró que definir solo `min-height: 100vh` no alcanza. También hay que definir el **presupuesto de contenido** de cada sección.

A partir de esta calibración, cada nuevo sitio debe comenzar con estos límites y solo apartarse de ellos cuando el contenido o la identidad del autor lo justifiquen.
