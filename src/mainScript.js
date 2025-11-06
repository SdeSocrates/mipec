import lightGallery from "lightgallery";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

document.addEventListener("DOMContentLoaded", () => {

    // LightGallery module

    const gallery = document.getElementById("gallery");

    if(gallery){
        try{
            lightGallery(document.getElementById('gallery'), {
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
            });
        } catch (e){
            console.error("Error al cargar LightGallery");
        }
    }

    //buttons and links JS

    const fades = document.querySelectorAll(".fade");

    fades.forEach(f => {
        f.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = f.href;
            }, 500);
        });
    });
});

