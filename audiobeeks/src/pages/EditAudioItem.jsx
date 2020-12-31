import React from 'react'
import Loader from '../components/Loader'
import AudioEditForm from '../components/AudioEditForm'

import '../assets/styles/CreateAudioItem.css'

class EditAudioItem extends React.Component{
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
  
  state = {
        loading: false,
        error: null,
        form: {
          title: "",
          is_original: false,
          street_date: "",
          cost_per_play: "",
          authors: [],
          narrators:[],
          duration:"",
          cover:""
        },
    };
    
      handleChange = (e) => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const {
          title,
          is_original,
          street_date,
          cost_per_play,
          authors,
          narrators,
          duration,
          cover
        } = this.state.form;
        this.setState({ loading: true, error: null });
        try {
        //   await api.badges.create(this.state.form);
        var myHeaders = new Headers();
        myHeaders.append("X-Contentful-Content-Type", process.env.REACT_APP_CONTENT_TYPE_ID);
        myHeaders.append("Authorization",`Bearer ${process.env.REACT_APP_API_KEY}`);

        const raw = {
          fields:{
            title:{
              'es-MX' : title
            },
            is_original:{
              'es-MX' : !!is_original
            },
            street_date:{
              'es-MX' : street_date
            },
            cost_per_play:{
              'es-MX' : parseInt(cost_per_play)
            },
            authors:{
              'es-MX':authors.split(',')
            },
            narrators:{
              'es-MX':narrators.split(',')
            },
            duration:{
              'es-MX':parseInt(duration)
            },
            cover:{
              'es-MX':cover
            }

          }
        };
        
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
        };

        fetch(`https://api.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries/${this.props.match.params.id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
                this.setState({ loading: false });
            
                this.props.history.push("/");
                } catch (error) {
                this.setState({ loading: false, error: error });
                }
            };
    
      componentDidMount() {
        const requestOptionsEdit = {
          method: "GET",
          headers: {
            Authorization:
            `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          redirect: "follow",
        }
        fetch(`https://api.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries?sys.id=${this.props.match.id}&select=fields,sys.id,sys.version&locale=es-MX`,requestOptionsEdit)
        .then(response=>{
          this.setState({loading:true});
          return response.json();
        })
        .then(response=>{
            console.log(response)
            this.setState({data:response,loading:false});
          })
          .catch((error)=>{
            this.setState({error:error,loading:false});
          });
      }

      render() {
        if (this.state.loading) {
          return <Loader />;
        }
        return (
          <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <AudioEditForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.data}
                    error={this.state.error}
                    isCreate={false}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }

}

export default EditAudioItem;