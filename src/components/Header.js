import React, { useState } from 'react'; 
function Header () {

    //Set the intended language and it's state. The LanguageEnglish element is not to be displayed. 
    const [Language, setLanguage] = useState([
        <div>
            <ul id='LanguageList'>
                <li id='LanguageFinnish' className='LanguageItem' style={{display:"none"}} onLoad={setDefaultLang} onClick={ChangeLanguage}>FI</li>
                <li id='LanguageEnglish' className='LanguageItem' style={{display:"inline-block"}} onLoad={setDefaultLang} onClick={ChangeLanguage}>EN</li>
            </ul>
        </div>
    ])

    //Map the language items.
    const mappedLanguage = Language.map((lang) =>
    <div key={Language.indexOf(lang)}>
        {lang}
    </div>    
    )

    //Boolean that checks if language has been changed.
    var changedLanguage = Boolean();

    //changedLanguage is to always be false on default
    function setDefaultLang() {
        changedLanguage = false;
    }

    //Change language depending on what the changedLanguage Boolean is. 
    function ChangeLanguage() {
        if(changedLanguage === false)
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
        }

    }

    return (
    <div>
        <header id='PageHeader'>
            <div>
            <p id='Title'>
                Suomen kuntien vaakunat
            </p>
                {mappedLanguage}
            </div>
      </header>
    </div>
    )
}

export default Header;

