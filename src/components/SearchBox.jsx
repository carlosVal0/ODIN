import '../styles/SearchBox.css'
import ResourceCard from './ResourceCard';
import DocumentBibliography from './DocumentBibliography'
import VideoResource from './VideoResource'
import { items } from '../logic/resources';
import { useRef, useState } from 'react';


const SearchBox = () => {

    const [itemsToRender, setItemsToRender] = useState([])
    const [renderBibliography, setRenderBibliography] = useState(false)
    const [renderVideo, setRenderVideo] = useState(false)
    const [video, setVideo] = useState({})
    const searchTerm = useRef()


    const searchButton = () => {
        const searchTermValue = searchTerm.current.value.toLocaleLowerCase()
        const queryItems = items.filter((item) => 
            item.title.toLocaleLowerCase().includes(searchTermValue) ||
            item.description.toLocaleLowerCase().includes(searchTermValue)
        )
        setItemsToRender(queryItems)
        setRenderBibliography(false)
        setRenderVideo(false)
        searchTerm.current.value = ''
    }

    const renderResource = (resource) => {
        if(resource.type === 'document'){
            setRenderBibliography(true)
        }
        else if(resource.type === 'video'){
            setVideo(resource)
            setRenderVideo(true)
        }
        setItemsToRender([])
    }

    return (
        <>
        <div className="search-box-container">
            <div className="search-field">
                <input type="text" className='search-input' placeholder='Busca aqui' ref={searchTerm}/>
                <ion-icon name="search-circle-outline" className="search-button" onClick={()=> searchButton()}></ion-icon>
            </div>
        </div>
        <div className="items-container">
                {itemsToRender.map((item) => {
                    return <ResourceCard item={item} key={item.id} infoButton={renderResource}/>
                })}
        </div>
        <div className="container-bib">
                {renderBibliography && <DocumentBibliography />}
        </div>
        <div className="container-video">
               {renderVideo && <VideoResource video={video}/>}
        </div>
        </>
        
        
    );
}

export default SearchBox;