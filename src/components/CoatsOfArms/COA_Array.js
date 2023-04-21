//useState to modify state of the array containing coats of arms
import React, { useState } from 'react'; 
import SortCoatsOfArms from '../Sort/SortCOA';
import coaArray1 from '../dataStuff/coaData.js';
import "./COA.css";

function ArrayOfCoa () {

    /*Mapped coaArray in which the keys and IDs are defined based on the index
    of the item within the array. This mapped version is therefor rendered
    instead of the other one. */
    const [mappedCoaArray, setOrder] = useState(coaArray1.map((coa) => (
        
        <div
        className = "VaakunaImg"
        key={coaArray1.indexOf(coa)}
        id={coaArray1.indexOf(coa)}

        onLoad={() => {
            //Go through all in coaArray1 and give them an alt that is their name through their src. 
            for (let index = 0; index < coaArray1.length; index++) {
                var coaA = document.getElementById(index);
                var img = coaA.children.item(Image).children.item(Image).children;
                var imgSrc = img.item(0).src;
                var imgConvert = String(imgSrc);
                
            //Replace all possible umlauts
            imgConvert = imgConvert.replaceAll("%C3%84", "Ä");  
            imgConvert = imgConvert.replaceAll("%C3%A4", "ä");  
            imgConvert = imgConvert.replaceAll("%C3%B6", "ö");
            
            //Assign the alt with src string by splitting it apart at the end so that only the name of the coat of arms remains.
            img.item(0).setAttribute("alt", imgConvert.split('/').pop().split('_')[0]);
                
                
            }
        }}

        //MouseOver and MouseOut functions to show and remove border from coats of arms
        onMouseOver={(coa) => {
            MouseHoverEffect(coa);
        }
        }
        onMouseOut={(coa) => {
            RemoveMouseHoverEffect(coa);
        }

        }
        onClick={(coa) => { //OnClick function to handle clicking coa on mobile and removing the border after 5 seconds of the action
            setTimeout(() => {
                RemoveMouseHoverEffect(coa);
            }, 5000);
        }}>
            {coa}
        </div>
    )));

    function MouseHoverEffect(element){
        element.target.classList.add("ImgBorder");
    };

    function RemoveMouseHoverEffect(element) {
        element.target.classList.remove("ImgBorder");
    };

    function handleClick(){ 
        /*
        Sort the coaArray and change the text of the element
        handleClick is assigned to based on if the text is 'A-Ö' or 'Ö-A'
        */ 
        const sorted = [...mappedCoaArray].reverse();

        var text = document.getElementById("sortItem").textContent;
        if (text === "A-Ö")
        {
            setOrder(sorted);
        }
        else{
            setOrder(sorted);
        }
      };

    return (
        <div id="COAArray" /*onLoad={() => makeName()}*/>
        <div id='SortingBox'>
        <SortCoatsOfArms handleClick={handleClick}/>
        </div>
        {mappedCoaArray}
        </div>
    );
};
export default ArrayOfCoa;