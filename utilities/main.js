const accordionTitles = document.querySelectorAll(".accordion-Tab");
const accordionContent = document.querySelectorAll(".accordionContent");

function toggle(selected)
{
    let selectedId = selected.id;
    let index = parseInt(selectedId.charAt(selectedId.length-1))  - 1;
    accordionContent[index].classList.remove("closed");
    if(accordionContent[index].classList.contains("open"))
    {
        accordionContent[index].classList.remove("open");
        accordionTitles[index].classList.remove("selected-title");
        accordionTitles[index].childNodes[3].classList.remove("rotate-up");
        accordionContent[index].classList .add("closed");
        return;
    }
    accordionContent[index].classList.add("open");
    accordionTitles[index].classList.add("selected-title");
    accordionTitles[index].childNodes[3].classList.add("rotate-up");
    for(let i = 0; i < accordionContent.length; i++)
    {
        if(i === index)
        {
            continue;
        }
        else
        {
            accordionTitles[i].classList.remove("selected-title")
            accordionContent[i].classList.remove("open");
            accordionTitles[i].childNodes[3].classList.remove("rotate-up");
            accordionContent[i].classList.add("closed");
        }
    }
}

function load()
{
    for(let i = 0; i < accordionContent.length; i++)
    {
        accordionContent[i].classList.add("closed");
    }
}

load();