import { useState } from "react";
import { namesData } from "../..";
import "./SearchBox.css";
function SearchBox ({placeHolder}) {
   
    //Set up the states to be used for the search button
    const searchIcon = "./images/searchimg/searchicon.png";
    const clearIcon = "./images/searchimg/clearicon.png";
    const searchInput = document.getElementById("SearchBar");
    const [buttonIcon, setButtonIcon] = useState([
        searchIcon
    ]);

    //Set up the searchbars results
    const [filteredCoa, setFilteredCoas] = useState([]); 

    /*When the searchbar input is changed, assign the input and find closest match
    *from namesData by mapping it into newNameFilter
    */
    const handleChange = (event) => {
        const coaName = event.target.value;
        const newNameFilter = namesData.filter((coa) => {
            return coa.name.toLowerCase().includes(coaName.toLowerCase());
        })
        /*If the coaName AKA the changed input is not empty, assigns the matching
        filtered data as the filteredCoa state. If not, set the state as an empty string
        */
        if(coaName !== "")
        {
        setFilteredCoas(newNameFilter);
        }else{
        setFilteredCoas("");
        }
    }
    //When focusing on the searchbar, change button icon and state
    const handleFocus = () => {
        setButtonIcon(clearIcon);
    }

    /*When clicking the searchbutton and it is not in the clearIcon state,
    set the icon/state and focus on searchbar.
    Otherwise make the button searchIcon, focus out/blur from searchbar and set
    everything to an empty string.
    */
    const handleClick = () => {
        if(buttonIcon !== clearIcon)
        {
            setButtonIcon(clearIcon);
            searchInput.focus();

            
        }else{
        setButtonIcon(searchIcon);
        searchInput.value = "";
        setFilteredCoas("");
        searchInput.blur();

        //Function used during testing
        /*console.log(namesData.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }));*/
        
        }


    };

    return  (
    <div id="SearchBox">
    <input  
    id="SearchBar" 
    type="text"
    placeholder={placeHolder}
    coas={namesData}
    tabIndex={0}
    onChange={handleChange}
    onFocus={handleFocus}
    />
    
    <button 
    id="SearchButton"
    onClick={handleClick}
    >
    <img id="ButtonIcon" 
    src={buttonIcon} 
    alt={""}>
    </img>
    </button>

    {filteredCoa.length !== 0 && (
      <div id="DropdownNames">
        {filteredCoa.slice(0, 10).map((coa) => {
          return (
          <p className="VaakunaName"
          key={namesData.indexOf(coa)}

        onClick={() => {    
            /*When the DropdownNames results are clicked, 
            go to the corresponding coa in the gallery and set it's img to have a border via a new class.
            The same border is used when hovering over the coa. 
            */      
            var searchedCoa = document.getElementById(namesData.indexOf(coa));
            var searchedCoaImg = searchedCoa.firstElementChild.firstElementChild.firstElementChild;
            searchedCoa.scrollIntoView();
            searchedCoaImg.classList.toggle("ImgBorder"); 

            }
        }

        //Change background colours on mouseOver and Out
        /*onMouseOver={(coa) => { 
            coa.target.style.background = "#DEDEDE";
        }}

        onMouseOut={(coa) => {
            coa.target.style.background = "none";
        }}*/
        >
            {coa.name} 
        </p>
          );
          })}
      </div>
)}
    </div>
    );


};
export default SearchBox;
