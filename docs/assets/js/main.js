"use strict";const fillForm=document.querySelector(".js-fillform"),photoFullName=document.querySelector(".js-photoFullName"),photoJob=document.querySelector(".js-photoJob");function onFormKeyUp(e){const o=e.target,r=o.value;"full-name"===o.name&&(photoFullName.innerText=r),"job"===o.name&&(photoJob.innerText=r)}fillForm.addEventListener("keyup",onFormKeyUp);const collapsibleShare=document.querySelector(".share__create"),share=document.querySelector(".share"),arrow=document.querySelector(".arrow");function collapsibleArrowShare(){collapsibleShare.classList.toggle("collapsible-hidden"),arrow.classList.toggle("fa-chevron-up"),arrow.classList.toggle("fa-chevron-down")}share.addEventListener("click",collapsibleArrowShare);