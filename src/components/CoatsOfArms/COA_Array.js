//useState to modify state of the array containing coats of arms
import React, { useState } from 'react'; 
import SortCoatsOfArms from '../SortCOA';
import coaArray1 from '../dataStuff/coaData.js';

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
        name={""}
        /*customtag = customtag.replace("http://localhost:3000/images/coatsofarms/", ""),
        customtag = customtag.replace("_COA.png", ""),
        customtag = decodeURI(customtag)]*/
        onLoad={(coa) => { //Remove preset border stylings on load
            RemoveMouseHoverEffect(coa);
            //MakeName(coa);
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
        element.target.style.border = "";
    };

    function RemoveMouseHoverEffect(element) {
        element.target.style.border = "none";

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