import { useState } from "react";

function SortCoatsOfArms({handleClick}) {

    //States for the item that sets the order of the coas
    const alphabetical = "A-Ö";
    const reversed = "Ö-A";

    const [sortItemText, setSortText] = useState([
        alphabetical
    ]);

    /*Have setItemState as the onClick, which sets the state of the
    sort item and it's text and also runs the handleClick function to make
    changes in COA_Array.js
    */
    const setItemState = () => {
        if(sortItemText !== reversed)
        {
            setSortText(reversed);
        }else
        setSortText(alphabetical);
        handleClick();
    }

    return (
        <div>
            <ul id="SortingList">
                <li id="sortItem"  
                onClick={setItemState}
                >
                {sortItemText}
                </li>
            </ul>
        </div>
    );
}
export default SortCoatsOfArms;