// Models
import FooterMenuItem from "../models/footer-menu-item";

export const menuFooterData: Array<FooterMenuItem> = [
    { id: 1, title: 'Productos', items: [
        { id: 1, title: 'Comics Marvel' },
        { id: 2, title: 'Comics DC' },
        { id: 3, title: 'Image' },
        { id: 4, title: 'Manga Shonen' },
        { id: 5, title: 'Manga Shojo' }
    ]},
    { id: 2, title: 'Mis datos', items: [
        { id: 1, title: 'Mi cuenta' },
        { id: 2, title: 'Mis pedidos' },
        { id: 3, title: 'Mis descuentos' }
    ]},
    { id: 3, title: 'Blog', items: [
        { id: 1, title: 'Nuestras recomendaciones' },
        { id: 2, title: 'Nuestro top 10' }
    ]}
]