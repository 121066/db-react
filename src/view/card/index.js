// import { useReducer } from 'react'
import CardList from './components/cardList'
import ModelCard from './components/modelCard'
function Card() {
    // const [task, dispatch] = useReducer(() => {}, [{ id: 1 }])
    // console.log(task, 'task')
    return (
        <>
            <div>
                <CardList></CardList>
                <ModelCard></ModelCard>
            </div>
        </>
    )
}
export default Card
