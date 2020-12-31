import React from 'react'
import '../assets/styles/AudioItem.css'

import Modal from '../pages/Modal'
import DeleteConfirmation from './DeleteConfimation'

const requestOptions = {
    method: "DELETE",
    headers: {
        Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
    redirect: "follow",
}

class AudioCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false,
            isDeleteModalOpen:false,
            isEditModalOpen:false,
            audioData:{},
        }

        this.handleOpenModal=()=>{
            this.setState({
                isModalOpen:true
            })
        }
        
        this.handleOpenDeleteModal=()=>{
            this.setState({
                isDeleteModalOpen:true
            })
            console.log("OpenDeleteModal");
        }
        
        this.handleCloseDeleteModal=()=>{
            this.setState({
                isDeleteModalOpen:false
            })
        }
        
        this.handleCloseModal=()=>{
            this.setState({
                isModalOpen:false
            })
        }

        this.handleDeleteAudio=()=>{
                  
            fetch(`https://api.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${props.adata.sys.id}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    window.location.reload(false);
                })
                .catch(error => console.log('error', error));
        }

        this.handleEditModal=()=>{
            this.setState({
                isEditModalOpen:true
            })
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
                    <Modal  aData={this.props.adata} 
                            isOpen={this.state.isModalOpen}
                            onClose={this.handleCloseModal}
                            isDeleteOpen={this.handleOpenDeleteModal}
                            isDeleteClose={this.handleCloseDeleteModal}

                    />
                    <DeleteConfirmation deleteAudio={this.handleDeleteAudio} isDeleteClose={this.handleCloseDeleteModal} isDeleteModalOpen={this.state.isDeleteModalOpen}/>
                    
            </div>
        );
    }
    
}

export default AudioCard

/* <p>Título: {item.fields.title['es-MX']}</p> */