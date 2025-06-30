import DesenvolvedorNovo from "./DesenvolvedorNovo"
import DesenvolvedorLista from "./DesenvolvedorLista"

const MainContainer = () => {
    return (
        <div className="flex flex-row justify-center items-center text-center p-2 text-white w-full h-full mt-50 gap-10">
            <DesenvolvedorNovo />
            <DesenvolvedorLista />
        </div>
    )
}

export default MainContainer