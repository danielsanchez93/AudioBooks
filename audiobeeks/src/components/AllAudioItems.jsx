import React from 'react';

import AudioItem from './AudioItem'
import Loader from './Loader'

import '../assets/styles/AllAudioItems.css'

const requestOptions = {
    method: "GET",
    headers: {
        Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
    redirect: "follow",
}


class AllAudioItems extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            data:{
                items: {
                    fields:{}
                }
            },
            loading:true,
            error:null
        }
    }

        componentDidMount() {
        fetch("https://api.contentful.com/spaces/1t4hjzo7y0kb/environments/master/entries?select=fields,sys.id,sys.version&locale=es-MX&content_type=audiocontent-v6",requestOptions)
        .then(response=>{
            this.setState({loading:true});
            return response.json();
        })
        .then(response=>{
            this.setState({data:response,loading:false});
            // console.log(response);
        })
        .catch((error)=>{
        this.setState({error:error,loading:false});
        });
    }

    render(){
       
        if(!this.state.loading){
            return( 
                <div className="Audiobooks-container">
                   <AudioItem audioData={this.state.data.items}/>
                </div>
            )
        }

        if(this.state.error){
            return(
                <p>Quedaste amiko</p>
            );
        }

        return(
            // <div>
            //     Now Loading 🤡
            // </div>
            <Loader/>
        );
    }


}







export default AllAudioItems;