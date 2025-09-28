import "./LanguageOption.css"
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {changeLanguage} from '../store/languageSlice'

export default function LanguageOption(){


    return (
        <div className="language-options">
          <h1>Choose language</h1>
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
      <div className="language-card">
        <Link to='/dashboard' className="" onClick={() => dispatch(changeLanguage(languageProp))}>
            <img src='eng-flag.png' className='language-card__flag-img' alt=''/>
            <h2>{languageProp}</h2>
        </Link>
      </div>
    )
}