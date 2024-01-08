const person ={
    name : 'Samantha',
    movie : 'Theri',
    profiles: ['twitter','instagram','facebook'],
    printProfile:() =>{
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return(
        <>
        <div> {person.name}</div>
        <div>{person.movie}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}