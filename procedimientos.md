### Integrar template adminlte con proyecto de React

1- Instalar el paquete
npm install admin-lte --save

2- Copiar carpetas dist y plugins desde ./node_modules/admin-lte a la carpeta public
del proyecto

3 - Copiar los links a css y scripts del template al archivo index.html

4- Agregar las clases del body al archivo index.html del proyecto react

### Solucion al problema del sidebar al abrir y cerrar los menus

1- Crear archivo fixMenu.js con el siguiente contenido:

window.jQuery = $;

export function loadTreeview() {
    $('[data-widget="treeview"]').each(function () {
        if ($(this).data('treeview-init') === undefined) {
            $(this).Treeview('init');
            $(this).data('treeview-init', true);
        }
    });
}

2- Llamar la funcion en el componente Sidebar:

import { loadTreeview } from '../../public/fixMenu.js'

useEffect(() => {
    loadTreeview()
  }, [])
