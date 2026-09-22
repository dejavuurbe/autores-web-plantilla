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
