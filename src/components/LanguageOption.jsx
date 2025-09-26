import "./LanguageOption.css"
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {changeLanguage} from '../store/languageSlice'

export default function LanguageOption(){


    return (
        <div className="language-options">
            <div className="language-options__grid">
                <LanguageCard languageProp='english'/>
                <LanguageCard languageProp='polish'/>
                <LanguageCard languageProp='ukrainian'/>
            </div>
        </div>
    )
}

export function LanguageCard({languageProp}){
    const language = useSelector((state) => state.language.value);
    const dispatch = useDispatch();
    
    return(
        <div className="languageCard" onClick={() => dispatch(changeLanguage(languageProp))}>
            <h2>{languageProp}</h2>
        </div>
    )
}