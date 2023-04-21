import React, { useState } from 'react'; 
import "./Header.css";
import { useEffect } from 'react';
function Header (props) {

    //Set the intended language and it's state. The LanguageEnglish element is not to be displayed. 
    const [isFinnish, setLanguage] = useState(true);


    const finnishTitle = "Suomen kuntien vaakunat";
    const finnishSearch = "Hae...";

    const englishTitle = "Coats of arms of Finland";
    const englishSearch = "Search...";

    const [headerTitle, setTitle] = useState();
    const [searchTitle, setSearch] = useState();

    //useEffect so it renders the element again when isFinnish has been changed and based on if it is true or false
    useEffect(() => {
        if(isFinnish === true)
        {
            setTitle(finnishTitle);
            setSearch(finnishSearch);
            props.changeLanguage(isFinnish);
        }else
        {
            setTitle(englishTitle);
            setSearch(englishSearch);
            props.changeLanguage(isFinnish);
        }
    }, [isFinnish]);
    
    /*const [Language, setLanguage] = useState([
        <div>
            <ul id='LanguageList'>
                <li id='LanguageFinnish' className={isFinnish ? 'LanguageItem' : 'InvisibleClass'} onLoad={setDefaultLang} onClick={ChangeLanguage}>FI</li>
                <li id='LanguageEnglish' className={isFinnish ? 'InvisibleClass' : 'LanguageItem'} /*style={{display:"inline-block"}} onLoad={setDefaultLang} onClick={ChangeLanguage}>EN</li>
            </ul>
        </div>
    ])

    //Map the language items.
    const mappedLanguage = Language.map((lang) =>
    <div key={Language.indexOf(lang)}>
        {lang}
    </div>    
    )*/

    //Boolean that checks if language has been changed.
    var changedLanguage = Boolean();

    //changedLanguage is to always be false on default

    //Change language depending on what the changedLanguage Boolean is. 
    function ChangeLanguage() {
        /*if(changedLanguage === false)
        {
            document.getElementById('LanguageEnglish').style.display = "none";
            document.getElementById('LanguageFinnish').style.display = "inline-block";

            document.getElementById('SearchBar').placeholder = "Search...";
            document.getElementById('Title').textContent = "Coats of arms of Finland";
            
            changedLanguage = true;
            const finLanguage = Language;
            setLanguage(finLanguage);
        }else if(changedLanguage === true)
        {
            document.getElementById('LanguageEnglish').style.display = "inline-block";
            document.getElementById('LanguageFinnish').style.display = "none";

            document.getElementById('SearchBar').placeholder = "Hae...";
            document.getElementById('Title').textContent = "Suomen kuntien vaakunat";
            
            changedLanguage = false;
            const enLanguage = Language;
            setLanguage(enLanguage);
        }*/
        setLanguage(!isFinnish);

    }

    return (
    <div>
        <header id='PageHeader'>
            <div>
            <p id='Title'>
                {headerTitle}
            </p>
            <div>
            <ul id='LanguageList'>
                <li id='LanguageFinnish' className={isFinnish ? 'InvisibleClass' : 'LanguageItem'} onClick={ChangeLanguage}>FI</li>
                <li id='LanguageEnglish' className={isFinnish ? 'LanguageItem' : 'InvisibleClass'} /*style={{display:"inline-block"}}*/ onClick={ChangeLanguage}>EN</li>
            </ul>
            </div>
            </div>
      </header>
    </div>
    )
}

export default Header;

