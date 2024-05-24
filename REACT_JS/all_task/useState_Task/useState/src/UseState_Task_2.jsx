import { useState } from "react"

function Recipe_1() {
    return (
        <ol className="text-lg text-purple-600 font-bold">
            <h1 className="text-center text-black mb-4 text-2xl">Tea-Recipe</h1>
            <li>Boil cups of water.</li>
            <li>Add spoons of tea and spoons of spice.</li>
            <li>Add  cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}

function Recipe_2() {
    return (
        <ol className="text-lg text-purple-600 font-bold">
            <h1 className="text-center text-black mb-4 text-2xl">Cofee-Recipe</h1>
            <li>Boil cups of water.jaggi</li>
            <li>Add spoons of tea and spoons of spice.</li>
            <li>Add  cups of milk to boil and sugar to taste.</li>
        </ol>
    );
}



const UseState_Task_2 = () => {

    const [state, setState] = useState()



    const hendalRecipe_1 = () => {
        setState(Recipe_1)
    }

    const hendalRecipe_2 = () => {
        setState(Recipe_2)
    }

    const hendalReset = () => {
        setState('')
    }

    return (
        <div>
            <div className="flex justify-center h-screen items-center flex-col ">
                <div className="justify-center flex items-center h-[250px] w-[400px] border border-blue-500 rounded-lg shadow-lg shadow-blue-700">
                    <p>{state}</p>
                </div>
                <div className='justify-center flex items-center pt-5'>
                    <button className='h-10 w-28  bg-purple-700 text-white rounded-lg' onClick={hendalRecipe_1} >Recipe-1</button>
                    <button className='h-10 w-28  bg-purple-700 text-white rounded-lg ms-6' onClick={hendalRecipe_2}>Recipe-2</button>
                    <button className='h-10 w-28  bg-purple-700 text-white rounded-lg ms-6' onClick={hendalReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default UseState_Task_2
