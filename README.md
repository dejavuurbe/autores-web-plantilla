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

### Regla comercial estructural

La **venta pertenece al libro, no al autor**. Los CTA de compra deben ubicarse dentro de la sección de la obra, junto a portada, título, sinopsis y datos editoriales. La presentación del autor se utiliza para identidad y orientación, no para acciones comerciales de compra.

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
