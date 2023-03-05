/*
* Solucion al error del problema
* del sidebar al abrir y cerrar los menus
*/

window.jQuery = $;

export function loadTreeview() {
    $('[data-widget="treeview"]').each(function () {
        if ($(this).data('treeview-init') === undefined) {
            $(this).Treeview('init');
            $(this).data('treeview-init', true);
        }
    });
}