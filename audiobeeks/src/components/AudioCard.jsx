import React from 'react'
import '../assets/styles/AudioItem.css'

import Modal from '../pages/Modal'

class AudioCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
            audioData:{},
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
            // console.log("Presionado Close");
        }
    }

    render(){
       
        return(
            <div>
                <li className="AudioCard btn"
                    onClick={this.handleOpenModal}
                    onClose={this.handleCloseModal}
                >
                <img className="AudioCard-img"
                 src={this.props.adata.fields.cover['es-MX']}
                 alt="Cover"
                />
                </li>
                    <Modal aData={this.props.adata} isOpen={this.state.isModalOpen} onClose={this.handleCloseModal}/>
            </div>
        );
    }
    
}

export default AudioCard

/* <p>Título: {item.fields.title['es-MX']}</p> */