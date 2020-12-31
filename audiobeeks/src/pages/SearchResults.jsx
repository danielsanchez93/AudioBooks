import React from 'react';

import AudioItem from '../components/AudioItem'
import AudioNotFound from '../components/AudioNotFound'
import Loader from '../components/Loader'
import Search from "./Search";

import '../assets/styles/AllAudioItems.css'

const requestOptions = {
    method: "GET",
    headers: {
        Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
    redirect: "follow",
}


class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                items: {
                    fields:{}
                }
            },
            loading:true,
            error:null,
            searching:false
        }
    }

       componentDidMount() {
        fetch(`https://api.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?query=${this.props.match.params.ids}&select=fields,sys.id&locale=es-MX&content_type=${process.env.REACT_APP_CONTENT_TYPE_ID}`,requestOptions)
        .then(response=>{
            this.setState({loading:true});
            return response.json();
        })
        .then(response=>{
            this.setState({data:response,loading:false});
        })
        .catch((error)=>{
        this.setState({error:error,loading:false});
        });
    }

    render(){
       
        if(!this.state.loading){
            console.log(this.state);
            if(this.state.data.items.length>0){
                return( 
                    <div>
                        <Search/>
                         <div className="Audiobooks-container">
                             <AudioItem audioData={this.state.data.items}/>
                         </div>
                    </div>
                 )
            }
            else{
                return( 
                    <div>
                        <Search/>
                         <div className="Audiobooks-container">
                             <AudioNotFound/>
                         </div>
                    </div>
                 )
            }
            
        }

        if(this.state.error){
            return(
                <p>ERROR</p>
            );
        }

        return(
            <Loader/>
        );
    }


}
export default SearchResults;