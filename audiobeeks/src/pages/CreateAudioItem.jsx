import React from 'react'
import Loader from '../components/Loader'
import AudioForm from '../components/AudioForm'

import '../assets/styles/CreateAudioItem.css'

class CreateAudioItem extends React.Component{
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

        fetch(`https://api.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
                this.setState({ loading: false });
            
                this.props.history.push("/");
                } catch (error) {
                this.setState({ loading: false, error: error });
                }
            };
    
      render() {
        if (this.state.loading) {
          return <Loader />;
        }
        return (
          <React.Fragment>
            <div className="container">
              <div className="row">
                {/* <div className="col">
                  <Badge
                    firstName={this.state.form.firstName || "FIRST_NAME"}
                    lastName={this.state.form.lastName || "LAST_NAME"}
                    jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                    email={this.state.form.email || "EMAIL"}
                    twitter={this.state.form.twitter || "TWITTER"}
                    avatarURL="https://www.gravatar.com/avatar?d=identicon"
                  />
                </div> */}
                <div className="col-6">
                  <AudioForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }

}

export default CreateAudioItem;