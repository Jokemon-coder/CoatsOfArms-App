//useState to modify state of the array containing coats of arms
import React, { useState } from 'react'; 
import SortCoatsOfArms from '../Sort/SortCOA';
import coaArray1 from '../dataStuff/coaData.js';
import "./COA.css";

function ArrayOfCoa () {
    //ceoArray used to be here, got moved to coaData.js

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
                var img = coaA.children.item(Image).children;
                var imgSrc = img.item(0).src;
                var imgConvert = String(imgSrc);
                
            //If it contains the encrypted umlauts, turns them into their actual characters
                if(imgConvert.includes("%C3%84") === true)
                {
                    imgConvert = imgConvert.replace("%C3%84", "Ä");
                }

                if(imgConvert.includes("%C3%A4") === true)
                {
                    imgConvert = imgConvert.replace("%C3%A4", "ä");
                }

                if(imgConvert.includes("%C3%B6") === true)
                {
                    imgConvert = imgConvert.replace("%C3%B6", "ö"); 
                }
                //Assign the alt with src string by splitting it apart at the end so that only the name of the coat of arms remains.
                img.item(0).setAttribute("alt", imgConvert.split('/').pop().split('_')[0]);
            }
        }}

        //MouseOver and MouseOut functions to show and remove border from coats of arms
        onMouseOver={(coa) => { 
            MouseHoverEffect(coa);
        }}
        onMouseOut={(coa) => {
            RemoveMouseHoverEffect(coa);
        }}
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


    /*Function that I tried to create a name prop for coa with, did not work. Leaving it here anyway.
    function MakeName(element){
        var coaName = String(element.target.src);
        coaName = coaName.replace("http://localhost:3000/images/coatsofarms/", "");
        coaName = coaName.replace("_COA.png", "");
        coaName = decodeURI(coaName);
        var newidk=[];
        newidk.push(coaName);
        console.log(newidk);

        let test = [{
            name: coaName,
        }]

        for (let i = 0; i < test.length; i++)
        {
            let newName = {
                name: "Default",
            };
            //console.log(test[i].name);
            newName.name = test[i].name;
            if(!namE.includes(newName))
            {
                namE.push(newName);
                setName(newName);
            }
        }
    };
    */

    

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