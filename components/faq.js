import { useState } from 'react'


function Faq(props){

        let [arrayOfClasses, setArrayOfClasses] = useState(["faqHidden","faqHidden","faqHidden","faqHidden"]);

        function handleClick(number){

            let unNouveauTableau = arrayOfClasses.map((item) => {return item})
            
            if(unNouveauTableau[number] == "faqVisible"){
                unNouveauTableau[number] = "faqHidden"; 
            } else {
                unNouveauTableau[number] = "faqVisible"; 
            }
            setArrayOfClasses(unNouveauTableau)
        }


    return (
        <div className="Faq">
            <h5 className="h5Global">Guides loi pinel</h5>

            <div className="faqOnQuestionBox">

                <div onClick={()=>{handleClick(0)}} className="faqResponseContainer">
                    <p className="faqQuestion">{props.q1}</p>
                    <span className="material-symbols-outlined faqArrowIcon">expand_more</span>
                </div>
                <div className={"faqAnswerContainer " + arrayOfClasses[0]} >
                    <p className="faqAnswer">
                    {props.a1}
                    </p>
                </div>

                <div  onClick={()=>{handleClick(1)}} className="faqResponseContainer">
                    <p className="faqQuestion">{props.q2}</p>
                    <span className="material-symbols-outlined faqArrowIcon">expand_more</span>
                </div>
                <div className={"faqAnswerContainer " + arrayOfClasses[1]}>
                    <p className="faqAnswer">
                    {props.a2}
                    </p>
                </div>

                <div onClick={()=>{handleClick(2)}} className="faqResponseContainer">
                    <p className="faqQuestion">{props.q3}</p>
                    <span className="material-symbols-outlined faqArrowIcon">expand_more</span>
                </div>
                <div className={"faqAnswerContainer " + arrayOfClasses[2]}>
                    <p className="faqAnswer">
                    {props.a3}
                    </p>
                </div>

                <div onClick={()=>{handleClick(3)}} className="faqResponseContainer">
                    <p className="faqQuestion">{props.q4}</p>
                    <span className="material-symbols-outlined faqArrowIcon">expand_more</span>
                </div>
                <div className={"faqAnswerContainer " + arrayOfClasses[3]}>
                    <p className="faqAnswer">
                    {props.a4}
                    </p>
                </div>

            </div>
        </div>
    )
} 

export default Faq; 


/* v answerDisplayClass[number] = "faqVisible ";

            const NewArray = answerDisplayClass.map(); 
    
            setAnswerDisplayClass(NewArray);
            console.log(answerDisplayClass[0]);  */