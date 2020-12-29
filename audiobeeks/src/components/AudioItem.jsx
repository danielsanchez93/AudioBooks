import React from 'react'
import '../assets/styles/AudioItem.css'

import AudioCard from '../components/AudioCard'
// import Modal from '../pages/Modal'

class AudioItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isModalOpen:false,
        }

        this.handleOpenModal=()=>{
            this.setState({
                isModalOpen:true
            })
            // console.log("Presionado Open");
        }
        
        this.handleCloseModal=()=>{
            this.setState({
                isModalOpen:false
            })
            console.log("Presionado Close");
        }
    }

    render(){
        const listItems=this.props.audioData.map(item=>
            <AudioCard key={item.sys.id} adata={item}/>
        );
        return(
            <div>
                <ul className="Audiobook-list">
                    {listItems}
                </ul>
                {/* <Modal dataCard={aData} isOpen={this.state.isModalOpen}/> */}
            </div>
        );
    }

}

export default AudioItem
