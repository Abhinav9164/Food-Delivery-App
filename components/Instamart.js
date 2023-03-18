import { useState } from "react"


const Section = ({title,description,isVisible,setIsVisible}) =>{

    
    return(
        
        <div className="p-2 m-2 border border-black">
<h3 className="font-bold text-xl">{title}</h3>

{isVisible ? 
(
    <>
<button className="cursor-pointer underline p-0 m-1" onClick={() =>setIsVisible(false)}>Hide</button>
 <p>{description}</p>
 </>
 )
:
(<button className="cursor-pointer underline p-0 m-1" onClick={() =>setIsVisible(true)}>Show</button>
)
}
{/* {isVisible && } */}
        </div>
    )
}

const Instamart = () => {

const [isVisibleSection,setVisibleSection] = useState("about");

    return (
      <div>
        <h1 className="text-3xl m-2 p-2 font-bold">Instamart</h1>
        <Section
        title = {"About instamart"}
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"}
        isVisible = {isVisibleSection=="about"}
        setIsVisible = {() => (isVisibleSection=="about")?setVisibleSection(''):setVisibleSection("about")}
        />
        <Section
        title = {"Team Instamart"}
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"}
        
        isVisible = {isVisibleSection=="team"}
        setIsVisible = {() => (isVisibleSection=="team")?setVisibleSection(''):setVisibleSection("team")}
/>
        
        
        <Section
        title = {"Carrers"}
        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"}
        
        isVisible = {isVisibleSection=="Carre"}
        setIsVisible = {() => (isVisibleSection=="Carre")?setVisibleSection(''):setVisibleSection("about")}

        
        />
       
      </div>

    )
}

export default Instamart;